import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Clock, Sword, BookOpen, Star, Play, Copy, Check, Brain, FileText, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';
import { DayTask } from '../types';
import QuizInterface from '../components/QuizInterface';
import { CURRICULUM_DATA } from '../data/curriculum';
import { API_BASE_URL } from '../config';

const API_BASE = API_BASE_URL;

const getQuestionType = (questionTypeId: number): string => {
  switch (questionTypeId) {
    case 1: return 'fill-blank';
    case 2: return 'multiple-choice';
    case 3: return 'true-false';
    case 4: return 'short-answer';
    case 5: return 'comprehensive';
    default: return 'multiple-choice';
  }
};

interface TodayTasksProps {
  tasks: DayTask[];
  onTaskClick: (taskId: string) => void;
  onPdfClick: (pdfUrl: string) => void;
  week: number;
  day: number;
  level: number;
  streak: number;
  username?: string;
  userId: number | null;
  onLevelUp?: (newLevel: number) => void;
  loginRefreshKey?: number;
}

export default function TodayTasks({ tasks, onTaskClick, onPdfClick, week, day, level, streak, username, userId, onLevelUp, loginRefreshKey = 0 }: TodayTasksProps) {
  const [selectedTask, setSelectedTask] = useState<DayTask | null>(null);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [copied, setCopied] = useState(false);
  const [keyKnowledge, setKeyKnowledge] = useState<any[]>([]);
  const [allWeekTasks, setAllWeekTasks] = useState<any[]>([]);
  const [completedTasks, setCompletedTasks] = useState<DayTask[]>([]);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reviewMistakes, setReviewMistakes] = useState<any[]>([]);
  const [hasReviewMistakes, setHasReviewMistakes] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSubtext = (type: string) => {
    switch (type) {
      case 'practice': return '25分钟 | 5道针对性训练';
      case 'comprehensive': return '15分钟 | 10道综合题';
      case 'review': return '15分钟 | 10道复习题';
      case 'mistake': return '30分钟 | 错题回顾';
      default: return '未知任务类型';
    }
  };

  const getAccentColor = (type: string) => {
    switch (type) {
      case 'practice': return 'border-indigo-400 text-indigo-400';
      case 'comprehensive': return 'border-teal-400 text-teal-400';
      case 'review': return 'border-purple-400 text-purple-400';
      case 'mistake': return 'border-red-400 text-red-400';
      default: return 'border-gray-400 text-gray-400';
    }
  };

  const getIcon = (type: string, size = 24) => {
    switch (type) {
      case 'practice': return <Sword size={size} />;
      case 'comprehensive': return <Star size={size} />;
      case 'review': return <BookOpen size={size} />;
      case 'mistake': return <Check size={size} />;
      default: return <BookOpen size={size} />;
    }
  };

  const getTaskTypeLabel = (type: string) => {
    switch (type) {
      case 'practice': return '核心奥义';
      case 'comprehensive': return '综合训练';
      case 'review': return '复习任务';
      case 'mistake': return '错题回顾';
      default: return type;
    }
  };

  const handleTaskComplete = () => {
    if (selectedTask) {
      if (userId) {
        const taskData = {
          userId,
          taskType: selectedTask.type,
          weekId: week,
          dayNumber: day,
          taskId: selectedTask.id
        };

        // 处理任务完成
        const handleTaskFinish = () => {
          // 对于错题回顾任务，更新 user_mistakes 表中的 review 状态
          if (selectedTask.type === 'review' && selectedTask.id === 'review-mistakes' && selectedTask.questions) {
            selectedTask.questions.forEach(async (question: any) => {
              try {
                // 标记错题的 review 状态为完成
                await fetch(`${API_BASE}/mistakes/${userId}/question/${question.questionId}/review/complete`, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                });
              } catch (err) {
                console.error('Error updating mistake review status:', err);
              }
            });
          }
          
          refreshTasksData();
          fetchReviewMistakes(); // 刷新错题回顾数据
        };

        fetch(`${API_BASE}/user-tasks`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(taskData),
        })
        .then(res => res.json())
        .then(data => {
          if (data && data.id) {
            fetch(`${API_BASE}/user-tasks/${data.id}/complete`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(result => {
              if (result.upgraded && result.newLevel && onLevelUp) {
                onLevelUp(result.newLevel);
              }
              handleTaskFinish();
            })
            .catch(err => {
              console.error('Error marking task as completed:', err);
              handleTaskFinish();
            });
          } else {
            handleTaskFinish();
          }
        })
        .catch(err => {
          console.error('Error creating task:', err);
          handleTaskFinish();
        });
      } else {
        refreshTasksData();
        fetchReviewMistakes();
      }

      onTaskClick(selectedTask.id);
      setIsQuizActive(false);
      setSelectedTask(null);
    }
  };

  const refreshTasksData = async () => {
    setLoading(true);
    try {
      let userLevel = level;
      if (userId) {
        const userRes = await fetch(`${API_BASE}/users/${userId}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          userLevel = userData.currentLevel || level;
        }
      }

      const tasksRes = await fetch(`${API_BASE}/tasks/week/${userLevel}`);
      const tasksData = await tasksRes.json();
      
      // 只加载任务的基本信息，不加载题目数据
      const tasksWithBasicInfo = tasksData.map((task: any) => ({
        id: task.taskId,
        taskId: task.taskId,
        type: task.taskType,
        title: task.title,
        duration: task.duration,
        isCompleted: false,
        content: task.content,
        questions: [], // 空数组，后续点击时再加载
        dayNumber: task.dayNumber,
        weekId: task.weekId,
        knowledgeId: task.knowledgeId
      }));
      
      setAllWeekTasks(tasksWithBasicInfo);

      const knowledgeRes = await fetch(`${API_BASE}/key-knowledge/week/${userLevel}`);
      const knowledgeData = await knowledgeRes.json();
      setKeyKnowledge(knowledgeData);

      if (userId) {
        const completedTasksRes = await fetch(`${API_BASE}/user-tasks/completed/week?userId=${userId}&weekId=${userLevel}`);
        const completedTasksData = await completedTasksRes.json();

        if (completedTasksData && Array.isArray(completedTasksData) && completedTasksData.length > 0) {
          const completedTaskIds = completedTasksData.map((t: any) => t.taskId).filter(Boolean);
          
          if (completedTaskIds.length > 0) {
            const batchTasksRes = await fetch(`${API_BASE}/tasks/batch?ids=${completedTaskIds.join(',')}`);
            const batchTasksData = await batchTasksRes.json();
            const taskDetailsMap: Record<string, any> = {};
            
            if (Array.isArray(batchTasksData)) {
              batchTasksData.forEach((taskDetail: any) => {
                // 不加载 questions 数据，只加载基本信息
                taskDetailsMap[taskDetail.taskId] = {
                  ...taskDetail,
                  questions: [] // 空数组，后续点击时再加载
                };
              });
            }

            const formattedCompletedTasks: DayTask[] = [];
            for (const task of completedTasksData) {
              const taskDetail = taskDetailsMap[task.taskId];
              if (taskDetail) {
                formattedCompletedTasks.push({
                  id: task.taskId,
                  type: task.taskType || 'practice',
                  title: taskDetail.title || '任务',
                  duration: taskDetail.duration || '已完成',
                  isCompleted: true,
                  content: taskDetail.content || '您已经完成了这个任务，可以查看您的答题记录。',
                  questions: [], // 空数组，后续点击时再加载
                  dayNumber: task.dayNumber
                });
              }
            }
            setCompletedTasks(formattedCompletedTasks);
          }
        }
      }
    } catch (err) {
      console.error('Failed to refresh tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserAnswers = async (taskId: string) => {
    if (!userId) return;
    try {
      const res = await fetch(`${API_BASE}/user-answers?userId=${userId}&taskId=${taskId}`);
      if (res.ok) {
        const data = await res.json();
        const latestAnswersMap = new Map();
        data.forEach((answer: any) => {
          const existing = latestAnswersMap.get(answer.questionId);
          if (!existing || new Date(answer.createdAt) > new Date(existing.createdAt)) {
            latestAnswersMap.set(answer.questionId, answer);
          }
        });
        const latestAnswers = Array.from(latestAnswersMap.values())
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setUserAnswers(latestAnswers);
        setShowAnswers(true);
      }
    } catch (err) {
      console.error('Failed to fetch user answers:', err);
    }
  };

  const loadTaskQuestions = async (taskId: string) => {
    try {
      const taskRes = await fetch(`${API_BASE}/tasks/${taskId}`);
      if (taskRes.ok) {
        const taskDetail = await taskRes.json();
        const questions = taskDetail.questions || [];
        const formattedQuestions = questions.map((q: any) => ({
          id: q.questionId,
          questionId: q.questionId,
          type: getQuestionType(q.questionTypeId || 4),
          questionTypeId: q.questionTypeId,
          question: q.questionBody,
          answer: q.answer,
          optionsJson: q.optionsJson,
          options: q.optionsJson,
          explanation: q.explanation
        }));
        setSelectedTask((prev: any) => {
          if (prev) {
            return {
              ...prev,
              questions: formattedQuestions
            };
          }
          return prev;
        });
      }
    } catch (err) {
      console.error('Failed to load task questions:', err);
    }
  };

  const handleTaskClick = async (task: DayTask) => {
    setSelectedTask(task);
    
    // 如果任务没有题目数据，加载题目
    if (!task.questions || task.questions.length === 0) {
      await loadTaskQuestions(task.id);
    }
    
    // 题目加载完成后，启动Quiz
    setIsQuizActive(true);
  };

  const fetchUserAnswersWithQuestions = async (taskId: string) => {
    if (!userId) return;
    try {
      await loadTaskQuestions(taskId);
      await fetchUserAnswers(taskId);
    } catch (err) {
      console.error('Failed to fetch user answers with questions:', err);
    }
  };

  // 获取需要回顾的错题
  const fetchReviewMistakes = async () => {
    if (!userId) return;
    try {
      const response = await fetch(`${API_BASE}/mistakes/${userId}/review`);
      if (response.ok) {
        const data = await response.json();
        // 按时间排序，取最早的5条
        const sortedMistakes = data
          .sort((a: any, b: any) => new Date(a.review1Time).getTime() - new Date(b.review1Time).getTime())
          .slice(0, 5);
        setReviewMistakes(sortedMistakes);
        setHasReviewMistakes(sortedMistakes.length > 0);
      }
    } catch (err) {
      console.error('Failed to fetch review mistakes:', err);
    }
  };

  // 处理错题回顾点击
  const handleReviewMistakesClick = async () => {
    // 先加载错题回顾数据
    await fetchReviewMistakes();
    
    if (reviewMistakes.length === 0) {
      alert('目前没有需要回顾的错题');
      return;
    }
    
    // 创建错题回顾任务
    const reviewTask: DayTask = {
      id: 'review-mistakes',
      type: 'review',
      title: '错题回顾训练',
      duration: `${reviewMistakes.length} 道题`,
      isCompleted: false,
      content: '复习错过的题目，巩固知识点',
      questions: await Promise.all(reviewMistakes.map(async (mistake) => {
        // 获取题目的详细信息
        const response = await fetch(`${API_BASE}/questions/${mistake.questionId}`);
        if (response.ok) {
          const question = await response.json();
          return {
            id: question.questionId,
            questionId: question.questionId,
            type: getQuestionType(question.questionTypeId || 4),
            questionTypeId: question.questionTypeId,
            question: question.questionBody,
            answer: question.answer,
            optionsJson: question.optionsJson,
            options: question.optionsJson,
            explanation: question.explanation
          };
        }
        return null;
      }).filter(Boolean) as any),
      dayNumber: day
    };
    
    setSelectedTask(reviewTask);
    setIsQuizActive(true);
  };

  useEffect(() => {
    if (userId && userId > 0) {
      refreshTasksData();
      fetchReviewMistakes();
    }
  }, [week, day, level, userId, loginRefreshKey]);

  const currentWeekPlan = CURRICULUM_DATA.find(w => w.week === week);

  const groupTasksByDay = () => {
    const completedTaskIds = new Set(completedTasks.map(t => t.id));
    const groups: Record<number, any[]> = {};
    
    for (const task of allWeekTasks) {
      if (completedTaskIds.has(task.id)) continue;
      const dayNum = task.dayNumber || 1;
      if (!groups[dayNum]) {
        groups[dayNum] = [];
      }
      groups[dayNum].push(task);
    }
    
    return groups;
  };

  // 获取最上面的任务（排序在最前面的任务）
  const getTopTask = () => {
    const tasksByDay = groupTasksByDay();
    const sortedDays = Object.keys(tasksByDay).map(Number).sort((a, b) => a - b);
    
    if (sortedDays.length > 0) {
      const firstDay = sortedDays[0];
      const tasksInFirstDay = tasksByDay[firstDay];
      if (tasksInFirstDay && tasksInFirstDay.length > 0) {
        return tasksInFirstDay[0];
      }
    }
    
    // 如果没有未完成的任务，返回第一个已完成的任务
    if (completedTasks.length > 0) {
      return completedTasks[0];
    }
    
    return null;
  };

  const topTask = getTopTask();

  const tasksByDay = groupTasksByDay();

  const sortedDays = Object.keys(tasksByDay).map(Number).sort((a, b) => a - b);

  const getKnowledgeFilename = (task: any) => {
    const knowledgeId = task.knowledgeId;
    if (!knowledgeId) return null;
    const knowledge = keyKnowledge.find(k => k.id === knowledgeId);
    return knowledge?.filename;
  };

  return (
    <div className="pb-32 px-6 pt-8 max-w-lg mx-auto space-y-8">
      <header className="flex flex-col gap-6 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-2 border-white">
                <Star fill="white" size={20} />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary-blue text-white text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-white shadow-sm tracking-tighter">
                LV.{level}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-main">{username || '上海学霸同学'}</h1>
              <p className="text-text-vmuted text-[10px] font-black uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md inline-block">
                累计登录 {streak} 天
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 bg-white p-5 rounded-[24px] border-2 border-[#E1E8EE] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/5 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="flex justify-between items-end relative z-10">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Calendar size={12} className="text-primary-blue" />
                当前探索进度
              </p>
              <h3 className="text-lg font-black text-text-main">
                W{week} <span className="text-text-vmuted font-bold text-xs ml-2">{topTask?.title || currentWeekPlan?.title || '正在加载...'}</span>
              </h3>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-primary-blue italic">
                {Math.round((completedTasks.length / ((completedTasks.length + allWeekTasks.filter(t => !completedTasks.find(ct => ct.id === t.id)).length) || 1)) * 100)}
                <span className="text-xs">%</span>
              </span>
            </div>
          </div>
          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5">
            <div 
              className="h-full bg-primary-blue rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(74,144,226,0.3)]" 
              style={{ width: `${(completedTasks.length / ((completedTasks.length + allWeekTasks.filter(t => !completedTasks.find(ct => ct.id === t.id)).length) || 1)) * 100}%` }} 
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary-blue border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <AnimatePresence>
            {sortedDays.map((dayNum, dayIndex) => (
              <div key={`day-${dayNum}`} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary-blue" />
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Day {dayNum}</h3>
                </div>
                {tasksByDay[dayNum].map((task, index) => {
                  const filename = getKnowledgeFilename(task);
                  return (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (dayIndex * 3 + index) * 0.1 }}
                      className={cn(
                        "w-full text-left p-6 rounded-[24px] border-4 bg-white shadow-vibrant transition-all cursor-pointer group relative border-transparent hover:border-primary-blue/30 active:scale-[0.98]"
                      )}
                      onClick={() => handleTaskClick(task)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-4">
                            <div className={cn("inline-flex p-2 rounded-xl bg-slate-50", getAccentColor(task.type))}>
                              {getIcon(task.type, 20)}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-lg uppercase tracking-tight">
                              {getTaskTypeLabel(task.type)}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-xl text-text-main leading-tight mb-1 group-hover:text-primary-blue transition-colors">
                            {task.title}
                          </h3>
                          <p className="text-sm text-text-vmuted font-medium">{getSubtext(task.type)}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          {filename && task.type === 'practice' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onPdfClick(`${API_BASE}/file/${filename}`);
                              }}
                              className="shrink-0 w-8 h-8 rounded-full border-2 border-primary-blue/30 flex items-center justify-center transition-colors hover:bg-primary-blue/10"
                              title="打开PDF文档"
                            >
                              <FileText size={20} className="text-primary-blue" />
                            </button>
                          )}

                          <div className={cn(
                            "shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors",
                            "border-[#E1E8EE] bg-white text-transparent group-hover:border-primary-blue/30"
                          )}>
                            <CheckCircle2 size={20} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}

            {/* 错题回顾模块 - 放在未完成任务的最后 */}
            {hasReviewMistakes && (
              <motion.div
                key="review-mistakes"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sortedDays.length * 0.3 + 0.1 }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Brain size={16} className="text-primary-blue" />
                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">错题回顾</h3>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sortedDays.length * 0.3 + 0.2 }}
                    className={cn(
                      "w-full text-left p-6 rounded-[24px] border-4 bg-white shadow-vibrant transition-all cursor-pointer group relative border-transparent hover:border-primary-blue/30 active:scale-[0.98]"
                    )}
                    onClick={handleReviewMistakesClick}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <div className={cn("inline-flex p-2 rounded-xl bg-slate-50", getAccentColor('review'))}>
                            {getIcon('review', 20)}
                          </div>
                          <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-lg uppercase tracking-tight">
                            错题回顾
                          </span>
                          <span className="text-xs font-bold bg-primary-blue/10 text-primary-blue px-2 py-0.5 rounded-full">
                            {reviewMistakes.length} 道题
                          </span>
                        </div>
                        <h3 className="font-extrabold text-xl text-text-main leading-tight mb-1 group-hover:text-primary-blue transition-colors">
                          错题回顾训练
                        </h3>
                        <p className="text-sm text-text-vmuted font-medium">复习错过的题目，巩固知识点</p>
                      </div>

                      <div className={cn(
                        "shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors",
                        "border-[#E1E8EE] bg-white text-transparent group-hover:border-primary-blue/30"
                      )}>
                        <CheckCircle2 size={20} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {completedTasks.length > 0 && (
              <motion.div
                key="completed-tasks"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sortedDays.length * 0.3 + 0.3 }}
              >
                <h3 className="text-lg font-bold text-text-main mb-4 mt-8">已完成的任务</h3>
                {completedTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "w-full text-left p-6 rounded-[24px] border-4 bg-success-green/5 shadow-vibrant transition-all cursor-pointer group relative border-success-green/30 hover:border-success-green/50 active:scale-[0.98] mb-3"
                    )}
                    onClick={() => handleTaskClick(task)}
                  >
                    <div className="flex justify-between items-start">
                      <div className={cn("absolute top-4 right-4 flex items-center gap-1 bg-success-green text-white text-[10px] font-black px-3 py-1 rounded-full shadow-sm transform -rotate-3 animate-fade-in")}>
                        <CheckCircle2 size={12} />
                        已完成
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <div className={cn("inline-flex p-2 rounded-xl bg-success-green/10 text-success-green")}>
                            {getIcon(task.type, 20)}
                          </div>
                          <span className="text-[10px] font-black text-success-green bg-success-green/10 px-2 py-1 rounded-lg uppercase tracking-tight">
                            {getTaskTypeLabel(task.type)}
                          </span>
                          {task.dayNumber && (
                            <span className="text-[10px] font-black text-success-green/70 bg-success-green/5 px-2 py-1 rounded-lg">
                              Day {task.dayNumber}
                            </span>
                          )}
                        </div>
                        <h3 className="font-extrabold text-xl text-text-main leading-tight mb-1 group-hover:text-success-green transition-colors">
                          {task.title}
                        </h3>
                        <p className="text-sm text-text-vmuted font-medium">{task.duration}</p>
                      </div>

                      <div className={cn(
                        "shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors bg-white border-success-green/50 text-success-green group-hover:bg-success-green/10"
                      )}>
                        <CheckCircle2 size={20} />
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-success-green/5 to-transparent rounded-[24px] pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      <AnimatePresence mode="wait">
        {selectedTask && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { if (!isQuizActive) setSelectedTask(null); }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {!isQuizActive ? (
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl relative z-10 border-4 border-[#E1E8EE] max-h-[90vh] overflow-y-auto"
              >
                <div className={cn("h-3 w-full shrink-0", getAccentColor(selectedTask.type).split(' ')[0])} />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn("p-3 rounded-2xl bg-slate-50", getAccentColor(selectedTask.type))}>
                      {getIcon(selectedTask.type, 28)}
                    </div>
                    <button
                      onClick={() => setSelectedTask(null)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      {selectedTask.dayNumber && (
                        <span className="text-[10px] font-black uppercase tracking-widest text-white py-0.5 px-2 bg-primary-blue rounded-md">
                          Week {week} Day {selectedTask.dayNumber}
                        </span>
                      )}
                      <span className="text-[10px] font-black uppercase tracking-widest text-text-vmuted py-0.5 px-2 bg-slate-100 rounded-md">
                        {getTaskTypeLabel(selectedTask.type)}
                      </span>
                      {selectedTask.duration && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-accent-orange">
                          <Clock size={10} />
                          {selectedTask.duration}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-black text-text-main leading-tight">{selectedTask.title}</h2>
                  </div>

                  <div
                    onClick={() => handleCopy(selectedTask.content)}
                    className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 mb-8 cursor-pointer hover:bg-slate-100 hover:border-primary-blue/30 transition-all group relative"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">委托详情</h4>
                      <div className={cn(
                        "transition-all flex items-center gap-1 text-[10px] font-bold uppercase tracking-tight",
                        copied ? "text-success-green" : "text-slate-300 opacity-0 group-hover:opacity-100"
                      )}>
                        {copied ? (
                          <>
                            <Check size={10} /> 已复制
                          </>
                        ) : (
                          <>
                            <Copy size={10} /> 点击复制
                          </>
                        )}
                      </div>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-wrap">{selectedTask.content}</p>
                  </div>

                  {selectedTask.isCompleted ? (
                    <div className="space-y-4">
                      <div className="bg-success-green/10 text-success-green p-4 rounded-xl flex items-center justify-center gap-2 font-bold">
                        <CheckCircle2 size={20} />
                        委托已达成
                      </div>
                      {!showAnswers ? (
                        <button
                          onClick={() => { fetchUserAnswersWithQuestions(selectedTask.id); }}
                          className={cn(
                            "w-full py-4 rounded-2xl font-black text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 bg-primary-blue text-white shadow-blue-200 hover:shadow-blue-300"
                          )}
                        >
                          <FileText size={24} fill="white" />
                          查看答题记录
                        </button>
                      ) : (
                        <div className="space-y-4 max-h-[75vh] flex flex-col">
                          <div className="bg-white/95 backdrop-blur-sm z-30 pb-3 border-b-2 border-slate-200 shrink-0">
                            <div className="flex justify-between items-center mb-3">
                              <h4 className="text-lg font-bold text-text-main">答题记录（共{userAnswers.length}题）</h4>
                              <button
                                onClick={() => setShowAnswers(false)}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg font-bold text-xs shadow-sm active:scale-95 transition-all flex items-center justify-center gap-1 bg-slate-100 text-text-vmuted hover:bg-slate-200"
                                )}
                              >
                                <X size={14} />
                                关闭
                              </button>
                            </div>
                          </div>

                          {userAnswers.length > 0 ? (
                            <div className="space-y-4 overflow-y-auto flex-1 min-h-0 pb-4">
                              {userAnswers.map((answer, index) => {
                                const question = selectedTask.questions?.find((q: any) => q.questionId === answer.questionId);
                                const questionIndex = selectedTask.questions?.findIndex((q: any) => q.questionId === answer.questionId);

                                const getQuestionTypeText = (type: any) => {
                                  switch (type) {
                                    case 1: return '填充题';
                                    case 2: return '单选题';
                                    case 3: return '是非题';
                                    case 4: return '应用题';
                                    case 5: return '综合题';
                                    default: return '练习题';
                                  }
                                };

                                const formatOptions = (optionsJson: any) => {
                                  if (!optionsJson) return [];
                                  if (Array.isArray(optionsJson)) return optionsJson;
                                  try {
                                    return JSON.parse(optionsJson);
                                  } catch {
                                    return [];
                                  }
                                };

                                return (
                                  <div key={index} className="p-5 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
                                    <div className="flex justify-between items-center mb-4">
                                      <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-blue text-white font-bold text-sm">
                                          {questionIndex !== -1 ? questionIndex + 1 : index + 1}
                                        </span>
                                        <span className="text-sm font-medium text-text-vmuted bg-slate-100 px-3 py-1 rounded-full">
                                          {question ? getQuestionTypeText(question.questionTypeId) : '练习题'}
                                        </span>
                                      </div>
                                      <span className={cn(
                                        "text-sm font-bold px-4 py-1.5 rounded-full",
                                        answer.isCorrect ? "bg-success-green text-white" : "bg-red-100 text-red-600"
                                      )}>
                                        {answer.isCorrect ? "✓ 正确" : "✗ 错误"}
                                      </span>
                                    </div>

                                    {question ? (
                                      <>
                                        <div className="mb-4 p-4 bg-slate-50 rounded-xl">
                                          <p className="text-base font-medium text-text-main leading-relaxed">{question.question}</p>
                                        </div>

                                        {question.options && question.options.length > 0 && (
                                          <div className="space-y-2 mb-4">
                                            {formatOptions(question.options).map((option: string, optIndex: number) => {
                                              const optionLetter = option.split('.')[0].trim();
                                              const isCorrectOption = optionLetter === question.answer;
                                              const isUserSelected = optionLetter === answer.userAnswer;

                                              return (
                                                <div
                                                  key={optIndex}
                                                  className={cn(
                                                    "p-3 rounded-xl border-2 transition-all text-sm font-medium",
                                                    isCorrectOption && isUserSelected && "bg-success-green/10 border-success-green text-success-green",
                                                    isCorrectOption && !isUserSelected && "bg-green-50 border-success-green/50 text-success-green/70",
                                                    !isCorrectOption && isUserSelected && "bg-red-50 border-red-400 text-red-600",
                                                    !isCorrectOption && !isUserSelected && "bg-slate-50 border-slate-200 text-text-vmuted"
                                                  )}
                                                >
                                                  <div className="flex items-center justify-between">
                                                    <span>{option}</span>
                                                    <div className="flex items-center gap-2">
                                                      {isCorrectOption && (
                                                        <span className="text-xs font-bold text-success-green bg-white px-2 py-0.5 rounded-full">正确答案</span>
                                                      )}
                                                      {isUserSelected && (
                                                        <span className="text-xs font-bold text-primary-blue bg-white px-2 py-0.5 rounded-full">您的选择</span>
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        )}

                                        {(question.questionTypeId === 1 || question.type === 'fill-blank') && (
                                          <div className="mb-4 p-4 bg-slate-50 rounded-xl border-2 border-slate-200">
                                            <div className="flex items-center justify-between mb-2">
                                              <span className="text-sm font-bold text-text-vmuted">您的答案</span>
                                              {answer.userAnswer === question.answer && (
                                                <span className="text-sm font-bold text-success-green">✓ 正确</span>
                                              )}
                                            </div>
                                            <p className={cn(
                                              "text-base font-bold",
                                              answer.userAnswer === question.answer ? "text-success-green" : "text-red-600"
                                            )}>
                                              {answer.userAnswer || '(未作答)'}
                                            </p>
                                            {answer.userAnswer !== question.answer && (
                                              <div className="mt-3 pt-3 border-t border-slate-200">
                                                <span className="text-sm font-bold text-success-green">正确答案：{question.answer}</span>
                                              </div>
                                            )}
                                          </div>
                                        )}

                                        {question.explanation && (
                                          <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                                            <div className="flex items-start gap-2">
                                              <Brain size={18} className="text-primary-blue mt-0.5 shrink-0" />
                                              <div>
                                                <span className="text-sm font-bold text-primary-blue block mb-1">解析</span>
                                                <p className="text-sm text-primary-blue/80 leading-relaxed">{question.explanation}</p>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <div className="p-4 bg-slate-100 rounded-xl text-center text-text-vmuted">
                                        <p className="text-sm">题目信息加载中...</p>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="p-8 bg-slate-50 rounded-xl border-2 border-slate-200 text-center">
                              <FileText size={48} className="mx-auto text-slate-300 mb-3" />
                              <p className="text-text-vmuted font-medium">暂无答题记录</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleTaskClick(selectedTask)}
                      className={cn(
                        "w-full py-4 rounded-2xl font-black text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 bg-primary-blue text-white shadow-blue-200 hover:shadow-blue-300"
                      )}
                    >
                      <Play size={24} fill="white" />
                      开始挑战
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              <QuizInterface
                questions={selectedTask.questions || []}
                title={selectedTask.title}
                taskId={selectedTask.id}
                userId={userId || 0}
                onComplete={handleTaskComplete}
                onCancel={() => { setIsQuizActive(false); }}
                isReviewTask={selectedTask.type === 'review' || selectedTask.type === 'mistake'}
              />
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
