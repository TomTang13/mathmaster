import { WeekPlan } from '../types';

export const CURRICULUM_DATA: WeekPlan[] = [
  {
    week: 1,
    title: "基石与扫盲：多位数与单位",
    description: "多位数乘除法、单位换算（千克/克、千米/米、年月日）",
    milestone: "计算不出错，单位换算灵活应用",
    status: 'green',
    isLocked: false,
    days: {
      1: [
        { id: 'w1d1-1', type: 'warmup', title: '15分钟限时计算', duration: '15min', isCompleted: true, content: '20道多位数乘法' },
        { id: 'w1d1-2', type: 'new_knowledge', title: '多位数乘除法规则', isCompleted: false, content: '竖式与脱式规则讲解' },
        { id: 'w1d1-3', type: 'practice', title: '实战演练', isCompleted: false, content: '10道综合练习题' },
        { id: 'w1d1-4', type: 'review', title: '昨日纠错', isCompleted: false, content: '复盘昨日错题' },
      ]
    }
  },
  {
    week: 2,
    title: "基础图形与应用题初探",
    description: "长方形/正方形周长与面积、和差倍问题",
    milestone: "能画出基础应用题的线段图",
    status: 'green',
    isLocked: false,
    days: {}
  },
  {
    week: 3,
    title: "分数与小数初识",
    description: "同分母加减、小数意义及初步加减",
    milestone: "理解份数与余数的关系",
    status: 'green',
    isLocked: false,
    days: {}
  },
  {
    week: 4,
    title: "计算爬坡：小数乘除",
    description: "小数乘除法、四则混合运算法律（分配律重点）",
    milestone: "小数点位置不再点错",
    status: 'green',
    isLocked: true,
    days: {}
  },
  {
    week: 5,
    title: "平面几何进阶",
    description: "平行四边形、三角形、梯形面积及割补法",
    milestone: "灵活运用等积变形",
    status: 'green',
    isLocked: true,
    days: {}
  },
  {
    week: 6,
    title: "数论基础：因数与倍数",
    description: "质数合数、约分通分、异分母加减",
    milestone: "掌握分解质因数技巧",
    status: 'green',
    isLocked: true,
    days: {}
  },
  {
    week: 7,
    title: "进阶应用题：行程问题",
    description: "相遇、追及、平均数与统计",
    milestone: "动态过程的可视化还原",
    status: 'green',
    isLocked: true,
    days: {}
  },
  {
    week: 8,
    title: "代数跨越：方程初步",
    description: "字母表示数、解基本方程模型",
    milestone: "Boss关：完成算术到代数的思维转型",
    status: 'red',
    isLocked: true,
    days: {}
  },
  {
    week: 9,
    title: "列方程解应用题",
    description: "寻找等量关系，解决行程与倍数问题",
    milestone: "学会“设”而不“求”的逻辑",
    status: 'red',
    isLocked: true,
    days: {}
  },
  {
    week: 10,
    title: "立体空间：表面积与体积",
    description: "长方体/正方体、容积单位换算",
    milestone: "建立空间想象力坐标系",
    status: 'green',
    isLocked: true,
    days: {}
  },
  {
    week: 11,
    title: "复习：模块化错题清零",
    description: "知识抽测、打乱顺序重做",
    milestone: "测试知识点提取能力",
    status: 'green',
    isLocked: true,
    days: {}
  },
  {
    week: 12,
    title: "总复习：限时模拟考",
    description: "历年真题实战、答题规范训练",
    milestone: "最终胜利：通关3-5年级数学",
    status: 'green',
    isLocked: true,
    days: {}
  }
];
