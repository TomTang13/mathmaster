import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Star, ShieldCheck, Castle, Wind, Zap, Flame, Compass, MapPin, Sparkles, Droplets, Mountain, Leaf, Snowflake, X, BookOpen, Lightbulb, Copy, Check, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import { WeekPlan } from '../types';
import { API_BASE_URL } from '../config';

interface LearningMapProps {
  currentWeek: number;
  onPdfClick: (pdfUrl: string) => void;
}

export default function LearningMap({ currentWeek, onPdfClick }: LearningMapProps) {
  const [curriculum, setCurriculum] = useState<WeekPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 从后端API获取课程数据
    fetch(`${API_BASE_URL}/weeks`)
      .then(res => res.json())
      .then(data => {
        // 转换数据格式以匹配前端需求
        const formattedData = data.map((week: any) => ({
          week: week.weekId,
          title: week.title,
          description: week.description,
          milestone: week.milestone,
          status: week.status,
          isLocked: week.isLocked,
          keyKnowledge: [] // 暂时为空，后续可以通过另一个API获取
        }));
        setCurriculum(formattedData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch curriculum:', err);
        setLoading(false);
      });
  }, []);
  const [selectedWeek, setSelectedWeek] = useState<WeekPlan | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isMilestoneCopied, setIsMilestoneCopied] = useState(false);
  const [weekLoading, setWeekLoading] = useState(false);

  const getElementalStyle = (week: number) => {
    // Mapping weeks to Genshin elements for progression feel
    const elements = [
      { name: '风', color: 'bg-[#74C2A1]', icon: Wind, shadow: 'shadow-[#74C2A1]/40' }, // Anemo
      { name: '岩', color: 'bg-[#FABD05]', icon: Mountain, shadow: 'shadow-[#FABD05]/40' }, // Geo
      { name: '雷', color: 'bg-[#AC88FF]', icon: Zap, shadow: 'shadow-[#AC88FF]/40' }, // Electro
      { name: '草', color: 'bg-[#A5C832]', icon: Leaf, shadow: 'shadow-[#A5C832]/40' }, // Dendro
      { name: '水', color: 'bg-[#4DBFFF]', icon: Droplets, shadow: 'shadow-[#4DBFFF]/40' }, // Hydro
      { name: '冰', color: 'bg-[#9BA0FF]', icon: Snowflake, shadow: 'shadow-[#9BA0FF]/40' }, // Cryo
      { name: '火', color: 'bg-[#FF4D4D]', icon: Flame, shadow: 'shadow-[#FF4D4D]/40' }, // Pyro
    ];
    return elements[(week - 1) % elements.length];
  };

  const handleWeekSelect = async (week: WeekPlan) => {
    setWeekLoading(true);
    try {
      // 获取该周的核心奥义数据
      const response = await fetch(`${API_BASE_URL}/key-knowledge/week/${week.week}`);
      const keyKnowledgeData = await response.json();
      
      // 转换核心奥义数据格式
      const formattedKeyKnowledge = keyKnowledgeData.map((item: any) => ({
        text: item.knowledgeText,
        difficulty: item.difficulty,
        day: item.targetDay,
        module: item.module,
        filename: item.filename
      }));
      
      // 更新选中的周数据
      const updatedWeek = {
        ...week,
        keyKnowledge: formattedKeyKnowledge
      };
      
      setSelectedWeek(updatedWeek);
    } catch (err) {
      console.error('Failed to fetch key knowledge:', err);
      // 即使获取失败，也显示周数据，只是核心奥义为空
      setSelectedWeek(week);
    } finally {
      setWeekLoading(false);
    }
  };

  const handleCopy = async (text: string, index: number | 'milestone') => {
    const fullText = `${text}\n\n提示词：让小学生能够通俗易懂的理解掌握本条内容。`;
    try {
      await navigator.clipboard.writeText(fullText);
      if (index === 'milestone') {
        setIsMilestoneCopied(true);
        setTimeout(() => setIsMilestoneCopied(false), 2000);
      } else {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="pb-32 px-4 pt-8 max-w-lg mx-auto bg-gradient-to-b from-slate-50 to-blue-50/30 min-h-screen relative">
      <header className="mb-12 text-center px-4 relative">
        <h1 className="text-2xl font-bold text-text-main italic mt-4">提瓦特进阶指南：小初衔接版</h1>
        <p className="text-text-vmuted text-xs mt-2 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
          <span>世界等级: 14</span>
          <span className="w-1.5 h-1.5 bg-success-green rounded-full animate-pulse" />
          <span>持续探索中</span>
        </p>
      </header>

      <div className="relative">
        {/* The ethereal winding path line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 opacity-40 rounded-full blur-[1px]" />

        <div className="space-y-14 relative z-10">
          {curriculum.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isCompleted = item.week < currentWeek;
            const isCurrent = item.week === currentWeek;
            const isBoss = item.status === 'red' || item.week % 4 === 0;
            const element = getElementalStyle(item.week);
            const ElementIcon = element.icon;

            return (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex items-center gap-2 sm:gap-6 w-full cursor-pointer",
                  isLeft ? "flex-row" : "flex-row-reverse"
                )}
                onClick={() => handleWeekSelect(item)}
              >
                {/* Side Content Area (Text Label) */}
                <div className={cn(
                  "flex-1 flex",
                  isLeft ? "justify-end pr-1 sm:pr-4" : "justify-start pl-1 sm:pl-4"
                )}>
                  <div className={cn(
                    "px-3 py-2 sm:px-4 sm:py-3 rounded-2xl bg-white/90 backdrop-blur border-2 border-[#E1E8EE] shadow-vibrant max-w-[150px] sm:max-w-none relative transition-transform active:scale-95",
                    isLeft ? "text-right" : "text-left shadow-vibrant",
                    isCurrent && "border-primary-blue ring-4 ring-primary-blue/5"
                  )}>
                    <div className="flex items-center gap-1 mb-1 justify-inherit">
                      <span className={cn("w-2 h-2 rounded-full", element.color)} />
                      <p className="text-[9px] sm:text-[10px] uppercase font-bold text-text-vmuted tracking-widest">
                        {element.name}元素区 · Week {item.week}
                      </p>
                    </div>
                    <p className="text-xs sm:text-base font-bold text-text-main leading-tight line-clamp-2">{item.title}</p>
                    {isCompleted && <div className="absolute -top-2 -right-2 bg-success-green text-white rounded-full p-0.5 shadow-sm"><ShieldCheck size={12} /></div>}
                  </div>
                </div>
                
                {/* Center Node (Genshin Style) */}
                <div className="relative shrink-0 flex justify-center w-20">
                  <div className="relative group">
                    {/* Animated Orbit for current node */}
                    {isCurrent && (
                      <motion.div 
                        className="absolute inset-x-[-20px] top-[-20px] bottom-[-20px] border-2 border-dashed border-primary-blue/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                    )}

                    {isCurrent && (
                      <motion.div 
                        layoutId="pulsing-halo"
                        className={cn("absolute -inset-6 rounded-full blur-xl opacity-30", element.color)}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}
                    
                    <div className={cn(
                      "w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] flex items-center justify-center relative z-10 transition-all border-[3px] border-white group-hover:scale-110 shadow-lg active:scale-95",
                      item.isLocked ? "bg-slate-200 text-slate-400" : (isCurrent ? "bg-primary-blue text-white" : element.color),
                      !item.isLocked && element.shadow
                    )}>
                      {item.isLocked ? (
                        <Lock size={20} />
                      ) : isBoss ? (
                        <Castle size={24} className="text-white drop-shadow-md" />
                      ) : isCurrent ? (
                        <MapPin size={24} className="text-white animate-bounce" />
                      ) : (
                        <ElementIcon size={24} className="text-white" />
                      )}

                      {/* Floating level text above node */}
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-black bg-slate-800 text-white px-2 py-0.5 rounded-full opacity-60">
                        {isBoss ? 'BOSS' : `LV.${item.week}`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="flex-1 hidden sm:block" />
                <div className="flex-1 sm:hidden invisible h-1 w-1" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Week Knowledge Modal */}
      <AnimatePresence>
        {selectedWeek && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWeek(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl relative z-10 border-4 border-[#E1E8EE] max-h-[85vh] flex flex-col"
            >
              <div className={cn("h-3 w-full shrink-0 relative", getElementalStyle(selectedWeek.week).color)}>
                <button 
                  onClick={() => setSelectedWeek(null)}
                  className="absolute right-4 top-6 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-colors text-white z-20"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-8 pt-6 space-y-6">
                  {/* Minimized Header and Milestone moved inside scrollable area */}
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FABD05] mb-1">关键知识图鉴</span>
                      <h2 className="text-2xl font-black text-text-main leading-tight">
                        {selectedWeek.title}
                      </h2>
                    </div>

                    <div 
                      onClick={() => handleCopy(selectedWeek.milestone, 'milestone')}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer group/milestone",
                        isMilestoneCopied ? "bg-green-50 border-success-green" : "bg-blue-50/50 border-blue-100/50 hover:border-primary-blue/30 hover:bg-white"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                        isMilestoneCopied ? "bg-success-green text-white" : "bg-blue-100 text-primary-blue"
                      )}>
                        {isMilestoneCopied ? <Check size={20} /> : <BookOpen size={20} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <p className="text-[10px] text-text-vmuted font-bold uppercase tracking-widest">本周核心目标</p>
                          <div className={cn(
                            "opacity-0 group-hover/milestone:opacity-100 transition-opacity",
                            isMilestoneCopied && "opacity-0"
                          )}>
                            <Copy size={12} className="text-slate-300" />
                          </div>
                        </div>
                        <p className="text-sm font-bold text-text-main leading-tight">{selectedWeek.milestone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pb-8">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 sticky top-0 bg-white/95 backdrop-blur-sm py-3 z-10 -mx-8 px-8 border-b border-slate-100/50">
                       <Sparkles size={12} className="text-[#FABD05]" /> 
                       核心奥义 (点击可复制)
                    </h3>
                    <div className="space-y-2">
                      {selectedWeek.keyKnowledge ? (
                        [...selectedWeek.keyKnowledge]
                          .sort((a, b) => (a.day || 0) - (b.day || 0))
                          .map((point, idx) => (
                            <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                            key={idx} 
                            onClick={() => handleCopy(point.text, idx)}
                            className={cn(
                              "bg-zinc-50/80 p-5 rounded-2xl border flex flex-col gap-2 group transition-all cursor-pointer relative",
                              copiedIndex === idx ? "border-success-green bg-green-50/50" : "border-zinc-100 hover:border-primary-blue/30 hover:bg-white hover:shadow-md"
                            )}
                          >
                            <div className="flex items-start gap-4">
                              <div className={cn(
                                "w-6 h-6 rounded-full border shadow-sm flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                                copiedIndex === idx ? "bg-success-green border-success-green text-white" : "bg-white border-zinc-200"
                              )}>
                                {copiedIndex === idx ? (
                                  <Check size={12} strokeWidth={4} />
                                ) : (
                                  <span className="text-[11px] font-black">{idx + 1}</span>
                                )}
                              </div>
                              <p className="text-sm text-slate-700 font-medium leading-relaxed flex-1">{point.text}</p>
                              <div className="flex items-center gap-2">
                                {/* PDF按钮 */}
                                {point.filename && (
                                  <button 
                                    onClick={() => onPdfClick(`${API_BASE_URL}/file/${point.filename}`)}
                                    className="w-6 h-6 rounded-full border-2 border-primary-blue/30 flex items-center justify-center transition-colors hover:bg-primary-blue/10"
                                    title="打开PDF文档"
                                  >
                                    <FileText size={14} className="text-primary-blue" />
                                  </button>
                                )}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0">
                                  <Copy size={14} className="text-slate-300" />
                                </div>
                              </div>
                            </div>
                            
                            {/* Difficulty Stars */}
                            <div className="flex items-center gap-0.5 ml-10">
                              {[...Array(5)].map((_, starIdx) => (
                                <Star 
                                  key={starIdx} 
                                  size={10} 
                                  className={cn(
                                    "transition-colors",
                                    starIdx < point.difficulty ? "text-[#FABD05] fill-[#FABD05]" : "text-slate-200"
                                  )} 
                                />
                              ))}
                              <span className="text-[9px] font-bold text-slate-400 ml-1.5 uppercase tracking-tighter">难度挑战</span>
                              {point.day && (
                                <span className="ml-auto text-[8px] font-black bg-slate-200/50 text-slate-500 px-1.5 py-0.5 rounded uppercase tracking-widest">
                                  W{selectedWeek.week}D{point.day}
                                </span>
                              )}
                            </div>
                            
                            {/* Copy Success Badge */}
                            <AnimatePresence>
                              {copiedIndex === idx && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success-green text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg z-20"
                                >
                                  已复制到剪贴板
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))
                      ) : (
                        <div className="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 text-center">
                          <p className="text-xs text-slate-400 font-bold">该区域知识点整理中...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-4 shrink-0 bg-gradient-to-t from-white via-white/95 to-transparent border-t border-slate-50">
                <button
                  onClick={() => setSelectedWeek(null)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl shadow-slate-200 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  继续探索
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
