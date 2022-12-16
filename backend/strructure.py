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

class InputAddress(SQLModel):
    city: str
    state: str
    country: str
    pin_code: int
class Address(InputAddress):
    address_id:int

    class config:
        orm_mode:True

class Donation(InputDonateamount,InputAddress,InputDonatePerson):
    form:Optional[int]

class InputAutismAge1lessQuestions(SQLModel):
    question:str

class AutismAge1lessQuestions(InputAutismAge1lessQuestions):
    id:int

    class config:
        orm_mode:True
class InputAutismAge1to2Questions(SQLModel):
    question:str

class AutismAge1to2Questions(InputAutismAge1to2Questions):
    id:str
    class config:
        orm_mode:True
class InputAutismAge2to10Questions(SQLModel):
    question:str

class AutismAge2to10Questions(InputAutismAge2to10Questions):
    id:int
    class config:
        orm_mode:True

class InputAutismAge10to17Questions(SQLModel):
    question:str

class AutismAge10to17Questions(InputAutismAge10to17Questions):
    id:int
    class config:
        orm_mode:True

class InputAutismAge18Questions(SQLModel):
    question:str

class AutismAge18Questions(InputAutismAge18Questions):
    id:int
    class config:
        orm_mode:True

class InputAutismAgeGirlsQuestions(SQLModel):
    question:str

class AutismAgeGirlsQuestions(InputAutismAgeGirlsQuestions):
    id:int
    class config:
        orm_mode:True

class InputAutism1lessResponse(SQLModel):
    email:str
    question1:str
    question2:str
    question3:str
    question4:str
    question5:str
    question6:str
    question7:str
    question8:str
    question9:str
    question10:str

class Autism1lessResponse(InputAutism1lessResponse):
    id:int
    class config:
        orm_mode:True

class InputAutism1Response(SQLModel):
    email:str
    question1:str
    question2:str
    question3:str
    question4:str
    question5:str
    question6:str
    question7:str
    question8:str
    question9:str
    question10:str

class Autism1Response(InputAutism1Response):
    id:int
    class config:
        orm_mode:True
class InputAutism2to10Response(SQLModel):
    email:str
    question1:str
    question2:str
    question3:str
    question4:str
    question5:str
    question6:str
    question7:str
    question8:str
    question9:str
    question10:str

class Autism2to10Response(InputAutism2to10Response):
    id:int
    class config:
        orm_mode:True
class InputAutism10to17Response(SQLModel):
    email:str
    question1:str
    question2:str
    question3:str
    question4:str
    question5:str
    question6:str
    question7:str
    question8:str
    question9:str
    question10:str

class Autism10to17Response(InputAutism10to17Response):
    id:int
    class config:
        orm_mode:True
class InputAutism18response(SQLModel):
    email:str
    question1:str
    question2:str
    question3:str
    question4:str
    question5:str
    question6:str
    question7:str
    question8:str
    question9:str
    question10:str

class Autism18response(InputAutism18response):
    id:int
    class config:
        orm_mode:True

class InputAutismGirlresponse(SQLModel):

    email:str
    question1 :str
    question2 :str
    question3 :str
    question4 :str
    question5 :str
    question6 :str
    question7 :str
    question8 :str
    question9 :str
    question10 :str

class AutismGirlresponse(InputAutismGirlresponse):
    id:int
    class config:
        orm_mode:True

class InputContact(SQLModel):
    name:str
    email:str
    message:str

class Contact(InputContact):
    id:int

    class config:
        orm_mode:True