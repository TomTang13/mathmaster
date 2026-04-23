import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface KnowledgeData {
  knowledgeId: number;
  knowledgeText: string;
  weekId: number;
  accuracy: number;
  totalCount: number;
  correctCount: number;
}

interface ModuleData {
  module: string;
  knowledge: KnowledgeData[];
  averageAccuracy: number;
  totalQuestions: number;
  correctQuestions: number;
}

interface KnowledgeRadarChartProps {
  moduleData: ModuleData;
  color?: string;
}

const KnowledgeRadarChart: React.FC<KnowledgeRadarChartProps> = ({ moduleData, color = '#3B82F6' }) => {
  if (!moduleData || moduleData.knowledge.length === 0) {
    return null;
  }

  const chartData = moduleData.knowledge.map((k) => ({
    subject: truncateText(k.knowledgeText, 8),
    fullName: k.knowledgeText,
    A: k.accuracy,
    fullMark: 100,
    weekId: k.weekId,
    knowledgeId: k.knowledgeId,
  }));

  function truncateText(text: string, maxLen: number): string {
    if (text.length <= maxLen) return text;
    return text.substring(0, maxLen) + '...';
  }

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-100">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-slate-800 text-sm">{moduleData.module}</h4>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">平均正确率:</span>
          <span className="font-bold" style={{ color }}>{moduleData.averageAccuracy}%</span>
        </div>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={chartData}>
            <PolarGrid stroke="#E5E7EB" />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: '#64748B' }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 8, fill: '#94A3B8' }} />
            <Radar
              name="正确率"
              dataKey="A"
              stroke={color}
              fill={color}
              fillOpacity={0.4}
              strokeWidth={2}
            />
            <Tooltip
              content={({ payload }) => {
                if (payload && payload.length > 0) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-xs">
                      <p className="font-medium mb-1">{data.fullName}</p>
                      <p className="text-slate-300">W{data.weekId} - K{data.knowledgeId}</p>
                      <p>正确率: <span className="font-bold">{data.A}%</span></p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 text-xs text-slate-500 text-center">
        共 {moduleData.totalQuestions} 题，答对 {moduleData.correctQuestions} 题
      </div>
    </div>
  );
};

interface AllModulesRadarChartsProps {
  data: ModuleData[];
  userId: number | null;
}

const AllModulesRadarCharts: React.FC<AllModulesRadarChartsProps> = ({ data, userId }) => {
  if (!userId) return null;

  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 text-center">
        <p className="text-slate-500 text-sm">暂无答题数据</p>
        <p className="text-slate-400 text-xs mt-1">完成一些练习后即可查看知识点掌握情况</p>
      </div>
    );
  }

  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-800 text-lg">知识点掌握雷达图</h3>
        <span className="text-xs text-slate-500">共 {data.length} 个模块</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((moduleData, index) => (
          <KnowledgeRadarChart
            key={moduleData.module}
            moduleData={moduleData}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
};

export { KnowledgeRadarChart, AllModulesRadarCharts };
export type { ModuleData, KnowledgeData };
