import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { UserState } from '../types';
import { Share2, ArrowUpRight, BarChart3 } from 'lucide-react';
import { cn } from '../lib/utils';
import { AllModulesRadarCharts, ModuleData } from '../components/KnowledgeRadarChart';
import { API_BASE_URL } from '../config';

interface StatsViewProps {
  userState: UserState;
  userId?: number | null;
}

export default function StatsView({ userState, userId }: StatsViewProps) {
  const [moduleStats, setModuleStats] = useState<ModuleData[]>([]);
  const [showKnowledgeStats, setShowKnowledgeStats] = useState(true);
  const [trendData, setTrendData] = useState([
    { day: '04.10', accuracy: 65 },
    { day: '04.11', accuracy: 72 },
    { day: '04.12', accuracy: 68 },
    { day: '04.13', accuracy: 80 },
    { day: '04.14', accuracy: 78 },
    { day: '04.15', accuracy: 85 },
    { day: '今日', accuracy: 92 },
  ]);
  const [totalAnswers, setTotalAnswers] = useState(0);

  // 获取用户知识点统计数据
  useEffect(() => {
    if (userId && showKnowledgeStats) {
      fetch(`${API_BASE_URL}/key-knowledge/user/${userId}/module-stats`)
        .then(res => res.json())
        .then(data => {
          console.log('Module stats data:', data);
          setModuleStats(data);
        })
        .catch(err => {
          console.error('Failed to fetch module stats:', err);
        });
    }
  }, [userId, showKnowledgeStats]);

  // 获取正确率趋势数据
  useEffect(() => {
    if (userId) {
      fetch(`${API_BASE_URL}/users/${userId}/accuracy-trend`)
        .then(res => res.json())
        .then(data => {
          console.log('Accuracy trend data:', data);
          if (data.trendData && data.trendData.length > 0) {
            setTrendData(data.trendData);
          }
          if (data.totalAnswers) {
            setTotalAnswers(data.totalAnswers);
          }
        })
        .catch(err => {
          console.error('Failed to fetch accuracy trend:', err);
        });
    }
  }, [userId]);

  // 计算7日综合正确率（排除没有答题的日期）
  const calculateOverallAccuracy = () => {
    // 过滤出有答题记录的日期
    const daysWithAnswers = trendData.filter(day => day.totalCount > 0);
    
    if (daysWithAnswers.length === 0) return 0;
    
    const totalCorrect = daysWithAnswers.reduce((sum, day) => sum + day.accuracy, 0);
    return Math.round(totalCorrect / daysWithAnswers.length);
  };



  const radarData = [
    { subject: '计算自动化', A: userState.mastery.calculation, fullMark: 100 },
    { subject: '应用题模型', A: userState.mastery.wordProblem, fullMark: 100 },
    { subject: '几何与空间', A: userState.mastery.geometry, fullMark: 100 },
    { subject: '代数思维', A: userState.mastery.algebra, fullMark: 100 },
    { subject: '统计图表', A: userState.mastery.statistics, fullMark: 100 },
  ];

  return (
    <div className="pb-32 px-6 pt-8 max-w-lg mx-auto space-y-8">
      <header className="flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-text-main">图鉴中心</h1>
        <div className="flex items-center gap-2">
          {userId && (
            <button
              onClick={() => setShowKnowledgeStats(!showKnowledgeStats)}
              className={cn(
                "p-2 rounded-full shadow-sm transition-all",
                showKnowledgeStats 
                  ? "bg-primary-blue text-white border-2 border-primary-blue" 
                  : "bg-white border-2 border-[#E1E8EE] text-primary-blue"
              )}
            >
              <BarChart3 size={20} />
            </button>
          )}
          <button className="p-2 bg-white border-2 border-[#E1E8EE] text-primary-blue rounded-full shadow-sm">
            <Share2 size={20} />
          </button>
        </div>
      </header>

      {showKnowledgeStats && userId && (
        <div className="space-y-4">
          <AllModulesRadarCharts data={moduleStats} userId={userId} />
        </div>
      )}

      {/* Trend Line Chart */}
      <div className="bg-white border-2 border-[#E1E8EE] p-8 rounded-[32px] shadow-vibrant">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-sm font-bold text-text-vmuted uppercase tracking-widest">近7日正确率走势</h3>
          <div className="flex items-center text-success-green font-bold text-lg">
            <span>{calculateOverallAccuracy()}%</span>
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

      {/* 近7日答题数量走势 */}
      <div className="bg-white border-2 border-[#E1E8EE] p-8 rounded-[32px] shadow-vibrant">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-sm font-bold text-text-vmuted uppercase tracking-widest">近7日答题数量走势</h3>
          <div className="font-bold text-lg">{totalAnswers} 题</div>
        </div>
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#7F8C8D', fontSize: 11, fontWeight: 500 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#7F8C8D', fontSize: 11, fontWeight: 500 }} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: '2px solid #E1E8EE', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                itemStyle={{ color: '#4A90E2', fontWeight: 'bold' }}
              />
              <Line 
                type="monotone" 
                dataKey="totalCount" 
                stroke="#4A90E2" 
                strokeWidth={5} 
                dot={{ fill: '#4A90E2', strokeWidth: 3, r: 5, stroke: '#fff' }}
                activeDot={{ r: 7, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
