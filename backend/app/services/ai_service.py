import openai
import os
from typing import List, Dict

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

class AIService:
    @classmethod
    def get_stock_summary(cls, ticker: str, profile: Dict) -> str:
        if not OPENAI_API_KEY:
            return f"Summary for {ticker}: A key player in its sector with strong market position. (Mock AI Response)"
        
        client = openai.OpenAI(api_key=OPENAI_API_KEY)
        prompt = f"Provide a brief, professional investment summary for {ticker} (Company: {profile.get('companyName')}). Focus on recent developments and sentiment."
        
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=200
        )
        return response.choices[0].message.content

    @classmethod
    def assess_portfolio(cls, holdings: List[Dict]) -> str:
        if not OPENAI_API_KEY:
            return "Your portfolio seems well-diversified but could use more defensive plays. (Mock AI Assessment)"
        
        client = openai.OpenAI(api_key=OPENAI_API_KEY)
        holdings_str = ", ".join([f"{h['ticker']} ({h['amount']} shares)" for h in holdings])
        prompt = f"Assess the following investment portfolio for risk and diversification: {holdings_str}. Provide actionable advice."
        
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=300
        )
        return response.choices[0].message.content

    @classmethod
    def generate_portfolio(cls, user_prompt: str) -> str:
        if not OPENAI_API_KEY:
            return "Generated Portfolio: 40% AAPL, 30% MSFT, 30% JNJ. (Mock AI Generator)"
        
        client = openai.OpenAI(api_key=OPENAI_API_KEY)
        prompt = f"Act as a professional portfolio manager. Based on this request: '{user_prompt}', suggest a list of 5-8 tickers and their percentage weights to build a balanced portfolio."
        
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=400
        )
        return response.choices[0].message.content
