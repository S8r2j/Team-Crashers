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

class AutismAge1lessQuestions(base):
    __tablename__='autism1lessquestion'

    id=Column(Integer,primary_key=True,autoincrement=True)
    question=Column(String)

class AutismAge1to2Questions(base):
    __tablename__='autism1to2question'

    id=Column(Integer, primary_key=True, autoincrement= True)
    question=Column(String)


class AutismAge2to10Questions(base):
    __tablename__ = 'autism2to10question'

    id = Column(Integer, primary_key=True, autoincrement=True)
    question = Column(String)


class AutismAge10to17Questions(base):
    __tablename__ = 'autism10to17question'

    id = Column(Integer, primary_key=True, autoincrement=True)
    question = Column(String)


class AutismAge18Questions(base):
    __tablename__ = 'autism18question'

    id = Column(Integer, primary_key=True, autoincrement=True)
    question = Column(String)


class AutismAgeGirlsQuestions(base):
    __tablename__ = 'autismgirlsquestion'

    id = Column(Integer, primary_key=True, autoincrement=True)
    question = Column(String)

class Autism1lessResponse(base):
    __tablename__='autism1lessresponse'

    id=Column(Integer,primary_key=True,autoincrement=True)
    email=Column(String,unique=True)
    question1=Column(String)
    question2=Column(String)
    question3= Column(String)
    question4= Column(String)
    question5=Column(String)
    question6=Column(String)
    question7=Column(String)
    question8=Column(String)
    question9=Column(String)
    question10=Column(String)

class Autism1Response(base):
    __tablename__='autism1response'

    id=Column(Integer,primary_key=True,autoincrement=True)
    email=Column(String,unique=True)
    question1=Column(String)
    question2=Column(String)
    question3= Column(String)
    question4= Column(String)
    question5=Column(String)
    question6=Column(String)
    question7=Column(String)
    question8=Column(String)
    question9=Column(String)
    question10=Column(String)

class Autism2to10Response(base):
    __tablename__='autism2to10response'

    id=Column(Integer,primary_key=True,autoincrement=True)
    email=Column(String,unique=True)
    question1=Column(String)
    question2=Column(String)
    question3= Column(String)
    question4= Column(String)
    question5=Column(String)
    question6=Column(String)
    question7=Column(String)
    question8=Column(String)
    question9=Column(String)
    question10=Column(String)

class Autism10to17Response(base):
    __tablename__='autism10to17response'

    id=Column(Integer,primary_key=True,autoincrement=True)
    email = Column(String, unique=True)
    question1=Column(String)
    question2=Column(String)
    question3= Column(String)
    question4= Column(String)
    question5=Column(String)
    question6=Column(String)
    question7=Column(String)
    question8=Column(String)
    question9=Column(String)
    question10=Column(String)

class Autism18response(base):
    __tablename__='autism18response'

    id = Column(Integer, primary_key=True, autoincrement=True)
    email=Column(String,unique=True)
    question1 = Column(String)
    question2 = Column(String)
    question3 = Column(String)
    question4 = Column(String)
    question5 = Column(String)
    question6 = Column(String)
    question7 = Column(String)
    question8 = Column(String)
    question9 = Column(String)
    question10 = Column(String)

class AutismGirlresponse(base):
    __tablename__='autismgirlresponse'

    id = Column(Integer, primary_key=True, autoincrement=True)
    email=Column(String,unique=True)
    question1 = Column(String)
    question2 = Column(String)
    question3 = Column(String)
    question4 = Column(String)
    question5 = Column(String)
    question6 = Column(String)
    question7 = Column(String)
    question8 = Column(String)
    question9 = Column(String)
    question10 = Column(String)

class Contact(base):
    __tablename__='contactinfo'

    id=Column(Integer,primary_key=True, autoincrement=True)
    name=Column(String)
    email= Column(String, unique=True)
    message=Column(String)