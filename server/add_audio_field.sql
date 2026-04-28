-- 为user_mistakes表添加audio_path字段
ALTER TABLE user_mistakes ADD COLUMN IF NOT EXISTS audio_path TEXT DEFAULT NULL;

-- 添加注释说明该字段的用途
ALTER TABLE user_mistakes MODIFY COLUMN audio_path TEXT COMMENT '费曼输出音频文件路径' DEFAULT NULL;
