import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { DayTask } from '../types';

interface TodayTasksProps {
  tasks: DayTask[];
  onTaskClick: (taskId: string) => void;
  day: number;
  streak: number;
}

export default function TodayTasks({ tasks, onTaskClick, day, streak }: TodayTasksProps) {
  const getSubtext = (type: DayTask['type']) => {
    switch (type) {
      case 'warmup': return '15分钟 | 20道计算题';
      case 'new_knowledge': return '20分钟 | 微课与例题';
      case 'practice': return '30分钟 | 10道针对性训练';
      case 'review': return '5分钟 | 错题过关';
    }
  };

  const getAccentColor = (type: DayTask['type']) => {
    switch (type) {
      case 'warmup': return 'border-accent-orange';
      case 'new_knowledge': return 'border-primary-blue';
      case 'practice': return 'border-indigo-400';
      case 'review': return 'border-success-green';
    }
  };

  return (
    <div className="pb-32 px-10 pt-8 max-w-lg mx-auto space-y-8">
      <header className="flex flex-col gap-6 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
              学
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-main">上海学霸同学</h1>
              <p className="text-text-vmuted text-sm">连续打卡 {streak} 天</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-semibold">
            <span>总关卡：W8 五年级代数初步</span>
            <span className="text-primary-blue">65%</span>
          </div>
          <div className="h-3 bg-[#E1E8EE] rounded-full overflow-hidden">
            <div className="h-full bg-primary-blue transition-all duration-500" style={{ width: '65%' }} />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5">
        <AnimatePresence>
          {tasks.map((task, index) => {
            const accentBorder = getAccentColor(task.type);
            
            return (
              <motion.button
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onTaskClick(task.id)}
                disabled={task.isCompleted}
                className={cn(
                  "w-full text-left p-6 rounded-[24px] border-4 bg-white shadow-vibrant transition-all active:scale-95 group relative border-transparent hover:border-primary-blue",
                  task.isCompleted && "bg-[#F0FFF4] border-success-green opacity-90"
                )}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="mb-4">
                    <div className="text-4xl mb-3">
                      {task.type === 'warmup' && "🚀"}
                      {task.type === 'new_knowledge' && "📖"}
                      {task.type === 'practice' && "⚔️"}
                      {task.type === 'review' && "🎯"}
                    </div>
                    <h3 className="font-bold text-xl text-text-main leading-tight">{task.title}</h3>
                    <p className="text-sm text-text-vmuted mt-1">{getSubtext(task.type)}</p>
                  </div>
                  
                  <div className={cn(
                    "status-badge inline-flex self-start px-3 py-1.5 rounded-xl text-xs font-bold",
                    task.isCompleted ? "bg-[#E8F5E9] text-[#2E7D32]" : "bg-[#E3F2FD] text-[#1976D2]"
                  )}>
                    {task.isCompleted ? "✔ 已完成" : "进行中"}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

