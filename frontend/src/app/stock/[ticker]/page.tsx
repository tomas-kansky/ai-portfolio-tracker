"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { TrendingUp, Info, AlertTriangle, Zap, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StockDetail() {
  const params = useParams();
  const ticker = params.ticker as string;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-8 font-inter">
      <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8">
        <ArrowLeft size={20} /> Back to Dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Header Section */}
        <header className="lg:col-span-3 flex justify-between items-end bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-5xl font-bold">{ticker}</h1>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold">Technology</span>
            </div>
            <p className="text-2xl text-gray-400">Apple Inc.</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-mono font-bold">$182.40</p>
            <p className="text-emerald-400 font-semibold">+1.45% (Today)</p>
          </div>
        </header>

        {/* AI Summary */}
        <section className="lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6 font-semibold text-xl">
            <Zap className="text-indigo-400" /> AI Insights & Summary
          </div>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Apple continues to dominate the premium smartphone market with high demand for the iPhone 15 Pro series. 
            Recent rumors about their Apple Car project pivot towards generative AI integration in iOS 18 have bolstered 
            investor sentiment. Services revenue remains a strong growth engine with high margins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-gray-400 text-sm mb-1">Sentiment Score</h4>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-emerald-500 w-[85%]"></div>
              </div>
              <p className="text-right text-xs mt-1 text-emerald-400">85% Bullish</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-gray-400 text-sm mb-1">Key Risk</h4>
              <p className="text-sm">Antitrust investigations in EU and US markets.</p>
            </div>
          </div>
        </section>

        {/* Valuation Card */}
        <section className="bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 border border-white/10 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 font-semibold text-xl">
              <TrendingUp className="text-emerald-400" /> Fair Value Estimate
            </div>
            <div className="text-center py-6">
              <p className="text-gray-400 mb-2">DCF Model Price</p>
              <p className="text-6xl font-bold text-emerald-400 mb-2">$195.00</p>
              <p className="text-sm bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full inline-block">
                7% Undervalued
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Analysts Target</span>
                <span className="font-semibold">$188.50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Confidence</span>
                <span className="font-semibold">High</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition duration-500">
             <Info size={120} className="rotate-12" />
          </div>
        </section>

        {/* Detailed Metrics */}
        <section className="lg:col-span-3 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
           <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
             <AlertTriangle size={20} className="text-amber-500" /> Market Context
           </h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
             <div>
               <p className="text-gray-400 text-sm">P/E Ratio</p>
               <p className="text-xl font-semibold">28.4</p>
             </div>
             <div>
               <p className="text-gray-400 text-sm">Market Cap</p>
               <p className="text-xl font-semibold">$2.82T</p>
             </div>
             <div>
               <p className="text-gray-400 text-sm">Dividend Yield</p>
               <p className="text-xl font-semibold">0.52%</p>
             </div>
             <div>
               <p className="text-gray-400 text-sm">Beta (5Y)</p>
               <p className="text-xl font-semibold">1.28</p>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
}
