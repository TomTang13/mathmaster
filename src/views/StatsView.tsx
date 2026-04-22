import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { UserState } from '../types';
import { Share2, ArrowUpRight } from 'lucide-react';

interface StatsViewProps {
  userState: UserState;
}

export default function StatsView({ userState }: StatsViewProps) {
  const radarData = [
    { subject: '计算自动化', A: userState.mastery.calculation, fullMark: 100 },
    { subject: '应用题模型', A: userState.mastery.wordProblem, fullMark: 100 },
    { subject: '几何与空间', A: userState.mastery.geometry, fullMark: 100 },
    { subject: '代数思维', A: userState.mastery.algebra, fullMark: 100 },
    { subject: '统计图表', A: userState.mastery.statistics, fullMark: 100 },
  ];

  const trendData = [
    { day: '04.10', accuracy: 65 },
    { day: '04.11', accuracy: 72 },
    { day: '04.12', accuracy: 68 },
    { day: '04.13', accuracy: 80 },
    { day: '04.14', accuracy: 78 },
    { day: '04.15', accuracy: 85 },
    { day: '今日', accuracy: 92 },
  ];

  return (
    <div className="pb-32 px-6 pt-8 max-w-lg mx-auto space-y-8">
      <header className="flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-text-main">图鉴中心</h1>
        <button className="p-2 bg-white border-2 border-[#E1E8EE] text-primary-blue rounded-full shadow-sm">
          <Share2 size={20} />
        </button>
      </header>

      {/* Radar Mastery Chart */}
      <div className="bg-white border-2 border-[#E1E8EE] p-6 rounded-[32px] shadow-vibrant">
        <h3 className="text-sm font-bold text-text-vmuted text-center mb-6 uppercase tracking-widest">五维能力雷达</h3>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#E1E8EE" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#7F8C8D', fontSize: 11, fontWeight: 600 }} />
              <Radar
                name="Mastery"
                dataKey="A"
                stroke="#4A90E2"
                strokeWidth={4}
                fill="#4A90E2"
                fillOpacity={0.15}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trend Line Chart */}
      <div className="bg-white border-2 border-[#E1E8EE] p-8 rounded-[32px] shadow-vibrant">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-sm font-bold text-text-vmuted uppercase tracking-widest">近7日正确率走势</h3>
          <div className="flex items-center text-success-green font-bold text-lg">
            <ArrowUpRight size={20} className="mr-1" />
            <span>+12%</span>
          </div>
        </div>
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#7F8C8D', fontSize: 11, fontWeight: 500 }} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: '2px solid #E1E8EE', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                itemStyle={{ color: '#4A90E2', fontWeight: 'bold' }}
              />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#4A90E2" 
                strokeWidth={5} 
                dot={{ fill: '#4A90E2', strokeWidth: 3, r: 5, stroke: '#fff' }}
                activeDot={{ r: 7, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Medal Report Card */}
      <div className="bg-white border-4 border-primary-blue rounded-[32px] p-8 relative overflow-hidden shadow-vibrant">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 blur-[50px] rounded-full" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-primary-blue text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-8 h-[2px] bg-primary-blue" />
            本周战报
          </div>
          <h2 className="text-2xl font-bold leading-tight mb-4 text-text-main">
            你比上周的自己 <br /> 
            进步了 <span className="text-primary-blue text-4xl">12%</span>
          </h2>
          <p className="text-text-vmuted text-sm leading-relaxed mb-8 font-medium">
            本周你成功消灭了“相遇问题”这个拦路虎，方程思维初步觉醒，计算稳定性显著提升。
          </p>
          <button className="w-full bg-accent-orange text-white py-4 rounded-xl font-bold transition-transform active:scale-95 shadow-lg shadow-orange-200">
            生成本周成就图
          </button>
        </div>
      </div>
    </div>
  );
}
