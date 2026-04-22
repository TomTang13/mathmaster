/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

// 游戏相关的emoji列表
const GAME_ICONS = [
  "🎮", "🎯", "🏆", "⚔️", "🛡️", "🔮", "✨", "🌟", "🔥", "💎", "⚡", "💪", "🚀", "🎖️", "🏅", "💯"
];

// 随机标语列表
const MOTIVATIONAL_SLOGANS = [
  "今天不摆了",
  "我先学一会",
  "等我升个级",
  "先过这一关再说",
  "今天认真一下",
  "我在偷偷变强",
  "别吵我在升级",
  "再卷一小会",
  "我没在摆啊",
  "就这点题？",
  "先随便做做",
  "不难吧应该",
  "这一关稳了",
  "再刷一关就下",
  "今天先到这关",
  "差一点就升级了"
];
import BottomNav from './components/BottomNav';
import SplashScreen from './components/SplashScreen';
import CelebrationModal from './components/CelebrationModal';
import TodayTasks from './views/TodayTasks';
import LearningMap from './views/LearningMap';
import MistakeRange from './views/MistakeRange';
import StatsView from './views/StatsView';
import PdfReader from './views/PdfReader';
import DataGeneratorAdmin from './views/DataGeneratorAdmin';
import { CURRICULUM_DATA } from './data/curriculum';
import { UserState } from './types';

const INITIAL_USER_STATE: UserState = {
  currentWeek: 1,
  currentDay: 1,
  level: 14,
  continuousDays: 14,
  mastery: {
    calculation: 85,
    wordProblem: 70,
    geometry: 65,
    algebra: 40,
    statistics: 55,
  },
  mistakes: [
    { id: 'm1', title: '相遇向问题：匀速运动中距离与时间关系', category: '解答题', date: '2026-04-16', count: 2 },
    { id: 'm2', title: '分数乘法中分子分母约分失误', category: '填充题', date: '2026-04-15', count: 1 },
    { id: 'm3', title: '长方形表面积漏算两个侧面', category: '解答题', date: '2026-04-14', count: 3 },
  ]
};

const API_BASE = '/api';
console.log('API Base URL:', API_BASE);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('today');
  const [userState, setUserState] = useState<UserState>(INITIAL_USER_STATE);
  const [currentTasks, setCurrentTasks] = useState(CURRICULUM_DATA[0].days[1]);
  const [loggedInUser, setLoggedInUser] = useState<{ username: string; currentLevel: number; streak: number } | null>(null);
  const [loginError, setLoginError] = useState(false);
  const [showPdfReader, setShowPdfReader] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState('');
  const [userMistakes, setUserMistakes] = useState<UserState['mistakes']>([
    {
      id: 'q_1_1_6',
      title: '计算：25 × 4 + 125 × 8',
      questionBody: '计算：25 × 4 + 125 × 8',
      category: '填充题',
      date: '2026-04-21',
      count: 1,
      hidden: false
    },
    {
      id: 'q_1_1_7',
      title: '判断：1000 ÷ 25 × 4 = 1000 ÷ 100 = 10',
      questionBody: '判断：1000 ÷ 25 × 4 = 1000 ÷ 100 = 10',
      category: '单选题',
      date: '2026-04-20',
      count: 2,
      hidden: true
    }
  ]);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [newLevel, setNewLevel] = useState(1);
  const [previousLevel, setPreviousLevel] = useState(1);

  useEffect(() => {
    // 随机设置页面标题，添加游戏icon
    const randomIcon = GAME_ICONS[Math.floor(Math.random() * GAME_ICONS.length)];
    const randomSlogan = MOTIVATIONAL_SLOGANS[Math.floor(Math.random() * MOTIVATIONAL_SLOGANS.length)];
    document.title = `${randomIcon} ${randomSlogan}`;
  }, []);

  // 获取用户错题数据
  const fetchUserMistakes = (userId: number, showHidden: boolean = false) => {
    fetch(`${API_BASE}/mistakes/${userId}?showHidden=${showHidden}`)
      .then(res => res.json())
      .then(data => {
        console.log('Raw mistakes data from backend:', data); // 打印原始数据
        if (data && Array.isArray(data)) {
          // 转换数据格式
          const mistakes = data.map((mistake: any) => ({
            id: mistake.questionId,
            title: mistake.questionBody || `题目: ${mistake.questionId}`, // 使用后端返回的题目内容
            questionBody: mistake.questionBody, // 传递questionBody字段给MistakeRange组件
            category: '单选题', // 这里应该根据题目类型设置
            date: new Date(mistake.createdAt).toISOString().split('T')[0],
            count: mistake.errorCount,
            hidden: mistake.hidden,
            // 兼容不同格式的字段名
            review1Completed: mistake.review1Completed || mistake.review1_completed,
            review2Completed: mistake.review2Completed || mistake.review2_completed,
            review3Completed: mistake.review3Completed || mistake.review3_completed,
            review4Completed: mistake.review4Completed || mistake.review4_completed
          }));
          console.log('Processed mistakes data:', mistakes); // 打印处理后的数据
          setUserMistakes(mistakes);
        } else {
          // 模拟数据，用于测试
          setUserMistakes([
            {
              id: 'q_1_1_6',
              title: '计算：25 × 4 + 125 × 8',
              questionBody: '计算：25 × 4 + 125 × 8',
              category: '填充题',
              date: '2026-04-21',
              count: 1
            },
            {
              id: 'q_1_1_7',
              title: '判断：1000 ÷ 25 × 4 = 1000 ÷ 100 = 10',
              questionBody: '判断：1000 ÷ 25 × 4 = 1000 ÷ 100 = 10',
              category: '单选题',
              date: '2026-04-20',
              count: 2
            }
          ]);
        }
      })
      .catch(err => {
        console.error('Failed to fetch mistakes:', err);
        // 网络错误时使用模拟数据
        setUserMistakes([
          {
            id: 'q_1_1_6',
            title: '计算：25 × 4 + 125 × 8',
            questionBody: '计算：25 × 4 + 125 × 8',
            category: '填充题',
            date: '2026-04-21',
            count: 1
          },
          {
            id: 'q_1_1_7',
            title: '判断：1000 ÷ 25 × 4 = 1000 ÷ 100 = 10',
            questionBody: '判断：1000 ÷ 25 × 4 = 1000 ÷ 100 = 10',
            category: '单选题',
            date: '2026-04-20',
            count: 2
          }
        ]);
      });
  };

  useEffect(() => {
    // 调试信息
    console.log('Window location:', window.location);
    console.log('Window location search:', window.location.search);
    
    // 兼容旧浏览器的URL参数获取方法
    let t = null;
    let admin = null;
    
    try {
      // 现代浏览器方法
      const urlParams = new URLSearchParams(window.location.search);
      t = urlParams.get('t');
      admin = urlParams.get('admin');
      console.log('Using URLSearchParams - t:', t, 'admin:', admin);
    } catch (e) {
      // 兼容旧浏览器
      const search = window.location.search.substring(1);
      const params = search.split('&');
      for (const param of params) {
        const [key, value] = param.split('=');
        if (key === 't') {
          t = decodeURIComponent(value);
        } else if (key === 'admin') {
          admin = decodeURIComponent(value);
        }
      }
      console.log('Using fallback method - t:', t, 'admin:', admin);
    }

    if (admin) {
      // 管理员模式，不需要登录
      setLoginError(false);
      setShowSplash(false);
      return;
    }

    if (t) {
      console.log('Token found:', t);
      console.log('API URL:', `${API_BASE}/users/t/${t}`);
      
      // 添加超时处理
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时
      
      fetch(`${API_BASE}/users/t/${t}`, {
        signal: controller.signal
      })
        .then(res => {
          clearTimeout(timeoutId);
          console.log('API response status:', res.status);
          return res.json();
        })
        .then(data => {
          console.log('API response data:', data);
          if (data && data.user && data.user.username) {
            setLoggedInUser({ 
              username: data.user.username, 
              currentLevel: data.user.currentLevel || 1,
              streak: data.streak || 0 
            });
            if (data.user.currentLevel) {
              setUserState(prev => ({ ...prev, level: data.user.currentLevel, currentWeek: data.user.currentLevel }));
            }
            if (data.streak) {
              setUserState(prev => ({ ...prev, continuousDays: data.streak }));
            }
            // 获取用户错题数据
            if (data.user.id) {
              setCurrentUserId(data.user.id);
              fetchUserMistakes(data.user.id);
            }
            setLoginError(false);
          } else {
            console.log('Invalid user data:', data);
            setLoginError(true);
          }
        })
        .catch(err => {
          clearTimeout(timeoutId);
          console.error('Login failed:', err);
          setLoginError(true);
        });
    } else {
      console.log('No token found in URL');
      // 当没有t参数时，设置loginError为true，只显示引导页
      setLoginError(true);
    }
  }, []);

  const handleTaskClick = (taskId: string) => {
    setCurrentTasks(prev => prev.map(t => t.id === taskId ? { ...t, isCompleted: true } : t));
  };

  // 处理PDF链接点击
  const handlePdfClick = (pdfUrl: string) => {
    setCurrentPdfUrl(pdfUrl);
    setShowPdfReader(true);
  };

  // 处理用户升级
  const handleLevelUp = (newLevel: number) => {
    setPreviousLevel(userState.level);
    setNewLevel(newLevel);
    setUserState(prev => ({ ...prev, level: newLevel, currentWeek: newLevel }));
    setShowCelebration(true);
  };

  const renderView = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const admin = urlParams.get('admin');
    
    if (admin) {
      return <DataGeneratorAdmin />;
    }
    
    switch (activeTab) {
      case 'today':
        return <TodayTasks tasks={currentTasks} onTaskClick={handleTaskClick} onPdfClick={handlePdfClick} week={userState.currentWeek} day={userState.currentDay} level={userState.level} streak={loggedInUser?.streak || userState.continuousDays} username={loggedInUser?.username} userId={currentUserId} onLevelUp={handleLevelUp} />;
      case 'map':
        return <LearningMap currentWeek={userState.currentWeek} onPdfClick={handlePdfClick} />;
      case 'mistake':
        return <MistakeRange
          mistakes={userMistakes}
          userId={currentUserId}
          onRefresh={fetchUserMistakes}
        />;
      case 'stats':
        return <StatsView userState={userState} />;
      default:
        return <TodayTasks tasks={currentTasks} onTaskClick={handleTaskClick} onPdfClick={handlePdfClick} week={userState.currentWeek} day={userState.currentDay} level={userState.level} streak={loggedInUser?.streak || userState.continuousDays} username={loggedInUser?.username} userId={currentUserId} onLevelUp={handleLevelUp} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} username={loggedInUser?.username} error={loginError} />}
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute top-10 left-10 text-8xl font-black">Σ</div>
        <div className="absolute top-1/4 right-20 text-9xl font-black">π</div>
        <div className="absolute bottom-20 left-1/4 text-8xl font-black">√</div>
        <div className="absolute bottom-40 right-10 text-7xl font-black">∞</div>
      </div>

      <main className="relative z-10 min-h-screen">
        {renderView()}
      </main>

      {!new URLSearchParams(window.location.search).get('admin') && (
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {/* PDF阅读器 */}
      {showPdfReader && (
        <PdfReader
          pdfUrl={currentPdfUrl}
          onClose={() => setShowPdfReader(false)}
        />
      )}

      {/* 升级庆祝动画 */}
      <CelebrationModal
        isVisible={showCelebration}
        newLevel={newLevel}
        onClose={() => setShowCelebration(false)}
      />
    </div>
  );
}

