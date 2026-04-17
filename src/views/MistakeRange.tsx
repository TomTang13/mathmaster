import React from 'react';
import { Mic, Search, Trash2, Flame, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { MistakeItem } from '../types';

interface MistakeRangeProps {
  mistakes: MistakeItem[];
}

export default function MistakeRange({ mistakes }: MistakeRangeProps) {
  const categories = [
    { id: 'all', label: '全部' },
    { id: 'calculation', label: '计算失误' },
    { id: 'model', label: '应用题模型' },
    { id: 'concept', label: '概念掌握' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto flex flex-col h-full">
      <header className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-text-main">错题靶场</h1>
          <div className="bg-[#FF4757]/10 text-[#FF4757] p-2 rounded-xl">
            <Flame size={20} />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border-2",
                activeCategory === cat.id 
                  ? "bg-primary-blue text-white border-primary-blue shadow-vibrant" 
                  : "bg-white text-text-vmuted border-[#E1E8EE]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 space-y-4">
        {mistakes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-text-vmuted">
            <ShieldCheck size={48} className="mb-4 opacity-20" />
            <p className="text-sm">靶场空空如也，保持这个势头！</p>
          </div>
        ) : (
          mistakes.map((mistake, index) => (
            <motion.div
              key={mistake.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border-4 border-transparent hover:border-primary-blue rounded-[24px] p-5 shadow-vibrant transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase",
                    mistake.category === 'model' ? "bg-[#E3F2FD] text-[#1976D2]" : "bg-[#FFF3E0] text-[#F57C00]"
                  )}>
                    {mistake.category === 'model' ? '模型' : '计算'}
                  </span>
                  <p className="text-text-vmuted text-[10px] font-semibold">{mistake.date}</p>
                </div>
                {mistake.count > 1 && (
                  <div className="flex items-center gap-1 text-[#FF4757] font-bold text-xs uppercase">
                    <AlertTriangle size={12} />
                    已错 {mistake.count} 次
                  </div>
                )}
              </div>

              <h4 className="text-text-main font-bold text-lg leading-snug mb-6">
                {mistake.title}
              </h4>

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-accent-orange text-white py-3 rounded-xl font-bold text-sm shadow-vibrant active:scale-95 transition-transform">
                  <Mic size={18} />
                  费曼输出室
                </button>
                <button className="p-3 bg-[#F0F4F8] text-text-vmuted rounded-xl hover:bg-rose-50 hover:text-rose-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <div className="mt-8 p-6 bg-white rounded-[24px] border-2 border-[#E1E8EE] shadow-vibrant flex gap-4">
        <div className="bg-accent-orange text-white p-3 rounded-xl self-start h-fit shadow-md">
          <Mic size={20} />
        </div>
        <div>
          <h5 className="font-bold text-text-main text-sm">什么是费曼输出？</h5>
          <p className="text-xs text-text-vmuted mt-1 leading-relaxed">
            按下麦克风，试着像老师一样讲出这道题。讲顺了，脑袋里的知识点就真正“焊死”了。
          </p>
        </div>
      </div>
    </div>
  );
}
