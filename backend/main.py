from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from deps import init_db
from routers import init_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


init_db()
init_router(app)

@app.get("/")
def root():
    return {"message": "Hello Project-Learning1"}
