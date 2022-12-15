from sqlalchemy import String, Column, Integer, ForeignKey, DateTime
from databaseconnection import base

class Signup(base):
    __tablename__='signupinfo'

    id=Column(Integer,primary_key=True, autoincrement=True)
    name=Column(String)
    email= Column(String, unique=True)
    password=Column(String)