export interface DayTask {
  id: string;
  type: 'warmup' | 'new_knowledge' | 'practice' | 'review';
  title: string;
  duration?: string;
  isCompleted: boolean;
  content: string;
}

export interface WeekPlan {
  week: number;
  title: string;
  description: string;
  milestone: string;
  days: {
    [day: number]: DayTask[];
  };
  isLocked: boolean;
  status: 'green' | 'red' | 'gray'; // green: basic, red: boss, gray: locked
}

export interface UserState {
  currentWeek: number;
  currentDay: number;
  continuousDays: number;
  mastery: {
    calculation: number;
    wordProblem: number;
    geometry: number;
    algebra: number;
    statistics: number;
  };
  mistakes: MistakeItem[];
}

export interface MistakeItem {
  id: string;
  title: string;
  category: 'calculation' | 'model' | 'concept';
  date: string;
  count: number;
  feynmanVoiceUrl?: string;
}
