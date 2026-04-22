import React, { useState, useEffect } from 'react';
import { Mic, Search, EyeOff, Flame, AlertTriangle, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { MistakeItem } from '../types';

interface QuestionDetail {
  questionId: string;
  questionBody: string;
  options?: string[];
  answer: string;
  explanation: string;
  questionTypeId: number;
  difficultyId: number;
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
  
  // 录音相关状态
  const [isRecording, setIsRecording] = useState<Record<string, boolean>>({});
  const [audioBlob, setAudioBlob] = useState<Record<string, Blob>>({});
  const [audioUrl, setAudioUrl] = useState<Record<string, string>>({});
  const [mediaRecorder, setMediaRecorder] = useState<Record<string, MediaRecorder | null>>({});
  const [stream, setStream] = useState<Record<string, MediaStream | null>>({});

  // 切换显示隐藏状态
  const handleShowHiddenToggle = () => {
    const newShowHidden = !showHidden;
    setShowHidden(newShowHidden);
    if (userId) {
      onRefresh(userId, newShowHidden);
    }
  };
  const [loading, setLoading] = useState(false);

  // 获取错题详细信息
  const fetchQuestionDetail = async (questionId: string) => {
    try {
      const response = await fetch(`http://localhost:3001/questions/${questionId}`);
      if (response.ok) {
        const data = await response.json();
        setQuestionDetails(prev => ({
          ...prev,
          [questionId]: data
        }));
      } else {
        // 题目不存在，使用默认数据
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
    
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/mistakes/${userId}/question/${questionId}/hidden`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // 重新获取错题列表
        onRefresh(userId, showHidden);
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

  // 开始录音
  const startRecording = async (questionId: string) => {
    try {
      // 获取麦克风权限
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(prev => ({ ...prev, [questionId]: mediaStream }));
      
      // 创建 MediaRecorder 实例
      const recorder = new MediaRecorder(mediaStream);
      setMediaRecorder(prev => ({ ...prev, [questionId]: recorder }));
      
      const chunks: Blob[] = [];
      
      // 录制数据
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      
      // 录制结束
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(prev => ({ ...prev, [questionId]: blob }));
        
        // 创建音频 URL 用于播放
        const url = URL.createObjectURL(blob);
        setAudioUrl(prev => ({ ...prev, [questionId]: url }));
        
        // 上传录音
        if (userId) {
          uploadRecording(userId, questionId, blob);
        }
      };
      
      // 开始录制
      recorder.start();
      setIsRecording(prev => ({ ...prev, [questionId]: true }));
    } catch (error) {
      console.error('Failed to start recording:', error);
      alert('无法访问麦克风，请检查权限设置');
    }
  };

  // 停止录音
  const stopRecording = (questionId: string) => {
    const recorder = mediaRecorder[questionId];
    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
    }
    
    // 停止媒体流
    const mediaStream = stream[questionId];
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
    
    setIsRecording(prev => ({ ...prev, [questionId]: false }));
  };

  // 播放录音
  const playRecording = (questionId: string) => {
    const url = audioUrl[questionId];
    if (url) {
      const audio = new Audio(url);
      audio.play();
    }
  };

  // 上传录音到服务器
  const uploadRecording = async (userId: number, questionId: string, blob: Blob) => {
    try {
      const formData = new FormData();
      formData.append('audio', blob, `${questionId}.wav`);
      
      const response = await fetch(`http://localhost:3001/users/${userId}/audio?questionId=${questionId}`, {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        console.log('录音上传成功');
      } else {
        console.error('录音上传失败:', response.status);
      }
    } catch (error) {
      console.error('上传录音时出错:', error);
    }
  };

  // 组件加载时，默认不展开所有错题
  React.useEffect(() => {
    // 不设置expandedIds，保持默认的空集合
    // 不为每个错题获取详情，只有在用户展开时才获取
  }, [mistakes, questionDetails]);

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

                    {/* 看解答按钮 */}
                    <div className="flex gap-3 mb-4">
                      <button 
                        onClick={() => toggleShowAnswer(mistake.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-primary-blue text-white py-3 rounded-xl font-bold text-sm shadow-vibrant active:scale-95 transition-transform"
                      >
                        {showAnswers.has(mistake.id) ? '隐藏解答' : '看解答'}
                      </button>
                      <button 
                        onClick={() => isRecording[mistake.id] ? stopRecording(mistake.id) : startRecording(mistake.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-accent-orange text-white py-3 rounded-xl font-bold text-sm shadow-vibrant active:scale-95 transition-transform"
                      >
                        <Mic size={18} />
                        {isRecording[mistake.id] ? '停止录音' : '费曼输出室'}
                      </button>
                    </div>

                    {/* 录音播放控制 */}
                    {audioUrl[mistake.id] && (
                      <div className="mb-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <div className="flex items-center justify-between">
                          <span className="text-orange-800 font-medium text-sm">费曼录音</span>
                          <button 
                            onClick={() => playRecording(mistake.id)}
                            className="bg-white text-orange-600 px-3 py-1 rounded-lg text-xs font-bold shadow-sm hover:bg-orange-100 transition-colors"
                          >
                            播放录音
                          </button>
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
            按下麦克风，试着像老师一样讲出这道题。讲顺了，脑袋里的知识点就真正“焊死”了。
          </p>
        </div>
      </div>
    </div>
  );
}
