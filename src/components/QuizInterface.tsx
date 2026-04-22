import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Star, Trophy, Copy, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { Question } from '../types';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001';

interface QuizInterfaceProps {
  questions: Question[];
  onComplete: () => void;
  onCancel: () => void;
  title: string;
  taskId?: string;
}

export default function QuizInterface({ questions, onComplete, onCancel, title, taskId }: QuizInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  // 获取用户ID（这里假设从localStorage或全局状态获取）
  const getUserId = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      return user.id;
    }
    return 1; // 默认用户ID
  };

  const currentQuestion = questions[currentIndex];

  // 辅助函数：获取标准化的问题类型（支持中英文两种格式）
  const getQuestionType = (type: string) => {
    switch (type) {
      case 'fill-blank':
      case '填充题':
        return 'fill-blank';
      case 'short-answer':
      case '解答题':
        return 'short-answer';
      case 'true-false':
      case '判断题':
        return 'true-false';
      case 'multiple-choice':
      case '单选题':
        return 'multiple-choice';
      case 'comprehensive':
      case '综合题':
        return 'comprehensive';
      default:
        return type;
    }
  };

  const normalizedType = getQuestionType(currentQuestion.type);

  const handleCopyQuestion = async () => {
    const fullText = `${currentQuestion.question}\n\n提示词：让小学生能够通俗易懂的理解掌握本条内容。`;
    try {
      await navigator.clipboard.writeText(fullText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy question: ', err);
    }
  };

  // 记录用户答题
  const recordUserAnswer = async (questionId: string, userAnswer: string, isCorrect: boolean) => {
    const userId = getUserId();
    try {
      const response = await fetch(`${API_BASE}/user-answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          questionId,
          userAnswer,
          isCorrect,
          taskId
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to record answer');
      }
      console.log('Answer recorded successfully');
    } catch (error) {
      console.error('Error recording answer:', error);
    }
  };

  // 添加错题到错题本 - 现在由后端 recordAnswer 统一处理

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setFeedback(null);
      setCurrentIndex(i => i + 1);
      setUserInput('');
      setShowNextButton(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    // 处理数字答案的比较
    const userAnswer = userInput.trim();
    const correctAnswer = currentQuestion.answer;
    let isCorrect = false;
    
    // 尝试数字比较
    const userNum = Number(userAnswer);
    const correctNum = Number(correctAnswer);
    if (!isNaN(userNum) && !isNaN(correctNum)) {
      isCorrect = userNum === correctNum;
    } else {
      // 字符串比较
      isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    }
    
    // 记录用户答题
    recordUserAnswer(currentQuestion.id, userInput.trim(), isCorrect);
    
    if (isCorrect) {
      setFeedback('correct');
      setScore(s => s + 1);

      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setFeedback(null);
          setCurrentIndex(i => i + 1);
          setUserInput('');
        } else {
          setIsFinished(true);
        }
      }, 1200);
    } else {
      setFeedback('wrong');
      // 错误时显示了解按钮
      setShowNextButton(true);

      // 5秒后自动进入下一题
      setTimeout(() => {
        if (showNextButton) {
          handleNext();
        }
      }, 5000);
    }
  };



  const currentProgress = ((currentIndex + (feedback ? 1 : 0)) / questions.length) * 100;

  return (
    <AnimatePresence mode="wait">
      {isFinished ? (
        <motion.div 
          key="finish"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white w-full max-w-sm rounded-[32px] p-8 text-center shadow-2xl border-4 border-success-green/30 relative z-10"
        >
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white">
            <Trophy size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-black text-text-main mb-2">委托达成！</h2>
          <p className="text-text-vmuted font-medium mb-8">
            恭喜你完成了这项委托，获得了 {score}/{questions.length} 分！
          </p>
          <button
            onClick={onComplete}
            className="w-full bg-primary-blue text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-blue-200 active:scale-95 transition-transform"
          >
            领取奖励并返回
          </button>
        </motion.div>
      ) : (
        <motion.div 
          key="quiz-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl relative border-4 border-[#E1E8EE] z-10 max-h-[90vh] flex flex-col"
        >
          <div className="h-2 bg-slate-100 w-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary-blue"
              initial={{ width: 0 }}
              animate={{ width: `${currentProgress}%` }}
            />
          </div>

          <div className="p-8 flex-1 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black bg-slate-100 px-2 py-0.5 rounded uppercase tracking-widest text-text-vmuted">
                  委托挑战
                </span>
                <span className="text-xs font-bold text-primary-blue">
                  {currentIndex + 1} / {questions.length}
                </span>
              </div>
              <button onClick={onCancel} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X size={18} className="text-slate-400" />
              </button>
            </div>

            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-bold text-text-main leading-relaxed flex-1">
                {currentQuestion.question}
              </h3>
              <button 
                onClick={handleCopyQuestion}
                className={cn(
                  "ml-4 p-2 rounded-xl border transition-all relative shrink-0",
                  isCopied ? "bg-success-green border-success-green text-white" : "bg-slate-50 border-slate-100 text-slate-400 hover:text-primary-blue hover:border-primary-blue/30"
                )}
                title="复制题目并附加智能讲解提示词"
              >
                {isCopied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                <AnimatePresence>
                  {isCopied && (
                    <motion.div 
                      key="copy-success"
                      initial={{ opacity: 0, y: 10, x: '-50%' }}
                      animate={{ opacity: 1, y: 0, x: '-50%' }}
                      exit={{ opacity: 0, y: -10, x: '-50%' }}
                      className="absolute -top-10 left-1/2 whitespace-nowrap bg-success-green text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-xl"
                    >
                      已复制 AI 提示词
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            <div className="space-y-4 mb-8">
              {normalizedType === 'fill-blank' ? (
                <div className="relative">
                  <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    autoFocus
                    placeholder="在此输入你的答案..."
                    className={cn(
                      "w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 font-bold text-lg outline-none transition-all",
                      feedback === 'correct' && "border-success-green bg-green-50 text-success-green",
                      feedback === 'wrong' && "border-red-400 bg-red-50 text-red-500",
                      !feedback && "focus:border-primary-blue"
                    )}
                  />
                  <AnimatePresence>
                    {feedback && (
                      <motion.div 
                        key="feedback-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        {feedback === 'correct' ? (
                          <CheckCircle2 size={24} className="text-success-green" />
                        ) : (
                          <AlertCircle size={24} className="text-red-500" />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : normalizedType === 'multiple-choice' || normalizedType === 'true-false' ? (
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setUserInput(option);
                        // Single choice logic
                        // 对于选择题，只比较选项的字母部分
                        const optionLetter = option.split('.')[0].trim();
                        const isCorrect = optionLetter === currentQuestion.answer;
                        setFeedback(isCorrect ? 'correct' : 'wrong');
                        if (isCorrect) setScore(s => s + 1);
                        
                        // 记录用户答题
                        recordUserAnswer(currentQuestion.id, optionLetter, isCorrect);
                        
                        if (isCorrect) {
                          setTimeout(() => {
                            if (currentIndex < questions.length - 1) {
                              setFeedback(null);
                              setCurrentIndex(i => i + 1);
                              setUserInput('');
                            } else {
                              setIsFinished(true);
                            }
                          }, 1200);
                        } else {
                          // 错误时显示了解按钮
                          setShowNextButton(true);

                          // 5秒后自动进入下一题
                          setTimeout(() => {
                            if (showNextButton) {
                              if (currentIndex < questions.length - 1) {
                                setFeedback(null);
                                setCurrentIndex(i => i + 1);
                                setUserInput('');
                                setShowNextButton(false);
                              } else {
                                setIsFinished(true);
                              }
                            }
                          }, 5000);
                        }
                      }}
                      disabled={!!feedback}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center group",
                        userInput === option && feedback === 'correct' && "border-success-green bg-green-50 text-success-green",
                        userInput === option && feedback === 'wrong' && "border-red-400 bg-red-50 text-red-500",
                        userInput !== option && !feedback && "border-slate-200 hover:border-primary-blue/30 bg-white",
                        feedback && userInput !== option && "opacity-50 grayscale border-slate-200"
                      )}
                    >
                      {option}
                      {!feedback && <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                      {userInput === option && feedback === 'correct' && <CheckCircle2 size={18} />}
                      {userInput === option && feedback === 'wrong' && <AlertCircle size={18} />}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    autoFocus
                    placeholder="在此输入你的答案..."
                    className={cn(
                      "w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 font-bold text-lg outline-none transition-all",
                      feedback === 'correct' && "border-success-green bg-green-50 text-success-green",
                      feedback === 'wrong' && "border-red-400 bg-red-50 text-red-500",
                      !feedback && "focus:border-primary-blue"
                    )}
                  />
                  <AnimatePresence>
                    {feedback && (
                      <motion.div 
                        key="feedback-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        {feedback === 'correct' ? (
                          <CheckCircle2 size={24} className="text-success-green" />
                        ) : (
                          <AlertCircle size={24} className="text-red-500" />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {(normalizedType === 'fill-blank' || normalizedType === 'short-answer' || normalizedType === 'comprehensive') && (
              <button
                onClick={handleSubmit}
                disabled={!userInput.trim() || !!feedback}
                className={cn(
                  "w-full py-4 rounded-2xl font-black text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2",
                  (!userInput.trim() || !!feedback)
                    ? "bg-slate-100 text-slate-400 shadow-none grayscale" 
                    : "bg-primary-blue text-white shadow-blue-200"
                )}
              >
                确认答案
              </button>
            )}

            <AnimatePresence mode="wait">
              {feedback === 'wrong' && currentQuestion.explanation && (
                <motion.div 
                  key="explanation"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-6 space-y-4"
                >
                  <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400 overflow-hidden">
                    <p className="text-xs text-red-800 font-medium">
                      <span className="font-black uppercase tracking-widest mr-2">详解：</span>
                      {currentQuestion.explanation}
                    </p>
                  </div>
                  {showNextButton && (
                    <motion.button
                      key="next-button"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onClick={handleNext}
                      className="w-full py-3 rounded-2xl font-bold text-lg bg-primary-blue text-white shadow-lg shadow-blue-200 active:scale-95 transition-all"
                    >
                      了解了，进入下一题
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
