from datetime import datetime
from fastapi import HTTPException, UploadFile
from sqlalchemy.orm import Session
from models.user_info import LogUserLogin, LogUserProfile, UserProfile
from schemas.user_info import UserResponse
from security.auth_handler import AuthHandler

auth_handler = AuthHandler()



async def update_image(
    image: UploadFile,
    session: Session, 
    username: str, 
    ) -> bool:


    user = session.query(UserProfile).filter(UserProfile.email == username).first()
    if not user:
        False

    image_data = await image.read() if image else None

    log_entry = LogUserProfile(
        action_name="update_image",
        action_datetime=datetime.now().replace(microsecond=0),
        user_id=user.user_id,
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        address=user.address,
        contact_number=user.contact_number,
        password=user.password,
        role=user.role,
        image_profile=user.image_profile
    )

    user.image_profile = image_data
    log_entry.to_image_profile = user.image_profile

    session.add(log_entry)
    session.add(user)
    session.commit()
    session.refresh(user)

    return True


async def update_profile(
    first_name: str, 
    last_name: str, 
    address:str,
    contact_number: str,
    session: Session, 
    username: str, 
    ) -> UserResponse:

    user = session.query(UserProfile).filter(UserProfile.email == username).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    log_entry = LogUserProfile(
        action_name="update",
        action_datetime=datetime.now().replace(microsecond=0),
        user_id=user.user_id,
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        address=user.address,
        contact_number=user.contact_number,
        password=user.password,
        role=user.role,
        image_profile=user.image_profile,

        to_first_name=first_name if first_name else None,
        to_last_name=last_name if last_name else None,
        to_address=address if address else None,
        to_contact_number=contact_number if contact_number else None,
    )
    session.add(log_entry)
    session.commit()

    user.first_name = first_name if first_name else user.first_name
    user.last_name = last_name if last_name else user.last_name
    user.address = address if address else user.address
    user.contact_number = contact_number if contact_number else user.contact_number

    session.add(user)
    session.commit()

    return user




async def update_password(session: Session, username: str, new_password: str) -> UserResponse:
    user = session.query(UserProfile).filter(UserProfile.email == username).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    new_hashed_password = auth_handler.get_password_hash(new_password)

    log_entry = LogUserProfile(
        action_name="update_password",
        action_datetime=datetime.now().replace(microsecond=0),
        user_id=user.user_id,
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        address=user.address,
        contact_number=user.contact_number,
        password=user.password,
        role=user.role,
        image_profile=user.image_profile
    )

    log_entry.to_password = new_hashed_password
    user.password = new_hashed_password

    session.add(log_entry)
    session.add(user)
    session.commit()
    session.refresh(user)

    return user
    