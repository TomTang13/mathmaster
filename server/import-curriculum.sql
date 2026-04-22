-- 创建周计划表
CREATE TABLE IF NOT EXISTS week_plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  week INT NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  milestone VARCHAR(255),
  status VARCHAR(50),
  is_locked BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 创建关键知识点表
CREATE TABLE IF NOT EXISTS key_knowledge (
  id INT AUTO_INCREMENT PRIMARY KEY,
  week_id INT NOT NULL,
  text TEXT NOT NULL,
  difficulty INT,
  day INT,
  FOREIGN KEY (week_id) REFERENCES week_plans(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 创建任务表
CREATE TABLE IF NOT EXISTS tasks (
  id VARCHAR(50) PRIMARY KEY,
  week_id INT NOT NULL,
  day INT NOT NULL,
  type VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  duration VARCHAR(50),
  is_completed BOOLEAN DEFAULT FALSE,
  content TEXT NOT NULL,
  FOREIGN KEY (week_id) REFERENCES week_plans(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 创建问题表
CREATE TABLE IF NOT EXISTS questions (
  id VARCHAR(50) PRIMARY KEY,
  task_id VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  question TEXT NOT NULL,
  answer VARCHAR(255) NOT NULL,
  options TEXT,
  explanation TEXT,
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 插入周计划数据
INSERT INTO week_plans (week, title, description, milestone, status, is_locked) VALUES
(1, '基石与扫盲：多位数与单位', '多位数乘除法、单位换算（千克/克、千米/米、年月日）', '计算不出错，单位换算灵活应用', 'green', false),
(2, '基础图形与应用题初探', '长方形/正方形周长与面积、和差倍问题', '能画出基础应用题的线段图', 'green', false),
(3, '分数与小数初识', '同分母加减、小数意义及初步加减', '理解份数与余数的关系', 'green', false),
(4, '计算爬坡：小数乘除', '小数乘除法、四则混合运算法律（分配律重点）', '小数点位置不再点错', 'green', true),
(5, '平面几何进阶：面积奥义', '平行四边形、三角形、梯形面积，重点攻克【组合图形】割补法', '灵活运用等积变形与割补法解决复杂组合图形', 'green', true),
(6, '数论基础：因数与倍数', '质数合数、约分通分、异分母加减', '掌握分解质因数技巧', 'green', true),
(7, '进阶应用题：动态建模', '相遇、追及、环形运动；同步掌握【平均数】与统计分析', '动态过程的可视化还原，掌握复杂行程逻辑', 'green', true),
(8, '代数跨越：方程初步', '字母表示数、解基本方程模型', 'Boss关：完成算术到代数的思维转型', 'red', true),
(9, '列方程解应用题', '寻找等量关系，解决行程与倍数问题', '学会“设”而不“求”的逻辑', 'red', true),
(10, '立体空间：三维重构', '长方体/正方体表面积与体积、容积换算，攻克【展开图】思维', '从平面到立体的空间构型转换，建立坐标直觉', 'green', true),
(11, '复习：模块化错题清零', '知识抽测、打乱顺序重做', '测试知识点提取能力', 'green', true),
(12, '总复习：全真模拟考', '历年真题实战、答题规范训练，针对上海各区考题建模', '全考纲知识无死角，达到小学毕业优秀水准', 'green', true),
(13, '衔接冲刺一：混算与耐力', '分数/小数繁分数四则混算、强制交叉验证训练', '攻克预初‘计算死亡月’，实现混合运算零误差', 'red', true),
(14, '衔接冲刺二：逻辑与神髓', '比例/百分比、经济浓度问题、计数原理、极值思维', 'Boss关：上海顶级名校分班考级别的思维对抗', 'red', true);
