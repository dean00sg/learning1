from datetime import datetime
from sqlalchemy.orm import Session
from fastapi import HTTPException, UploadFile
from security.auth_handler import AuthHandler
from security.dependencies  import  Token
from models.user_info import LogUserProfile, LogUserLogin, UserProfile

auth_handler = AuthHandler()


def login_user_service(
    form_data,
    db: Session
):
    user = db.query(UserProfile).filter(UserProfile.email == form_data.username).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not auth_handler.verify_password(form_data.password, user.password):
        raise HTTPException(status_code=400, detail="Incorrect password")

    access_token = auth_handler.create_access_token(data={"username": user.email, "role": user.role})

    log_entry = LogUserLogin(
        action_name="Login",
        login_datetime=datetime.now().replace(microsecond=0),
        user_id=user.user_id,
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        access_token=access_token,
        role=user.role
    )

    db.add(log_entry)
    db.commit()

    return Token(access_token=access_token, token_type="bearer")



def logout_user_service(
    session: Session,
    username: str
):
    user = session.query(UserProfile).filter(UserProfile.email == username).first()
    if not user:
        False

    access_token = auth_handler.create_access_token(data={"username": user.email, "role": user.role})

    log_entry = LogUserLogin(
        action_name="Logout",
        login_datetime=datetime.now().replace(microsecond=0),
        user_id=user.user_id,
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        access_token=None,
        role=user.role
    )

    session.add(log_entry)
    session.commit()

    return True
