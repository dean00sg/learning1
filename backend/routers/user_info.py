from typing import Optional
from fastapi import APIRouter, Depends, Form, UploadFile, File
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from deps import get_session
from services.users_profile_services.user_login_logout import login_user_service, logout_user_service
from services.users_profile_services.user_register import register_user_service
from security.dependencies  import get_current_user, Token
from schemas.user_info import UserResponse

router = APIRouter(tags=["Authentication"])

@router.post("/register", response_model=UserResponse)
async def register_user(
    first_name: str = Form(...),
    last_name: str = Form(...),
    email: str = Form(...),
    address : Optional[str] = Form(None),
    contact_number: Optional[str] = Form(None),
    password: str = Form(...),
    role: str = Form(...),
    image_profile: UploadFile = File(None),
    session: Session = Depends(get_session)
):
    return await register_user_service(
        first_name=first_name, 
        last_name=last_name, 
        email=email, 
        address=address,
        contact_number=contact_number, 
        password=password, 
        role=role, 
        image_profile=image_profile, 
        session=session
    )

@router.post("/login", response_model=Token)
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    session: Session = Depends(get_session)
):
    return  login_user_service(form_data, session)


@router.post("/logout")
async def logout(
    session: Session = Depends(get_session),
    username: str = Depends(get_current_user)
    ):
    logout =  logout_user_service(
        session=session,
        username=username
    )
    return {"detail": "Successfully logged out"}

