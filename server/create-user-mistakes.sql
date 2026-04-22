-- 创建用户错题表
CREATE TABLE IF NOT EXISTS user_mistakes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  question_id VARCHAR(255) NOT NULL,
  error_count INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(question_id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_question (user_id, question_id)
);

-- 添加索引以提高查询性能
CREATE INDEX idx_user_mistakes_user_id ON user_mistakes(user_id);
CREATE INDEX idx_user_mistakes_question_id ON user_mistakes(question_id);

-- 插入测试数据（可选）
INSERT INTO user_mistakes (user_id, question_id, error_count) VALUES
(1, 'q_1_1_1', 1),
(1, 'q_1_1_2', 2),
(1, 'q_1_2_1', 1);
