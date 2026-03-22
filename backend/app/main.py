from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.auth_routes import router as auth_router
from .api.portfolio_routes import router as portfolio_router
from .api.stock_routes import router as stock_router
from .db.database import engine, Base

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Portfolio Tracker API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(portfolio_router)
app.include_router(stock_router)

@app.get("/")
async def root():
    return {"message": "Welcome to AI Portfolio Tracker API"}
