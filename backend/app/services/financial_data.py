import requests
import os
from typing import Dict, Any

FMP_API_KEY = os.getenv("FMP_API_KEY")

class FinancialDataService:
    BASE_URL = "https://financialmodelingprep.com/api/v3"

    @classmethod
    def get_stock_price(cls, ticker: str) -> float:
        if not FMP_API_KEY:
            # Mock price if no API key for now
            return 150.0
        
        url = f"{cls.BASE_URL}/quote/{ticker}?apikey={FMP_API_KEY}"
        response = requests.get(url)
        data = response.json()
        if data:
            return float(data[0]["price"])
        return 0.0

    @classmethod
    def get_company_profile(cls, ticker: str) -> Dict[str, Any]:
        if not FMP_API_KEY:
            return {"companyName": ticker, "description": "Mock description for " + ticker}
        
        url = f"{cls.BASE_URL}/profile/{ticker}?apikey={FMP_API_KEY}"
        response = requests.get(url)
        data = response.json()
        if data:
            return data[0]
        return {}

    @classmethod
    def get_analyst_estimates(cls, ticker: str) -> Dict[str, Any]:
        if not FMP_API_KEY:
            return {"estimatedPriceTarget": 175.0}
        
        url = f"{cls.BASE_URL}/analyst-estimates/{ticker}?apikey={FMP_API_KEY}"
        response = requests.get(url)
        data = response.json()
        if data:
            return data[0]
        return {}
