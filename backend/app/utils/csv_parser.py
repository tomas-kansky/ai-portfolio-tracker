import pandas as pd
from typing import List, Dict
import io

def parse_trading212(csv_content: str) -> List[Dict]:
    df = pd.read_csv(io.StringIO(csv_content))
    # Trading 212 CSV columns: Ticker, Name, No. of shares, Price / share, Total, Currency, etc.
    # We need to normalize this.
    holdings = []
    for _, row in df.iterrows():
        holdings.append({
            "ticker": row["Ticker"],
            "amount": float(row["No. of shares"]),
            "average_price": float(row["Price / share"]),
            "currency": row["Currency"]
        })
    return holdings

def parse_xtb(csv_content: str) -> List[Dict]:
    # XTB format varies, but usually has Symbol, Volume, Open Price
    df = pd.read_csv(io.StringIO(csv_content))
    holdings = []
    for _, row in df.iterrows():
        holdings.append({
            "ticker": row["Symbol"],
            "amount": float(row["Volume"]),
            "average_price": float(row["Open Price"]),
            "currency": row.get("Currency", "USD")
        })
    return holdings

def parse_portfolio_csv(broker: str, csv_content: str) -> List[Dict]:
    if broker.lower() == "trading212":
        return parse_trading212(csv_content)
    elif broker.lower() == "xtb":
        return parse_xtb(csv_content)
    else:
        raise ValueError(f"Unsupported broker: {broker}")
