from fastapi import FastAPI, APIRouter,Depends, HTTPException
from sqlalchemy.orm import Session
import model
from strructure import Signup, Valid, Donation, InputAutismAge1lessQuestions, InputAutismAge1to2Questions, \
    InputAutismAge2to10Questions, InputAutismAge10to17Questions, InputAutismAge18Questions, InputAutism1lessResponse, \
    InputAutism1Response, InputAutism2to10Response, InputAutism10to17Response, InputAutism18response, \
    InputAutismAgeGirlsQuestions, InputAutismGirlresponse, InputContact
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

@router.post("/api/inputquestions/forlessthan1year/")
def get_question(data:InputAutismAge1lessQuestions,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autism1lessquestion(question) VALUES ('{data.question}')")
    db.commit()

@router.post("/api/inputquestions/for1to2year/")
def get_questions(data:InputAutismAge1to2Questions,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autism1to2question(question) VALUES ('{data.question}')")
    db.commit()
@router.post("/api/inputquestions/for2to10years/")
def gett_question(data:InputAutismAge2to10Questions,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autism2to10question(question) VALUES ('{data.question}')")
    db.commit()

@router.post("/api/inputquestions/for10to18years/")
def gett_questions(data: InputAutismAge10to17Questions, db: Session = Depends(get_db)):
    db.execute(f"INSERT INTO autism10to17question(question) VALUES ('{data.question}')")
    db.commit()
@router.post("/api/inputquestions/for18years/")
def gett_question2(data: InputAutismAge18Questions, db: Session = Depends(get_db)):
    db.execute(f"INSERT INTO autism18question(question) VALUES ('{data.question}')")
    db.commit()
@router.post("/api/inputquestions/forgirls/")
def gett_question3(data: InputAutismAgeGirlsQuestions, db: Session = Depends(get_db)):
    db.execute(f"INSERT INTO autismgirlsquestion(question) VALUES ('{data.question}')")
    db.commit()

@router.get("/api/inputquestions/forlessthan1year/")
def get_question(db:Session=Depends(get_db)):
    return db.execute(f"SELECT question from autism1lessquestion LIMIT 10").all()

@router.get("/api/inputquestions/for1to2year/")
def get_questions(db:Session=Depends(get_db)):
    return db.execute(f"SELECT question FROM autism1to2question LIMIT 10").all()

@router.get("/api/inputquestions/for2to10years/")
def gett_question(db:Session=Depends(get_db)):
    return db.execute(f"SELECT question FROM autism2to10question LIMIT 10").all()

@router.get("/api/inputquestions/for10to18years/")
def gett_questions(db: Session = Depends(get_db)):
    return db.execute(f"SELECT question FROM autism10to17question LIMIT 10").all()

@router.get("/api/inputquestions/for18years/")
def gett_question2(db: Session = Depends(get_db)):
    return db.execute(f"SELECT question FROM autism18question LIMIT 10").all()

@router.get("/api/inputquestions/forgirls/")
def gett_question3(db: Session = Depends(get_db)):
    return db.execute(f"SELECT question FROM autismgirlsquestion LIMIT 10").all()

@router.post("/api/response/inputlessthan1/")
def get_response_lessthan1(data:InputAutism1lessResponse,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autism1lessresponse(email,question1,question2,question3,question4,question5,question6,question7,question8,question9,question10) VALUES('{data.email}','{data.question1}','{data.question2}','{data.question3}','{data.question4}','{data.question5}','{data.question6}','{data.question7}','{data.question8}','{data.question9}','{data.question10}')")
    db.commit()

@router.post("/api/response/input1to2/")
def get_response_lessthan1(data:InputAutism1Response,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autism1response(email,question1,question2,question3,question4,question5,question6,question7,question8,question9,question10) VALUES('{data.email}','{data.question1}','{data.question2}','{data.question3}','{data.question4}','{data.question5}','{data.question6}','{data.question7}','{data.question8}','{data.question9}','{data.question10}')")
    db.commit()

@router.post("/api/response/input2to10/")
def get_response_lessthan1(data:InputAutism2to10Response,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autism2to10response(email,question1,question2,question3,question4,question5,question6,question7,question8,question9,question10) VALUES('{data.email}','{data.question1}','{data.question2}','{data.question3}','{data.question4}','{data.question5}','{data.question6}','{data.question7}','{data.question8}','{data.question9}','{data.question10}')")
    db.commit()

@router.post("/api/response/input10to17/")
def get_response_lessthan1(data:InputAutism2to10Response,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autism10to17response(email,question1,question2,question3,question4,question5,question6,question7,question8,question9,question10) VALUES('{data.email}','{data.question1}','{data.question2}','{data.question3}','{data.question4}','{data.question5}','{data.question6}','{data.question7}','{data.question8}','{data.question9}','{data.question10}')")
    db.commit()

@router.post("/api/response/input18/")
def get_response_lessthan1(data:InputAutism18response,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autism18response(email,question1,question2,question3,question4,question5,question6,question7,question8,question9,question10) VALUES('{data.email}','{data.question1}','{data.question2}','{data.question3}','{data.question4}','{data.question5}','{data.question6}','{data.question7}','{data.question8}','{data.question9}','{data.question10}')")
    db.commit()

@router.post("/api/response/girls/")
def get_response_lessthan1(data:InputAutismGirlresponse,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO autismgirlresponse(email,question1,question2,question3,question4,question5,question6,question7,question8,question9,question10) VALUES('{data.email}','{data.question1}','{data.question2}','{data.question3}','{data.question4}','{data.question5}','{data.question6}','{data.question7}','{data.question8}','{data.question9}','{data.question10}')")
    db.commit()




@router.post("/api/contact/")
def make_contact(data:InputContact,db:Session=Depends(get_db)):
    db.execute(f"INSERT INTO contactinfo(name,email,message) VALUES('{data.name}','{data.email}','{data.message}')")
    db.commit()