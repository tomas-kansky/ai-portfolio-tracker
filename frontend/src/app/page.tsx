"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Stocks', value: 65 },
  { name: 'ETFs', value: 25 },
  { name: 'Crypto', value: 10 },
];

const COLORS = ['#10b981', '#6366f1', '#f59e0b'];

const performanceData = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 120 },
  { name: 'Mar', value: 115 },
  { name: 'Apr', value: 140 },
  { name: 'May', value: 135 },
  { name: 'Jun', value: 160 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-8 font-inter">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-500 bg-clip-text text-transparent">
          AI Portfolio Tracker
        </h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition">
            Import CSV
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-indigo-600"></div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Performance Chart */}
        <section className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold mb-6">Portfolio Performance</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1c', border: '1px solid #333' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Diversification */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold mb-6">Diversification</h2>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {data.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-sm text-gray-400">{entry.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Top Holdings */}
        <section className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold mb-6">Top Holdings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-white/10">
                  <th className="pb-4">Ticker</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Shares</th>
                  <th className="pb-4">Fair Value</th>
                  <th className="pb-4">AI Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition group">
                  <td className="py-4 font-semibold">AAPL</td>
                  <td className="py-4">$182.40</td>
                  <td className="py-4">12.5</td>
                  <td className="py-4 text-emerald-400 font-bold">$195.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">Strong Buy</span>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition group">
                  <td className="py-4 font-semibold">TSLA</td>
                  <td className="py-4">$163.57</td>
                  <td className="py-4">5.0</td>
                  <td className="py-4 text-red-400 font-bold">$140.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">Overvalued</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
