from fastapi import FastAPI
from router import operations
from fastapi.middleware.cors import CORSMiddleware

origins=[
    "http://localhost:3000",
    "http://localhost"
]

app=FastAPI()
app.include_router(operations.router)

app.add_middleware(CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=['*'],
allow_headers=['*']
)
