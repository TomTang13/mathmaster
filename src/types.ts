export interface Question {
  id: string;
  question: string;
  questionId?: string;
  questionTypeId?: number;
  answer: string;
  type: '填充题' | '单选题' | '解答题' | 'fill-blank' | 'short-answer' | 'true-false' | 'multiple-choice' | 'comprehensive';
  options?: string[];
  optionsJson?: string[];
  explanation?: string;
  imageAnswer?: string; // For 解答题 photo upload
}

export interface DayTask {
  id: string;
  taskId?: string;
  type: 'warmup' | 'new_knowledge' | 'practice' | 'review' | 'comprehensive';
  title: string;
  duration?: string;
  isCompleted: boolean;
  content: string;
  questions?: Question[];
  dayNumber?: number;
  weekId?: number;
  knowledgeId?: number;
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
  keyKnowledge?: { text: string; difficulty: number; day?: number }[];
}

export interface UserState {
  currentWeek: number;
  currentDay: number;
  level: number;
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
  questionBody?: string;
  category: '填充题' | '单选题' | '解答题';
  date: string;
  count: number;
  feynmanVoiceUrl?: string;
  hidden?: boolean;
  review1Completed?: boolean;
  review2Completed?: boolean;
  review3Completed?: boolean;
  review4Completed?: boolean;
}
