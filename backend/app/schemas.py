from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_premium: int
    created_at: datetime

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class HoldingBase(BaseModel):
    ticker: str
    amount: float
    average_price: float
    currency: str = "USD"

class HoldingCreate(HoldingBase):
    portfolio_id: int

class Holding(HoldingBase):
    id: int
    portfolio_id: int

    class Config:
        orm_mode = True

class PortfolioBase(BaseModel):
    name: str

class PortfolioCreate(PortfolioBase):
    pass

class Portfolio(PortfolioBase):
    id: int
    owner_id: int
    created_at: datetime
    holdings: List[Holding] = []

    class Config:
        orm_mode = True
