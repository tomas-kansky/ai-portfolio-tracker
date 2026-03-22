"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Target, Briefcase, Settings, LogOut, TrendingUp } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Target, label: 'AI Strategy', href: '/generator' },
  { icon: Briefcase, label: 'Portfolios', href: '/portfolios' },
  { icon: TrendingUp, label: 'Markets', href: '/markets' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-white/5 border-r border-white/10 p-6 flex flex-col backdrop-blur-3xl z-50">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center font-bold text-black italic">A</div>
        <span className="text-xl font-bold tracking-tight">AI Tracker</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition duration-200 ${
              pathname === item.href 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-white/10 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition">
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
