from fastapi import FastAPI, APIRouter,Depends, HTTPException
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
    # For getting donate amount and its id

    count2 = db.execute(f"SELECT COUNT(id) FROM donatepersoninfo WHERE email='{data.email}'").one()
    count2= int(''.join(map(str,count2)))
    if(count2==0):
        db.execute(f"INSERT INTO donateamount(donate_amount) VALUES('{data.donate_amount}')")
        db.commit()
        donateid=db.execute("SELECT id from donateamount ORDER BY id DESC LIMIT 1").one()
        donateid=int(''.join(map(str,donateid)))

        # for checking if the address is already present or not and if not present add new address to database
        count1 = db.execute(
            f"SELECT COUNT(address_id) FROM addressinfo WHERE city='{data.city}' AND state='{data.state}' AND country='{data.country}' AND pin_code='{data.pin_code}'").one()
        address_id=int(''.join(map(str,count1)))
        if(address_id==0):
            db.execute(f"INSERT INTO addressinfo(city,state,country,pin_code) VALUES('{data.city}','{data.state}','{data.country}','{data.pin_code}')")
            db.commit()
            address_id=db.execute(f"SELECT address_id FROM addressinfo ORDER BY address_id DESC LIMIT 1").one()
        else:
            address_id=db.execute(f"SELECT address_id from addressinfo WHERE city='{data.city}' AND state='{data.state}' AND country='{data.country}' AND pin_code='{data.pin_code}'").one()
        address_id=int(''.join(map(str,address_id)))

        # for inserting the new data of the person who has donated

        if(count2==0):
            db.execute(f"INSERT INTO donatepersoninfo(name,father_name,contact,email,dob,donateid,address_id) VALUES('{data.name}','{data.father_name}','{data.contact}','{data.email}','{data.dob}','{donateid}','{address_id}')")
            db.commit()
    else:
        raise HTTPException(status_code=404,detail=f"Email is already registered")