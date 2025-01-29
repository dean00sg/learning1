from datetime import datetime
from sqlalchemy import Column, DateTime, ForeignKey, Integer, LargeBinary, String
from deps import Base

class UserProfile(Base):
    __tablename__ = 'Userprofiles'

    user_id = Column(Integer, primary_key=True, index=True)
    image_profile = Column(LargeBinary, nullable=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    address = Column(String, nullable=True)
    contact_number = Column(String, nullable=True)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)  


class LogUserProfile(Base):
    __tablename__ = 'log_Userprofiles'

    id = Column(Integer, primary_key=True, index=True)
    action_name = Column(String, nullable=False)
    action_datetime = Column(DateTime, default=lambda: datetime.now().replace(microsecond=0)) 
    user_id = Column(Integer, nullable=False)
    image_profile = Column(LargeBinary, nullable=True)
    to_image_profile = Column(LargeBinary, nullable=True)

    first_name = Column(String, nullable=True)
    to_first_name = Column(String, nullable=True)

    last_name = Column(String, nullable=True)
    to_last_name = Column(String, nullable=True)

    email = Column(String, nullable=True)
    to_email = Column(String, nullable=True)

    address = Column(String, nullable=True)
    to_address = Column(String, nullable=True)

    contact_number = Column(String, nullable=True)
    to_contact_number = Column(String, nullable=True)

    password = Column(String, nullable=True)
    to_password = Column(String, nullable=True)

    role = Column(String, nullable=False)


class LogUserLogin(Base):
    __tablename__ = 'log_UserLogin'

    id = Column(Integer, primary_key=True, index=True)
    action_name = Column(String, nullable=False)
    login_datetime = Column(DateTime, default=lambda: datetime.now().replace(microsecond=0)) 
    user_id = Column(Integer, nullable=True)
    first_name = Column(String, nullable=True)
    last_name = Column(String, nullable=True)
    email = Column(String, nullable=True)
    access_token = Column(String, nullable=True)
    role = Column(String, nullable=False)


