from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

url="postgresql://postgres:1234@localhost/team_crashers"

engine = create_engine(url)

sessionlocal=sessionmaker(autocommit=False, autoflush= False,bind=engine)
base=declarative_base()
