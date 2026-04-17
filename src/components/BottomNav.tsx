import React from 'react';
import { LayoutGrid, Map, Target, BarChart2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: 'today', icon: LayoutGrid, label: '今日任务' },
    { id: 'map', icon: Map, label: '学习地图' },
    { id: 'mistake', icon: Target, label: '错题靶场' },
    { id: 'stats', icon: BarChart2, label: '数据中心' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#E1E8EE] pb-safe z-50 h-[90px]">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto px-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center flex-1 transition-all duration-200 gap-1",
                isActive ? "text-primary-blue" : "text-text-vmuted"
              )}
            >
              <Icon size={24} className={cn("transition-transform", isActive && "scale-110")} />
              <span className="text-[12px] font-semibold tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
