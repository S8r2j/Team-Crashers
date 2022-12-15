from sqlalchemy import String, Column, Integer, ForeignKey, DateTime,Date
from databaseconnection import base

class Signup(base):
    __tablename__='signupinfo'

    id=Column(Integer,primary_key=True, autoincrement=True)
    name=Column(String)
    email= Column(String, unique=True)
    password=Column(String)

class Donateperson(base):
    __tablename__='donatepersoninfo'

    id=Column(Integer,primary_key=True,autoincrement=True)
    name=Column(String)
    father_name=Column(String)
    contact=Column(String)
    email=Column(String, unique=True)
    dob=Column(Date)
    donateid=Column(Integer,ForeignKey("donateamount.id"))
    address_id=Column(Integer,ForeignKey("addressinfo.address_id"))
class Donateamount(base):
    __tablename__='donateamount'

    id=Column(Integer,primary_key=True,autoincrement=True)
    donate_amount=Column(Integer)

class Address(base):
    __tablename__='addressinfo'

    address_id=Column(Integer,primary_key=True,autoincrement=True)
    city=Column(String)
    state=Column(String)
    country=Column(String)
    pin_code=Column(Integer)