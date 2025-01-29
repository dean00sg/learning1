from datetime import datetime
from fastapi import HTTPException, UploadFile
from sqlalchemy.orm import Session
from models.user_info import LogUserLogin, LogUserProfile, UserProfile
from security.auth_handler import AuthHandler

auth_handler = AuthHandler()


async def delete_user(session: Session, username: str) -> bool:
    user = session.query(UserProfile).filter(UserProfile.email == username).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    session.query(LogUserLogin).filter(LogUserLogin.user_id == user.user_id).update({"user_id": None})

    log_entry = LogUserProfile(
        action_name="delete",
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


    session.add(log_entry)
    session.delete(user)
    session.commit()

    return True
