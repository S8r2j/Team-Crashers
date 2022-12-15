from fastapi import FastAPI, APIRouter,Depends
from sqlalchemy.orm import Session
import model
from strructure import Signup, Valid, Donation
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

@router.post("/validate/user/")
def validate_users(data:Valid,db:Session=Depends(get_db)):
    count=db.execute(f"SELECT id from signupinfo WHERE email='{data.email}' AND password='{data.password}'")
    if(count==0):
        return False
    else:
        return True

@router.post("/api/donate/")
def add_new_donation(data:Donation,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO donateamount(donate_amount) VALUES('{data.donate_amount}')")
    donateid=db.execute("SELECT id from donateamount ")