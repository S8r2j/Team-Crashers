from fastapi import FastAPI, APIRouter,Depends
from sqlalchemy.orm import Session
import model
from strructure import Signup
from databaseconnection import sessionlocal, engine



model.base.metadata.create_all(bind=engine)
router=APIRouter()



def get_db():
    db=sessionlocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def welcome_screen():
    return {"message":"Welcome to the Backend of Team Crashers"}

@router.post("/signup/")
def add_new_data(data:Signup,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO signupinfo(name,email,password) VALUES('{data.name}','{data.email}','{data.password}')")
    db.commit()

# @router.get("/get/signupinfo/")
# def get_signup_info(db:Session=Depends(get_db)):
#     return db.query(model.Signup).all()