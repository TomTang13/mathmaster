-- 学习系统表结构设计

-- 1. 用户等级表
CREATE TABLE IF NOT EXISTS user_levels (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  current_level INT DEFAULT 1,
  last_completed_at DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 2. 等级任务表
CREATE TABLE IF NOT EXISTS level_missions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  level INT NOT NULL,
  status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
  started_at DATETIME,
  completed_at DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. 知识点任务表
CREATE TABLE IF NOT EXISTS knowledge_missions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  level_mission_id INT NOT NULL,
  knowledge_id INT NOT NULL,
  status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (level_mission_id) REFERENCES level_missions(id) ON DELETE CASCADE,
  FOREIGN KEY (knowledge_id) REFERENCES key_knowledge(id) ON DELETE CASCADE
);

-- 4. 题目类型表
CREATE TABLE IF NOT EXISTS question_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type_name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. 题目难度表
CREATE TABLE IF NOT EXISTS question_difficulties (
  id INT AUTO_INCREMENT PRIMARY KEY,
  difficulty_level INT NOT NULL UNIQUE,
  description VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. 题目表（增强版）
ALTER TABLE questions
ADD COLUMN question_type_id INT,
ADD COLUMN difficulty_id INT,
ADD COLUMN order_index INT, -- 题目顺序（1-5，由易到难）
ADD FOREIGN KEY (question_type_id) REFERENCES question_types(id) ON DELETE SET NULL,
ADD FOREIGN KEY (difficulty_id) REFERENCES question_difficulties(id) ON DELETE SET NULL;

-- 7. 用户答题记录表
CREATE TABLE IF NOT EXISTS user_answers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  question_id VARCHAR(50) NOT NULL,
  user_answer TEXT,
  is_correct BOOLEAN,
  attempts INT DEFAULT 0,
  answered_at DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(question_id) ON DELETE CASCADE
);

-- 8. 知识点题目关联表
CREATE TABLE IF NOT EXISTS knowledge_questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  knowledge_id INT NOT NULL,
  question_id VARCHAR(50) NOT NULL,
  level INT NOT NULL, -- 对应等级
  order_index INT NOT NULL, -- 题目顺序（1-5）
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (knowledge_id) REFERENCES key_knowledge(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(question_id) ON DELETE CASCADE
);

-- 插入题目类型数据
INSERT INTO question_types (type_name, description) VALUES
('基础理解题', '测试对知识点基本概念的理解'),
('应用题', '测试知识点在实际问题中的应用'),
('变式题', '测试知识点的变形和扩展'),
('易错点题', '测试容易出错的知识点细节'),
('综合题', '测试知识点的综合运用能力');

-- 插入题目难度数据
INSERT INTO question_difficulties (difficulty_level, description) VALUES
(1, '简单'),
(2, '中等'),
(3, '困难'),
(4, '挑战'),
(5, '专家');
