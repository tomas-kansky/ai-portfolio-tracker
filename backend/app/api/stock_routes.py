from fastapi import APIRouter, Depends, HTTPException
from ..services.financial_data import FinancialDataService
from ..services.ai_service import AIService
from ..utils.dcf_calculator import calculate_dcf
from typing import Dict

router = APIRouter(prefix="/stocks", tags=["Stocks"])

@router.get("/{ticker}", response_model=Dict)
def get_stock_detail(ticker: str):
    profile = FinancialDataService.get_company_profile(ticker)
    if not profile:
        raise HTTPException(status_code=404, detail="Stock not found")
        
    estimates = FinancialDataService.get_analyst_estimates(ticker)
    
    # Mock metrics for DCF
    metrics = {"freeCashFlow": profile.get("volAvg", 1000000) * 10} 
    
    fair_value = calculate_dcf(profile, metrics)
    summary = AIService.get_stock_summary(ticker, profile)
    
    return {
        "ticker": ticker,
        "profile": profile,
        "estimates": estimates,
        "fair_value": fair_value,
        "ai_summary": summary
    }
