/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import SplashScreen from './components/SplashScreen';
import TodayTasks from './views/TodayTasks';
import LearningMap from './views/LearningMap';
import MistakeRange from './views/MistakeRange';
import StatsView from './views/StatsView';
import { CURRICULUM_DATA } from './data/curriculum';
import { UserState } from './types';

const INITIAL_USER_STATE: UserState = {
  currentWeek: 1,
  currentDay: 1,
  continuousDays: 14,
  mastery: {
    calculation: 85,
    wordProblem: 70,
    geometry: 65,
    algebra: 40,
    statistics: 55,
  },
  mistakes: [
    { id: 'm1', title: '相遇向问题：匀速运动中距离与时间关系', category: 'model', date: '2026-04-16', count: 2 },
    { id: 'm2', title: '分数乘法中分子分母约分失误', category: 'calculation', date: '2026-04-15', count: 1 },
    { id: 'm3', title: '长方形表面积漏算两个侧面', category: 'model', date: '2026-04-14', count: 3 },
  ]
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('today');
  const [userState, setUserState] = useState<UserState>(INITIAL_USER_STATE);
  const [currentTasks, setCurrentTasks] = useState(CURRICULUM_DATA[0].days[1]);

  const handleTaskClick = (taskId: string) => {
    setCurrentTasks(prev => prev.map(t => t.id === taskId ? { ...t, isCompleted: true } : t));
  };

  const renderView = () => {
    switch (activeTab) {
      case 'today':
        return <TodayTasks tasks={currentTasks} onTaskClick={handleTaskClick} day={userState.currentDay} streak={userState.continuousDays} />;
      case 'map':
        return <LearningMap curriculum={CURRICULUM_DATA} currentWeek={userState.currentWeek} />;
      case 'mistake':
        return <MistakeRange mistakes={userState.mistakes} />;
      case 'stats':
        return <StatsView userState={userState} />;
      default:
        return <TodayTasks tasks={currentTasks} onTaskClick={handleTaskClick} day={userState.currentDay} streak={userState.continuousDays} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
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

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

