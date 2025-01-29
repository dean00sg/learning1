from typing import Optional
from fastapi import HTTPException, UploadFile
from sqlalchemy.orm import Session
from io import BytesIO
from starlette.responses import StreamingResponse
from models.user_info import LogUserLogin, LogUserProfile, UserProfile
from schemas.user_info import UserResponse
from security.auth_handler import AuthHandler

auth_handler = AuthHandler()


def get_user_image_profile(session: Session, username: str) -> StreamingResponse:
    user = session.query(UserProfile).filter(UserProfile.email == username).first()
    
    if not user or user.image_profile is None:
        raise HTTPException(status_code=404, detail="Image not found")
    
    image_stream = BytesIO(user.image_profile)
    return StreamingResponse(image_stream, media_type="image/jpeg")



async def get_profile(username: str, session: Session) -> Optional[UserResponse]:
    user = session.query(UserProfile).filter(UserProfile.email == username).first()
    return user



def get_user_image_profile_byid(
        user_id:int,
        session: Session, 
        username: str
    ) -> StreamingResponse:
    user = session.query(UserProfile).filter(UserProfile.user_id == user_id).first()
    
    if not user or user.image_profile is None:
        raise HTTPException(status_code=404, detail="Image not found")
    
    image_stream = BytesIO(user.image_profile)
    return StreamingResponse(image_stream, media_type="image/jpeg")



async def get_profile_byid(
    user_id:int,
    username: str, 
    session: Session
) -> Optional[UserResponse]:
    user = session.query(UserProfile).filter(UserProfile.user_id == user_id).first()
    return user