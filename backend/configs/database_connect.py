from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = 'postgresql://admin:123456@localhost:5432/Learning1_db'
    SECRET_KEY: str = "cvdvdfrrffrffrfrfrfrfrfedwwdwpdlwpspxsddssx"

    class Config:
        env_file = ".env" 

settings = Settings()