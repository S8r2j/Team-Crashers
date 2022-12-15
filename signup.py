from fastapi import FastAPI
from router import operations


app=FastAPI()
app.include_router(operations.router)
