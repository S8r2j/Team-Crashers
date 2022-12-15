import datetime

from typing import Optional
from sqlmodel import SQLModel

class Signup(SQLModel):
    name:str
    email:str
    password:str

    class Config:
        orm_mode:True

class Valid(SQLModel):
    email:str
    password:str


class InputDonatePerson(SQLModel):
    name: str
    father_name: str
    contact: str
    email: str
    dob: datetime.date
class Donateperson(InputDonatePerson):
    id:int
    donateid:int
    address_id:int

    class config:
        orm_mode: True

class InputDonateamount(SQLModel):

    donate_amount:int

class Donateamount(SQLModel):
    id:int

    class config:
        orm_mode: True

class Address(SQLModel):
    address_id:int
    city:str
    state:str
    country:str
    pin_code:int

    class config:
        orm_mode:True

class Donation(InputDonateamount,Address,InputDonatePerson):
    form:int | Optional