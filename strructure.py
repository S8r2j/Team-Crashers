from sqlmodel import SQLModel

class Signup(SQLModel):
    name:str
    email:str
    password:str

    class Config:
        orm_mode:True