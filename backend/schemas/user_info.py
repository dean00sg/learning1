from pydantic import BaseModel, EmailStr
from typing import  Optional

class UserResponse(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    email: EmailStr
    address: Optional[str] = None 
    contact_number: Optional[str] = None 
    role: str

    class Config:
        orm_mode = True


