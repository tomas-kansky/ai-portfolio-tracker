from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..db.database import get_db
from .. import models, schemas, auth
from .auth_routes import router as auth_router
from jose import JWTError, jwt

router = APIRouter(prefix="/portfolios", tags=["Portfolios"])

def get_current_user(token: str = Depends(auth.pwd_context), db: Session = Depends(get_db)):
    # Simple dependency for testing, real one should verify JWT
    # For now, let's implement a basic verify
    pass

@router.post("/", response_model=schemas.Portfolio)
def create_portfolio(portfolio: schemas.PortfolioCreate, user_id: int, db: Session = Depends(get_db)):
    new_portfolio = models.Portfolio(name=portfolio.name, owner_id=user_id)
    db.add(new_portfolio)
    db.commit()
    db.refresh(new_portfolio)
    return new_portfolio

@router.get("/", response_model=List[schemas.Portfolio])
def get_portfolios(user_id: int, db: Session = Depends(get_db)):
    return db.query(models.Portfolio).filter(models.Portfolio.owner_id == user_id).all()

@router.post("/{portfolio_id}/holdings", response_model=schemas.Holding)
def add_holding(portfolio_id: int, holding: schemas.HoldingBase, db: Session = Depends(get_db)):
    new_holding = models.Holding(**holding.dict(), portfolio_id=portfolio_id)
    db.add(new_holding)
    db.commit()
    db.refresh(new_holding)
    return new_holding
