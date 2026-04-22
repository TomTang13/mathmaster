import { WeekPlan } from '../types';

export const CURRICULUM_DATA: WeekPlan[] = [
  {
    week: 1,
    title: "基石与扫盲：多位数与单位",
    description: "多位数乘除法、单位换算（千克/克、千米/米、年月日）",
    milestone: "计算不出错，单位换算灵活应用",
    status: 'green',
    isLocked: false,
    keyKnowledge: [
      { text: "掌握三位数乘两位数的竖式计算法则，注意数位对齐与进位。", difficulty: 1, day: 1 },
      { text: "熟练掌握由于因数末尾有0导致的简便算法（先算非零部分，再补0）。", difficulty: 1, day: 1 },
      { text: "速度与准确率：在5分钟内完成20道复杂乘法口算不丢分。", difficulty: 3, day: 1 },
      { text: "估算能力：掌握四舍五入估算法，快速判定计算结果的合理范围。", difficulty: 2, day: 1 },
      { text: "理解积的变化规律：一个因数不变，另一个因数扩大/缩小，积也相应变化。", difficulty: 2, day: 2 },
      { text: "进阶计算技巧：利用分配律简化大数乘法（如 101×37）。", difficulty: 2, day: 2 },
      { text: "除法商不变：理解被除数与除数同时缩放时，商的稳定性（计算神技）。", difficulty: 2, day: 2 },
      { text: "质量单位换算：1吨 = 1000千克，1千克 = 1000克。", difficulty: 1, day: 3 },
      { text: "长度单位换算：1千米 = 1000米，掌握生活中大距离的量感。", difficulty: 1, day: 3 },
      { text: "实际应用：学会计算复合单位下的总量（如 2吨300千克 = ? 千克）。", difficulty: 2, day: 3 }
    ],
    days: {
      1: [
        { 
          id: 'w1d1-1', 
          type: 'warmup', 
          title: '【快速委托】申城计算竞速', 
          duration: '15min', 
          isCompleted: false, 
          content: '挑战高频口算矩阵。包含“特种积”、末尾零处理及多层估算。',
          questions: [
            { id: 'q1', type: '填充题', question: '125 × 32 = ?', answer: '4000' },
            { id: 'q2', type: '填充题', question: '25 × 36 = ?', answer: '900' },
            { id: 'q3', type: '填充题', question: '3.5 × 200 = ?', answer: '700' },
            { id: 'q4', type: '填充题', question: '450 × 40 = ?', answer: '18000' },
            { id: 'q5', type: '填充题', question: '12.5 × 8 = ?', answer: '100' }
          ]
        },
        { 
          id: 'w1d1-2', 
          type: 'new_knowledge', 
          title: '【核心心法】竖法与估算', 
          duration: '20min',
          isCompleted: false, 
          content: '核心奥义：掌握三位数乘两位数的竖式法则，并能快速估算结果范围。',
          questions: [
            { 
              id: 'q1', 
              type: '单选题', 
              question: '在计算 208 × 34 时，第二部分是用 30 去乘 208，得到的积应该是多少？', 
              answer: '6240',
              options: ['624', '6240', '6040', '62400'],
              explanation: '30 × 208：先算 3 × 208 = 624，再在末尾补一个0。'
            },
            { id: 'q2', type: '单选题', question: '412 × 19 的积最接近哪个数？', answer: '8000', options: ['4000', '6000', '8000', '10000'] }
          ]
        },
        { 
          id: 'w1d1-3', 
          type: 'practice', 
          title: '【实战演练】魔都商贸风云', 
          duration: '30min',
          isCompleted: false, 
          content: '模拟上海大宗采购：包含折扣、因数末尾0简算。',
          questions: [
            { id: 'q1', type: '填充题', question: '250 × 80 = ?', answer: '20000' },
            { id: 'q2', type: '填充题', question: '采购215个玩偶，单价48元，若满100个每个减3元，实际总价？', answer: '9675' }
          ]
        }
      ],
      2: [
        { 
          id: 'w1d2-1', 
          type: 'warmup', 
          title: '【快速委托】法则变换', 
          duration: '5min', 
          isCompleted: false, 
          content: '练习积的变化规律与分配律初探。',
          questions: [
            { id: 'q1', type: '填充题', question: '101 × 37 - 37 = ?', answer: '3700' }
          ]
        },
        { 
          id: 'w1d2-2', 
          type: 'new_knowledge', 
          title: '【核心心法】积与商的变幻', 
          isCompleted: false, 
          content: '核心奥义：理解积的变化规律及商不变的性质，掌握乘法分配律简算。',
          questions: [
            { 
              id: 'q1', 
              type: '单选题', 
              question: '两个数相乘积是50，如果一个因数不变，另一个因数扩大10倍，现在的积是？', 
              answer: '500',
              options: ['50', '500', '5000', '不变']
            },
            { id: 'q2', type: '填充题', question: '已知 480 ÷ 12 = 40，那么 4800 ÷ 120 = ?', answer: '40' }
          ]
        },
        { 
          id: 'w1d2-3', 
          type: 'practice', 
          title: '【实战演练】简算高手', 
          isCompleted: false, 
          content: '利用分配律、商不变性质解决实际问题。',
          questions: [
            { id: 'q1', type: '填充题', question: '125 × 88 = ? (利用分配律简算)', answer: '11000' }
          ]
        }
      ],
      3: [
        { 
          id: 'w1d3-1', 
          type: 'warmup', 
          title: '【快速委托】量感突击', 
          duration: '5min', 
          isCompleted: false, 
          content: '口算质量与长度单位的基础转换。',
          questions: [
            { id: 'q1', type: '填充题', question: '2千米 = (?) 米', answer: '2000' },
            { id: 'q2', type: '填充题', question: '5千克 = (?) 克', answer: '5000' }
          ]
        },
        { 
          id: 'w1d3-2', 
          type: 'new_knowledge', 
          title: '【核心心法】时空与质量系统', 
          isCompleted: false, 
          content: '核心奥义：熟练掌握吨/千克/克、千米/米以及年月日（平闰月）的换算与应用。',
          questions: [
            { id: 'q1', type: '单选题', question: '2024年是平年还是闰年？', answer: '闰年', options: ['平年', '闰年'] },
            { id: 'q2', type: '单选题', question: '一只西瓜大约重4？', answer: '千克', options: ['克', '千克', '吨'] }
          ]
        },
        { 
          id: 'w1d3-3', 
          type: 'practice', 
          title: '【实战演练】复合单位挑战', 
          isCompleted: false, 
          content: '计算复杂单位下的总量，解决实际生活问题。',
          questions: [
            { id: 'q1', type: '解答题', question: '请拍照上传完整解题过程：一辆货车载重5吨，已有3200kg货物，还能装80kg一箱的货物多少箱？', answer: '22', explanation: '(5000 - 3200) ÷ 80 = 1800 ÷ 80 = 22.5，取22箱。' }
          ]
        }
      ],
      4: [
        { 
          id: 'w1d4-1', 
          type: 'review', 
          title: '【每周回顾】错题清缴', 
          duration: '15min',
          isCompleted: false, 
          content: '回顾本周 D1-D3 的核心奥义，复盘竖式进位与单位陷阱。',
          questions: [
            { id: 'q1', type: '填充题', question: '判断：三位数乘两位数，积最小是几位数？', answer: '4' },
            { id: 'q2', type: '单选题', question: '150 × 40 的积，末尾有（ ）个0？', answer: '3个', options: ['2个', '3个', '4个', '1个'] }
          ]
        },
        { 
          id: 'w1d4-2', 
          type: 'practice', 
          title: '【强化练习】混合矩阵', 
          duration: '20min',
          isCompleted: false, 
          content: '跨章节的混合运算与单位综合应用。',
          questions: [
            { id: 'q1', type: '填充题', question: '400 × 50 ÷ 100 = ?', answer: '200' },
            { id: 'q2', type: '填充题', question: '1千克 - 250克 = (?) 克', answer: '750' }
          ]
        }
      ],
      5: [
        { 
          id: 'w1d5-1', 
          type: 'practice', 
          title: '【周度测试】全真模拟', 
          duration: '30min',
          isCompleted: false, 
          content: '模拟本周所学内容的综合测试，考察计算准确率与速度。',
          questions: [
            { id: 'q1', type: '填充题', question: '101 × 11 = ?', answer: '1111' },
            { id: 'q2', type: '填充题', question: '2400 ÷ 60 = ?', answer: '40' }
          ]
        },
        { 
          id: 'w1d5-2', 
          type: 'practice', 
          title: '【BOSS委托】提瓦特物流官', 
          isCompleted: false, 
          content: '综合应用题：考察单位转换、大数乘法与逻辑推理。',
          questions: [
            { id: 'q1', type: '解答题', question: '请拍照上传完整解题过程：一辆货车载重5吨。现有80箱货物，每箱重60千克。这辆货车能一次运走吗？', answer: '能', explanation: '80 × 60 = 4800kg，5吨 = 5000kg。4800 < 5000，所以能运走。' }
          ]
        }
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
    keyKnowledge: [
      { text: "理解周长的概念：封闭图形一周的长度即为周长。", difficulty: 1, day: 1 },
      { text: "长方形周长公式：(长 + 宽) × 2，通过对边相等特征推导。", difficulty: 1, day: 1 },
      { text: "正方形周长公式：边长 × 4。", difficulty: 1, day: 1 },
      { text: "面积初探：理解面积是物体表面或平面图形的大小。", difficulty: 2, day: 2 },
      { text: "长度单位与面积单位的区别：CM 与 CM² 的物理意义不同。", difficulty: 2, day: 2 },
      { text: "基本面积公式：长方形（长×宽），正方形（边长×边长）。", difficulty: 1, day: 2 },
      { text: "和差问题核心思维：(和 + 差) ÷ 2 = 大数；(和 - 差) ÷ 2 = 小数。", difficulty: 3, day: 3 },
      { text: "倍数问题核心思维：基准数（1倍数）的确定是解题关键。", difficulty: 3, day: 3 },
      { text: "线段图的应用：学会用物理线段表达数量之间的抽象关系。", difficulty: 3, day: 3 },
      { text: "动态和差倍（变倍问题）：处理‘甲给乙’后倍数变化的‘和不变’原理。", difficulty: 4, day: 3 },
      { text: "复杂线段图推演：不依赖方程，纯图形解决多变量倍数变动问题。", difficulty: 4, day: 3 }
    ],
    days: {
      1: [
        { 
          id: 'w2d1-1', 
          type: 'warmup', 
          title: '【快速委托】图形感官', 
          isCompleted: false, 
          content: '快速识别各种多边形，复习连线基础。',
          questions: [
            { id: 'q1', type: '单选题', question: '一个长方形有几条对称轴？', answer: '2条', options: ['1条', '2条', '4条', '无数条'] }
          ]
        },
        { 
          id: 'w2d1-2', 
          type: 'new_knowledge', 
          title: '【核心心法】周长的边界', 
          isCompleted: false, 
          content: '核心奥义：理解周长概念，熟练使用长方形与正方形周长公式。',
          questions: [
            { id: 'q1', type: '填充题', question: '边长为5cm的正方形，周长是？', answer: '20' },
            { id: 'q2', type: '解答题', question: '一个长方形长8cm，宽比长短2cm，周长多少？', answer: '28', explanation: '(8 + 6) × 2 = 28' }
          ]
        }
      ],
      2: [
        { 
          id: 'w2d2-1', 
          type: 'new_knowledge', 
          title: '【核心心法】面积的维度', 
          isCompleted: false, 
          content: '核心奥义：区分长度单位与面积单位，掌握基本面积计算。',
          questions: [
            { id: 'q1', type: '单选题', question: '面积单位和长度单位相比（ ）', answer: '无法比较', options: ['面积单位大', '长度单位大', '一样大', '无法比较'] },
            { id: 'q2', type: '填充题', question: '长12m，宽5m的长方形面积是？', answer: '60' }
          ]
        }
      ],
      3: [
        { 
          id: 'w2d3-1', 
          type: 'new_knowledge', 
          title: '【核心心法】和差倍的模型', 
          isCompleted: false, 
          content: '核心奥义：学会绘制线段图，解决基础和差倍应用题。',
          questions: [
            { id: 'q1', type: '填充题', question: '甲乙和是20，差是4，大数是？', answer: '12', explanation: '(20+4)/2 = 12' },
            { id: 'q2', type: '填充题', question: '小明钱是小红的3倍，两人共40元，小红有？', answer: '10', explanation: '40 / (3+1) = 10' }
          ]
        }
      ],
      4: [
        { id: 'w2d4-1', type: 'review', title: '【回顾】几何与应用题复盘', isCompleted: false, content: '复习 D1-D3 图形公式与线段图。' }
      ],
      5: [
        { id: 'w2d5-1', type: 'practice', title: '【实战】综合建模演练', isCompleted: false, content: '综合图形与应用题的跨章节练习。' }
      ]
    }
  },
  {
    week: 3,
    title: "分数与小数初识",
    description: "同分母加减、小数意义及初步加减",
    milestone: "理解份数与余数的关系",
    status: 'green',
    isLocked: false,
    keyKnowledge: [
      { text: "分数产生背景：在平均分时，无法得到整数结果的情况产生分数。", difficulty: 1, day: 1 },
      { text: "分数的意义：把单位“1”平均分成若干份，表示这样一份或几份的数。", difficulty: 2, day: 1 },
      { text: "分母与分子的职能：分母表示总份数，分子表示取出的份数。", difficulty: 1, day: 1 },
      { text: "同分母分数比较：分母相同，分子越大分数越大。", difficulty: 1, day: 1 },
      { text: "分数单位：理解如 3/7 是由三个 1/7 组成的。", difficulty: 2, day: 1 },
      { text: "小数的意义：分母是10、100、1000...的分数可以用小数表示。", difficulty: 2, day: 2 },
      { text: "小数的数位顺序：理解十分位、百分位的位值原理。", difficulty: 2, day: 2 },
      { text: "小数的大小比较：先比整数部分，再顺次比十分位、百分位。", difficulty: 2, day: 2 },
      { text: "小数与分数的转化：理解 0.1 = 1/10，0.01 = 1/100。", difficulty: 2, day: 3 },
      { text: "生活应用：学会读懂商品价格标签中的小数（元、角、分）。", difficulty: 1, day: 3 }
    ],
    days: {
      1: [
        { 
          id: 'w3d1-1', 
          type: 'new_knowledge', 
          title: '【核心心法】分数的视界', 
          isCompleted: false, 
          content: '核心奥义：理解分数的意义、分子分母职能及单位“1”的概念。',
          questions: [
            { id: 'q1', type: '单选题', question: '把一个饼平均分成8份，取其中3份，用分数表示是？', answer: '3/8', options: ['1/8', '3/8', '5/8', '8/3'] }
          ]
        }
      ],
      2: [
        { 
          id: 'w3d1-2', 
          type: 'new_knowledge', 
          title: '【核心心法】小数的数位', 
          isCompleted: false, 
          content: '核心奥义：理解小数的位值原理（十分位、百分位）及小数的意义。',
          questions: [
            { id: 'q1', type: '单选题', question: '0.7 里面有 7 个（ ）', answer: '0.1', options: ['0.1', '0.01', '1', '10'] }
          ]
        }
      ],
      3: [
        { 
          id: 'w3d1-3', 
          type: 'new_knowledge', 
          title: '【核心心法】数轴上的转换', 
          isCompleted: false, 
          content: '核心奥义：掌握分数与小数的互化，学会在数轴上比较大小。',
          questions: [
            { id: 'q1', type: '填充题', question: '0.25 化成分数是？', answer: '1/4' }
          ]
        }
      ],
      4: [
        { id: 'w3d4-1', type: 'review', title: '【回顾】数感盲区扫除', isCompleted: false, content: '复习分数单位与小数位数的易错点。' }
      ],
      5: [
        { id: 'w3d5-1', type: 'practice', title: '【实战】价格标签的秘密', isCompleted: false, content: '在真实商业场景中应用分数与小数。' }
      ]
    }
  },
  {
    week: 4,
    title: "计算爬坡：小数乘除",
    description: "小数乘除法、四则混合运算法律（分配律重点）",
    milestone: "小数点位置不再点错",
    status: 'green',
    isLocked: true,
    keyKnowledge: [
      { text: "小数乘整数：按整数乘法计算，再看因数中有几位小数。", difficulty: 2, day: 1 },
      { text: "小数乘小数：积的小数位数等于两个因数小数位数的和。", difficulty: 3, day: 1 },
      { text: "积的末尾零处理：先点小数点，再去掉末尾多余的“0”。", difficulty: 2, day: 1 },
      { text: "小数除以整数：商的小数点要和被除数的小数点对齐。", difficulty: 2, day: 2 },
      { text: "一个数除以小数：关键是将除数转化为整数（商不变性质）。", difficulty: 3, day: 2 },
      { text: "除不尽处理：根据要求保留位数，掌握“四舍五入”取近似值。", difficulty: 2, day: 2 },
      { text: "循环小数：理解循环节的概念及简便写法。", difficulty: 2, day: 3 },
      { text: "简便计算：在小数运算中灵活运用交换律、结合律 and 分配律。", difficulty: 3, day: 3 },
      { text: "小数估算：快速判定小数计算结果的量级（避开计算大错）。", difficulty: 2, day: 3 },
      { text: "连除技巧：理解 a ÷ b ÷ c = a ÷ (b × c) 的运用。", difficulty: 2, day: 3 }
    ],
    days: {
      1: [
        { 
          id: 'w4d1-1', 
          type: 'warmup', 
          title: '【快速委托】小数点跳跃', 
          isCompleted: false, 
          content: '练习小数乘整数，掌握由于因数变化导致小数点移动的规律。',
          questions: [
            { id: 'q1', type: '填充题', question: '0.125 × 8 = ?', answer: '1' },
            { id: 'q2', type: '填充题', question: '3.4 × 20 = ?', answer: '68' }
          ]
        },
        { 
          id: 'w4d1-2', 
          type: 'new_knowledge', 
          title: '【核心心法】积的定位', 
          isCompleted: false, 
          content: '核心奥义：掌握小数乘小数的法则，学会根据因数的小数位数给积点小数点。',
          questions: [
            { id: 'q1', type: '单选题', question: '0.04 × 0.05 的积有几位小数？', answer: '3位', options: ['2位', '3位', '4位', '5位'], explanation: '计算得 0.0020，末尾零虽然可以去掉，但定位时是 4 位，去掉末尾一个零后是 3 位（通常指化简后）。' },
            { id: 'q2', type: '填充题', question: '1.2 × 0.15 = ?', answer: '0.18' }
          ]
        }
      ],
      2: [
        { 
          id: 'w4d2-1', 
          type: 'new_knowledge', 
          title: '【核心心法】除法精准度', 
          isCompleted: false, 
          content: '核心奥义：学会小数除以整数，并能将除数是小数的除法转化为整数除法。',
          questions: [
            { id: 'q1', type: '填充题', question: '5.1 ÷ 0.03 = (?) ÷ 3', answer: '510' },
            { id: 'q2', type: '填充题', question: '保留两位小数：5.6 ÷ 3 ≈ ?', answer: '1.87' }
          ]
        }
      ],
      3: [
        { 
          id: 'w4d3-1', 
          type: 'practice', 
          title: '【实战演练】简算实验室', 
          isCompleted: false, 
          content: '利用运算定律进行小数的简便计算，并掌握循环小数的基本书写。',
          questions: [
            { id: 'q1', type: '填充题', question: '1.25 × 0.88 = ? (尝试简便算法)', answer: '1.1' },
            { id: 'q2', type: '填充题', question: '10 ÷ 3 的商用循环小数表示是？', answer: '3.3...' }
          ]
        }
      ],
      4: [
        { 
          id: 'w4d4-1', 
          type: 'review', 
          title: '【回顾】小数运算错题扫荡', 
          isCompleted: false, 
          content: '复盘 D1-D3 的小数点定位、商不变性质等核心易错点。' 
        }
      ],
      5: [
        { 
          id: 'w4d5-1', 
          type: 'practice', 
          title: '【周度测试】小数王国大挑战', 
          isCompleted: false, 
          content: '全真模拟本周小数乘除法内容，重点考察混合运算。' 
        }
      ]
    }
  },
  {
    week: 5,
    title: "平面几何进阶：面积奥义",
    description: "平行四边形、三角形、梯形面积，重点攻克【组合图形】割补法",
    milestone: "灵活运用等积变形与割补法解决复杂组合图形",
    status: 'green',
    isLocked: true,
    keyKnowledge: [
      { text: "平行四边形面积：转化为长方形，推导出 面积 = 底 × 高。", difficulty: 2, day: 1 },
      { text: "三角形面积推导：两个完全一样的三角形拼成一个平行四边形。", difficulty: 2, day: 1 },
      { text: "三角形面积公式：底 × 高 ÷ 2（切记：必须除以2）。", difficulty: 2, day: 1 },
      { text: "梯形面积推导：(上底 + 下底) × 高 ÷ 2。", difficulty: 3, day: 1 },
      { text: "图形组合与割补：学会将不规则图形切割成已知基本图形。", difficulty: 4, day: 2 },
      { text: "等积变形：理解同底等高的三角形面积相等。", difficulty: 4, day: 2 },
      { text: "底与高的对应性：找准图形中互相垂直的底和高。", difficulty: 2, day: 2 },
      { text: "格点面积法：利用皮克公式或数格子法预估复杂图形面积。", difficulty: 3, day: 3 },
      { text: "面积单位进阶：掌握公顷与平方千米的换算（1公顷 = 10000m²）。", difficulty: 2, day: 3 },
      { text: "几何构造：通过平移、旋转、翻折理解图形间的转换关系。", difficulty: 3, day: 3 }
    ],
    days: {
      1: [
        { 
          id: 'w5d1-1', 
          type: 'new_knowledge', 
          title: '【核心心法】基础面积三定律', 
          isCompleted: false, 
          content: '核心奥义：掌握平行四边形、三角形、梯形的基础面积公式，注意三角形与梯形必须除以2。',
          questions: [
            { id: 'q1', type: '单选题', question: '一个三角形底是10cm，高是4cm，它的面积是？', answer: '20cm²', options: ['40cm²', '20cm²', '14cm²', '28cm²'] },
            { id: 'q2', type: '填充题', question: '梯形上底3m，下底5m，高2m，面积是？', answer: '8' }
          ]
        }
      ],
      2: [
        { 
          id: 'w5d2-1', 
          type: 'new_knowledge', 
          title: '【核心心法】割补与变幻', 
          isCompleted: false, 
          content: '核心奥义：学会在复杂组合图形中使用割补法，并理解同底等高面积相等的原理。',
          questions: [
            { id: 'q1', type: '单选题', question: '两个同底等高的三角形，它们的（ ）一定相等。', answer: '面积', options: ['周长', '形状', '面积', '底'] }
          ]
        }
      ],
      3: [
        { 
          id: 'w5d3-1', 
          type: 'practice', 
          title: '【实战演练】大地测绘员', 
          isCompleted: false, 
          content: '掌握大面积单位（公顷、平方千米）的换算；练习在格点图中计算面积。',
          questions: [
            { id: 'q1', type: '填充题', question: '1平方千米 = (?) 公顷', answer: '100' },
            { id: 'q2', type: '填充题', question: '5公顷 = (?) 平方米', answer: '50000' }
          ]
        }
      ],
      4: [
        { 
          id: 'w5d4-1', 
          type: 'review', 
          title: '【回顾】几何公式深度修复', 
          isCompleted: false, 
          content: '针对底高对应、以及面积单位换算的易错点进行专项回顾。' 
        }
      ],
      5: [
        { 
          id: 'w5d5-1', 
          type: 'practice', 
          title: '【周度测试】几何空间大师', 
          isCompleted: false, 
          content: '综合考查平行四边形、三角形、梯形及组合图形的面积计算。' 
        }
      ]
    }
  },
  {
    week: 6,
    title: "数论基础：因数与倍数",
    description: "质数合数、约分通分、异分母加减",
    milestone: "掌握分解质因数技巧",
    status: 'green',
    isLocked: true,
    keyKnowledge: [
      { text: "约分与倍数：如果 a ÷ b = c（c为非零整数），则a是b的倍数。", difficulty: 1, day: 1 },
      { text: "2、3、5 的倍数特征：判定个位（2, 5）及各位数字之和（3）。", difficulty: 2, day: 1 },
      { text: "质数与合数：只有1和它本身两个因数的数是质数。", difficulty: 2, day: 1 },
      { text: "1 的特殊性：1既不是质数也不是合数。", difficulty: 1, day: 1 },
      { text: "奇数与偶数：理解和、差、积的奇偶性变化规律。", difficulty: 2, day: 1 },
      { text: "分解质因数：将一个合数写成几个质数相乘的形式。", difficulty: 3, day: 2 },
      { text: "公因数与最大公因数：掌握短除法寻找最大公因数。", difficulty: 3, day: 2 },
      { text: "互质数：两个数的最大公因数是1，则这两个数互质。", difficulty: 2, day: 2 },
      { text: "公倍数与最小公倍数：理解周期性问题中的倍数应用。", difficulty: 4, day: 3 },
      { text: "数论工具化：熟练运用短除法快速求多个数的最大公约数与最小公倍数。", difficulty: 4, day: 3 },
      { text: "分解质因数应用：掌握‘找数’与‘周期性’问题的数论破局点。", difficulty: 4, day: 3 }
    ],
    days: {
      3: [
        { id: 'w6d3-1', type: 'practice', title: '【实战】数论工具箱', isCompleted: false, content: '利用短除法快速求解最小公倍数应用题。' }
      ],
      4: [
        { id: 'w6d4-1', type: 'review', title: '【回顾】因子陷阱清点', isCompleted: false, content: '复习质数合数辨析及 1 的特殊性。' }
      ],
      5: [
        { id: 'w6d5-1', type: 'practice', title: '【周度测试】数论进阶挑战', isCompleted: false, content: '综合考查因数、倍数、质数合数应用。' }
      ]
    }
  },
  {
    week: 7,
    title: "进阶应用题：动态建模",
    description: "相遇、追及、环形运动；同步掌握【平均数】与统计分析",
    milestone: "动态过程的可视化还原，掌握复杂行程逻辑",
    status: 'green',
    isLocked: true,
    keyKnowledge: [
      { text: "核心公式：路程 = 速度 × 时间；掌握变式应用。", difficulty: 1, day: 1 },
      { text: "动态过程建模：学会绘制行程示意图，标注关键时刻位置。", difficulty: 3, day: 1 },
      { text: "分段行程：处理中途停留、变速运动的复合情形。", difficulty: 4, day: 1 },
      { text: "相遇问题：路程和 = 速度和 × 相遇时间。", difficulty: 3, day: 2 },
      { text: "追及问题：路程差 = 速度差 × 追及时间。", difficulty: 4, day: 2 },
      { text: "火车过桥问题：总路程 = 桥长 + 车长。", difficulty: 4, day: 2 },
      { text: "平均速度：总路程 ÷ 总时间（而非速度的平均值）。", difficulty: 4, day: 3 },
      { text: "封闭环形跑道：相遇即跑了一圈，追及即多跑了一圈。", difficulty: 5, day: 3 },
      { text: "流水行船问题：顺水速度=船速+水速；逆水速度=船速-水速。", difficulty: 4, day: 3 },
      { text: "逻辑推理：通过时间 or 速度的比值关系快速解题。", difficulty: 4, day: 3 }
    ],
    days: {
      3: [
        { id: 'w7d3-1', type: 'new_knowledge', title: '【核心心法】环形与流水', isCompleted: false, content: '核心奥义：掌握封闭跑道与流水行船的基础模型。' }
      ],
      4: [
        { id: 'w7d4-1', type: 'review', title: '【回顾】行程草图复盘', isCompleted: false, content: '复盘 D1-D3 动态过程建模的示意图画法。' }
      ],
      5: [
        { id: 'w7d5-1', type: 'practice', title: '【周度测试】疾速先锋', isCompleted: false, content: '综合考查相遇、追及及复杂行程逻辑。' }
      ]
    }
  },
  {
    week: 8,
    title: "代数跨越：方程初步",
    description: "字母表示数、解基本方程模型",
    milestone: "Boss关：完成算术到代数的思维转型",
    status: 'red',
    isLocked: true,
    keyKnowledge: [
      { text: "用字母表示数：理解字母可以表示任意数 or 特定数量关系。", difficulty: 1, day: 1 },
      { text: "代数式简写：数字与字母相乘，数字在前，省略乘号。", difficulty: 1, day: 1 },
      { text: "思维转变：从逆向求解（算术）到顺向列式（代数）的飞跃。", difficulty: 4, day: 1 },
      { text: "方程的定义：含有未知数的等式叫做方程。", difficulty: 1, day: 2 },
      { text: "等式的性质1：两边同时加/减同一个数，等式依然成立。", difficulty: 2, day: 2 },
      { text: "等式的性质2：两边同时乘/除同一个非零数，等式成立。", difficulty: 2, day: 2 },
      { text: "解方程：求方程中未知数的值的过程及其书写规范（写“解”）。", difficulty: 2, day: 3 },
      { text: "检验：将求得的解代入原方程，验证结果正确性。", difficulty: 1, day: 3 },
      { text: "简单方程模型：掌握 x ± a = b，ax = b 等基础解法。", difficulty: 2, day: 3 },
      { text: "模型转换：将复杂未知式转化为标准方程形式。", difficulty: 3, day: 3 }
    ],
    days: {
      3: [
        { id: 'w8d3-1', type: 'new_knowledge', title: '【核心心法】简易方程模组', isCompleted: false, content: '核心奥义：掌握基础方程模型及书写规范。' }
      ],
      4: [
        { id: 'w8d4-1', type: 'review', title: '【回顾】代数思维修复', isCompleted: false, content: '复盘从算术转代数时的“未知量”参与运算逻辑。' }
      ],
      5: [
        { id: 'w8d5-1', type: 'practice', title: '【周度测试】方程新手村', isCompleted: false, content: '综合考查等式性质及基础方程求解。' }
      ]
    }
  },
  {
    week: 9,
    title: "列方程解应用题",
    description: "寻找等量关系，解决行程与倍数问题",
    milestone: "学会“设”而不“求”的逻辑",
    status: 'red',
    isLocked: true,
    keyKnowledge: [
      { text: "寻找等量关系：应用题解题的灵魂，学会找出“A = B”。", difficulty: 4, day: 1 },
      { text: "设未知数：通常将要求的问题设为 x，并写清单位。", difficulty: 1, day: 1 },
      { text: "列方程技巧：根据题目的核心陈述，直接列出对应代数式。", difficulty: 3, day: 1 },
      { text: "几何应用题：利用周长、面积公式作为等量关系列方程。", difficulty: 3, day: 1 },
      { text: "典型和差倍方程：根据“倍数关系”快速定位等号位置。", difficulty: 3, day: 2 },
      { text: "鸡兔同笼方程解法：理解头数与脚数之间的联动等量关系。", difficulty: 4, day: 2 },
      { text: "工程问题方程：理解总量“1”与效率之间的关系。", difficulty: 5, day: 3 },
      { text: "方程的优化：选择最简单的等量关系，提高解题成功率。", difficulty: 3, day: 2 },
      { text: "多未知数处理：通过关系转化，用含x的式子表示另一个数。", difficulty: 4, day: 3 },
      { text: "结果判定：验证方程的解是否符合实际生活常识。", difficulty: 1, day: 3 }
    ],
    days: {
      3: [
        { id: 'w9d3-1', type: 'new_knowledge', title: '【核心心法】工程与效率方程', isCompleted: false, content: '核心奥义：理解总量“1”与效率之间的关系，掌握工程应用题列方程的方法。' }
      ],
      4: [
        { id: 'w9d4-1', type: 'review', title: '【回顾】等量关系复盘', isCompleted: false, content: '复盘和差倍、鸡兔同笼等典型应用题的等量关系筛选。' }
      ],
      5: [
        { id: 'w9d5-1', type: 'practice', title: '【周度测试】方程建模大师', isCompleted: false, content: '综合考查应用题设未知数、找等量关系与列方程能力。' }
      ]
    }
  },
  {
    week: 10,
    title: "立体空间：三维重构",
    description: "长方体/正方体表面积与体积、容积换算，攻克【展开图】思维",
    milestone: "从平面到立体的空间构型转换，建立坐标直觉",
    status: 'green',
    isLocked: true,
    keyKnowledge: [
      { text: "立体图特征：长方体有6个面、12条棱、8个顶点。", difficulty: 1, day: 1 },
      { text: "表面积概念：立体图形6个面的总面积之和。", difficulty: 2, day: 1 },
      { text: "长方体表面积：(长×宽 + 宽×高 + 长×高) × 2。", difficulty: 3, day: 1 },
      { text: "正方体表面积：棱长 × 棱长 × 6。", difficulty: 2, day: 1 },
      { text: "体积与容积：物体所占空间的大小 vs 容器容纳空间的大小。", difficulty: 2, day: 2 },
      { text: "体积公式：底面积 × 高（V = Sh = abh）。", difficulty: 2, day: 2 },
      { text: "体积单位换算：1m³ = 1000dm³，1dm³ = 1000cm³。", difficulty: 2, day: 2 },
      { text: "容积单位关联：1dm³ = 1L，1cm³ = 1mL。", difficulty: 2, day: 3 },
      { text: "排水法测体积：不规则物体体积 = 容器内水面升高的体积。", difficulty: 4, day: 3 },
      { text: "切割与拼接：理解立体图形切割后表面积增加的规律。", difficulty: 4, day: 3 }
    ],
    days: {
      3: [
        { id: 'w10d3-1', type: 'new_knowledge', title: '【核心心法】排水与切拼', isCompleted: false, content: '核心奥义：掌握不规则物体体积测算及切割拼接后的面积变化规律。' }
      ],
      4: [
        { id: 'w10d4-1', type: 'review', title: '【回顾】空间展开图修复', isCompleted: false, content: '复盘长方体/正方体展开图的对应面判断。' }
      ],
      5: [
        { id: 'w10d5-1', type: 'practice', title: '【周度测试】三维空间统领', isCompleted: false, content: '综合考查表面积、体积、容积及单位换算。' }
      ]
    }
  },
  {
    week: 11,
    title: "复习：模块化错题清零",
    description: "知识抽测、打乱顺序重做",
    milestone: "测试知识点提取能力",
    status: 'green',
    isLocked: true,
    keyKnowledge: [
      { text: "知识脉络梳理：将分散的知识点连接成完整的学科图谱。", difficulty: 3, day: 1 },
      { text: "易错题型分类：总结“坑题”特征，建立防御心理。", difficulty: 3, day: 1 },
      { text: "计算准确率自测：回归基础计算，确保零失误。", difficulty: 2, day: 1 },
      { text: "数形结合强化：用图形解释代数，用代数计算图形。", difficulty: 4, day: 2 },
      { text: "解题逻辑复盘：不仅知道答案，更要讲清“为什么”。", difficulty: 3, day: 2 },
      { text: "快速审题法：抓关键字（额外、一共、平均、剩余）。", difficulty: 3, day: 2 },
      { text: "时间管理策略：学会分配考试时间，先易后难。", difficulty: 2, day: 3 },
      { text: "书写规范检查：单位、答句、辅助线等细节查漏。", difficulty: 1, day: 3 },
      { text: "逆向思维训练：通过结果反推已知条件，拓宽解题思路。", difficulty: 4, day: 3 },
      { text: "自信心建立：通过模块化通关，确立对难题的攻坚心态。", difficulty: 2, day: 3 }
    ],
    days: {
      1: [
        { id: 'w11d1-1', type: 'review', title: '【模块复盘】计算与数论', isCompleted: false, content: '模块化复习计算准确率与数论核心规则。' }
      ],
      2: [
        { id: 'w11d2-1', type: 'review', title: '【模块复盘】几何与代数', isCompleted: false, content: '针对平面/立体几何及方程应用进行深度巡检。' }
      ],
      3: [
        { id: 'w11d3-1', type: 'review', title: '【模块复盘】应用题建模', isCompleted: false, content: '打乱题型顺序，练习快速提取等量关系。' }
      ],
      4: [
        { id: 'w11d4-1', type: 'review', title: '【每周回顾】全纲盲点补全', isCompleted: false, content: '针对本周抽测发现的零散盲点进行最后修复。' }
      ],
      5: [
        { id: 'w11d5-1', type: 'practice', title: '【实战】极限模拟通关', isCompleted: false, content: '模块化混合通关，确立攻坚心态。' }
      ]
    }
  },
  {
    week: 12,
    title: "总复习：全真模拟考",
    description: "历年真题实战、答题规范训练，针对上海各区考题建模",
    milestone: "全考纲知识无死角，达到小学毕业优秀水准",
    status: 'green',
    isLocked: true,
    keyKnowledge: [
      { text: "综合实战模拟：全真模拟上海小学数学等级考环境。", difficulty: 4, day: 1 },
      { text: "答题技巧总结：排除法、特殊值法在选择填空中的妙用。", difficulty: 3, day: 2 },
      { text: "细致检查清单：漏题、单位、计算、漏写答句的终极自查。", difficulty: 2, day: 3 },
      { text: "临考心态调节：掌握在限时压迫下的思维稳定性训练。", difficulty: 3, day: 1 }
    ],
    days: {
      1: [
        { id: 'w12d1-1', type: 'practice', title: '【模拟考】全真卷 A', isCompleted: false, content: '限时全真模拟测试，按照正式考试流程操作。' }
      ],
      2: [
        { id: 'w12d2-1', type: 'review', title: '【试卷复盘】A 卷讲评', isCompleted: false, content: '深入分析 A 卷错因，总结答题技巧与特殊值应用。' }
      ],
      3: [
        { id: 'w12d3-1', type: 'practice', title: '【模拟考】全真卷 B', isCompleted: false, content: '针对 A 卷薄弱环节强化的第二次模拟考试。' }
      ],
      4: [
        { id: 'w12d4-1', type: 'review', title: '【终极审查】细节清单', isCompleted: false, content: '查漏补缺：单位、答句、辅助线、书写规范判定。' }
      ],
      5: [
        { id: 'w12d5-1', type: 'practice', title: '【仪式】毕业证书申领', isCompleted: false, content: '完成最后的心态调节与毕业典礼前奏。' }
      ]
    }
  },
  {
    week: 13,
    title: "衔接冲刺一：混算与耐力",
    description: "分数/小数繁分数四则混算、强制交叉验证训练",
    milestone: "攻克预初‘计算死亡月’，实现混合运算零误差",
    status: 'red',
    isLocked: true,
    keyKnowledge: [
      { text: "死亡交叉训练：强制要求分数与小数两种方式互相化简验证。", difficulty: 5, day: 1 },
      { text: "多层嵌套繁分数：掌握‘从下往上’或‘拆项法’处理复杂式子。", difficulty: 5, day: 2 },
      { text: "运算耐力提升：连续攻克5道百步计算题保持全对。", difficulty: 4, day: 3 },
      { text: "分配律逆向套路：在极复杂混算中敏锐发现提取公因数的可能。", difficulty: 5, day: 2 },
      { text: "预初有理数铺垫：理解正负号概念在四则混合中的逻辑干扰。", difficulty: 4, day: 1 }
    ],
    days: {
      1: [
        { id: 'w13d1-1', type: 'new_knowledge', title: '【核心心法】有理数之门', isCompleted: false, content: '核心奥义：理解正负号概念，掌握基础四则混合中的符号逻辑。' }
      ],
      2: [
        { id: 'w13d2-1', type: 'new_knowledge', title: '【核心心法】分秒间的混算', isCompleted: false, content: '核心奥义：掌握多层嵌套繁分数及分配律逆推套路。' }
      ],
      3: [
        { id: 'w13d3-1', type: 'practice', title: '【实战】计算死亡月生存', isCompleted: false, content: '连续攻克 5 道百步计算题，实现混合运算零误差。' }
      ],
      4: [
        { id: 'w13d4-1', type: 'review', title: '【回顾】交叉验证复盘', isCompleted: false, content: '复盘分数与小数两种转换方式的校验逻辑。' }
      ],
      5: [
        { id: 'w13d5-1', type: 'practice', title: '【衔接测试】耐力极限', isCompleted: false, content: '综合考查预初衔接阶段的超长链条计算能力。' }
      ]
    }
  },
  {
    week: 14,
    title: "衔接冲刺二：逻辑与神髓",
    description: "比例/百分比、经济浓度问题、计数原理、极值思维",
    milestone: "Boss关：上海顶级名校分班考级别的思维对抗",
    status: 'red',
    isLocked: true,
    keyKnowledge: [
      { text: "比例与百分比实战：主攻上海预初‘折扣、利润、浓度’三座大山。", difficulty: 5, day: 1 },
      { text: "比例分配奥义：学会用份数思维解决‘比例尺’与‘混合分配’。", difficulty: 5, day: 1 },
      { text: "树状图与排列组合：不靠公式，靠逻辑推导简单的计数问题。", difficulty: 4, day: 2 },
      { text: "加乘原理初步：建立‘分类加、分步乘’的计数基础逻辑。", difficulty: 4, day: 2 },
      { text: "极值问题（抽屉原理）：建立‘最不利原则’的数学解决模型。", difficulty: 5, day: 3 }
    ],
    days: {
      1: [
        { id: 'w14d1-1', type: 'new_knowledge', title: '【核心心法】比例分配奥义', isCompleted: false, content: '核心奥义：学会用份数思维解决比例尺、折扣、利润与浓度问题。' }
      ],
      2: [
        { id: 'w14d2-1', type: 'new_knowledge', title: '【核心心法】计数之神', isCompleted: false, content: '核心奥义：建立加乘原理初步逻辑，学会树状图与排列组合推导。' }
      ],
      3: [
        { id: 'w14d3-1', type: 'new_knowledge', title: '【核心心法】最不利原则', isCompleted: false, content: '核心奥义：建立极值思维，掌握抽屉原理的数学解决模型。' }
      ],
      4: [
        { id: 'w14d4-1', type: 'review', title: '【衔接回顾】名校逻辑巅峰', isCompleted: false, content: '复盘上海顶级名校分班考级别的思维对抗题型。' }
      ],
      5: [
        { id: 'w14d5-1', type: 'practice', title: '【终极毕业测试】', isCompleted: false, content: '全考纲、全难度综合测试，标志着小学数学向预初的完美跨越。' }
      ]
    }
  }
];
