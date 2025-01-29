from datetime import datetime
from sqlalchemy.orm import Session
from fastapi import HTTPException, UploadFile
from security.auth_handler import AuthHandler
from models.user_info import LogUserProfile, LogUserLogin, UserProfile

auth_handler = AuthHandler()

async def register_user_service(
    first_name: str,
    last_name: str,
    email: str,
    address:str,
    contact_number: str,
    password: str,
    role: str,
    image_profile: UploadFile,
    session: Session
):
    hashed_password = auth_handler.get_password_hash(password)
    image_profile_bytes = await image_profile.read() if image_profile else None

    db_user = UserProfile(
        image_profile=image_profile_bytes,
        first_name=first_name,
        last_name=last_name,
        email=email,
        address=address if address  else None,
        contact_number=contact_number if contact_number  else None,
        password=hashed_password,
        role=role
    )

    session.add(db_user)
    session.commit()
    session.refresh(db_user)

    log_entry = LogUserProfile(
        action_name="insert",
        action_datetime=datetime.now().replace(microsecond=0),
        user_id=db_user.user_id,
        first_name=db_user.first_name,
        last_name=db_user.last_name,
        email=db_user.email,
        address=db_user.address,
        contact_number=db_user.contact_number,
        password=db_user.password,
        role=db_user.role,
        image_profile=image_profile_bytes
    )

    session.add(log_entry)
    session.commit()

    return db_user
