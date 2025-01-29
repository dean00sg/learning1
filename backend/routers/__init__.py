from fastapi import FastAPI
from .user_info import router as auth_router
from .user_profile import router as profile_router

def init_router(app: FastAPI):
    app.include_router(auth_router, prefix="/authentication")
    app.include_router(profile_router, prefix="/profile")
   