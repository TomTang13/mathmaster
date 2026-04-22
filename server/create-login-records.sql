CREATE TABLE IF NOT EXISTS user_login_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  login_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_user_date (user_id, login_date),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 为现有用户添加一些登录记录
INSERT INTO user_login_records (user_id, login_date) VALUES
(1, '2026-04-05'),
(1, '2026-04-06'),
(1, '2026-04-07'),
(1, '2026-04-08'),
(1, '2026-04-09'),
(1, '2026-04-10'),
(1, '2026-04-11'),
(1, '2026-04-12'),
(1, '2026-04-13'),
(1, '2026-04-14'),
(1, '2026-04-15'),
(1, '2026-04-16'),
(1, '2026-04-17'),
(1, '2026-04-18');
