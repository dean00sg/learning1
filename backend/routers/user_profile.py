from typing import Dict, Optional
from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from deps import get_session
from schemas.user_info import UserResponse
from security.dependencies  import get_current_user
from services.users_profile_services.user_profile_get import  get_profile_byid, get_user_image_profile, get_profile, get_user_image_profile_byid
from services.users_profile_services.user_profile_delete import delete_user
from services.users_profile_services.user_profile_update import update_image, update_password, update_profile

router = APIRouter(tags=["User Profile"])


@router.get("/get/image")
async def get_user_image(
    session: Session = Depends(get_session),
    username: str = Depends(get_current_user)
    ):
    return get_user_image_profile(session, username)


@router.get("/get", response_model=UserResponse)
async def get_user_profile(
    session: Session = Depends(get_session),
    username: str = Depends(get_current_user)
):
    return await get_profile(username, session)


#by id------------------------------------------------------------------
@router.get("/get_byid/image/{user_id}")
async def get_user_image_byid(
    user_id:int,
    session: Session = Depends(get_session),
    username: str = Depends(get_current_user)
    ):
    return get_user_image_profile_byid(
        user_id=user_id,
        session=session, 
        username=username
    )

@router.get("/get_byid/{user_id}", response_model=UserResponse)
async def get_user_profile_byid(
    user_id:int,
    session: Session = Depends(get_session),
    username: str = Depends(get_current_user)
):
    return await get_profile_byid(
        user_id=user_id,
        username=username, 
        session=session
    )
#------------------------------------------------------------------


@router.put("/update/image", response_model=Dict[str, str])
async def update_user_image(
    image: UploadFile = File(...),
    session: Session = Depends(get_session),
    username: str = Depends(get_current_user)
):
    image = await update_image(
        session=session, 
        username=username, 
        image=image
    )
    return {"message": "profile image update successfully"}



@router.put("/update", response_model=UserResponse)
async def update_user_profile(
    first_name: str = Form(None),
    last_name: str = Form(None),
    address : Optional[str] = Form(None),
    contact_number: str = Form(None),
    session: Session = Depends(get_session),
    username: str = Depends(get_current_user)
):
    return await update_profile(
        session=session, 
        username=username, 
        first_name=first_name, 
        last_name=last_name, 
        address=address,
        contact_number=contact_number
    )



@router.put("/update/password", response_model=UserResponse)
async def update_user_password(
    new_password: str = Form(...),
    session: Session = Depends(get_session),
    usename: str = Depends(get_current_user)
):
    return await update_password(session, usename, new_password)



@router.delete("/delete", response_model=Dict[str, str])
async def delete_user_profile(
    session: Session = Depends(get_session),
    usename: str = Depends(get_current_user)
):
    account = await delete_user(session, usename)
    if not account:
        raise HTTPException(status_code=404, detail="account not found")
    return {"message": "account deleted successfully"}