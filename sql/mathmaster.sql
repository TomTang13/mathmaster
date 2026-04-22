/*
 Navicat Premium Data Transfer

 Source Server         : jws
 Source Server Type    : MySQL
 Source Server Version : 80036
 Source Host           : rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com:3306
 Source Schema         : mathmaster

 Target Server Type    : MySQL
 Target Server Version : 80036
 File Encoding         : 65001

 Date: 22/04/2026 22:31:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for key_knowledge
-- ----------------------------
DROP TABLE IF EXISTS `key_knowledge`;
CREATE TABLE `key_knowledge` (
  `id` int NOT NULL AUTO_INCREMENT,
  `week_id` int NOT NULL,
  `knowledge_text` text NOT NULL,
  `difficulty` int DEFAULT NULL,
  `target_day` int DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of key_knowledge
-- ----------------------------
BEGIN;
INSERT INTO `key_knowledge` VALUES (1, 1, '加减法凑整（高斯求和、等差数列）', 1, 1, '计算模块', '1.1计算模块-加减法凑整与高斯求和.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (2, 1, '乘法巧算（分配律、结合律、25×4等）', 2, 1, '计算模块', '1.2 乘法分配律、结合律的巧算.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (3, 1, '带符号搬家法则', 1, 2, '计算模块', '1.3带符号搬家、去括号法则.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (4, 1, '去括号法则', 1, 2, '计算模块', '1.4去括号法则-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (5, 1, '多位数计算（如 999…9 × 某个数）', 2, 3, '计算模块', '1.5多位数计算-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (6, 1, '定义新运算（自定义运算符号）', 2, 3, '计算模块', '1.6定义新运算-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (7, 2, '和差倍问题（和倍、差倍、和差）', 2, 1, '应用题模块', '7.和差倍问题-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (8, 2, '年龄问题（年龄差不变）', 2, 1, '应用题模块', '8.年龄问题-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (9, 2, '植树问题（两端、一端、环形）', 2, 2, '应用题模块', '9.植树问题-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (10, 2, '周期问题（日期、图形、数列）', 2, 2, '应用题模块', '10.周期问题-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (11, 2, '还原问题（倒推法）', 2, 3, '应用题模块', '11.还原问题-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (12, 2, '归一归总问题', 1, 3, '应用题模块', '12.归一归总问题-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (13, 3, '奇偶性分析', 2, 1, '数论模块', '13.奇偶性分析-小学生讲解.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (14, 3, '质数与合数（100以内质数表）', 2, 1, '数论模块', '14.质数与合数.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (15, 3, '整除特征（2, 3, 5, 9）', 2, 2, '数论模块', '15.整除特征-2-3-5-9.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (16, 3, '整除特征（4, 8, 25, 125）', 2, 2, '数论模块', '16.整除特征-4-8-25-125.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (17, 3, '整除特征（7, 11, 13）', 3, 3, '数论模块', '17.整除特征-7-11-13.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (18, 3, '分解质因数（短除法）', 3, 3, '数论模块', '18.分解质因数.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (19, 4, '最大公因数（GCD）与最小公倍数（LCM）', 3, 1, '数论模块', '19.最大公因数与最小公倍数.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (20, 4, '因数个数定理', 3, 1, '数论模块', '20.因数个数定理.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (21, 4, '因数和定理', 3, 1, '数论模块', '21-因数和定理.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (22, 4, '带余除法、同余问题基础', 4, 2, '数论模块', '22-带余除法与同余基础.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (23, 4, '中国剩余定理（物不知数）', 4, 2, '数论模块', '23-中国剩余定理.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (24, 4, '完全平方数', 4, 3, '数论模块', '24-完全平方数.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (25, 4, '🚩 欧拉函数与费马小定理', 5, 3, '数论补充', '25-欧拉函数与费马小定理.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (26, 5, '逻辑推理（真假话、列表法）', 3, 1, '组合模块', '26-逻辑推理.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (27, 5, '一笔画问题', 2, 1, '组合模块', '27.一笔画问题.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (28, 5, '数独模型（标准、变形）', 3, 2, '组合模块', '28_数独模型.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (29, 5, '数字谜（算式谜、虫食算）', 3, 2, '组合模块', '29._数字谜.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (30, 5, '幻方（三阶）', 3, 3, '组合模块', '30._幻方.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (31, 5, '数阵图（辐射型、封闭型）', 3, 3, '组合模块', '31.数阵图.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (32, 6, '基本图形面积（长/正/平/三/梯形）', 1, 1, '平面几何', '32.基本图形面积.md.pdf', '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (33, 6, '圆与扇形面积', 3, 1, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (34, 6, '等积变形（同底等高）', 3, 2, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (35, 6, '割补法、平移旋转法', 3, 2, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (36, 6, '差不变原理', 3, 3, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (37, 6, '一半模型', 3, 3, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (38, 7, '鸟头模型（共角模型）', 4, 1, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (39, 7, '蝴蝶模型（梯形/四边形）', 4, 1, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (40, 7, '燕尾模型', 4, 2, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (41, 7, '沙漏模型（相似三角形）', 4, 2, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (42, 7, '勾股定理及其逆定理', 3, 3, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (43, 7, '格点图形面积（皮克定理）', 2, 3, '平面几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (45, 8, '长方体、正方体表面积与体积', 2, 1, '立体几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (46, 8, '三视图求小方块个数', 2, 1, '立体几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (47, 8, '染色问题（表面涂色）', 3, 2, '立体几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (49, 8, '立体图形的切割与拼接', 4, 2, '立体几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (50, 8, '立体等积变形（熔铸、倒水）', 3, 3, '立体几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (51, 8, '圆柱与圆锥（侧面积、体积）', 4, 3, '立体几何', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (52, 9, '鸡兔同笼（假设法）', 2, 1, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (53, 9, '盈亏问题', 3, 1, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (54, 9, '平均数问题（移多补少）', 2, 2, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (55, 9, '牛吃草问题', 4, 2, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (56, 9, '分数、百分数应用题', 3, 3, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (57, 9, '浓度问题（十字交叉法）', 4, 3, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (58, 10, '工程问题（比例/分率）', 4, 1, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (59, 10, '经济问题（成本、利润、折扣）', 3, 1, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (60, 10, '比例应用题', 3, 2, '应用题模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (61, 10, '分数裂项（裂差、裂和）', 4, 2, '计算模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (62, 10, '换元法（整体代换）', 3, 3, '计算模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (63, 10, '比较与估算（放缩法、倒数法）', 4, 3, '计算模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (64, 11, '相遇问题（速度和）', 2, 1, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (65, 11, '追及问题（速度差）', 2, 1, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (66, 11, '火车过桥（车长+桥长）', 3, 2, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (67, 11, '火车与人/火车的相遇追及', 3, 2, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (68, 11, '环形跑道（同向/反向）', 3, 3, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (69, 11, '流水行船问题', 3, 3, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (70, 12, '扶梯问题', 4, 1, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (71, 12, '发车问题（公交车间隔）', 4, 1, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (72, 12, '时钟问题', 4, 2, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (73, 12, '多次相遇（柳卡图）', 5, 2, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (74, 12, '比例法解行程', 4, 3, '行程模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (75, 12, '🚩 变速问题与接送问题', 5, 3, '行程补充', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (76, 13, '枚举法（列表、树状图）', 2, 1, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (77, 13, '加法原理与乘法原理', 3, 1, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (78, 13, '标数法（最短路径数）', 3, 2, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (79, 13, '抽屉原理（最不利原则）', 4, 2, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (80, 13, '几何计数（线段、三角形、长方形）', 3, 3, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (81, 13, '数字计数（含0、重复、数字和）', 4, 3, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (82, 14, '排列（P）与组合（C）公式', 4, 1, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (83, 14, '容斥原理（两个、三个集合）', 4, 1, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (84, 14, '插板法（分组分配）', 4, 2, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (85, 14, '重复排列、圆排列、递推计数', 5, 2, '计数模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (86, 14, '游戏与策略（必胜策略）', 4, 3, '组合模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (87, 14, '构造与论证（存在性、最值）', 5, 3, '组合模块', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
INSERT INTO `key_knowledge` VALUES (88, 14, '🚩 繁分数、进位制、循环小数化分数', 4, 3, '计算补充', NULL, '2026-04-22 21:11:02', '2026-04-22 21:11:02');
COMMIT;

-- ----------------------------
-- Table structure for knowledge_missions
-- ----------------------------
DROP TABLE IF EXISTS `knowledge_missions`;
CREATE TABLE `knowledge_missions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level_mission_id` int NOT NULL,
  `knowledge_id` int NOT NULL,
  `status` enum('pending','in_progress','completed') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `level_mission_id` (`level_mission_id`),
  KEY `knowledge_id` (`knowledge_id`),
  CONSTRAINT `knowledge_missions_ibfk_1` FOREIGN KEY (`level_mission_id`) REFERENCES `level_missions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `knowledge_missions_ibfk_2` FOREIGN KEY (`knowledge_id`) REFERENCES `key_knowledge` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of knowledge_missions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for knowledge_questions
-- ----------------------------
DROP TABLE IF EXISTS `knowledge_questions`;
CREATE TABLE `knowledge_questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `knowledge_id` int NOT NULL,
  `question_id` varchar(50) NOT NULL,
  `level` int NOT NULL,
  `order_index` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `knowledge_id` (`knowledge_id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `knowledge_questions_ibfk_1` FOREIGN KEY (`knowledge_id`) REFERENCES `key_knowledge` (`id`) ON DELETE CASCADE,
  CONSTRAINT `knowledge_questions_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of knowledge_questions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for level_missions
-- ----------------------------
DROP TABLE IF EXISTS `level_missions`;
CREATE TABLE `level_missions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `level` int NOT NULL,
  `status` enum('pending','in_progress','completed') DEFAULT 'pending',
  `started_at` datetime DEFAULT NULL,
  `completed_at` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `level_missions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of level_missions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for question_difficulties
-- ----------------------------
DROP TABLE IF EXISTS `question_difficulties`;
CREATE TABLE `question_difficulties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `difficulty_level` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `difficulty_level` (`difficulty_level`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of question_difficulties
-- ----------------------------
BEGIN;
INSERT INTO `question_difficulties` VALUES (1, 1, '简单', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
INSERT INTO `question_difficulties` VALUES (2, 2, '中等', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
INSERT INTO `question_difficulties` VALUES (3, 3, '困难', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
INSERT INTO `question_difficulties` VALUES (4, 4, '挑战', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
INSERT INTO `question_difficulties` VALUES (5, 5, '专家', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
COMMIT;

-- ----------------------------
-- Table structure for question_types
-- ----------------------------
DROP TABLE IF EXISTS `question_types`;
CREATE TABLE `question_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(50) NOT NULL,
  `description` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type_name` (`type_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of question_types
-- ----------------------------
BEGIN;
INSERT INTO `question_types` VALUES (1, '填充题', '测试对知识点基本概念的理解', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
INSERT INTO `question_types` VALUES (2, '单选题', '测试知识点在实际问题中的应用', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
INSERT INTO `question_types` VALUES (3, '是非题', '测试知识点的变形和扩展', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
INSERT INTO `question_types` VALUES (4, '应用题', '测试容易出错的知识点细节', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
INSERT INTO `question_types` VALUES (5, '综合题', '测试知识点的综合运用能力', '2026-04-20 18:25:49', '2026-04-22 21:11:04', '2026-04-22 21:11:04');
COMMIT;

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `question_id` varchar(50) NOT NULL,
  `question_body` text NOT NULL,
  `answer` text NOT NULL,
  `options_json` json DEFAULT NULL,
  `explanation` text,
  `knowledge_id` int DEFAULT NULL,
  `question_type_id` int DEFAULT NULL,
  `difficulty_id` int DEFAULT NULL,
  `order_index` int DEFAULT NULL,
  `task_id` varchar(255) DEFAULT NULL,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of questions
-- ----------------------------
BEGIN;
INSERT INTO `questions` VALUES ('cq_2_1', '计算：1+2+3+4+5+6+7+8+9+10 = ?', 'C', '[\"A. 54\", \"B. 60\", \"C. 55\", \"D. 56\"]', '高斯求和：(1+10)×10÷2 = 55', 2, 2, 1, 1, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_10', '计算：1+3+5+7+9+11+13+15 = ______', 'D', '[\"A. 63\", \"B. 65\", \"C. 69\", \"D. 64\"]', '等差数列：(1+15)×8÷2 = 64', 2, 2, 3, 10, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_2', '计算：25×4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '25×4 = 100，这是常用的巧算组合', 2, 2, 1, 2, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_3', '计算：125×8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1005\"]', '125×8 = 1000，这是重要的巧算组合', 2, 2, 2, 3, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_4', '计算：25×12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '25×12 = 25×4×3 = 100×3 = 300', 2, 2, 2, 4, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_5', '计算：(40+4)×25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40×25 + 4×25 = 1000 + 100 = 1100', 2, 2, 2, 5, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_6', '计算：98+99+100+101+102 = ?', 'C', '[\"A. 499\", \"B. 501\", \"C. 500\", \"D. 505\"]', '等差数列求和：100×5 = 500', 2, 2, 3, 6, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_7', '判断：12×25 = 3×(4×25) = 300', '正确', '[\"正确\", \"错误\"]', '乘法结合律的正确运用', 2, 3, 2, 7, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_8', '判断：(a+b)×c = a×c + b×c 这是乘法分配律', '正确', '[\"正确\", \"错误\"]', '这是乘法分配律的标准形式', 2, 3, 2, 8, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_2_9', '计算：99×101 = ______', 'D', '[\"A. 10004\", \"B. 9998\", \"C. 10000\", \"D. 9999\"]', '(100-1)×(100+1) = 10000 - 1 = 9999', 2, 2, 3, 9, 'comprehensive-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_1', '计算：45+23+55+77 = ?', 'A', '[\"A. 200\", \"B. 199\", \"C. 201\", \"D. 205\"]', '凑整：(45+55)+(23+77) = 100+100 = 200', 3, 2, 1, 1, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_10', '计算：25×16×125 = ______', 'A', '[\"A. 50000\", \"B. 50001\", \"C. 50005\", \"D. 49999\"]', '25×2×8×125 = 50×1000 = 50000', 3, 2, 3, 10, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_2', '计算：125×32×25 = ?', 'A', '[\"A. 100000\", \"B. 100001\", \"C. 99999\", \"D. 100005\"]', '125×8×4×25 = 1000×100 = 100000', 3, 2, 2, 2, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_3', '计算：125-87+75-13 = ?', 'C', '[\"A. 101\", \"B. 99\", \"C. 100\", \"D. 105\"]', '带符号搬家：(125+75)-(87+13) = 200-100 = 100', 3, 2, 2, 3, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_4', '计算：36×25 = ?', 'A', '[\"A. 900\", \"B. 901\", \"C. 899\", \"D. 905\"]', '36×25 = 9×(4×25) = 9×100 = 900', 3, 2, 2, 4, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_5', '计算：23×11 = ?', 'A', '[\"A. 253\", \"B. 254\", \"C. 252\", \"D. 258\"]', '23×11 = 2 (2+3) 3 = 253', 3, 2, 2, 5, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_6', '计算：99×45 = ?', 'A', '[\"A. 4455\", \"B. 4456\", \"C. 4454\", \"D. 4460\"]', '(100-1)×45 = 4500 - 45 = 4455', 3, 2, 3, 6, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_7', '判断：a-b+c = a+c-b 这是带符号搬家', '正确', '[\"正确\", \"错误\"]', '带符号搬家的正确运用', 3, 3, 2, 7, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_8', '判断：25×44 = 25×4×11 = 1100', '正确', '[\"正确\", \"错误\"]', '乘法结合律的巧算', 3, 3, 2, 8, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_3_9', '计算：100-99+98-97+...+4-3+2-1 = ______', 'D', '[\"A. 55\", \"B. 49\", \"C. 51\", \"D. 50\"]', '每两个一组：(100-99)+(98-97)+...+(2-1) = 1×50 = 50', 3, 2, 3, 9, 'comprehensive-1-2-3', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_1', '计算：去括号：125-(25+30) = ?', 'A', '[\"A. 70\", \"B. 71\", \"C. 69\", \"D. 75\"]', '125-25-30 = 100-30 = 70', 4, 2, 1, 1, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_10', '计算：25×(40+4) = ______', 'D', '[\"A. 1105\", \"B. 1099\", \"C. 1101\", \"D. 1100\"]', '25×40 + 25×4 = 1000 + 100 = 1100', 4, 2, 3, 10, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_2', '计算：234-66-34 = ?', 'A', '[\"A. 134\", \"B. 135\", \"C. 139\", \"D. 133\"]', '234-(66+34) = 234-100 = 134', 4, 2, 2, 2, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_3', '计算：56×125 = ?', 'A', '[\"A. 7000\", \"B. 7001\", \"C. 6999\", \"D. 7005\"]', '7×8×125 = 7×1000 = 7000', 4, 2, 2, 3, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_4', '计算：345-(145-67) = ?', 'D', '[\"A. 272\", \"B. 266\", \"C. 268\", \"D. 267\"]', '345-145+67 = 200+67 = 267', 4, 2, 2, 4, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_5', '计算：123+45-23+55 = ?', 'B', '[\"A. 205\", \"B. 200\", \"C. 201\", \"D. 199\"]', '(123-23)+(45+55) = 100+100 = 200', 4, 2, 2, 5, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_6', '计算：999×999+1999 = ?', 'A', '[\"A. 1000000\", \"B. 1000001\", \"C. 999999\", \"D. 1000005\"]', '999×999+999+1000 = 999×1000+1000 = 1000×1000 = 1000000', 4, 2, 3, 6, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_7', '判断：a-(b-c) = a-b-c', '错误', '[\"正确\", \"错误\"]', '括号前是减号，去括号后要变号：a-b+c', 4, 3, 2, 7, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_8', '判断：35×22 = 35×2×11 = 770', '正确', '[\"正确\", \"错误\"]', '乘法巧算的正确运用', 4, 3, 2, 8, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_4_9', '计算：1000-99-98-97-96-95 = ______', 'B', '[\"A. 520\", \"B. 515\", \"C. 516\", \"D. 514\"]', '1000-(99+98+97+96+95) = 1000-485 = 515', 4, 2, 3, 9, 'comprehensive-1-2-4', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_1', '计算：99×23 = ?', 'A', '[\"A. 2277\", \"B. 2278\", \"C. 2276\", \"D. 2282\"]', '(100-1)×23 = 2300 - 23 = 2277', 5, 2, 1, 1, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_10', '计算：19+299+3999+4 = ______', 'D', '[\"A. 4322\", \"B. 4326\", \"C. 4320\", \"D. 4321\"]', '(19+1)+(299+1)+(3999+1)+1 = 20+300+4000+1 = 4321', 5, 2, 3, 10, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_2', '计算：999×7 = ?', 'A', '[\"A. 6993\", \"B. 6994\", \"C. 6992\", \"D. 6998\"]', '(1000-1)×7 = 7000 - 7 = 6993', 5, 2, 2, 2, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_3', '计算：567-123+33-77 = ?', 'C', '[\"A. 399\", \"B. 401\", \"C. 400\", \"D. 405\"]', '(567+33)-(123+77) = 600-200 = 400', 5, 2, 2, 3, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_4', '计算：99+999+9999+3 = ?', 'D', '[\"A. 11105\", \"B. 11099\", \"C. 11101\", \"D. 11100\"]', '(99+1)+(999+1)+(9999+1) = 100+1000+10000 = 11100', 5, 2, 2, 4, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_5', '计算：888-(188-125) = ?', 'A', '[\"A. 825\", \"B. 826\", \"C. 830\", \"D. 824\"]', '888-188+125 = 700+125 = 825', 5, 2, 2, 5, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_6', '计算：9999×2222+3333×3334 = ?', 'D', '[\"A. 33330007\", \"B. 33330003\", \"C. 33330001\", \"D. 33330000\"]', '3333×3×2222+3333×3334 = 3333×(6666+3334) = 3333×10000 = 33330000', 5, 2, 3, 6, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_7', '判断：999×a = (1000-1)×a = 1000a - a', '正确', '[\"正确\", \"错误\"]', '多位数计算的巧妙方法', 5, 3, 2, 7, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_8', '判断：a+b-c = a-c+b 是带符号搬家', '正确', '[\"正确\", \"错误\"]', '带符号搬家的正确运用', 5, 3, 2, 8, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_5_9', '计算：99999×99999 = ______', 'A', '[\"A. 9999800001\", \"B. 9999800000\", \"C. 9999800002\", \"D. 9999800006\"]', '(100000-1)×(100000-1) = 10000000000 - 200000 + 1 = 9999800001', 5, 2, 3, 9, 'comprehensive-1-3-5', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_1', '计算：定义 a★b = a×2 + b，那么 3★4 = ?', 'A', '[\"A. 10\", \"B. 15\", \"C. 11\", \"D. 9\"]', '3×2 + 4 = 6 + 4 = 10', 6, 2, 1, 1, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_10', '计算：9999×9999 + 19999 = ______', 'C', '[\"A. 100000005\", \"B. 100000001\", \"C. 100000000\", \"D. 99999999\"]', '9999×9999 + 9999 + 10000 = 9999×10000 + 10000 = 10000×10000 = 100000000', 6, 2, 3, 10, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_2', '计算：99×46 = ?', 'A', '[\"A. 4554\", \"B. 4555\", \"C. 4553\", \"D. 4559\"]', '(100-1)×46 = 4600 - 46 = 4554', 6, 2, 2, 2, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_3', '定义 a△b = (a + b) × 3，那么 5△7 = ?', 'D', '[\"A. 35\", \"B. 37\", \"C. 41\", \"D. 36\"]', '(5+7)×3 = 12×3 = 36', 6, 2, 2, 3, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_4', '计算：765-(265+178) = ?', 'C', '[\"A. 327\", \"B. 323\", \"C. 322\", \"D. 321\"]', '765-265-178 = 500-178 = 322', 6, 2, 2, 4, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_5', '计算：定义 a◇b 为 a 到 b 的和，那么 2◇5 = ?', 'D', '[\"A. 13\", \"B. 19\", \"C. 15\", \"D. 14\"]', '2+3+4+5 = 14', 6, 2, 2, 5, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_6', '计算：定义 a※b = a×b - a + b，那么 4※5 = ?', 'A', '[\"A. 21\", \"B. 26\", \"C. 22\", \"D. 20\"]', '4×5 - 4 + 5 = 20 - 4 + 5 = 21', 6, 2, 3, 6, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_7', '判断：如果 a★b = a+b×2，那么 2★3 = 8', '正确', '[\"正确\", \"错误\"]', '2 + 3×2 = 2 + 6 = 8', 6, 3, 2, 7, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_8', '判断：999×123 = 123000 - 123 = 122877', '正确', '[\"正确\", \"错误\"]', '(1000-1)×123 = 123000 - 123', 6, 3, 2, 8, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('cq_6_9', '计算：定义 a⊕b = (a+1)×(b-1)，那么 5⊕6 = ______', '30', '[]', '(5+1)×(6-1) = 6×5 = 30', 6, 1, 3, 9, 'comprehensive-1-3-6', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('pq_w2d1-k7_1', '计算：25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '25 × 4 = 100，这是常用的巧算组合，在5分钟内完成20道这样的题目是可以达到的', 7, 2, 1, 1, 'practice-w2d1-k7', '2026-04-22 21:56:32', '2026-04-22 22:16:13');
INSERT INTO `questions` VALUES ('pq_w2d1-k7_2', '计算：125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '125 × 8 = 1000，这是重要的巧算组合，需要熟练掌握', 7, 2, 1, 2, 'practice-w2d1-k7', '2026-04-22 21:56:32', '2026-04-22 22:16:13');
INSERT INTO `questions` VALUES ('pq_w2d1-k7_3', '计算：25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C.  301\", \"D. 299\"]', '25 × 12 = 25 × 4 × 3 = 100 × 3 = 300，运用了乘法结合律进行巧算', 7, 2, 2, 3, 'practice-w2d1-k7', '2026-04-22 21:56:32', '2026-04-22 22:16:13');
INSERT INTO `questions` VALUES ('pq_w2d1-k7_4', '判断：在5分钟内完成20道复杂乘法口算是可以做到的', '正确', '[\"正确\", \"错误\"]', '通过训练，是可以达到这个速度和准确率的', 7, 3, 2, 4, 'practice-w2d1-k7', '2026-04-22 21:56:32', '2026-04-22 21:56:32');
INSERT INTO `questions` VALUES ('pq_w2d1-k7_5', '计算：(40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 7, 2, 2, 5, 'practice-w2d1-k7', '2026-04-22 21:56:32', '2026-04-22 22:16:13');
INSERT INTO `questions` VALUES ('pq_w2d1-k8_1', '估算：21 × 19 ≈ ?', 'B', '[\"A. 300\", \"B. 400\", \"C. 500\", \"D. 600\"]', '21 ≈ 20，19 ≈ 20，20 × 20 = 400，使用四舍五入法进行估算', 8, 2, 2, 1, 'practice-w2d1-k8', '2026-04-22 22:03:20', '2026-04-22 22:16:13');
INSERT INTO `questions` VALUES ('pq_w2d1-k8_2', '估算：38 × 51 ≈ ?', 'C', '[\"A. 1500\", \"B. 1800\", \"C. 2000\", \"D. 2500\"]', '38 ≈ 40，51 ≈ 50，40 × 50 = 2000，使用四舍五入法进行估算', 8, 2, 2, 2, 'practice-w2d1-k8', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d1-k8_3', '估算：123 × 78 ≈ ?', 'C', '[\"A. 8000\", \"B. 9000\", \"C. 9600\", \"D. 10000\"]', '123 ≈ 120，78 ≈ 80，120 × 80 = 9600，使用四舍五入法进行估算', 8, 2, 3, 3, 'practice-w2d1-k8', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d1-k8_4', '判断：估算时应该使用四舍五入法', '正确', '[\"正确\", \"错误\"]', '四舍五入是常用的估算方法，能快速判定计算结果的合理范围', 8, 3, 1, 4, 'practice-w2d1-k8', '2026-04-22 22:03:20', '2026-04-22 22:03:20');
INSERT INTO `questions` VALUES ('pq_w2d1-k8_5', '估算：256 × 32 ≈ ?', 'B', '[\"A. 7000\", \"B. 8000\", \"C. 9000\", \"D. 10000\"]', '256 ≈ 250，32 ≈ 32，250 × 32 = 8000，使用四舍五入法进行估算', 8, 2, 3, 5, 'practice-w2d1-k8', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d2-k10_1', '计算：101 × 37 = ?', 'B', '[\"A. 3700\", \"B. 3737\", \"C. 3800\", \"D. 3837\"]', '利用分配律：(100 + 1) × 37 = 3700 + 37 = 3737', 10, 2, 2, 1, 'practice-w2d2-k10', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d2-k10_2', '计算：99 × 45 = ?', 'A', '[\"A. 4455\", \"B. 4500\", \"C. 4545\", \"D. 4600\"]', '利用分配律：(100 - 1) × 45 = 4500 - 45 = 4455', 10, 2, 2, 2, 'practice-w2d2-k10', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d2-k10_3', '计算：25 × 44 = ?', 'B', '[\"A. 1000\", \"B. 1100\", \"C. 1200\", \"D. 1300\"]', '利用分配律：25 × (40 + 4) = 1000 + 100 = 1100', 10, 2, 2, 3, 'practice-w2d2-k10', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d2-k10_4', '判断：分配律只适用于加法', '错误', '[\"正确\", \"错误\"]', '分配律适用于乘法对加法的分配，也适用于乘法对减法的分配', 10, 3, 1, 4, 'practice-w2d2-k10', '2026-04-22 22:03:21', '2026-04-22 22:03:21');
INSERT INTO `questions` VALUES ('pq_w2d2-k10_5', '计算：125 × 88 = ?', 'B', '[\"A. 10000\", \"B. 11000\", \"C. 12000\", \"D. 13000\"]', '利用分配律：125 × (80 + 8) = 10000 + 1000 = 11000', 10, 2, 3, 5, 'practice-w2d2-k10', '2026-04-22 22:03:21', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d2-k9_1', '一个因数不变，另一个因数扩大10倍，积会怎样变化？', 'B', '[\"A. 不变\", \"B. 扩大10倍\", \"C. 缩小10倍\", \"D. 扩大100倍\"]', '积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数', 9, 2, 2, 1, 'practice-w2d2-k9', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d2-k9_2', '一个因数不变，另一个因数缩小5倍，积会怎样变化？', 'C', '[\"A. 不变\", \"B. 扩大5倍\", \"C. 缩小5倍\", \"D. 缩小25倍\"]', '积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数', 9, 2, 2, 2, 'practice-w2d2-k9', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d2-k9_3', '如果 3 × 4 = 12，那么 3 × 40 = ?', 'A', '[\"A. 12\", \"B. 120\", \"C. 1200\", \"D. 12000\"]', '一个因数3不变，另一个因数4扩大10倍变为40，积也扩大10倍变为120', 9, 2, 2, 3, 'practice-w2d2-k9', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d2-k9_4', '判断：积的变化规律只适用于乘法', '正确', '[\"正确\", \"错误\"]', '积的变化规律是乘法的基本规律，描述了因数变化对积的影响', 9, 3, 1, 4, 'practice-w2d2-k9', '2026-04-22 22:03:20', '2026-04-22 22:03:20');
INSERT INTO `questions` VALUES ('pq_w2d2-k9_5', '如果 5 × 8 = 40，那么 5 × 2 = ?', 'A', '[\"A. 10\", \"B. 20\", \"C. 30\", \"D. 40\"]', '一个因数5不变，另一个因数8缩小4倍变为2，积也缩小4倍变为10', 9, 2, 2, 5, 'practice-w2d2-k9', '2026-04-22 22:03:20', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d3-k11_1', '在除法中，被除数和除数同时扩大10倍，商怎样变化？', 'C', '[\"A. 扩大10倍\", \"B. 缩小10倍\", \"C. 不变\", \"D. 扩大100倍\"]', '商不变规律：被除数和除数同时扩大（或缩小）相同的倍数，商不变', 11, 2, 2, 1, 'practice-w2d3-k11', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d3-k11_2', '如果 72 ÷ 9 = 8，那么 720 ÷ 90 = ?', 'A', '[\"A. 80\", \"B. 8\", \"C. 800\", \"D. 0.8\"]', '被除数和除数同时扩大10倍，商不变，仍然是8', 11, 2, 2, 2, 'practice-w2d3-k11', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d3-k11_3', '如果 48 ÷ 6 = 8，那么 480 ÷ 60 = ?', 'A', '[\"A. 80\", \"B. 8\", \"C. 800\", \"D. 0.8\"]', '被除数和除数同时扩大10倍，商不变，仍然是8', 11, 2, 2, 3, 'practice-w2d3-k11', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d3-k11_4', '判断：商不变规律只适用于除法', '正确', '[\"正确\", \"错误\"]', '商不变规律是除法的基本规律，描述了被除数和除数同时变化时商的变化情况', 11, 3, 1, 4, 'practice-w2d3-k11', '2026-04-22 22:06:27', '2026-04-22 22:06:27');
INSERT INTO `questions` VALUES ('pq_w2d3-k11_5', '如果 36 ÷ 4 = 9，那么 360 ÷ 40 = ?', 'A', '[\"A. 90\", \"B. 9\", \"C. 900\", \"D. 0.9\"]', '被除数和除数同时扩大10倍，商不变，仍然是9', 11, 2, 2, 5, 'practice-w2d3-k11', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d3-k12_1', '长方形的长是8厘米，宽是5厘米，面积是多少平方厘米？', 'C', '[\"A. 13\", \"B. 26\", \"C. 40\", \"D. 80\"]', '长方形面积 = 长 × 宽 = 8 × 5 = 40 平方厘米', 12, 2, 2, 1, 'practice-w2d3-k12', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d3-k12_2', '正方形的边长是6厘米，面积是多少平方厘米？', 'B', '[\"A. 24\", \"B. 36\", \"C. 48\", \"D. 72\"]', '正方形面积 = 边长 × 边长 = 6 × 6 = 36 平方厘米', 12, 2, 2, 2, 'practice-w2d3-k12', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d3-k12_3', '长方形的长扩大2倍，宽不变，面积会怎样变化？', 'B', '[\"A. 不变\", \"B. 扩大2倍\", \"C. 缩小2倍\", \"D. 扩大4倍\"]', '长方形面积与长成正比，长扩大2倍，面积也扩大2倍', 12, 2, 3, 3, 'practice-w2d3-k12', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w2d3-k12_4', '判断：面积相等的两个长方形，它们的周长一定相等', '错误', '[\"正确\", \"错误\"]', '面积相等的两个长方形，它们的周长不一定相等，例如4×9和6×6面积都是36，但周长分别是26和24', 12, 3, 1, 4, 'practice-w2d3-k12', '2026-04-22 22:06:27', '2026-04-22 22:06:27');
INSERT INTO `questions` VALUES ('pq_w2d3-k12_5', '平行四边形的底是10厘米，高是6厘米，面积是多少平方厘米？', 'C', '[\"A. 16\", \"B. 32\", \"C. 60\", \"D. 120\"]', '平行四边形面积 = 底 × 高 = 10 × 6 = 60 平方厘米', 12, 2, 2, 5, 'practice-w2d3-k12', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d1-k13_1', '把一个蛋糕平均分成4份，每份是整个蛋糕的几分之几？', 'C', '[\"A. 1/2\", \"B. 1/3\", \"C. 1/4\", \"D. 1/5\"]', '把蛋糕平均分成4份，每份就是整个蛋糕的1/4', 13, 2, 1, 1, 'practice-w3d1-k13', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d1-k13_2', '比较大小：1/2 和 1/3，哪个更大？', 'A', '[\"A. 1/2\", \"B. 1/3\", \"C. 一样大\", \"D. 无法比较\"]', '分子相同的分数，分母越小，分数越大，所以1/2 > 1/3', 13, 2, 1, 2, 'practice-w3d1-k13', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d1-k13_3', '2/5 表示什么意思？', 'B', '[\"A. 把整体平均分成2份，取其中的5份\", \"B. 把整体平均分成5份，取其中的2份\", \"C. 把整体分成2和5两部分\", \"D. 表示2个5相除\"]', '分数2/5表示把整体平均分成5份，取其中的2份', 13, 2, 2, 3, 'practice-w3d1-k13', '2026-04-22 22:06:27', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d1-k13_4', '判断：分数中分母不能为0', '正确', '[\"正确\", \"错误\"]', '分母为0没有意义，因此分数的分母不能为0', 13, 3, 1, 4, 'practice-w3d1-k13', '2026-04-22 22:06:28', '2026-04-22 22:06:28');
INSERT INTO `questions` VALUES ('pq_w3d1-k13_5', '比较大小：3/4 和 3/5，哪个更大？', 'A', '[\"A. 3/4\", \"B. 3/5\", \"C. 一样大\", \"D. 无法比较\"]', '分子相同的分数，分母越小，分数越大，所以3/4 > 3/5', 13, 2, 2, 5, 'practice-w3d1-k13', '2026-04-22 22:06:28', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d1-k14_1', '两个数的和是20，差是4，这两个数分别是多少？', 'A', '[\"A. 12和8\", \"B. 13和7\", \"C. 14和6\", \"D. 11和9\"]', '大数 = (和 + 差) ÷ 2 = 12，小数 = (和 - 差) ÷ 2 = 8', 14, 2, 2, 1, 'practice-w3d1-k14', '2026-04-22 22:11:06', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d1-k14_2', '小明和小红共有糖果30颗，小明比小红多6颗，他们各有几颗？', 'A', '[\"A. 18颗和12颗\", \"B. 20颗和10颗\", \"C. 17颗和13颗\", \"D. 19颗和11颗\"]', '小明 = (30 + 6) ÷ 2 = 18颗，小红 = (30 - 6) ÷ 2 = 12颗', 14, 2, 2, 2, 'practice-w3d1-k14', '2026-04-22 22:11:06', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d1-k14_3', '甲乙两数之和为100，甲比乙多20，求甲乙两数', 'A', '[\"A. 甲60，乙40\", \"B. 甲55，乙45\", \"C. 甲65，乙35\", \"D. 甲70，乙30\"]', '甲 = (100 + 20) ÷ 2 = 60，乙 = (100 - 20) ÷ 2 = 40', 14, 2, 2, 3, 'practice-w3d1-k14', '2026-04-22 22:11:06', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d1-k14_4', '判断：和差问题的公式是：大数 = (和 + 差) ÷ 2', '正确', '[\"正确\", \"错误\"]', '和差问题的标准公式', 14, 3, 1, 4, 'practice-w3d1-k14', '2026-04-22 22:11:06', '2026-04-22 22:11:06');
INSERT INTO `questions` VALUES ('pq_w3d1-k14_5', '父子年龄之和是60，父亲比儿子大24岁，父亲多少岁？', 'A', '[\"A. 42岁\", \"B. 40岁\", \"C. 38岁\", \"D. 44岁\"]', '父亲 = (60 + 24) ÷ 2 = 42岁', 14, 2, 2, 5, 'practice-w3d1-k14', '2026-04-22 22:11:06', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d2-k15_1', '甲乙两数和是60，甲是乙的3倍，甲乙分别是多少？', 'A', '[\"A. 甲45，乙15\", \"B. 甲40，乙20\", \"C. 甲48，乙12\", \"D. 甲42，乙18\"]', '乙 = 60 ÷ (3 + 1) = 15，甲 = 15 × 3 = 45', 15, 2, 2, 1, 'practice-w3d2-k15', '2026-04-22 22:11:07', '2026-04-22 22:16:14');
INSERT INTO `questions` VALUES ('pq_w3d2-k15_2', '果园里有苹果树和梨树共120棵，苹果树是梨树的4倍，各多少棵？', 'A', '[\"A. 苹果树96棵，梨树24棵\", \"B. 苹果树80棵，梨树40棵\", \"C. 苹果树90棵，梨树30棵\", \"D. 苹果树100棵，梨树20棵\"]', '梨树 = 120 ÷ (4 + 1) = 24棵，苹果树 = 24 × 4 = 96棵', 15, 2, 2, 2, 'practice-w3d2-k15', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d2-k15_3', '学校买来篮球和足球共45个，篮球是足球的2倍，各几个？', 'A', '[\"A. 篮球30个，足球15个\", \"B. 篮球25个，足球20个\", \"C. 篮球35个，足球10个\", \"D. 篮球28个，足球17个\"]', '足球 = 45 ÷ (2 + 1) = 15个，篮球 = 15 × 2 = 30个', 15, 2, 2, 3, 'practice-w3d2-k15', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d2-k15_4', '判断：和倍问题中，小数 = 和 ÷ (倍数 + 1)', '正确', '[\"正确\", \"错误\"]', '和倍问题的标准公式', 15, 3, 1, 4, 'practice-w3d2-k15', '2026-04-22 22:11:07', '2026-04-22 22:11:07');
INSERT INTO `questions` VALUES ('pq_w3d2-k15_5', '甲乙共有书100本，甲是乙的4倍少5本，甲乙各几本？', 'A', '[\"A. 甲75本，乙25本\", \"B. 甲80本，乙20本\", \"C. 甲70本，乙30本\", \"D. 甲65本，乙35本\"]', '乙 = (100 + 5) ÷ (4 + 1) = 25本，甲 = 25 × 4 - 5 = 75本', 15, 2, 2, 5, 'practice-w3d2-k15', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d2-k16_1', '甲比乙多30，甲是乙的3倍，甲乙各是多少？', 'A', '[\"A. 甲45，乙15\", \"B. 甲40，乙10\", \"C. 甲48，乙18\", \"D. 甲42，乙12\"]', '乙 = 30 ÷ (3 - 1) = 15，甲 = 15 × 3 = 45', 16, 2, 2, 1, 'practice-w3d2-k16', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d2-k16_2', '爸爸比儿子大24岁，爸爸年龄是儿子的3倍，父子各几岁？', 'A', '[\"A. 爸爸36岁，儿子12岁\", \"B. 爸爸33岁，儿子9岁\", \"C. 爸爸39岁，儿子15岁\", \"D. 爸爸30岁，儿子6岁\"]', '儿子 = 24 ÷ (3 - 1) = 12岁，爸爸 = 12 × 3 = 36岁', 16, 2, 2, 2, 'practice-w3d2-k16', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d2-k16_3', '甲仓存粮比乙仓多60吨，甲仓是乙仓的4倍，各存粮多少？', 'A', '[\"A. 甲80吨，乙20吨\", \"B. 甲75吨，乙15吨\", \"C. 甲85吨，乙25吨\", \"D. 甲70吨，乙10吨\"]', '乙 = 60 ÷ (4 - 1) = 20吨，甲 = 20 × 4 = 80吨', 16, 2, 2, 3, 'practice-w3d2-k16', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d2-k16_4', '判断：差倍问题中，小数 = 差 ÷ (倍数 - 1)', '正确', '[\"正确\", \"错误\"]', '差倍问题的标准公式', 16, 3, 1, 4, 'practice-w3d2-k16', '2026-04-22 22:11:07', '2026-04-22 22:11:07');
INSERT INTO `questions` VALUES ('pq_w3d2-k16_5', '甲比乙多18，甲是乙的2倍，甲乙各几？', 'A', '[\"A. 甲36，乙18\", \"B. 甲30，乙12\", \"C. 甲34，乙16\", \"D. 甲32，乙14\"]', '乙 = 18 ÷ (2 - 1) = 18，甲 = 18 × 2 = 36', 16, 2, 2, 5, 'practice-w3d2-k16', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d3-k17_1', '关于倍比问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 17, 2, 1, 1, 'practice-w3d3-k17', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d3-k17_2', '关于倍比问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 17, 2, 1, 2, 'practice-w3d3-k17', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d3-k17_3', '关于倍比问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 17, 2, 2, 3, 'practice-w3d3-k17', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d3-k17_4', '判断：倍比问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 17, 3, 1, 4, 'practice-w3d3-k17', '2026-04-22 22:11:07', '2026-04-22 22:11:07');
INSERT INTO `questions` VALUES ('pq_w3d3-k17_5', '关于倍比问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 17, 2, 2, 5, 'practice-w3d3-k17', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d3-k18_1', '关于相遇问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 18, 2, 1, 1, 'practice-w3d3-k18', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d3-k18_2', '关于相遇问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 18, 2, 1, 2, 'practice-w3d3-k18', '2026-04-22 22:11:07', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d3-k18_3', '关于相遇问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 18, 2, 2, 3, 'practice-w3d3-k18', '2026-04-22 22:11:08', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w3d3-k18_4', '判断：相遇问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 18, 3, 1, 4, 'practice-w3d3-k18', '2026-04-22 22:11:08', '2026-04-22 22:11:08');
INSERT INTO `questions` VALUES ('pq_w3d3-k18_5', '关于相遇问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 18, 2, 2, 5, 'practice-w3d3-k18', '2026-04-22 22:11:08', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k19_1', '关于追及问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 19, 2, 1, 1, 'practice-w4d1-k19', '2026-04-22 22:11:08', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k19_2', '关于追及问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 19, 2, 1, 2, 'practice-w4d1-k19', '2026-04-22 22:11:08', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k19_3', '关于追及问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 19, 2, 2, 3, 'practice-w4d1-k19', '2026-04-22 22:11:08', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k19_4', '判断：追及问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 19, 3, 1, 4, 'practice-w4d1-k19', '2026-04-22 22:11:08', '2026-04-22 22:11:08');
INSERT INTO `questions` VALUES ('pq_w4d1-k19_5', '关于追及问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 19, 2, 2, 5, 'practice-w4d1-k19', '2026-04-22 22:11:08', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k20_1', '关于植树问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 20, 2, 1, 1, 'practice-w4d1-k20', '2026-04-22 22:11:08', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k20_2', '关于植树问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 20, 2, 1, 2, 'practice-w4d1-k20', '2026-04-22 22:11:08', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k20_3', '关于植树问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 20, 2, 2, 3, 'practice-w4d1-k20', '2026-04-22 22:11:09', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k20_4', '判断：植树问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 20, 3, 1, 4, 'practice-w4d1-k20', '2026-04-22 22:11:09', '2026-04-22 22:11:09');
INSERT INTO `questions` VALUES ('pq_w4d1-k20_5', '关于植树问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 20, 2, 2, 5, 'practice-w4d1-k20', '2026-04-22 22:11:09', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k21_1', '关于年龄问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 21, 2, 1, 1, 'practice-w4d1-k21', '2026-04-22 22:11:09', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k21_2', '关于年龄问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 21, 2, 1, 2, 'practice-w4d1-k21', '2026-04-22 22:11:09', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k21_3', '关于年龄问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 21, 2, 2, 3, 'practice-w4d1-k21', '2026-04-22 22:11:09', '2026-04-22 22:16:15');
INSERT INTO `questions` VALUES ('pq_w4d1-k21_4', '判断：年龄问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 21, 3, 1, 4, 'practice-w4d1-k21', '2026-04-22 22:11:09', '2026-04-22 22:11:09');
INSERT INTO `questions` VALUES ('pq_w4d1-k21_5', '关于年龄问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 21, 2, 2, 5, 'practice-w4d1-k21', '2026-04-22 22:11:09', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d2-k22_1', '关于时钟问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 22, 2, 1, 1, 'practice-w4d2-k22', '2026-04-22 22:11:09', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d2-k22_2', '关于时钟问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 22, 2, 1, 2, 'practice-w4d2-k22', '2026-04-22 22:11:09', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d2-k22_3', '关于时钟问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 22, 2, 2, 3, 'practice-w4d2-k22', '2026-04-22 22:11:09', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d2-k22_4', '判断：时钟问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 22, 3, 1, 4, 'practice-w4d2-k22', '2026-04-22 22:11:09', '2026-04-22 22:11:09');
INSERT INTO `questions` VALUES ('pq_w4d2-k22_5', '关于时钟问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 22, 2, 2, 5, 'practice-w4d2-k22', '2026-04-22 22:11:09', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d2-k23_1', '关于盈亏问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 23, 2, 1, 1, 'practice-w4d2-k23', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d2-k23_2', '关于盈亏问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 23, 2, 1, 2, 'practice-w4d2-k23', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d2-k23_3', '关于盈亏问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 23, 2, 2, 3, 'practice-w4d2-k23', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d2-k23_4', '判断：盈亏问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 23, 3, 1, 4, 'practice-w4d2-k23', '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `questions` VALUES ('pq_w4d2-k23_5', '关于盈亏问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 23, 2, 2, 5, 'practice-w4d2-k23', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d3-k24_1', '关于工程问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 24, 2, 1, 1, 'practice-w4d3-k24', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d3-k24_2', '关于工程问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 24, 2, 1, 2, 'practice-w4d3-k24', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d3-k24_3', '关于工程问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 24, 2, 2, 3, 'practice-w4d3-k24', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d3-k24_4', '判断：工程问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 24, 3, 1, 4, 'practice-w4d3-k24', '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `questions` VALUES ('pq_w4d3-k24_5', '关于工程问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 24, 2, 2, 5, 'practice-w4d3-k24', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d3-k25_1', '关于正反比例的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 25, 2, 1, 1, 'practice-w4d3-k25', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d3-k25_2', '关于正反比例的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 25, 2, 1, 2, 'practice-w4d3-k25', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d3-k25_3', '关于正反比例的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 25, 2, 2, 3, 'practice-w4d3-k25', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w4d3-k25_4', '判断：正反比例知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 25, 3, 1, 4, 'practice-w4d3-k25', '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `questions` VALUES ('pq_w4d3-k25_5', '关于正反比例的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 25, 2, 2, 5, 'practice-w4d3-k25', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w5d1-k26_1', '关于比例分配的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 26, 2, 1, 1, 'practice-w5d1-k26', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w5d1-k26_2', '关于比例分配的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 26, 2, 1, 2, 'practice-w5d1-k26', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w5d1-k26_3', '关于比例分配的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 26, 2, 2, 3, 'practice-w5d1-k26', '2026-04-22 22:11:10', '2026-04-22 22:16:16');
INSERT INTO `questions` VALUES ('pq_w5d1-k26_4', '判断：比例分配知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 26, 3, 1, 4, 'practice-w5d1-k26', '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `questions` VALUES ('pq_w5d1-k26_5', '关于比例分配的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 26, 2, 2, 5, 'practice-w5d1-k26', '2026-04-22 22:11:10', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d1-k27_1', '关于百分数问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 27, 2, 1, 1, 'practice-w5d1-k27', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d1-k27_2', '关于百分数问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 27, 2, 1, 2, 'practice-w5d1-k27', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d1-k27_3', '关于百分数问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 27, 2, 2, 3, 'practice-w5d1-k27', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d1-k27_4', '判断：百分数问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 27, 3, 1, 4, 'practice-w5d1-k27', '2026-04-22 22:11:11', '2026-04-22 22:11:11');
INSERT INTO `questions` VALUES ('pq_w5d1-k27_5', '关于百分数问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 27, 2, 2, 5, 'practice-w5d1-k27', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d2-k28_1', '关于浓度问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 28, 2, 1, 1, 'practice-w5d2-k28', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d2-k28_2', '关于浓度问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 28, 2, 1, 2, 'practice-w5d2-k28', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d2-k28_3', '关于浓度问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 28, 2, 2, 3, 'practice-w5d2-k28', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d2-k28_4', '判断：浓度问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 28, 3, 1, 4, 'practice-w5d2-k28', '2026-04-22 22:11:11', '2026-04-22 22:11:11');
INSERT INTO `questions` VALUES ('pq_w5d2-k28_5', '关于浓度问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 28, 2, 2, 5, 'practice-w5d2-k28', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d2-k29_1', '关于经济问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 29, 2, 1, 1, 'practice-w5d2-k29', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d2-k29_2', '关于经济问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 29, 2, 1, 2, 'practice-w5d2-k29', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d2-k29_3', '关于经济问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 29, 2, 2, 3, 'practice-w5d2-k29', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d2-k29_4', '判断：经济问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 29, 3, 1, 4, 'practice-w5d2-k29', '2026-04-22 22:11:11', '2026-04-22 22:11:11');
INSERT INTO `questions` VALUES ('pq_w5d2-k29_5', '关于经济问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 29, 2, 2, 5, 'practice-w5d2-k29', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d3-k30_1', '关于面积综合的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 30, 2, 1, 1, 'practice-w5d3-k30', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d3-k30_2', '关于面积综合的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 30, 2, 1, 2, 'practice-w5d3-k30', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d3-k30_3', '关于面积综合的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 30, 2, 2, 3, 'practice-w5d3-k30', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d3-k30_4', '判断：面积综合知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 30, 3, 1, 4, 'practice-w5d3-k30', '2026-04-22 22:11:11', '2026-04-22 22:11:11');
INSERT INTO `questions` VALUES ('pq_w5d3-k30_5', '关于面积综合的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 30, 2, 2, 5, 'practice-w5d3-k30', '2026-04-22 22:11:11', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d3-k31_1', '关于体积综合的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 31, 2, 1, 1, 'practice-w5d3-k31', '2026-04-22 22:11:12', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d3-k31_2', '关于体积综合的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 31, 2, 1, 2, 'practice-w5d3-k31', '2026-04-22 22:11:12', '2026-04-22 22:16:17');
INSERT INTO `questions` VALUES ('pq_w5d3-k31_3', '关于体积综合的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 31, 2, 2, 3, 'practice-w5d3-k31', '2026-04-22 22:11:12', '2026-04-22 22:16:18');
INSERT INTO `questions` VALUES ('pq_w5d3-k31_4', '判断：体积综合知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 31, 3, 1, 4, 'practice-w5d3-k31', '2026-04-22 22:11:12', '2026-04-22 22:11:12');
INSERT INTO `questions` VALUES ('pq_w5d3-k31_5', '关于体积综合的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 31, 2, 2, 5, 'practice-w5d3-k31', '2026-04-22 22:11:12', '2026-04-22 22:16:18');
INSERT INTO `questions` VALUES ('pq_w6d1-k32_1', '关于统计问题的题目1：计算 25 × 4 = ?', 'C', '[\"A. 105\", \"B. 101\", \"C. 100\", \"D. 99\"]', '基础计算题', 32, 2, 1, 1, 'practice-w6d1-k32', '2026-04-22 22:11:12', '2026-04-22 22:16:18');
INSERT INTO `questions` VALUES ('pq_w6d1-k32_2', '关于统计问题的题目2：计算 125 × 8 = ?', 'A', '[\"A. 1000\", \"B. 1001\", \"C. 999\", \"D. 1002\"]', '基础计算题', 32, 2, 1, 2, 'practice-w6d1-k32', '2026-04-22 22:11:12', '2026-04-22 22:16:18');
INSERT INTO `questions` VALUES ('pq_w6d1-k32_3', '关于统计问题的题目3：计算 25 × 12 = ?', 'B', '[\"A. 305\", \"B. 300\", \"C. 301\", \"D. 299\"]', '运用乘法分配律进行巧算', 32, 2, 2, 3, 'practice-w6d1-k32', '2026-04-22 22:11:12', '2026-04-22 22:16:18');
INSERT INTO `questions` VALUES ('pq_w6d1-k32_4', '判断：统计问题知识在日常生活中很有用', '正确', '[\"正确\", \"错误\"]', '数学知识在日常生活中有广泛应用', 32, 3, 1, 4, 'practice-w6d1-k32', '2026-04-22 22:11:12', '2026-04-22 22:11:12');
INSERT INTO `questions` VALUES ('pq_w6d1-k32_5', '关于统计问题的题目4：计算 (40 + 4) × 25 = ?', 'D', '[\"A. 1099\", \"B. 1105\", \"C. 1101\", \"D. 1100\"]', '乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100', 32, 2, 2, 5, 'practice-w6d1-k32', '2026-04-22 22:11:12', '2026-04-22 22:16:18');
INSERT INTO `questions` VALUES ('q_1_1_1', '计算：高斯求和公式 1+2+3+...+n = ?', 'B', '[\"A. n×(n-1)÷2\", \"B. n×(n+1)÷2\", \"C. (n+1)×(n+2)÷2\", \"D. n×n÷2\"]', '高斯求和公式适用于求等差数列的和，首项为1，公差为1。公式为：和=(首项+末项)×项数÷2，即n×(n+1)÷2', 1, 2, 1, 1, 'practice-1-1-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_1_2', '计算：使用加减法凑整计算：48+97+52+103 = ?', '300', '[]', '48+52=100，97+103=200，100+200=300。通过凑整使计算更简便', 1, 1, 2, 2, 'practice-1-1-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_1_3', '判断：等差数列的和可以用\"（首项+末项）×项数÷2\"来计算。', '正确', '[\"正确\", \"错误\"]', '这是等差数列求和的标准公式，适用于所有等差数列', 1, 3, 1, 3, 'practice-1-1-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_1_4', '计算：2+4+6+8+...+20 = ?', '110', '[]', '这是公差为2的等差数列，共10项。和=(2+20)×10÷2=110', 1, 1, 3, 4, 'practice-1-1-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_1_5', '用凑整法计算：999+298+97+503 = ________', '1897', '[]', '999+1=1000，298+2=300，97+3=100，503-6=497，1000+300+100+497=1897', 1, 1, 4, 5, 'practice-1-1-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_2_1', '乘法分配律公式 (a+b)×c = ?', 'A', '[\"A. a×c+b×c\", \"B. a×b+c×b\", \"C. a+b×c\", \"D. a×b×c\"]', '乘法分配律是数学中的基本运算律，表示两个数的和与第三个数相乘，等于分别相乘再相加，即(a+b)×c = a×c + b×c', 2, 2, 1, 1, 'practice-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_2_2', '使用乘法巧算计算：25×4 = ?（利用特殊数的组合）', '100', '[]', '25×4=100，这是乘法中的特殊组合，经常用于简化计算', 2, 1, 2, 2, 'practice-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_2_3', '判断：125×8=1000 可以利用\"25×4=100\"的技巧来记忆。', '正确', '[\"正确\", \"错误\"]', '125×8=1000与25×4=100都是特殊的乘法组合，可以通过类比来记忆', 2, 3, 1, 3, 'practice-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_2_4', '计算：36×25 = ? (提示：36=9×4)', '900', '[]', '36×25=9×4×25=9×100=900，利用乘法结合律简化计算', 2, 1, 3, 4, 'practice-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_1_2_5', '用分配律计算：101×37 = ________', '3737', '[]', '101×37=(100+1)×37=100×37+1×37=3700+37=3737', 2, 1, 4, 5, 'practice-1-1-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_3_1', '在加减混合运算中，关于\"带符号搬家\"，下列说法正确的是？', 'A', '[\"A. 交换数的位置时，必须连同前面的符号一起搬\", \"B. 交换数的位置时，只需要搬数字，不需要管符号\", \"C. 只能交换相邻两个数的位置\", \"D. 带符号搬家只适用于加法\"]', '带符号搬家法则：在同级运算中，交换数的位置时，必须连同它前面的符号一起移动。这样可以让计算更简便。', 3, 2, 1, 1, 'practice-1-2-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_3_2', '计算：123 - 45 + 77 - 55 = ?', '100', '[]', '使用带符号搬家：123 + 77 - 45 - 55 = (123 + 77) - (45 + 55) = 200 - 100 = 100', 3, 1, 2, 2, 'practice-1-2-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_3_3', '计算：28 × 13 ÷ 7 = ?', '52', '[]', '乘除混合运算也可以带符号搬家：28 ÷ 7 × 13 = 4 × 13 = 52', 3, 1, 2, 3, 'practice-1-2-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_3_4', '判断：在只有加减法的算式中，任意交换两个数的位置，计算结果不变。', '错误', '[\"正确\", \"错误\"]', '错误。交换位置时必须连同前面的符号一起搬家，否则结果会改变。', 3, 3, 1, 4, 'practice-1-2-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_3_5', '计算：89 - 123 + 111 - 77 = ______', '0', '[]', '带符号搬家：89 + 111 - 123 - 77 = (89 + 111) - (123 + 77) = 200 - 200 = 0', 3, 1, 3, 5, 'practice-1-2-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_4_1', '去括号时，如果括号前面是\"+\"号，去括号后括号里的各项符号？', 'A', '[\"A. 都不变\", \"B. 都改变\", \"C. 第一项不变，其他变\", \"D. 第一项变，其他不变\"]', '去括号法则：括号前面是\"+\"号，去括号后里面各项符号都不变。', 4, 2, 1, 1, 'practice-1-2-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_4_2', '去括号时，如果括号前面是\"-\"号，去括号后括号里的各项符号？', 'B', '[\"A. 都不变\", \"B. 都要变号（+变-，-变+）\", \"C. 只有第一项变\", \"D. 只有最后一项变\"]', '去括号法则：括号前面是\"-\"号，去括号后里面各项符号都要变号，+变-，-变+。', 4, 2, 2, 2, 'practice-1-2-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_4_3', '计算：156 - (56 + 38) = ?', '62', '[]', '去括号：156 - 56 - 38 = 100 - 38 = 62', 4, 1, 2, 3, 'practice-1-2-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_4_4', '判断：234 - (134 - 50) = 234 - 134 - 50', '错误', '[\"正确\", \"错误\"]', '错误。括号前是减号，去括号后里面的减号要变成加号：234 - 134 + 50 = 150', 4, 3, 2, 4, 'practice-1-2-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_4_5', '计算：875 - (375 - 234) + 166 = ______', '900', '[]', '去括号后组合凑整：875 - 375 + 234 + 166 = (875 - 375) + (234 + 166) = 500 + 400 = 900', 4, 1, 3, 5, 'practice-1-2-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_5_1', '计算：999 × 5 = ?', '4995', '[]', '999×5 = (1000-1)×5 = 5000 - 5 = 4995', 5, 1, 1, 1, 'practice-1-3-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_5_2', '计算：9999 × 12 = ?', '119988', '[]', '9999×12 = (10000-1)×12 = 120000 - 12 = 119988', 5, 1, 2, 2, 'practice-1-3-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_5_3', '计算：999 + 99 + 9 + 3 = ?', '1110', '[]', '把3拆成1+1+1：(999+1)+(99+1)+(9+1) = 1000+100+10 = 1110', 5, 1, 2, 3, 'practice-1-3-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_5_4', '判断：99×99 = 9801', '正确', '[\"正确\", \"错误\"]', '99×99 = (100-1)×99 = 9900 - 99 = 9801', 5, 3, 2, 4, 'practice-1-3-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_5_5', '计算：99999 × 99999 + 199999 = ______', '10000000000', '[]', '99999×99999+199999 = 99999² + 2×99999 + 1 = (99999+1)² = 100000² = 10000000000', 5, 1, 3, 5, 'practice-1-3-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_6_1', '如果定义 a★b = a + b×2，那么 3★4 = ?', '11', '[]', '按照定义：3 + 4×2 = 3 + 8 = 11', 6, 1, 1, 1, 'practice-1-3-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_6_2', '如果定义 a△b = a×3 - b，那么 8△(5△2) = ?', '13', '[]', '先算括号里：5△2 = 5×3-2 = 13，再算8△13 = 8×3-13 = 24-13 = 11', 6, 1, 2, 2, 'practice-1-3-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_6_3', '如果定义 a⊕b 表示从a到b的所有整数的和，那么 3⊕6 = ?', '18', '[]', '3+4+5+6 = 18', 6, 1, 2, 3, 'practice-1-3-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_6_4', '如果定义 a○b = a×b + a + b，那么 2○3 = 11', '正确', '[\"正确\", \"错误\"]', '2×3 + 2 + 3 = 6 + 2 + 3 = 11', 6, 3, 2, 4, 'practice-1-3-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('q_6_5', '如果定义 a※b = (a + b) × (a - b)，那么 10※8 = ______', '36', '[]', '(10+8)×(10-8) = 18×2 = 36', 6, 1, 3, 5, 'practice-1-3-2', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_1', '计算：1+2+3+...+20 = ?', '210', '[]', '高斯求和：(1+20)×20÷2 = 210', 4, 1, 1, 1, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_10', '计算：100-98+96-94+...+4-2 = ______', '50', '[]', '每两个一组，共25组，每组=2，25×2=50', 4, 1, 3, 10, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_2', '计算：25×32 = ?', '800', '[]', '25×32 = 25×4×8 = 100×8 = 800', 4, 1, 2, 2, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_3', '计算：156-45-55 = ?', '56', '[]', '156-(45+55) = 156-100 = 56', 4, 1, 2, 3, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_4', '计算：99×56 = ?', '5544', '[]', '(100-1)×56 = 5600-56 = 5544', 4, 1, 2, 4, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_5', '计算：234+56-34+44 = ?', '300', '[]', '(234-34)+(56+44) = 200+100 = 300', 4, 1, 2, 5, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_6', '计算：125×56 = ?', '7000', '[]', '125×8×7 = 1000×7 = 7000', 4, 1, 3, 6, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_7', '判断：a-(b+c) = a-b+c', '错误', '[\"正确\", \"错误\"]', '括号前是减号，去括号后要变号：a-b-c', 4, 3, 2, 7, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_8', '判断：25×44 = 25×40+25×4', '正确', '[\"正确\", \"错误\"]', '乘法分配律的正确运用', 4, 3, 2, 8, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r4_9', '计算：999×999+999 = ______', '999000', '[]', '999×(999+1) = 999×1000 = 999000', 4, 1, 3, 9, 'review-1-4-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_1', '计算：25×4+125×8 = ?', '1100', '[]', '100+1000=1100', 6, 1, 1, 1, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_10', '定义 a※b = (a+b)×(a-b)，那么 8※5 = ______', '39', '[]', '(8+5)×(8-5)=13×3=39', 6, 1, 3, 10, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_2', '定义 a★b = a+2×b，那么 4★5 = ?', '14', '[]', '4+2×5=14', 6, 1, 2, 2, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_3', '计算：789-123-45-32 = ?', '589', '[]', '789-(123+45+32)=789-200=589', 6, 1, 2, 3, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_4', '计算：9999×23 = ?', '229977', '[]', '(10000-1)×23=230000-23=229977', 6, 1, 2, 4, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_5', '计算：1+3+5+7+9+11+13 = ?', '49', '[]', '7个数的平方，7×7=49', 6, 1, 2, 5, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_6', '计算：25×125×32 = ?', '1000000', '[]', '25×4×125×8=100×1000=100000', 6, 1, 3, 6, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_7', '判断：定义 a◇b = a×b - a，那么 5◇4 = 16', '错误', '[\"正确\", \"错误\"]', '5×4-5=20-5=15，不是16', 6, 3, 2, 7, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_8', '判断：a+b-c-d = (a+b)-(c+d)', '正确', '[\"正确\", \"错误\"]', '减法的性质，连续减等于减它们的和', 6, 3, 2, 8, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `questions` VALUES ('r5_9', '计算：999×999+999×2+1 = ______', '1000000', '[]', '(999+1)² = 1000² = 1000000', 6, 1, 3, 9, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
COMMIT;

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `task_id` varchar(50) NOT NULL,
  `week_id` int DEFAULT NULL,
  `day_number` int DEFAULT NULL,
  `task_type` enum('comprehensive','practice','mistake','review') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) NOT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `content` text,
  `is_completed` tinyint(1) DEFAULT '0',
  `score` int NOT NULL DEFAULT '5',
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of tasks
-- ----------------------------
BEGIN;
INSERT INTO `tasks` VALUES ('comprehensive-1-1-2', 1, 1, 'comprehensive', '计算小达人闯关挑战', '15分钟', '综合运用加减法凑整、乘法巧算技巧，开启你的计算挑战之旅！', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('comprehensive-1-2-3', 1, 2, 'comprehensive', '混合运算大冒险', '15分钟', '结合加减法凑整、乘法巧算、带符号搬家法则，挑战复杂混合运算！', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('comprehensive-1-2-4', 1, 2, 'comprehensive', '计算魔法师进阶', '15分钟', '掌握带符号搬家和去括号法则，成为计算小魔法师！', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('comprehensive-1-3-5', 1, 3, 'comprehensive', '多位数挑战记', '15分钟', '综合运用去括号法则和多位数计算技巧，攻克计算难题！', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('comprehensive-1-3-6', 1, 3, 'comprehensive', '数学星球探险', '15分钟', '结合多位数计算和定义新运算，探索奇妙的数学星球！', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('practice-1-1-1', 1, 1, 'practice', '加减法凑整（高斯求和、等差数列） - 练习题', '10分钟', '包含5道关于\"加减法凑整（高斯求和、等差数列）\"的练习题', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('practice-1-1-2', 1, 1, 'practice', '乘法巧算（分配律、结合律、25×4等） - 练习题', '10分钟', '包含5道关于\"乘法巧算（分配律、结合律、25×4等）\"的练习题', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('practice-1-2-1', 1, 2, 'practice', '带符号搬家法则 - 练习题', '10分钟', '包含5道关于\"带符号搬家法则\"的练习题', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('practice-1-2-2', 1, 2, 'practice', '去括号法则 - 练习题', '10分钟', '包含5道关于\"去括号法则\"的练习题', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('practice-1-3-1', 1, 3, 'practice', '多位数计算（如 999…9 × 某个数） - 练习题', '10分钟', '包含5道关于\"多位数计算（如 999…9 × 某个数）\"的练习题', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('practice-1-3-2', 1, 3, 'practice', '定义新运算（自定义运算符号） - 练习题', '10分钟', '包含5道关于\"定义新运算（自定义运算符号）\"的练习题', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('practice-w2d1-k7', 2, 1, 'practice', '【练习】和差倍问题（和倍、差倍、和差）...', '15分钟', '基于知识点：和差倍问题（和倍、差倍、和差）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/7.和差倍问题-小学生讲解.pdf', 0, 5, '2026-04-22 21:56:32', '2026-04-22 21:56:32');
INSERT INTO `tasks` VALUES ('practice-w2d1-k8', 2, 1, 'practice', '【练习】年龄问题（年龄差不变）...', '15分钟', '基于知识点：年龄问题（年龄差不变）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/8.年龄问题-小学生讲解.pdf', 0, 5, '2026-04-22 22:03:20', '2026-04-22 22:03:20');
INSERT INTO `tasks` VALUES ('practice-w2d2-k10', 2, 2, 'practice', '【练习】周期问题（日期、图形、数列）...', '15分钟', '基于知识点：周期问题（日期、图形、数列）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/10.周期问题-小学生讲解.pdf', 0, 5, '2026-04-22 22:03:20', '2026-04-22 22:03:20');
INSERT INTO `tasks` VALUES ('practice-w2d2-k9', 2, 2, 'practice', '【练习】植树问题（两端、一端、环形）...', '15分钟', '基于知识点：植树问题（两端、一端、环形）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/9.植树问题-小学生讲解.pdf', 0, 5, '2026-04-22 22:03:20', '2026-04-22 22:03:20');
INSERT INTO `tasks` VALUES ('practice-w2d3-k11', 2, 3, 'practice', '【练习】还原问题（倒推法）...', '15分钟', '基于知识点：还原问题（倒推法）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/11.还原问题-小学生讲解.pdf', 0, 5, '2026-04-22 22:06:27', '2026-04-22 22:06:27');
INSERT INTO `tasks` VALUES ('practice-w2d3-k12', 2, 3, 'practice', '【练习】归一归总问题...', '15分钟', '基于知识点：归一归总问题\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/12.归一归总问题-小学生讲解.pdf', 0, 5, '2026-04-22 22:06:27', '2026-04-22 22:06:27');
INSERT INTO `tasks` VALUES ('practice-w3d1-k13', 3, 1, 'practice', '【练习】奇偶性分析...', '15分钟', '基于知识点：奇偶性分析\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/13.奇偶性分析-小学生讲解.pdf', 0, 5, '2026-04-22 22:06:27', '2026-04-22 22:06:27');
INSERT INTO `tasks` VALUES ('practice-w3d1-k14', 3, 1, 'practice', '【练习】质数与合数（100以内质数表）...', '15分钟', '基于知识点：质数与合数（100以内质数表）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/14.质数与合数.pdf', 0, 5, '2026-04-22 22:11:06', '2026-04-22 22:11:06');
INSERT INTO `tasks` VALUES ('practice-w3d2-k15', 3, 2, 'practice', '【练习】整除特征（2, 3, 5, 9）...', '15分钟', '基于知识点：整除特征（2, 3, 5, 9）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/15.整除特征-2-3-5-9.pdf', 0, 5, '2026-04-22 22:11:06', '2026-04-22 22:11:06');
INSERT INTO `tasks` VALUES ('practice-w3d2-k16', 3, 2, 'practice', '【练习】整除特征（4, 8, 25, 125）...', '15分钟', '基于知识点：整除特征（4, 8, 25, 125）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/16.整除特征-4-8-25-125.pdf', 0, 5, '2026-04-22 22:11:07', '2026-04-22 22:11:07');
INSERT INTO `tasks` VALUES ('practice-w3d3-k17', 3, 3, 'practice', '【练习】整除特征（7, 11, 13）...', '15分钟', '基于知识点：整除特征（7, 11, 13）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/17.整除特征-7-11-13.pdf', 0, 5, '2026-04-22 22:11:07', '2026-04-22 22:11:07');
INSERT INTO `tasks` VALUES ('practice-w3d3-k18', 3, 3, 'practice', '【练习】分解质因数（短除法）...', '15分钟', '基于知识点：分解质因数（短除法）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/18.分解质因数.pdf', 0, 5, '2026-04-22 22:11:07', '2026-04-22 22:11:07');
INSERT INTO `tasks` VALUES ('practice-w4d1-k19', 4, 1, 'practice', '【练习】最大公因数（GCD）与最小公倍数（LCM）...', '15分钟', '基于知识点：最大公因数（GCD）与最小公倍数（LCM）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/19.最大公因数与最小公倍数.pdf', 0, 5, '2026-04-22 22:11:08', '2026-04-22 22:11:08');
INSERT INTO `tasks` VALUES ('practice-w4d1-k20', 4, 1, 'practice', '【练习】因数个数定理...', '15分钟', '基于知识点：因数个数定理\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/20.因数个数定理.pdf', 0, 5, '2026-04-22 22:11:08', '2026-04-22 22:11:08');
INSERT INTO `tasks` VALUES ('practice-w4d1-k21', 4, 1, 'practice', '【练习】因数和定理...', '15分钟', '基于知识点：因数和定理\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/21-因数和定理.md.pdf', 0, 5, '2026-04-22 22:11:09', '2026-04-22 22:11:09');
INSERT INTO `tasks` VALUES ('practice-w4d2-k22', 4, 2, 'practice', '【练习】带余除法、同余问题基础...', '15分钟', '基于知识点：带余除法、同余问题基础\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/22-带余除法与同余基础.md.pdf', 0, 5, '2026-04-22 22:11:09', '2026-04-22 22:11:09');
INSERT INTO `tasks` VALUES ('practice-w4d2-k23', 4, 2, 'practice', '【练习】中国剩余定理（物不知数）...', '15分钟', '基于知识点：中国剩余定理（物不知数）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/23-中国剩余定理.md.pdf', 0, 5, '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `tasks` VALUES ('practice-w4d3-k24', 4, 3, 'practice', '【练习】完全平方数...', '15分钟', '基于知识点：完全平方数\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/24-完全平方数.md.pdf', 0, 5, '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `tasks` VALUES ('practice-w4d3-k25', 4, 3, 'practice', '【练习】🚩 欧拉函数与费马小定理...', '15分钟', '基于知识点：🚩 欧拉函数与费马小定理\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/25-欧拉函数与费马小定理.md.pdf', 0, 5, '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `tasks` VALUES ('practice-w5d1-k26', 5, 1, 'practice', '【练习】逻辑推理（真假话、列表法）...', '15分钟', '基于知识点：逻辑推理（真假话、列表法）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/26-逻辑推理.md.pdf', 0, 5, '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `tasks` VALUES ('practice-w5d1-k27', 5, 1, 'practice', '【练习】一笔画问题...', '15分钟', '基于知识点：一笔画问题\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/27.一笔画问题.md.pdf', 0, 5, '2026-04-22 22:11:10', '2026-04-22 22:11:10');
INSERT INTO `tasks` VALUES ('practice-w5d2-k28', 5, 2, 'practice', '【练习】数独模型（标准、变形）...', '15分钟', '基于知识点：数独模型（标准、变形）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/28_数独模型.md.pdf', 0, 5, '2026-04-22 22:11:11', '2026-04-22 22:11:11');
INSERT INTO `tasks` VALUES ('practice-w5d2-k29', 5, 2, 'practice', '【练习】数字谜（算式谜、虫食算）...', '15分钟', '基于知识点：数字谜（算式谜、虫食算）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/29._数字谜.md.pdf', 0, 5, '2026-04-22 22:11:11', '2026-04-22 22:11:11');
INSERT INTO `tasks` VALUES ('practice-w5d3-k30', 5, 3, 'practice', '【练习】幻方（三阶）...', '15分钟', '基于知识点：幻方（三阶）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/30._幻方.md.pdf', 0, 5, '2026-04-22 22:11:11', '2026-04-22 22:11:11');
INSERT INTO `tasks` VALUES ('practice-w5d3-k31', 5, 3, 'practice', '【练习】数阵图（辐射型、封闭型）...', '15分钟', '基于知识点：数阵图（辐射型、封闭型）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/31.数阵图.md.pdf', 0, 5, '2026-04-22 22:11:11', '2026-04-22 22:11:11');
INSERT INTO `tasks` VALUES ('practice-w6d1-k32', 6, 1, 'practice', '【练习】基本图形面积（长/正/平/三/梯形）...', '15分钟', '基于知识点：基本图形面积（长/正/平/三/梯形）\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/32.基本图形面积.md.pdf', 0, 5, '2026-04-22 22:11:12', '2026-04-22 22:11:12');
INSERT INTO `tasks` VALUES ('review-1-4-1', 1, 4, 'review', '计算模块周中复习', '15分钟', '复习本周前3天学习的计算技巧！', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `tasks` VALUES ('review-1-5-1', 1, 5, 'review', '计算模块周终大复习', '20分钟', '全面复习本周所有计算技巧！', 0, 5, '2026-04-22 21:11:05', '2026-04-22 21:11:05');
COMMIT;

-- ----------------------------
-- Table structure for user_answers
-- ----------------------------
DROP TABLE IF EXISTS `user_answers`;
CREATE TABLE `user_answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_answer` text,
  `is_correct` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int NOT NULL,
  `question_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `task_id` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_answers
-- ----------------------------
BEGIN;
INSERT INTO `user_answers` VALUES (52, 'A', 1, '2026-04-21 23:15:54', 1, 'q_1_1_1', 'practice-1-1-1', '2026-04-21 23:15:54.191765', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (53, 'B', 1, '2026-04-21 23:15:57', 1, 'q_1_1_2', 'practice-1-1-1', '2026-04-21 23:15:57.402078', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (54, '正确', 1, '2026-04-21 23:15:59', 1, 'q_1_1_3', 'practice-1-1-1', '2026-04-21 23:15:59.719608', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (55, 'C', 1, '2026-04-21 23:16:02', 1, 'q_1_1_4', 'practice-1-1-1', '2026-04-21 23:16:02.427345', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (56, '1897', 1, '2026-04-21 23:16:06', 1, 'q_1_1_5', 'practice-1-1-1', '2026-04-21 23:16:06.724946', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (57, 'B', 1, '2026-04-22 12:23:02', 1, 'q_1_2_1', 'practice-1-1-2', '2026-04-22 12:23:02.577797', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (58, 'A', 1, '2026-04-22 12:23:09', 1, 'q_1_2_2', 'practice-1-1-2', '2026-04-22 12:23:09.541649', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (59, '正确', 1, '2026-04-22 12:23:12', 1, 'q_1_2_3', 'practice-1-1-2', '2026-04-22 12:23:12.705996', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (60, 'B', 1, '2026-04-22 12:23:19', 1, 'q_1_2_4', 'practice-1-1-2', '2026-04-22 12:23:19.312784', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (61, '3737', 1, '2026-04-22 12:23:25', 1, 'q_1_2_5', 'practice-1-1-2', '2026-04-22 12:23:25.175636', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (62, '55', 0, '2026-04-22 12:29:08', 1, 'cq_2_1', 'comprehensive-1-1-2', '2026-04-22 12:29:08.371059', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (63, '55', 1, '2026-04-22 12:42:56', 1, 'cq_2_1', 'comprehensive-1-1-2', '2026-04-22 12:42:56.084350', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (64, '64', 1, '2026-04-22 12:43:26', 1, 'cq_2_10', 'comprehensive-1-1-2', '2026-04-22 12:43:26.337426', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (65, '100', 1, '2026-04-22 12:43:30', 1, 'cq_2_2', 'comprehensive-1-1-2', '2026-04-22 12:43:30.644814', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (66, '1000', 1, '2026-04-22 12:43:34', 1, 'cq_2_3', 'comprehensive-1-1-2', '2026-04-22 12:43:34.813287', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (67, '300', 1, '2026-04-22 12:43:39', 1, 'cq_2_4', 'comprehensive-1-1-2', '2026-04-22 12:43:39.838391', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (68, '1100', 1, '2026-04-22 12:43:48', 1, 'cq_2_5', 'comprehensive-1-1-2', '2026-04-22 12:43:48.147745', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (69, '500', 1, '2026-04-22 12:43:58', 1, 'cq_2_6', 'comprehensive-1-1-2', '2026-04-22 12:43:58.733397', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (70, '正确', 1, '2026-04-22 12:44:07', 1, 'cq_2_7', 'comprehensive-1-1-2', '2026-04-22 12:44:07.589504', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (71, '正确', 1, '2026-04-22 12:44:12', 1, 'cq_2_8', 'comprehensive-1-1-2', '2026-04-22 12:44:12.325069', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (72, '9999', 1, '2026-04-22 12:44:17', 1, 'cq_2_9', 'comprehensive-1-1-2', '2026-04-22 12:44:17.916571', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (73, 'A', 1, '2026-04-22 13:12:12', 1, 'q_3_1', 'practice-1-2-1', '2026-04-22 13:12:12.053528', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (74, '100', 1, '2026-04-22 13:12:29', 1, 'q_3_2', 'practice-1-2-1', '2026-04-22 13:12:29.824350', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (75, '52', 1, '2026-04-22 13:12:39', 1, 'q_3_3', 'practice-1-2-1', '2026-04-22 13:12:39.430289', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (76, '错误', 1, '2026-04-22 13:12:49', 1, 'q_3_4', 'practice-1-2-1', '2026-04-22 13:12:49.247919', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (77, '0', 1, '2026-04-22 13:13:12', 1, 'q_3_5', 'practice-1-2-1', '2026-04-22 13:13:12.810204', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (78, 'A', 1, '2026-04-22 13:18:42', 1, 'cq_3_1', 'comprehensive-1-2-3', '2026-04-22 13:18:42.842323', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (79, 'A', 1, '2026-04-22 13:18:57', 1, 'cq_3_10', 'comprehensive-1-2-3', '2026-04-22 13:18:57.222833', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (80, 'A', 1, '2026-04-22 13:19:07', 1, 'cq_3_2', 'comprehensive-1-2-3', '2026-04-22 13:19:07.473965', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (81, 'C', 1, '2026-04-22 13:19:16', 1, 'cq_3_3', 'comprehensive-1-2-3', '2026-04-22 13:19:16.700607', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (82, 'A', 1, '2026-04-22 13:19:25', 1, 'cq_3_4', 'comprehensive-1-2-3', '2026-04-22 13:19:25.276913', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (83, 'A', 1, '2026-04-22 13:19:29', 1, 'cq_3_5', 'comprehensive-1-2-3', '2026-04-22 13:19:29.809985', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (84, 'A', 1, '2026-04-22 13:20:02', 1, 'cq_3_6', 'comprehensive-1-2-3', '2026-04-22 13:20:02.574939', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (85, '正确', 1, '2026-04-22 13:20:09', 1, 'cq_3_7', 'comprehensive-1-2-3', '2026-04-22 13:20:09.937014', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (86, '正确', 1, '2026-04-22 13:20:19', 1, 'cq_3_8', 'comprehensive-1-2-3', '2026-04-22 13:20:19.274820', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (87, 'A', 0, '2026-04-22 13:21:16', 1, 'cq_3_9', 'comprehensive-1-2-3', '2026-04-22 13:21:16.837152', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (88, '1897', 1, '2026-04-22 17:43:07', 1, 'q_1_1_5', 'review-mistakes', '2026-04-22 17:43:07.831273', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (89, 'A', 1, '2026-04-22 17:43:13', 1, 'q_1_2_1', 'review-mistakes', '2026-04-22 17:43:13.017605', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (90, '300', 1, '2026-04-22 17:43:32', 1, 'q_1_1_2', 'review-mistakes', '2026-04-22 17:43:32.542601', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (91, 'C', 1, '2026-04-22 17:43:39', 1, 'cq_2_1', 'review-mistakes', '2026-04-22 17:43:39.411890', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (92, 'D', 1, '2026-04-22 17:43:49', 1, 'cq_3_9', 'review-mistakes', '2026-04-22 17:43:49.933776', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (93, 'C', 1, '2026-04-22 17:47:39', 1, 'cq_2_1', 'review-mistakes', '2026-04-22 17:47:39.094242', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (94, 'C', 1, '2026-04-22 17:48:07', 1, 'cq_2_1', 'review-mistakes', '2026-04-22 17:48:07.011105', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (95, 'A', 1, '2026-04-22 18:17:58', 1, 'q_4_1', 'practice-1-2-2', '2026-04-22 18:17:58.359941', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (96, 'B', 1, '2026-04-22 18:18:11', 1, 'q_4_2', 'practice-1-2-2', '2026-04-22 18:18:11.761884', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (97, '62', 1, '2026-04-22 18:18:21', 1, 'q_4_3', 'practice-1-2-2', '2026-04-22 18:18:21.616226', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (98, '错误', 1, '2026-04-22 18:18:30', 1, 'q_4_4', 'practice-1-2-2', '2026-04-22 18:18:30.124432', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (99, '700', 0, '2026-04-22 18:18:47', 1, 'q_4_5', 'practice-1-2-2', '2026-04-22 18:18:47.096491', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (100, 'A', 1, '2026-04-22 20:14:55', 1, 'cq_4_1', 'comprehensive-1-2-4', '2026-04-22 20:14:55.199520', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (101, 'D', 1, '2026-04-22 20:15:06', 1, 'cq_4_10', 'comprehensive-1-2-4', '2026-04-22 20:15:06.501809', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (102, 'A', 1, '2026-04-22 20:15:13', 1, 'cq_4_2', 'comprehensive-1-2-4', '2026-04-22 20:15:13.384889', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (103, 'A', 1, '2026-04-22 20:15:22', 1, 'cq_4_3', 'comprehensive-1-2-4', '2026-04-22 20:15:22.561389', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (104, 'D', 1, '2026-04-22 20:15:37', 1, 'cq_4_4', 'comprehensive-1-2-4', '2026-04-22 20:15:37.324561', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (105, 'B', 1, '2026-04-22 20:15:43', 1, 'cq_4_5', 'comprehensive-1-2-4', '2026-04-22 20:15:43.344912', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (106, 'A', 1, '2026-04-22 20:16:18', 1, 'cq_4_6', 'comprehensive-1-2-4', '2026-04-22 20:16:18.079762', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (107, '错误', 1, '2026-04-22 20:16:25', 1, 'cq_4_7', 'comprehensive-1-2-4', '2026-04-22 20:16:25.306805', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (108, '正确', 1, '2026-04-22 20:16:42', 1, 'cq_4_8', 'comprehensive-1-2-4', '2026-04-22 20:16:42.431528', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (109, 'B', 1, '2026-04-22 20:17:19', 1, 'cq_4_9', 'comprehensive-1-2-4', '2026-04-22 20:17:19.189588', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (110, 'A', 1, '2026-04-22 20:18:07', 1, 'cq_5_1', 'comprehensive-1-3-5', '2026-04-22 20:18:07.778621', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (111, 'D', 1, '2026-04-22 20:18:20', 1, 'cq_5_10', 'comprehensive-1-3-5', '2026-04-22 20:18:20.710671', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (112, 'A', 1, '2026-04-22 20:18:40', 1, 'cq_5_2', 'comprehensive-1-3-5', '2026-04-22 20:18:40.750585', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (113, 'C', 1, '2026-04-22 20:19:07', 1, 'cq_5_3', 'comprehensive-1-3-5', '2026-04-22 20:19:07.155894', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (114, 'D', 1, '2026-04-22 20:19:15', 1, 'cq_5_4', 'comprehensive-1-3-5', '2026-04-22 20:19:15.856079', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (115, 'A', 1, '2026-04-22 20:19:33', 1, 'cq_5_5', 'comprehensive-1-3-5', '2026-04-22 20:19:33.733741', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (116, 'A', 0, '2026-04-22 20:21:18', 1, 'cq_5_6', 'comprehensive-1-3-5', '2026-04-22 20:21:18.665951', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (117, '正确', 1, '2026-04-22 20:21:44', 1, 'cq_5_7', 'comprehensive-1-3-5', '2026-04-22 20:21:44.560830', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (118, '正确', 1, '2026-04-22 20:21:50', 1, 'cq_5_8', 'comprehensive-1-3-5', '2026-04-22 20:21:50.470578', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (119, 'A', 1, '2026-04-22 20:21:55', 1, 'cq_5_9', 'comprehensive-1-3-5', '2026-04-22 20:21:55.150842', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (120, '4995', 1, '2026-04-22 20:33:38', 1, 'q_5_1', 'practice-1-3-1', '2026-04-22 20:33:38.349776', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (121, '11981', 0, '2026-04-22 20:34:00', 1, 'q_5_2', 'practice-1-3-1', '2026-04-22 20:34:00.749748', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (122, '1110', 1, '2026-04-22 20:34:24', 1, 'q_5_3', 'practice-1-3-1', '2026-04-22 20:34:24.166295', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (123, '正确', 1, '2026-04-22 20:34:27', 1, 'q_5_4', 'practice-1-3-1', '2026-04-22 20:34:27.291463', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (124, '99999999', 0, '2026-04-22 20:34:40', 1, 'q_5_5', 'practice-1-3-1', '2026-04-22 20:34:40.961895', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (125, '12', 0, '2026-04-22 20:35:11', 1, 'q_6_1', 'practice-1-3-2', '2026-04-22 20:35:11.086576', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (126, '1', 0, '2026-04-22 20:35:31', 1, 'q_6_2', 'practice-1-3-2', '2026-04-22 20:35:31.217065', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (127, '18', 1, '2026-04-22 20:36:28', 1, 'q_6_3', 'practice-1-3-2', '2026-04-22 20:36:28.219426', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (128, '正确', 1, '2026-04-22 20:37:11', 1, 'q_6_4', 'practice-1-3-2', '2026-04-22 20:37:11.587045', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (129, '36', 1, '2026-04-22 20:37:30', 1, 'q_6_5', 'practice-1-3-2', '2026-04-22 20:37:30.361271', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (130, 'A', 1, '2026-04-22 20:38:08', 1, 'cq_6_1', 'comprehensive-1-3-6', '2026-04-22 20:38:08.789328', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (131, 'C', 1, '2026-04-22 20:38:12', 1, 'cq_6_10', 'comprehensive-1-3-6', '2026-04-22 20:38:12.699813', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (132, 'A', 1, '2026-04-22 20:38:20', 1, 'cq_6_2', 'comprehensive-1-3-6', '2026-04-22 20:38:20.989725', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (133, 'D', 1, '2026-04-22 20:38:32', 1, 'cq_6_3', 'comprehensive-1-3-6', '2026-04-22 20:38:32.301244', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (134, 'C', 1, '2026-04-22 20:38:42', 1, 'cq_6_4', 'comprehensive-1-3-6', '2026-04-22 20:38:42.059800', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (135, 'D', 1, '2026-04-22 20:39:01', 1, 'cq_6_5', 'comprehensive-1-3-6', '2026-04-22 20:39:01.041376', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (136, 'A', 1, '2026-04-22 20:39:16', 1, 'cq_6_6', 'comprehensive-1-3-6', '2026-04-22 20:39:16.349502', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (137, '正确', 1, '2026-04-22 20:39:30', 1, 'cq_6_7', 'comprehensive-1-3-6', '2026-04-22 20:39:30.141256', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (138, '正确', 1, '2026-04-22 20:39:46', 1, 'cq_6_8', 'comprehensive-1-3-6', '2026-04-22 20:39:46.981554', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (139, '30', 1, '2026-04-22 20:39:58', 1, 'cq_6_9', 'comprehensive-1-3-6', '2026-04-22 20:39:58.711511', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (140, '210', 1, '2026-04-22 20:40:19', 1, 'r4_1', 'review-1-4-1', '2026-04-22 20:40:19.786427', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (141, '50', 1, '2026-04-22 20:40:42', 1, 'r4_10', 'review-1-4-1', '2026-04-22 20:40:42.036545', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (142, '800', 1, '2026-04-22 20:40:47', 1, 'r4_2', 'review-1-4-1', '2026-04-22 20:40:47.676640', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (143, '56', 1, '2026-04-22 20:40:55', 1, 'r4_3', 'review-1-4-1', '2026-04-22 20:40:55.334549', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (144, '5444', 0, '2026-04-22 20:41:06', 1, 'r4_4', 'review-1-4-1', '2026-04-22 20:41:06.964687', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (145, '300', 1, '2026-04-22 20:41:27', 1, 'r4_5', 'review-1-4-1', '2026-04-22 20:41:27.234262', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (146, '7000', 1, '2026-04-22 20:41:37', 1, 'r4_6', 'review-1-4-1', '2026-04-22 20:41:37.686209', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (147, '错误', 1, '2026-04-22 20:41:43', 1, 'r4_7', 'review-1-4-1', '2026-04-22 20:41:43.346757', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (148, '正确', 1, '2026-04-22 20:41:51', 1, 'r4_8', 'review-1-4-1', '2026-04-22 20:41:51.044310', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (149, '999000', 1, '2026-04-22 20:42:01', 1, 'r4_9', 'review-1-4-1', '2026-04-22 20:42:01.926669', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (150, 'C', 1, '2026-04-22 20:42:41', 1, 'cq_2_1', 'review-mistakes', '2026-04-22 20:42:41.818636', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (151, '900', 1, '2026-04-22 20:42:55', 1, 'q_4_5', 'review-mistakes', '2026-04-22 20:42:55.590844', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (152, 'D', 1, '2026-04-22 20:43:02', 1, 'cq_5_6', 'review-mistakes', '2026-04-22 20:43:02.423731', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (153, '119988', 1, '2026-04-22 20:43:22', 1, 'q_5_2', 'review-mistakes', '2026-04-22 20:43:22.310785', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
INSERT INTO `user_answers` VALUES (154, '10000000000', 1, '2026-04-22 20:44:02', 1, 'q_5_5', 'review-mistakes', '2026-04-22 20:44:02.093964', '2026-04-22 21:11:05', '2026-04-22 21:11:05');
COMMIT;

-- ----------------------------
-- Table structure for user_levels
-- ----------------------------
DROP TABLE IF EXISTS `user_levels`;
CREATE TABLE `user_levels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `current_level` int DEFAULT '1',
  `last_completed_at` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `current_week` int NOT NULL DEFAULT '1',
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_levels_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_levels
-- ----------------------------
BEGIN;
INSERT INTO `user_levels` VALUES (1, 1, 1, '2026-04-21 21:55:38', '2026-04-21 21:55:38', '2026-04-21 21:55:44', 1, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_levels` VALUES (2, 2, 1, '2026-04-22 20:10:00', '2026-04-22 20:10:00', '2026-04-22 20:10:06', 1, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
COMMIT;

-- ----------------------------
-- Table structure for user_login_records
-- ----------------------------
DROP TABLE IF EXISTS `user_login_records`;
CREATE TABLE `user_login_records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `login_date` date NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `userId` int DEFAULT NULL,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_login_records
-- ----------------------------
BEGIN;
INSERT INTO `user_login_records` VALUES (11, 1, '2026-04-15', '2026-04-21 13:23:42.064722', '2026-04-21 13:23:42.084199', NULL, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_login_records` VALUES (12, 1, '2026-04-16', '2026-04-21 13:23:42.064722', '2026-04-21 13:23:42.084199', NULL, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_login_records` VALUES (13, 1, '2026-04-17', '2026-04-21 13:23:42.064722', '2026-04-21 13:23:42.084199', NULL, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_login_records` VALUES (14, 1, '2026-04-18', '2026-04-21 13:23:42.064722', '2026-04-21 13:23:42.084199', NULL, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
COMMIT;

-- ----------------------------
-- Table structure for user_mistakes
-- ----------------------------
DROP TABLE IF EXISTS `user_mistakes`;
CREATE TABLE `user_mistakes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `questionId` varchar(255) NOT NULL,
  `errorCount` int NOT NULL DEFAULT '1',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `hidden` tinyint(1) NOT NULL DEFAULT '0',
  `review1_time` datetime DEFAULT NULL,
  `review1_completed` tinyint(1) NOT NULL DEFAULT '0',
  `review2_time` datetime DEFAULT NULL,
  `review2_completed` tinyint(1) NOT NULL DEFAULT '0',
  `review3_time` datetime DEFAULT NULL,
  `review3_completed` tinyint(1) NOT NULL DEFAULT '0',
  `review4_time` datetime DEFAULT NULL,
  `review4_completed` tinyint(1) NOT NULL DEFAULT '0',
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_mistakes
-- ----------------------------
BEGIN;
INSERT INTO `user_mistakes` VALUES (2, 1, 'q_1_1_5', 2, '2026-04-21 13:51:26.655199', '2026-04-22 17:43:53.000000', 0, '2026-04-21 13:51:26', 1, '2026-04-22 13:51:26', 1, '2026-04-24 13:51:26', 0, '2026-04-28 13:51:26', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (3, 1, 'q_1_2_1', 1, '2026-04-21 15:58:53.275822', '2026-04-22 17:43:53.000000', 0, '2026-04-21 15:58:53', 1, '2026-04-22 15:58:53', 1, '2026-04-24 15:58:53', 0, '2026-04-28 15:58:53', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (5, 1, 'q_1_1_2', 2, '2026-04-21 17:17:18.767119', '2026-04-22 17:43:53.000000', 0, '2026-04-21 17:17:19', 1, '2026-04-22 17:17:19', 1, '2026-04-24 17:17:19', 0, '2026-04-28 17:17:19', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (6, 1, 'cq_2_1', 1, '2026-04-22 12:29:08.389497', '2026-04-22 20:44:06.000000', 0, '2026-04-22 12:29:08', 1, '2026-04-22 12:29:08', 1, '2026-04-25 12:29:08', 0, '2026-04-29 12:29:08', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (8, 1, 'cq_3_9', 1, '2026-04-22 13:21:16.873136', '2026-04-22 17:47:13.742420', 1, '2026-04-22 13:21:17', 1, '2026-04-22 13:21:17', 0, '2026-04-25 13:21:17', 0, '2026-04-29 13:21:17', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (10, 1, 'q_4_5', 1, '2026-04-22 18:18:47.121820', '2026-04-22 20:44:06.000000', 0, '2026-04-22 18:18:47', 1, '2026-04-23 18:18:47', 0, '2026-04-25 18:18:47', 0, '2026-04-29 18:18:47', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (12, 1, 'cq_5_6', 1, '2026-04-22 20:21:18.714356', '2026-04-22 20:44:06.000000', 0, '2026-04-22 20:21:19', 1, '2026-04-23 20:21:19', 0, '2026-04-25 20:21:19', 0, '2026-04-29 20:21:19', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (14, 1, 'q_5_2', 1, '2026-04-22 20:34:00.994827', '2026-04-22 20:44:05.000000', 0, '2026-04-22 20:34:01', 1, '2026-04-23 20:34:01', 0, '2026-04-25 20:34:01', 0, '2026-04-29 20:34:01', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (15, 1, 'q_5_5', 1, '2026-04-22 20:34:41.311537', '2026-04-22 20:44:06.000000', 0, '2026-04-22 20:34:41', 1, '2026-04-23 20:34:41', 0, '2026-04-25 20:34:41', 0, '2026-04-29 20:34:41', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (16, 1, 'q_6_1', 1, '2026-04-22 20:35:11.399572', '2026-04-22 20:35:11.399572', 0, '2026-04-22 20:35:11', 0, '2026-04-23 20:35:11', 0, '2026-04-25 20:35:11', 0, '2026-04-29 20:35:11', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (17, 1, 'q_6_2', 1, '2026-04-22 20:35:31.639230', '2026-04-22 20:35:31.639230', 0, '2026-04-22 20:35:31', 0, '2026-04-23 20:35:31', 0, '2026-04-25 20:35:31', 0, '2026-04-29 20:35:31', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_mistakes` VALUES (18, 1, 'r4_4', 1, '2026-04-22 20:41:07.316922', '2026-04-22 20:41:07.316922', 0, '2026-04-22 20:41:07', 0, '2026-04-23 20:41:07', 0, '2026-04-25 20:41:07', 0, '2026-04-29 20:41:07', 0, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
COMMIT;

-- ----------------------------
-- Table structure for user_tasks
-- ----------------------------
DROP TABLE IF EXISTS `user_tasks`;
CREATE TABLE `user_tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `task_id` varchar(255) DEFAULT NULL,
  `task_type` enum('comprehensive','practice','mistake','review') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `week_id` int NOT NULL,
  `day_number` int NOT NULL,
  `is_completed` tinyint NOT NULL DEFAULT '0',
  `completed_at` datetime DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_tasks
-- ----------------------------
BEGIN;
INSERT INTO `user_tasks` VALUES (5, 1, 'practice-1-1-1', 'practice', 1, 1, 1, '2026-04-21 23:16:10', '2026-04-21 23:16:09.752153', '2026-04-21 23:16:10.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (6, 1, 'practice-1-1-2', 'practice', 1, 1, 1, '2026-04-22 12:23:28', '2026-04-22 12:23:28.280622', '2026-04-22 12:23:28.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (7, 1, 'comprehensive-1-1-2', 'comprehensive', 1, 1, 1, '2026-04-22 12:44:21', '2026-04-22 12:44:20.808422', '2026-04-22 12:44:21.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (8, 1, 'practice-1-2-1', 'practice', 1, 1, 1, '2026-04-22 13:13:16', '2026-04-22 13:13:15.754010', '2026-04-22 13:13:15.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (9, 1, 'comprehensive-1-2-3', 'comprehensive', 1, 1, 1, '2026-04-22 13:21:27', '2026-04-22 13:21:26.550720', '2026-04-22 13:21:26.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (10, 1, 'review-mistakes', 'review', 1, 1, 1, '2026-04-22 17:43:53', '2026-04-22 17:43:53.498546', '2026-04-22 17:43:53.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (11, 1, 'review-mistakes', 'review', 1, 1, 1, '2026-04-22 17:47:42', '2026-04-22 17:47:41.832578', '2026-04-22 17:47:41.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (12, 1, 'review-mistakes', 'review', 1, 1, 1, '2026-04-22 17:48:10', '2026-04-22 17:48:09.866387', '2026-04-22 17:48:09.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (13, 1, 'practice-1-2-2', 'practice', 1, 1, 1, '2026-04-22 18:18:58', '2026-04-22 18:18:57.709099', '2026-04-22 18:18:57.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (14, 1, 'comprehensive-1-2-4', 'comprehensive', 1, 1, 1, '2026-04-22 20:17:22', '2026-04-22 20:17:22.319974', '2026-04-22 20:17:22.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (15, 1, 'comprehensive-1-3-5', 'comprehensive', 1, 1, 1, '2026-04-22 20:21:58', '2026-04-22 20:21:57.918682', '2026-04-22 20:21:58.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (16, 1, 'practice-1-3-1', 'practice', 1, 1, 1, '2026-04-22 20:34:46', '2026-04-22 20:34:45.836658', '2026-04-22 20:34:46.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (17, 1, 'practice-1-3-2', 'practice', 1, 1, 1, '2026-04-22 20:37:33', '2026-04-22 20:37:33.336544', '2026-04-22 20:37:33.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (18, 1, 'comprehensive-1-3-6', 'comprehensive', 1, 1, 1, '2026-04-22 20:40:01', '2026-04-22 20:40:01.401235', '2026-04-22 20:40:01.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (19, 1, 'review-1-4-1', 'review', 1, 1, 1, '2026-04-22 20:42:05', '2026-04-22 20:42:05.104469', '2026-04-22 20:42:05.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_tasks` VALUES (20, 1, 'review-mistakes', 'review', 1, 1, 1, '2026-04-22 20:44:05', '2026-04-22 20:44:04.850790', '2026-04-22 20:44:05.000000', '2026-04-22 21:11:06', '2026-04-22 21:11:06');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `current_level` int DEFAULT '1',
  `t` varchar(500) DEFAULT NULL,
  `total_score` int DEFAULT '0',
  `completed_tasks` int DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, '唐国华', 1, '18602100824', 0, 0, '2026-04-18 10:46:43', '2026-04-22 18:19:32', '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `users` VALUES (2, '唐牧乐', 1, '13671887113', 0, 0, '2026-04-18 12:47:28', '2026-04-22 18:19:28', '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `users` VALUES (5, 'testuser', 1, 'testtoken123', 0, 0, '2026-04-22 20:04:35', '2026-04-22 20:04:35', '2026-04-22 21:11:07', '2026-04-22 21:11:07');
COMMIT;

-- ----------------------------
-- Table structure for weeks
-- ----------------------------
DROP TABLE IF EXISTS `weeks`;
CREATE TABLE `weeks` (
  `week_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `milestone` text,
  `status` enum('green','yellow','red') DEFAULT 'red',
  `is_locked` tinyint(1) DEFAULT '1',
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`week_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of weeks
-- ----------------------------
BEGIN;
INSERT INTO `weeks` VALUES (1, '计算起步与技巧', '掌握等差数列求和及乘法分配律的灵活运用，建立数感。', '能熟练运用凑整法解决多位数计算，掌握定义新运算的逻辑。', 'green', 0, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (2, '基础建模与还原', '学习线段图法处理和差倍问题，掌握典型的还原与周期逻辑。', '学会画图分析应用题，能独立解决复杂的还原及周期规律题。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (3, '数论入门：整除', '深入研究数字的整除特征，掌握奇偶性在逻辑判定中的应用。', '掌握 2 到 13 的整除判定，能完成多位数字谜的整除分析。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (4, '数论进阶：余数', '攻克 GCD/LCM 及同余问题，接触小升初高频的中国剩余定理。', '掌握因数个数定理，能解决带有余数性质的高阶数论综合题。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (5, '逻辑推理与数字谜', '通过真假话、一笔画及数阵图训练抽象逻辑与空间构造能力。', '提升逻辑严密性，能独立完成三阶幻方及复杂算式虫食算。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (6, '平面几何：转化', '从基础面积公式过渡到等积变形与割补法，培养转化思维。', '掌握面积单位间的转化，能利用“差不变”处理重叠图形面积。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (7, '平面几何：五大模型', '攻克奥数几何核心：鸟头、蝴蝶、燕尾、沙漏等比例模型。', '突破几何瓶颈：能利用比例关系解决复杂的阴影面积难题。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (8, '立体几何：空间想象', '研究立体图形的表面积、体积以及切拼、染色、等积变形。', '建立三维空间感，掌握圆柱圆锥体积转化及涂色分布规律。', 'red', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (9, '典型应用题建模', '掌握鸡兔同笼、盈亏问题及高难度的牛吃草、浓度模型。', '学会“假设法”与“不变量分析”，能处理多变量的应用题。', 'red', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (10, '计算综合与比例', '攻克分数裂项、换元法，并将比例思维引入工程与经济问题。', '掌握计算的“抵消”技巧，能处理含有分率、利润的综合题。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (11, '行程问题 I：相对运动', '系统学习相遇、追及、火车过桥及流水行船等动态模型。', '理解相对速度概念，能处理环形跑道及多人相遇的初级场景。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (12, '行程问题 II：动态比例', '引入柳卡图分析多次相遇，利用比例法（速度比）解行程。', '掌握行程杀手锏：能用比例法解决小升初变速及发车压轴题。', 'green', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (13, '计数原理：系统枚举', '学习加乘原理、标数法及抽屉原理，建立系统计数体系。', '做到计数“不重不漏”，能处理最不利原则下的极值问题。', 'red', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
INSERT INTO `weeks` VALUES (14, '计数进阶与博弈策略', '掌握排列组合公式、插板法，学习博弈必胜策略与论证。', '完成全体系通关：掌握小升初所有计数模型及综合论证法。', 'red', 1, '2026-04-22 21:11:07', '2026-04-22 21:11:07');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
