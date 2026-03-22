from typing import Dict, Any

def calculate_dcf(profile: Dict, metrics: Dict) -> float:
    # Highly simplified DCF model: (Current FCF * (1 + Growth)) / (WACC - Growth)
    # real model would use multiple years of projections
    try:
        fcf = metrics.get("freeCashFlow", 1000000)
        growth = 0.05 # 5% terminal growth
        wacc = 0.10 # 10% discount rate
        shares = profile.get("mktCap", 1000000) / profile.get("price", 1)
        
        if shares == 0:
            return 0.0
            
        fair_value_total = (fcf * (1 + growth)) / (wacc - growth)
        return fair_value_total / shares
    except Exception:
        return 0.0
