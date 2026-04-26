import React, { useState, useEffect } from 'react';
import { Mic, Search, EyeOff, Flame, AlertTriangle, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { MistakeItem } from '../types';
import { API_BASE_URL } from '../config';
import { FeynmanStudio } from '../components/FeynmanStudio';

interface QuestionDetail {
  questionId: string;
  questionBody: string;
  options?: string[];
  answer: string;
  explanation: string;
  questionTypeId: number;
  difficultyId: number;
  audioPath?: string;
}

interface MistakeRangeProps {
  mistakes: MistakeItem[];
  userId: number | null;
  onRefresh: (userId: number, showHidden: boolean) => void;
}

export default function MistakeRange({ mistakes, userId, onRefresh }: MistakeRangeProps) {
  const categories = [
    { id: 'all', label: '全部' },
    { id: '填充题', label: '填充题' },
    { id: '单选题', label: '单选题' },
    { id: '解答题', label: '解答题' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');
  const [hiddenIds, setHiddenIds] = React.useState<Set<string>>(new Set());
  const [questionDetails, setQuestionDetails] = useState<Record<string, QuestionDetail>>({});
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [showAnswers, setShowAnswers] = useState<Set<string>>(new Set());
  const [showHidden, setShowHidden] = useState(false);

  // 费曼输出室相关状态
  const [showFeynmanStudio, setShowFeynmanStudio] = useState(false);
  const [currentMistakeQuestion, setCurrentMistakeQuestion] = useState<any>(null);

  // 切换显示隐藏状态
  const handleShowHiddenToggle = () => {
    const newShowHidden = !showHidden;
    setShowHidden(newShowHidden);
    if (userId) {
      onRefresh(userId, newShowHidden);
    }
  };
  const [loading, setLoading] = useState(false);

  // 获取错题详细信息（包含费曼录音路径）
  const fetchQuestionDetail = async (questionId: string) => {
    try {
      // 同时获取题目详情和用户错题记录
      const [questionResponse, mistakeResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/questions/${questionId}`),
        fetch(`${API_BASE_URL}/mistakes/${userId}/question/${questionId}`)
      ]);
      
      let questionData: any = {
        questionId,
        questionBody: `题目 ${questionId}`,
        options: [],
        answer: '',
        explanation: '暂无解析',
        questionTypeId: 4,
        difficultyId: 1
      };
      
      // 获取题目详情
      if (questionResponse.ok) {
        const questionJson = await questionResponse.json();
        questionData = {
          ...questionData,
          ...questionJson
        };
      }
      
      // 获取错题记录（包含audioPath）
      if (mistakeResponse.ok) {
        const mistakeData = await mistakeResponse.json();
        if (mistakeData.audioPath) {
          questionData.audioPath = mistakeData.audioPath;
        }
      }
      
      setQuestionDetails(prev => ({
        ...prev,
        [questionId]: questionData
      }));
      
    } catch (error) {
      console.error('Failed to fetch question detail:', error);
      // 网络错误，使用默认数据
      setQuestionDetails(prev => ({
        ...prev,
        [questionId]: {
          questionId,
          questionBody: `题目 ${questionId}`,
          options: [],
          answer: '',
          explanation: '暂无解析',
          questionTypeId: 4, // 默认为单选题
          difficultyId: 1
        }
      }));
    }
  };

  // 切换错题的隐藏状态
  const toggleHidden = async (questionId: string) => {
    if (!userId) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/mistakes/${userId}/question/${questionId}/hidden`, {
        method: 'PUT',
      });
      
      if (response.ok) {
        setHiddenIds(prev => {
          const newSet = new Set(prev);
          if (newSet.has(questionId)) {
            newSet.delete(questionId);
          } else {
            newSet.add(questionId);
          }
          return newSet;
        });
      }
    } catch (error) {
      console.error('Failed to toggle hidden status:', error);
    } finally {
      setLoading(false);
    }
  };

  // 切换展开/收起状态
  const toggleExpanded = (questionId: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
        // 展开时获取题目详情
        if (!questionDetails[questionId]) {
          fetchQuestionDetail(questionId);
        }
      }
      return newSet;
    });
  };

  // 切换显示解答状态
  const toggleShowAnswer = (questionId: string) => {
    setShowAnswers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  // 组件加载时，默认不展开所有错题
  React.useEffect(() => {
    // 不设置expandedIds，保持默认的空集合
    // 不为每个错题获取详情，只有在用户展开时才获取
  }, [mistakes, questionDetails]);

  // 打开费曼输出室
  const openFeynmanStudio = async (mistake: MistakeItem) => {
    // 先获取最新的题目详情和录音路径
    await fetchQuestionDetail(mistake.id);
    
    const questionData = {
      questionId: mistake.id,
      questionBody: mistake.questionBody || mistake.title,
      audioPath: questionDetails[mistake.id]?.audioPath
    };
    setCurrentMistakeQuestion(questionData);
    setShowFeynmanStudio(true);
  };

  const filteredMistakes = mistakes.filter(m => {
    const isHidden = m.hidden || false;
    const matchesCategory = activeCategory === 'all' || m.category === activeCategory;
    const shouldShow = showHidden ? isHidden : !isHidden;
    return shouldShow && matchesCategory;
  });

  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto flex flex-col h-full">
      <header className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-text-main">深境螺旋</h1>
          <div className="flex gap-2">
            <button
              onClick={handleShowHiddenToggle}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all border-2",
                showHidden
                  ? "bg-primary-blue text-white border-primary-blue shadow-vibrant"
                  : "bg-white text-text-vmuted border-[#E1E8EE]"
              )}
            >
              {showHidden ? '显示全部' : '隐蔽列表'}
            </button>
            <div className="bg-[#FF4757]/10 text-[#FF4757] p-2 rounded-xl">
              <Flame size={20} />
            </div>
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
        {filteredMistakes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-text-vmuted">
            <ShieldCheck size={48} className="mb-4 opacity-20" />
            <p className="text-sm">靶场空空如也，保持这个势头！</p>
          </div>
        ) : (
          filteredMistakes.map((mistake, index) => (
            <motion.div
              key={mistake.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border-4 border-transparent hover:border-primary-blue rounded-[24px] p-5 shadow-vibrant transition-all group overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase",
                    mistake.category === '解答题' ? "bg-indigo-100 text-indigo-600" :
                    mistake.category === '单选题' ? "bg-blue-100 text-blue-600" :
                    "bg-orange-100 text-orange-600"
                  )}>
                    {mistake.category}
                  </span>
                  <p className="text-text-vmuted text-[10px] font-semibold">{mistake.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* 计算回顾进度 */}
                  <div className="flex items-center gap-1 text-primary-blue font-bold text-xs">
                    <span>{(() => {
                      let completed = 0;
                      if (mistake.review1Completed) completed++;
                      if (mistake.review2Completed) completed++;
                      if (mistake.review3Completed) completed++;
                      if (mistake.review4Completed) completed++;
                      return `${completed}/4`;
                    })()}</span>
                  </div>
                  {mistake.count > 1 && (
                    <div className="flex items-center gap-1 text-[#FF4757] font-bold text-xs uppercase">
                      <AlertTriangle size={12} />
                      已错 {mistake.count} 次
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h4 className="text-text-main font-bold text-lg leading-snug flex-1">
                  {mistake.questionBody || questionDetails[mistake.id]?.questionBody || mistake.title}
                </h4>
                <button
                  onClick={() => toggleExpanded(mistake.id)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  {expandedIds.has(mistake.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              <AnimatePresence>
                {expandedIds.has(mistake.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {/* 显示选项 */}
                    {questionDetails[mistake.id]?.options && (
                      <div className="mb-4 space-y-2">
                        {questionDetails[mistake.id].options.map((option, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <p className="text-text-main">{option}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 看解答和费曼输出按钮 */}
                    <div className="flex gap-3 mb-4">
                      <button
                        onClick={() => toggleShowAnswer(mistake.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-primary-blue text-white py-3 rounded-xl font-bold text-sm shadow-vibrant active:scale-95 transition-transform"
                      >
                        {showAnswers.has(mistake.id) ? '隐藏解答' : '看解答'}
                      </button>
                      <button
                        onClick={() => openFeynmanStudio(mistake)}
                        className="flex-1 flex items-center justify-center gap-2 bg-accent-orange text-white py-3 rounded-xl font-bold text-sm shadow-vibrant active:scale-95 transition-transform"
                      >
                        <Mic size={18} />
                        费曼输出室
                      </button>
                    </div>

                    {/* 已有录音播放控制 */}
                    {questionDetails[mistake.id]?.audioPath && (
                      <div className="mb-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <div className="flex items-center justify-between">
                          <span className="text-orange-800 font-medium text-sm">费曼录音</span>
                          <audio
                            src={`${API_BASE_URL}${questionDetails[mistake.id].audioPath}`}
                            controls
                            className="h-10"
                          />
                        </div>
                      </div>
                    )}

                    {/* 解答内容 */}
                    <AnimatePresence>
                      {showAnswers.has(mistake.id) && questionDetails[mistake.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-4"
                        >
                          <div className="mb-2">
                            <p className="text-xs font-bold text-blue-800 uppercase mb-1">正确答案</p>
                            <p className="text-blue-900 font-bold">{questionDetails[mistake.id].answer}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-blue-800 uppercase mb-1">解析</p>
                            <p className="text-blue-800 text-sm leading-relaxed">{questionDetails[mistake.id].explanation}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => toggleHidden(mistake.id)}
                      className="w-full py-2 text-text-vmuted hover:text-text-main transition-colors text-sm font-medium"
                      disabled={loading}
                    >
                      {loading ? '处理中...' : (showHidden ? '显示此题' : '隐藏此题')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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
            按下麦克风，试着像老师一样讲出这道题。讲顺了，脑袋里的知识点就真正"焊死"了。
          </p>
        </div>
      </div>

      {/* 费曼输出室 */}
      {showFeynmanStudio && currentMistakeQuestion && userId && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <FeynmanStudio
            question={currentMistakeQuestion}
            userId={userId}
            existingAudioPath={currentMistakeQuestion.audioPath}
            onComplete={() => {
              setShowFeynmanStudio(false);
              setCurrentMistakeQuestion(null);
              // 刷新题目详情以获取最新的audioPath
              if (currentMistakeQuestion.questionId) {
                fetchQuestionDetail(currentMistakeQuestion.questionId);
              }
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
