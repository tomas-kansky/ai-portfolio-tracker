"use client";

import React, { useState } from 'react';
import { Send, Sparkles, PieChart, TrendingUp, ShieldCheck } from 'lucide-react';

export default function StrategyGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000); // Mock generation
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-8 font-inter">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} /> powered by GPT-4o
          </div>
          <h1 className="text-5xl font-bold mb-6">Build Your Strategy</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Describe your investment goals, risk tolerance, and preferred sectors. 
            Our AI will curate a professional-grade portfolio tailored for you.
          </p>
        </header>

        <section className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl mb-12 relative group">
          <div className="flex gap-4">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. 'Defensive dividend portfolio with focus on healthcare and tech...'"
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-lg"
            />
            <button 
              onClick={handleGenerate}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition flex items-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              {isGenerating ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div> : <><Send size={20} /> Generate</>}
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-gray-400 hover:border-white/20 transition">"Income & Growth"</button>
            <button className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-gray-400 hover:border-white/20 transition">"Aggressive Crypto"</button>
            <button className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-gray-400 hover:border-white/20 transition">"Recession Proof"</button>
          </div>
        </section>

        {/* Results Area (Conditional) */}
        {!isGenerating && prompt && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
                   <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                     <PieChart size={20} className="text-indigo-400" /> Suggested Allocation
                   </h3>
                   <div className="space-y-4">
                      {[
                        { ticker: 'AAPL', weight: '30%', color: 'bg-emerald-500' },
                        { ticker: 'MSFT', weight: '25%', color: 'bg-indigo-500' },
                        { ticker: 'JNJ', weight: '20%', color: 'bg-red-500' },
                        { ticker: 'PG', weight: '15%', color: 'bg-amber-500' },
                        { ticker: 'Cash', weight: '10%', color: 'bg-gray-500' },
                      ].map(item => (
                        <div key={item.ticker}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{item.ticker}</span>
                            <span className="font-bold">{item.weight}</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className={`${item.color} h-full`} style={{ width: item.weight }}></div>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                       <h4 className="flex items-center gap-2 font-semibold mb-3">
                         <TrendingUp size={18} className="text-emerald-400" /> Expected Yield
                       </h4>
                       <p className="text-gray-400 text-sm italic">"Based on historical data, this portfolio averages 8.4% annual yield with a defensive profile."</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                       <h4 className="flex items-center gap-2 font-semibold mb-3">
                         <ShieldCheck size={18} className="text-indigo-400" /> Diversification Score
                       </h4>
                       <div className="text-3xl font-bold">92/100</div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
