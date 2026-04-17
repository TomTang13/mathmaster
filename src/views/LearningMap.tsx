import React from 'react';
import { motion } from 'motion/react';
import { Lock, Star, ShieldCheck, Castle } from 'lucide-react';
import { cn } from '../lib/utils';
import { WeekPlan } from '../types';

interface LearningMapProps {
  curriculum: WeekPlan[];
  currentWeek: number;
}

export default function LearningMap({ curriculum, currentWeek }: LearningMapProps) {
  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-slate-900 italic">通关大地图</h1>
        <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest">12个关卡 · 冲向高地</p>
      </header>

      <div className="relative">
        {/* The winding path line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 bg-slate-200 rounded-full" />

        <div className="space-y-12 relative z-10">
          {curriculum.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isCompleted = item.week < currentWeek;
            const isCurrent = item.week === currentWeek;
            const isBoss = item.status === 'red';

            return (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex items-center gap-4",
                  isLeft ? "flex-row-reverse text-right" : "flex-row"
                )}
              >
                <div className="flex-1 hidden sm:block" />
                
                <div className="relative group cursor-pointer">
                  {isCurrent && (
                    <motion.div 
                      layoutId="pulsing"
                      className="absolute -inset-4 bg-blue-100/50 rounded-full z-0"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 transition-all shadow-vibrant group-hover:scale-110",
                    item.isLocked ? "bg-[#E1E8EE] text-text-vmuted" : (isBoss ? "bg-accent-orange text-white" : (isCompleted ? "bg-success-green text-white" : "bg-primary-blue text-white"))
                  )}>
                    {item.isLocked ? <Lock size={24} /> : (isBoss ? <Castle size={24} /> : (isCompleted ? <ShieldCheck size={28} /> : <Star size={24} />))}
                  </div>

                  {/* Level label */}
                  <div className={cn(
                    "absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 rounded-xl bg-white border-2 border-[#E1E8EE] shadow-vibrant transition-opacity group-hover:opacity-100 sm:opacity-100 opacity-0",
                    isLeft ? "right-full mr-4" : "left-full ml-4"
                  )}>
                    <p className="text-[10px] uppercase font-bold text-text-vmuted tracking-widest">Week {item.week}</p>
                    <p className="text-sm font-bold text-text-main">{item.title}</p>
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
