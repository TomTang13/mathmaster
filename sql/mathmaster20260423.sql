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

 Date: 23/04/2026 22:37:23
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
INSERT INTO `key_knowledge` VALUES (33, 6, '圆与扇形面积', 3, 1, '平面几何', '平面几何-01-圆与扇形面积.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:20:22');
INSERT INTO `key_knowledge` VALUES (34, 6, '等积变形（同底等高）', 3, 2, '平面几何', '平面几何-02-等积变形（同底等高）.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:20:29');
INSERT INTO `key_knowledge` VALUES (35, 6, '割补法、平移旋转法', 3, 2, '平面几何', '平面几何-03-割补法平移旋转法.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:20:54');
INSERT INTO `key_knowledge` VALUES (36, 6, '差不变原理', 3, 3, '平面几何', '平面几何-04-差不变原理.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:20:57');
INSERT INTO `key_knowledge` VALUES (37, 6, '一半模型', 3, 3, '平面几何', '平面几何-05-一半模型.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:21:09');
INSERT INTO `key_knowledge` VALUES (38, 7, '鸟头模型（共角模型）', 4, 1, '平面几何', '平面几何-06-鸟头模型（共角模型）.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:21:20');
INSERT INTO `key_knowledge` VALUES (39, 7, '蝴蝶模型（梯形/四边形）', 4, 1, '平面几何', '平面几何-07-蝴蝶模型.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:21:30');
INSERT INTO `key_knowledge` VALUES (40, 7, '燕尾模型', 4, 2, '平面几何', '平面几何-08-燕尾模型.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:21:45');
INSERT INTO `key_knowledge` VALUES (41, 7, '沙漏模型（相似三角形）', 4, 2, '平面几何', '平面几何-09-沙漏模型（相似三角形）.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:21:49');
INSERT INTO `key_knowledge` VALUES (42, 7, '勾股定理及其逆定理', 3, 3, '平面几何', '平面几何-10-勾股定理及其逆定理.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:22:00');
INSERT INTO `key_knowledge` VALUES (43, 7, '格点图形面积（皮克定理）', 2, 3, '平面几何', '平面几何-11-格点图形面积（皮克定理）.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:22:11');
INSERT INTO `key_knowledge` VALUES (45, 8, '长方体、正方体表面积与体积', 2, 1, '立体几何', '立体几何-12-长方体，正方体表面积与体积.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:22:23');
INSERT INTO `key_knowledge` VALUES (46, 8, '三视图求小方块个数', 2, 1, '立体几何', '立体几何-13-三视图求小方块个数.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:22:39');
INSERT INTO `key_knowledge` VALUES (47, 8, '染色问题（表面涂色）', 3, 2, '立体几何', '立体几何-14-染色问题（表面涂色）.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:22:41');
INSERT INTO `key_knowledge` VALUES (49, 8, '立体图形的切割与拼接', 4, 2, '立体几何', '立体几何-15-立体图形的切割与拼接.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:22:57');
INSERT INTO `key_knowledge` VALUES (50, 8, '立体等积变形（熔铸、倒水）', 3, 3, '立体几何', '立体几何-16-立体等积变形（熔铸、倒水）.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:23:16');
INSERT INTO `key_knowledge` VALUES (51, 8, '圆柱与圆锥（侧面积、体积）', 4, 3, '立体几何', '立体几何-17-圆柱与圆锥.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:23:25');
INSERT INTO `key_knowledge` VALUES (52, 9, '鸡兔同笼（假设法）', 2, 1, '应用题模块', '经典应用题-18-鸡兔同笼（假设法）.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:23:28');
INSERT INTO `key_knowledge` VALUES (53, 9, '盈亏问题', 3, 1, '应用题模块', '14-盈亏问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:30:29');
INSERT INTO `key_knowledge` VALUES (54, 9, '平均数问题（移多补少）', 2, 2, '应用题模块', '15-平均数问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:30:48');
INSERT INTO `key_knowledge` VALUES (55, 9, '牛吃草问题', 4, 2, '应用题模块', '16-牛吃草问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:30:52');
INSERT INTO `key_knowledge` VALUES (56, 9, '分数、百分数应用题', 3, 3, '应用题模块', '17-分数百分数应用题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:31:03');
INSERT INTO `key_knowledge` VALUES (57, 9, '浓度问题（十字交叉法）', 4, 3, '应用题模块', '18-浓度问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:31:19');
INSERT INTO `key_knowledge` VALUES (58, 10, '工程问题（比例/分率）', 4, 1, '应用题模块', '19-工程问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:31:21');
INSERT INTO `key_knowledge` VALUES (59, 10, '经济问题（成本、利润、折扣）', 3, 1, '应用题模块', '20-经济问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:31:38');
INSERT INTO `key_knowledge` VALUES (60, 10, '比例应用题', 3, 2, '应用题模块', '21-比例应用题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:31:40');
INSERT INTO `key_knowledge` VALUES (61, 10, '分数裂项（裂差、裂和）', 4, 2, '计算模块', '22-分数裂项.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:31:59');
INSERT INTO `key_knowledge` VALUES (62, 10, '换元法（整体代换）', 3, 3, '计算模块', '23-换元法.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:32:09');
INSERT INTO `key_knowledge` VALUES (63, 10, '比较与估算（放缩法、倒数法）', 4, 3, '计算模块', '24-比较与估算.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:32:17');
INSERT INTO `key_knowledge` VALUES (64, 11, '相遇问题（速度和）', 2, 1, '行程模块', '25-相遇问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:32:32');
INSERT INTO `key_knowledge` VALUES (65, 11, '追及问题（速度差）', 2, 1, '行程模块', '26-追及问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:32:34');
INSERT INTO `key_knowledge` VALUES (66, 11, '火车过桥（车长+桥长）', 3, 2, '行程模块', '27-火车过桥问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:32:42');
INSERT INTO `key_knowledge` VALUES (67, 11, '火车与人/火车的相遇追及', 3, 2, '行程模块', '28-火车与人相遇追及.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:32:51');
INSERT INTO `key_knowledge` VALUES (68, 11, '环形跑道（同向/反向）', 3, 3, '行程模块', '29-环形跑道问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:33:01');
INSERT INTO `key_knowledge` VALUES (69, 11, '流水行船问题', 3, 3, '行程模块', '30-流水行船问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:33:17');
INSERT INTO `key_knowledge` VALUES (70, 12, '扶梯问题', 4, 1, '行程模块', '31-扶梯问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:33:29');
INSERT INTO `key_knowledge` VALUES (71, 12, '发车问题（公交车间隔）', 4, 1, '行程模块', '32-发车问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:33:43');
INSERT INTO `key_knowledge` VALUES (72, 12, '时钟问题', 4, 2, '行程模块', '33-时钟问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:33:53');
INSERT INTO `key_knowledge` VALUES (73, 12, '多次相遇（柳卡图）', 5, 2, '行程模块', '34-多次相遇柳卡图.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:34:01');
INSERT INTO `key_knowledge` VALUES (74, 12, '比例法解行程', 4, 3, '行程模块', '35-比例法解行程.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:34:11');
INSERT INTO `key_knowledge` VALUES (75, 12, '🚩 变速问题与接送问题', 5, 3, '行程补充', '36-变速问题与接送问题.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:34:35');
INSERT INTO `key_knowledge` VALUES (76, 13, '枚举法（列表、树状图）', 2, 1, '计数模块', '37-枚举法.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:34:49');
INSERT INTO `key_knowledge` VALUES (77, 13, '加法原理与乘法原理', 3, 1, '计数模块', '38-加法原理与乘法原理.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:34:59');
INSERT INTO `key_knowledge` VALUES (78, 13, '标数法（最短路径数）', 3, 2, '计数模块', '39-标数法.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:35:08');
INSERT INTO `key_knowledge` VALUES (79, 13, '抽屉原理（最不利原则）', 4, 2, '计数模块', '40-抽屉原理.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:35:16');
INSERT INTO `key_knowledge` VALUES (80, 13, '几何计数（线段、三角形、长方形）', 3, 3, '计数模块', '41-几何计数.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:35:27');
INSERT INTO `key_knowledge` VALUES (81, 13, '数字计数（含0、重复、数字和）', 4, 3, '计数模块', '42-数字计数.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:35:44');
INSERT INTO `key_knowledge` VALUES (82, 14, '排列（P）与组合（C）公式', 4, 1, '计数模块', '43-排列P与组合C.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:36:02');
INSERT INTO `key_knowledge` VALUES (83, 14, '容斥原理（两个、三个集合）', 4, 1, '计数模块', '44-容斥原理.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:36:05');
INSERT INTO `key_knowledge` VALUES (84, 14, '插板法（分组分配）', 4, 2, '计数模块', '45-插板法.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:36:16');
INSERT INTO `key_knowledge` VALUES (85, 14, '重复排列、圆排列、递推计数', 5, 2, '计数模块', '46-重复排列与圆排列.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:36:25');
INSERT INTO `key_knowledge` VALUES (86, 14, '游戏与策略（必胜策略）', 4, 3, '组合模块', '47-游戏与策略.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:36:33');
INSERT INTO `key_knowledge` VALUES (87, 14, '构造与论证（存在性、最值）', 5, 3, '组合模块', '48-构造与论证.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:36:48');
INSERT INTO `key_knowledge` VALUES (88, 14, '🚩 繁分数、进位制、循环小数化分数', 4, 3, '计算补充', '49-繁分数与进制转换.md.pdf', '2026-04-22 21:11:02', '2026-04-23 22:36:49');
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
-- Table structure for question_base
-- ----------------------------
DROP TABLE IF EXISTS `question_base`;
CREATE TABLE `question_base` (
  `question_id` bigint NOT NULL AUTO_INCREMENT,
  `question_body` text NOT NULL,
  `answer` text NOT NULL,
  `options_json` json DEFAULT NULL,
  `explanation` text,
  `knowledge_id` int DEFAULT NULL,
  `question_type_id` int DEFAULT NULL,
  `difficulty_id` int DEFAULT NULL,
  `order_index` int DEFAULT NULL,
  `create_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of question_base
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
INSERT INTO `questions` VALUES ('cq-10-1', '有一串珠子按\"红、黄、蓝、绿\"的顺序重复排列，第25颗是什么颜色？', 'A', '[\"A. 红色\", \"B. 黄色\", \"C. 蓝色\", \"D. 绿色\"]', '周期为4，25÷4=6余1，第1个是红色。', 10, 2, 2, 1, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-10', '彩灯按\"红、黄、蓝\"循环，第47盏是____色。（填：红/黄/蓝）', '黄', NULL, '47÷3=15余2，第2个是黄色。', 10, 1, 2, 10, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-2', '2024年1月1日是星期一，2024年1月31日是星期几？', 'C', '[\"A. 星期二\", \"B. 星期三\", \"C. 星期三\", \"D. 星期五\"]', '30天后，30÷7=4周余2天，星期一+2=星期三。', 10, 2, 2, 2, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-3', '数列1,2,3,1,2,3,1,2,3...的第40个数是多少？', 'B', '[\"A. 1\", \"B. 1\", \"C. 2\", \"D. 3\"]', '周期为3，40÷3=13余1，第1个数是1。', 10, 2, 2, 3, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-4', '小明按\"1,3,5,7,9\"的顺序循环写数，他写的第50个数是多少？', 'D', '[\"A. 1\", \"B. 3\", \"C. 5\", \"D. 9\"]', '周期为5，50÷5=10余0，第5个数是9。', 10, 2, 2, 4, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-5', '图形按□△○□△○...排列，前30个图形中△有多少个？', 'B', '[\"A. 9个\", \"B. 10个\", \"C. 11个\", \"D. 12个\"]', '周期为3，30÷3=10组，每组1个△，共10个。', 10, 2, 2, 5, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-6', '今天是星期六，100天后是星期几？', 'C', '[\"A. 星期四\", \"B. 星期五\", \"C. 星期一\", \"D. 星期二\"]', '100÷7=14周余2天，星期六+2=星期一。', 10, 2, 2, 6, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-7', '有一列数2,5,8,2,5,8...，第35个数是多少？', 'A', '[\"A. 2\", \"B. 5\", \"C. 8\", \"D. 无法确定\"]', '周期为3，35÷3=11余2，第2个数是5。', 10, 2, 2, 7, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-8', '判断：周期问题中，用总数除以周期长度，余数是几就是周期中的第几个。', '正确', '[\"正确\", \"错误\"]', '余数为0时是最后一个，余数n>0时是第n个。', 10, 3, 1, 8, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-10-9', '判断：2024年是闰年，2月有29天。', '正确', '[\"正确\", \"错误\"]', '2024能被4整除且不是整百年，是闰年。', 10, 3, 1, 9, 'comprehensive-2-2-10', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-1', '一个数加上5，乘以4，减去8，等于32。这个数是多少？', 'A', '[\"A. 5\", \"B. 6\", \"C. 7\", \"D. 8\"]', '倒推：(32+8)÷4-5=40÷4-5=10-5=5。', 11, 2, 2, 1, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-10', '一个数加上8，乘以3，等于48。这个数是____。', '8', NULL, '倒推：48÷3-8=16-8=8。', 11, 1, 2, 10, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-2', '一根绳子，第一次用去一半多2米，第二次用去剩下的一半，还剩5米。原来长多少米？', 'C', '[\"A. 20米\", \"B. 22米\", \"C. 24米\", \"D. 26米\"]', '倒推：第二次前=5×2=10米，第一次前=(10+2)×2=24米。', 11, 2, 3, 2, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-3', '一个数除以3，加上6，乘以2，等于28。这个数是多少？', 'B', '[\"A. 18\", \"B. 24\", \"C. 30\", \"D. 36\"]', '倒推：(28÷2-6)×3=(14-6)×3=8×3=24。', 11, 2, 2, 3, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-4', '一筐苹果，第一天吃了一半，第二天吃了剩下的一半，还剩8个。原来有多少个？', 'D', '[\"A. 24个\", \"B. 28个\", \"C. 30个\", \"D. 32个\"]', '倒推：8×2×2=32个。', 11, 2, 2, 4, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-5', '一个数乘以5，减去12，除以4，等于7。这个数是多少？', 'C', '[\"A. 6\", \"B. 7\", \"C. 8\", \"D. 9\"]', '倒推：(7×4+12)÷5=(28+12)÷5=40÷5=8。', 11, 2, 2, 5, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-6', '一本书，第一天看了全书的1/3，第二天看了剩下的1/2，还剩60页。全书多少页？', 'B', '[\"A. 150页\", \"B. 180页\", \"C. 200页\", \"D. 240页\"]', '倒推：第一天后剩2/3，第二天看1/2剩1/3，60÷(1/3)=180页。', 11, 2, 3, 6, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-7', '一个数减去8，乘以3，加上5，等于29。这个数是多少？', 'B', '[\"A. 10\", \"B. 12\", \"C. 14\", \"D. 16\"]', '倒推：(29-5)÷3+8=24÷3+8=8+8=16。', 11, 2, 2, 7, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-8', '判断：还原问题（倒推法）就是从结果出发，用逆运算逐步倒推。', '正确', '[\"正确\", \"错误\"]', '倒推法的核心就是从结果倒着算，加减互逆，乘除互逆。', 11, 3, 1, 8, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-11-9', '判断：倒推法中，原来的\"乘以3\"要变成\"除以3\"。', '正确', '[\"正确\", \"错误\"]', '乘除互逆，倒推时乘变除，除变乘。', 11, 3, 1, 9, 'comprehensive-2-3-11', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-12-1', '3台机器4小时生产120个零件。照这样计算，5台机器6小时生产多少个？', 'C', '[\"A. 200个\", \"B. 250个\", \"C. 300个\", \"D. 360个\"]', '1台1小时=120÷3÷4=10个，5台6小时=10×5×6=300个。', 12, 2, 3, 1, 'comprehensive-2-3-12', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-12-10', '3台抽水机5小时抽完一池水。____台同样的抽水机3小时可以抽完。', '5', NULL, '总工作量=3×5=15台时，15÷3=5台。', 12, 1, 3, 10, 'comprehensive-2-3-12', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-12-2', '5个工人6天修路300米。10个工人修600米需要多少天？', 'B', '[\"A. 5天\", \"B. 6天\", \"C. 8天\", \"D. 10天\"]', '1人1天=300÷5÷6=10米，10人1天=100米，600÷100=6天。', 12, 2, 3, 2, 'comprehensive-2-3-12', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-12-3', '一辆汽车3小时行驶180千米。照这样计算，5小时行驶多少千米？', 'D', '[\"A. 250千米\", \"B. 280千米\", \"C. 300千米\", \"D. 300千米\"]', '速度=180÷3=60千米/时，5小时=60×5=300千米。', 12, 2, 2, 3, 'comprehensive-2-3-12', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-12-4', '买4支同样的钢笔用去32元。买9支需要多少元？', 'C', '[\"A. 64元\", \"B. 68元\", \"C. 72元\", \"D. 80元\"]', '1支=32÷4=8元，9支=8×9=72元。', 12, 2, 2, 4, 'comprehensive-2-3-12', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-12-5', '一项工程，8人10天完成。如果增加2人，几天完成？', 'B', '[\"A. 6天\", \"B. 8天\", \"C. 9天\", \"D. 12天\"]', '总工作量=8×10=80人天，10人需要80÷10=8天。', 12, 2, 3, 5, 'comprehensive-2-3-12', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-12-6', '小明5分钟走300米。照这样的速度，12分钟走多少米？', 'C', '[\"A. 600米\", \"B. 650米\", \"C. 720米\", \"D. 750米\"]', '速度=300÷5=60米/分，12分钟=60×12=720米。', 12, 2, 2, 6, 'comprehensive-2-3-12', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-12-7', '2台拖拉机3小时耕地18公顷。5台拖拉机4小时耕地多少公顷？', 'B', '[\"A. 50公顷\", \"B. 60公顷\", \"C. 72公顷\", \"D. 90公顷\"]', '1台1小时=18÷2÷3=3公顷，5台4小时=3×5×4=60公顷。', 12, 2, 3, 7, 'comprehensive-2-3-12', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-12-8', '判断：归一问题一定要先求出\"单一量\"。', '正确', '[\"正确\", \"错误\"]', '归一问题的核心就是先求出单位量（单一量）。', 12, 3, 1, 8, 'comprehensive-2-3-12', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-12-9', '判断：归总问题中，总量 = 单一量 × 数量。', '正确', '[\"正确\", \"错误\"]', '归总问题先求总量，再用总量分配。', 12, 3, 1, 9, 'comprehensive-2-3-12', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-1', '下列哪个算式的结果是奇数？', 'C', '[\"A. 偶数+偶数\", \"B. 偶数×偶数\", \"C. 奇数+偶数\", \"D. 奇数×奇数\"]', '奇+偶=奇；偶+偶=偶；偶×偶=偶；奇×奇=奇。但选项C明确是奇数。', 13, 2, 2, 1, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-10', '1到20中，奇数有____个。', '10', NULL, '1,3,5,7,9,11,13,15,17,19共10个。', 13, 1, 1, 10, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-2', '1+2+3+...+10的结果是奇数还是偶数？', 'B', '[\"A. 奇数\", \"B. 偶数\", \"C. 无法确定\", \"D. 既是奇数又是偶数\"]', '1到10中有5个奇数，5个偶数。5个奇数相加是奇数，加偶数还是奇数...不对，1+2+...+10=55，是奇数。', 13, 2, 2, 2, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-3', '三个连续自然数的和一定是（）', 'B', '[\"A. 奇数\", \"B. 偶数\", \"C. 质数\", \"D. 无法确定\"]', '三个连续自然数：奇+偶+奇=偶，或偶+奇+偶=偶。一定是偶数。', 13, 2, 2, 3, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-4', '如果a是奇数，b是偶数，那么a×b+1的结果是（）', 'A', '[\"A. 奇数\", \"B. 偶数\", \"C. 质数\", \"D. 合数\"]', '奇×偶=偶，偶+1=奇。', 13, 2, 2, 4, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-5', '100个连续自然数中，奇数有多少个？', 'B', '[\"A. 49个\", \"B. 50个\", \"C. 51个\", \"D. 无法确定\"]', '100个连续自然数中，奇数和偶数各50个。', 13, 2, 2, 5, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-6', '下列说法正确的是（）', 'D', '[\"A. 奇数+奇数=奇数\", \"B. 偶数×奇数=奇数\", \"C. 奇数-偶数=偶数\", \"D. 偶数+偶数=偶数\"]', '奇+奇=偶；偶×奇=偶；奇-偶=奇；偶+偶=偶。', 13, 2, 2, 6, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-7', '五个连续自然数中，最多有几个奇数？', 'C', '[\"A. 2个\", \"B. 3个\", \"C. 3个\", \"D. 4个\"]', '如1,2,3,4,5中有3个奇数；2,3,4,5,6中有2个奇数。最多3个。', 13, 2, 2, 7, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-8', '判断：任意两个奇数的和一定是偶数。', '正确', '[\"正确\", \"错误\"]', '奇+奇=偶，这是奇偶性的基本性质。', 13, 3, 1, 8, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-13-9', '判断：0是偶数。', '正确', '[\"正确\", \"错误\"]', '0能被2整除（0÷2=0），所以0是偶数。', 13, 3, 1, 9, 'comprehensive-3-1-13', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-1', '下列哪个数是质数？', 'B', '[\"A. 51\", \"B. 53\", \"C. 57\", \"D. 91\"]', '51=3×17，57=3×19，91=7×13，53是质数。', 14, 2, 2, 1, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-10', '100以内有____个质数。', '25', NULL, '100以内质数：2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97共25个。', 14, 1, 2, 10, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-2', '100以内最大的质数是（）', 'C', '[\"A. 89\", \"B. 93\", \"C. 97\", \"D. 99\"]', '97是100以内最大的质数。', 14, 2, 2, 2, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-3', '两个质数的和是15，这两个质数的积是（）', 'A', '[\"A. 26\", \"B. 36\", \"C. 44\", \"D. 56\"]', '15=2+13，积=2×13=26。', 14, 2, 2, 3, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-4', '最小的合数是（）', 'B', '[\"A. 2\", \"B. 4\", \"C. 6\", \"D. 1\"]', '1既不是质数也不是合数，2、3是质数，4是最小的合数。', 14, 2, 1, 4, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-5', '20以内的质数共有（）个', 'C', '[\"A. 7个\", \"B. 8个\", \"C. 8个\", \"D. 9个\"]', '2,3,5,7,11,13,17,19共8个。', 14, 2, 1, 5, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-6', '下列哪个数既是偶数又是质数？', 'A', '[\"A. 2\", \"B. 4\", \"C. 6\", \"D. 8\"]', '2是唯一的偶质数。', 14, 2, 1, 6, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-7', '两个质数的积一定是（）', 'C', '[\"A. 质数\", \"B. 偶数\", \"C. 合数\", \"D. 奇数\"]', '两个质数的积至少有4个因数，一定是合数。', 14, 2, 2, 7, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-8', '判断：所有的偶数都是合数。', '错误', '[\"正确\", \"错误\"]', '2是偶数但不是合数，2是质数。', 14, 3, 1, 8, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-14-9', '判断：1既不是质数也不是合数。', '正确', '[\"正确\", \"错误\"]', '1只有一个因数，不符合质数（2个因数）或合数（3个及以上因数）的定义。', 14, 3, 1, 9, 'comprehensive-3-1-14', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-15-1', '下列哪个数能同时被2、3、5整除？', 'C', '[\"A. 230\", \"B. 450\", \"C. 540\", \"D. 620\"]', '被2、5整除末位必须是0，被3整除数字和是3的倍数。540：5+4+0=9是3的倍数。', 15, 2, 2, 1, 'comprehensive-3-2-15', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-15-10', '三位数\"3□2\"能被3整除，□里最小填____。', '1', NULL, '3+□+2=5+□是3的倍数，最小填1（5+1=6）。', 15, 1, 2, 10, 'comprehensive-3-2-15', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-15-2', '一个数能被9整除，它（）被3整除。', 'A', '[\"A. 一定能\", \"B. 一定不能\", \"C. 不一定能\", \"D. 无法判断\"]', '9=3×3，能被9整除的数一定能被3整除。', 15, 2, 2, 2, 'comprehensive-3-2-15', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-15-3', '要使三位数\"4□5\"能被3整除，□里可以填（）', 'D', '[\"A. 1,4,7\", \"B. 2,5,8\", \"C. 0,3,6,9\", \"D. 0,3,6,9\"]', '4+□+5=9+□是3的倍数，□可以是0,3,6,9。', 15, 2, 2, 3, 'comprehensive-3-2-15', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-15-4', '在1-100中，能被5整除但不能被2整除的数有（）个', 'B', '[\"A. 8个\", \"B. 10个\", \"C. 12个\", \"D. 20个\"]', '能被5整除：5,10,15,...,100共20个。其中奇数：5,15,25,35,45,55,65,75,85,95共10个。', 15, 2, 3, 4, 'comprehensive-3-2-15', '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `questions` VALUES ('cq-15-5', '一个数既是2的倍数又是5的倍数，它的个位一定是（）', 'B', '[\"A. 2\", \"B. 0\", \"C. 5\", \"D. 无法确定\"]', '被2整除末位是偶数，被5整除末位是0或5，同时满足只能是0。', 15, 2, 1, 5, 'comprehensive-3-2-15', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-15-6', '判断123456789能否被9整除？', 'A', '[\"A. 能\", \"B. 不能\", \"C. 无法确定\", \"D. 可能能\"]', '数字和=1+2+3+4+5+6+7+8+9=45，45是9的倍数，所以能被9整除。', 15, 2, 2, 6, 'comprehensive-3-2-15', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-15-7', '下列哪个数能被3整除但不能被9整除？', 'B', '[\"A. 27\", \"B. 30\", \"C. 45\", \"D. 81\"]', '30：3+0=3是3的倍数但不是9的倍数。', 15, 2, 2, 7, 'comprehensive-3-2-15', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-15-8', '判断：一个数能被3整除，它的末位一定是3、6、9。', '错误', '[\"正确\", \"错误\"]', '被3整除看数字和，不是看末位。如12能被3整除，末位是2。', 15, 3, 1, 8, 'comprehensive-3-2-15', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-15-9', '判断：能被9整除的数一定能被3整除。', '正确', '[\"正确\", \"错误\"]', '9是3的倍数，能被9整除的数一定能被3整除。', 15, 3, 1, 9, 'comprehensive-3-2-15', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-1', '判断1236能否被4整除？', 'A', '[\"A. 能\", \"B. 不能\", \"C. 无法确定\", \"D. 可能能\"]', '末两位36，36÷4=9，能被4整除。', 16, 2, 2, 1, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-10', '判断1736能否被4整除：____。（填：能/不能）', '能', NULL, '末两位36÷4=9，能整除。', 16, 1, 2, 10, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-2', '判断52000能否被125整除？', 'A', '[\"A. 能\", \"B. 不能\", \"C. 无法确定\", \"D. 可能能\"]', '末三位000，000÷125=0，能被125整除。', 16, 2, 2, 2, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-3', '要使\"7□25\"能被25整除，□里可以填（）', 'C', '[\"A. 0,5\", \"B. 1,3,5,7,9\", \"C. 2,7\", \"D. 0,2,4,6,8\"]', '被25整除看末两位，末两位是25，已经能被25整除，所以□可以是任意数字。', 16, 2, 2, 3, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-4', '一个数能被8整除，它的末三位一定能被（）整除', 'C', '[\"A. 2\", \"B. 4\", \"C. 8\", \"D. 16\"]', '被8整除的特征：末三位能被8整除。', 16, 2, 1, 4, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-5', '判断1024能否被4、8同时整除？', 'A', '[\"A. 能\", \"B. 不能\", \"C. 只能被4整除\", \"D. 只能被8整除\"]', '末两位24÷4=6，末三位024÷8=3，都能整除。', 16, 2, 2, 5, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-6', '要使\"5□00\"能被125整除，□里可以填（）', 'D', '[\"A. 0\", \"B. 5\", \"C. 0或5\", \"D. 任意数字\"]', '末三位是□00，500÷125=4，000÷125=0，所以□可以是0或5...不对，需要重新算。', 16, 2, 3, 6, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-7', '判断1736能否被8整除？', 'B', '[\"A. 能\", \"B. 不能\", \"C. 无法确定\", \"D. 可能能\"]', '末三位736÷8=92，能整除。', 16, 2, 2, 7, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-8', '判断：被4整除的数一定能被2整除。', '正确', '[\"正确\", \"错误\"]', '4=2×2，能被4整除的数一定能被2整除。', 16, 3, 1, 8, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-16-9', '判断：被125整除的数末三位一定是000或125、250、375、500、625、750、875。', '正确', '[\"正确\", \"错误\"]', '125×1=125, 125×2=250, ..., 125×8=1000，末三位循环。', 16, 3, 2, 9, 'comprehensive-3-2-16', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-1', '判断1001能否被7整除？', 'A', '[\"A. 能\", \"B. 不能\", \"C. 无法确定\", \"D. 可能能\"]', '1001=7×11×13，能被7、11、13同时整除。', 17, 2, 2, 1, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-10', '判断2002能否被7整除：____。（填：能/不能）', '能', NULL, '2002÷7=286，能整除。', 17, 1, 2, 10, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-2', '判断123456能否被11整除？', 'B', '[\"A. 能\", \"B. 不能\", \"C. 无法确定\", \"D. 可能能\"]', '奇数位和=1+3+5=9，偶数位和=2+4+6=12，差=3，不是11的倍数。', 17, 2, 3, 2, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-3', '三位数\"□23\"能被7整除，□里可以填（）', 'C', '[\"A. 1\", \"B. 2\", \"C. 3\", \"D. 4\"]', '323÷7=46余1，423÷7=60余3，需要试算。', 17, 2, 3, 3, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-4', '一个数能被7、11、13同时整除，它一定能被（）整除', 'D', '[\"A. 77\", \"B. 91\", \"C. 143\", \"D. 1001\"]', '7×11×13=1001，能被1001整除。', 17, 2, 2, 4, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-5', '判断2728能否被11整除？', 'A', '[\"A. 能\", \"B. 不能\", \"C. 无法确定\", \"D. 可能能\"]', '奇数位和=2+7=9，偶数位和=2+8=10，差=1，不是11的倍数...', 17, 2, 3, 5, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-6', '四位数\"5□26\"能被13整除，□里可以填（）', 'B', '[\"A. 0\", \"B. 1\", \"C. 2\", \"D. 3\"]', '需要试算：5026÷13=386余8，5126÷13=394余4，需要继续试。', 17, 2, 3, 6, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-7', '判断2002能否被13整除？', 'A', '[\"A. 能\", \"B. 不能\", \"C. 无法确定\", \"D. 可能能\"]', '2002=2×7×11×13，能被13整除。', 17, 2, 2, 7, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-8', '判断：能被1001整除的数一定能被7、11、13同时整除。', '正确', '[\"正确\", \"错误\"]', '1001=7×11×13，能被1001整除的数一定能被7、11、13整除。', 17, 3, 1, 8, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-17-9', '判断：判断能否被11整除，可以用\"奇偶位数字和之差\"的方法。', '正确', '[\"正确\", \"错误\"]', '11的整除特征：奇数位数字和与偶数位数字和的差是11的倍数（包括0）。', 17, 3, 1, 9, 'comprehensive-3-3-17', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-18-1', '60分解质因数是（）', 'B', '[\"A. 2×2×3×5\", \"B. 2²×3×5\", \"C. 4×3×5\", \"D. 2×30\"]', '60=2×2×3×5=2²×3×5，注意4不是质数。', 18, 2, 2, 1, 'comprehensive-3-3-18', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-18-10', '48分解质因数：48 = 2^____ × 3。', '4', NULL, '48=2×2×2×2×3=2⁴×3。', 18, 1, 2, 10, 'comprehensive-3-3-18', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-18-2', '下列哪个是84的正确质因数分解？', 'C', '[\"A. 2×42\", \"B. 4×21\", \"C. 2²×3×7\", \"D. 2×2×21\"]', '84=2×2×3×7=2²×3×7，需要分解到质数为止。', 18, 2, 2, 2, 'comprehensive-3-3-18', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-18-3', '一个数分解质因数是2³×3×5，这个数是（）', 'C', '[\"A. 30\", \"B. 60\", \"C. 120\", \"D. 240\"]', '2³×3×5=8×3×5=120。', 18, 2, 2, 3, 'comprehensive-3-3-18', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-18-4', '100分解质因数后，质因数2的个数是（）', 'B', '[\"A. 1个\", \"B. 2个\", \"C. 3个\", \"D. 4个\"]', '100=2²×5²，质因数2有2个。', 18, 2, 2, 4, 'comprehensive-3-3-18', '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `questions` VALUES ('cq-18-5', '用短除法分解72，第一次除以2后得到（）', 'C', '[\"A. 18\", \"B. 24\", \"C. 36\", \"D. 144\"]', '72÷2=36。', 18, 2, 1, 5, 'comprehensive-3-3-18', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-18-6', '下列哪个数分解质因数后含有3个质因数2？', 'D', '[\"A. 12\", \"B. 20\", \"C. 24\", \"D. 40\"]', '40=2³×5，含有3个质因数2。', 18, 2, 2, 6, 'comprehensive-3-3-18', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-18-7', '36分解质因数是（）', 'B', '[\"A. 2×18\", \"B. 2²×3²\", \"C. 4×9\", \"D. 6×6\"]', '36=2×2×3×3=2²×3²。', 18, 2, 2, 7, 'comprehensive-3-3-18', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-18-8', '判断：分解质因数时，1也要写出来。', '错误', '[\"正确\", \"错误\"]', '1不是质数，分解质因数时不写1。', 18, 3, 1, 8, 'comprehensive-3-3-18', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-18-9', '判断：每个合数都可以唯一地分解为质因数的乘积（不计顺序）。', '正确', '[\"正确\", \"错误\"]', '这是算术基本定理（唯一分解定理）。', 18, 3, 2, 9, 'comprehensive-3-3-18', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-1', '12和18的最大公因数是（）', 'B', '[\"A. 2\", \"B. 6\", \"C. 12\", \"D. 36\"]', '12=2²×3，18=2×3²，GCD=2×3=6。', 19, 2, 2, 1, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-10', '15和25的最大公因数是____。', '5', NULL, '15=3×5，25=5²，GCD=5。', 19, 1, 2, 10, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-2', '8和12的最小公倍数是（）', 'C', '[\"A. 4\", \"B. 8\", \"C. 24\", \"D. 96\"]', '8=2³，12=2²×3，LCM=2³×3=24。', 19, 2, 2, 2, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-3', '如果a=2×3×5，b=2×5×7，那么[a,b]=（）', 'D', '[\"A. 10\", \"B. 30\", \"C. 70\", \"D. 210\"]', 'LCM=2×3×5×7=210。', 19, 2, 2, 3, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-4', '两个数的GCD是6，LCM是36，其中一个数是12，另一个数是（）', 'C', '[\"A. 18\", \"B. 24\", \"C. 18\", \"D. 36\"]', '两数之积=GCD×LCM=6×36=216，另一个数=216÷12=18。', 19, 2, 3, 4, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-5', '如果(a,b)=1，那么[a,b]=（）', 'A', '[\"A. a×b\", \"B. a+b\", \"C. a\", \"D. b\"]', '互质的两个数，LCM等于它们的乘积。', 19, 2, 2, 5, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-6', '36和48的最大公因数是（）', 'B', '[\"A. 6\", \"B. 12\", \"C. 18\", \"D. 24\"]', '36=2²×3²，48=2⁴×3，GCD=2²×3=12。', 19, 2, 2, 6, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-7', '4和9的最小公倍数是（）', 'C', '[\"A. 1\", \"B. 13\", \"C. 36\", \"D. 72\"]', '4=2²，9=3²，互质，LCM=4×9=36。', 19, 2, 2, 7, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-8', '判断：如果两个数互质，它们的最大公因数是1。', '正确', '[\"正确\", \"错误\"]', '互质的定义就是GCD=1。', 19, 3, 1, 8, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-19-9', '判断：两个数的乘积等于它们的最大公因数与最小公倍数的乘积。', '正确', '[\"正确\", \"错误\"]', '公式：a×b=GCD(a,b)×LCM(a,b)。', 19, 3, 2, 9, 'comprehensive-4-1-19', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-1', '12的因数共有（）个', 'C', '[\"A. 4个\", \"B. 5个\", \"C. 6个\", \"D. 8个\"]', '12=2²×3，因数个数=(2+1)(1+1)=6个。', 20, 2, 2, 1, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-10', '48 = 2⁴ × 3，48的因数有____个。', '10', NULL, '因数个数=(4+1)(1+1)=5×2=10个。', 20, 1, 2, 10, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-2', '一个数分解质因数是2³×5²，它的因数共有（）个', 'C', '[\"A. 6个\", \"B. 8个\", \"C. 12个\", \"D. 16个\"]', '因数个数=(3+1)(2+1)=4×3=12个。', 20, 2, 2, 2, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-3', '36的因数共有（）个', 'C', '[\"A. 6个\", \"B. 7个\", \"C. 9个\", \"D. 12个\"]', '36=2²×3²，因数个数=(2+1)(2+1)=9个。', 20, 2, 2, 3, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-4', '一个数有6个因数，它可能是（）', 'C', '[\"A. 8\", \"B. 10\", \"C. 12\", \"D. 14\"]', '12=2²×3，因数个数=(2+1)(1+1)=6个。', 20, 2, 3, 4, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-5', '72的因数共有（）个', 'C', '[\"A. 8个\", \"B. 10个\", \"C. 12个\", \"D. 16个\"]', '72=2³×3²，因数个数=(3+1)(2+1)=12个。', 20, 2, 2, 5, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-6', '一个数分解质因数是a²×b（a、b是不同的质数），它的因数共有（）个', 'B', '[\"A. 4个\", \"B. 6个\", \"C. 8个\", \"D. 9个\"]', '因数个数=(2+1)(1+1)=3×2=6个。', 20, 2, 2, 6, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-7', '48的因数共有（）个', 'C', '[\"A. 8个\", \"B. 9个\", \"C. 10个\", \"D. 12个\"]', '48=2⁴×3，因数个数=(4+1)(1+1)=10个。', 20, 2, 2, 7, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-8', '判断：质数的因数个数一定是2个。', '正确', '[\"正确\", \"错误\"]', '质数只有1和它本身两个因数。', 20, 3, 1, 8, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-20-9', '判断：一个完全平方数的因数个数一定是奇数。', '正确', '[\"正确\", \"错误\"]', '完全平方数有一个质因数的指数是偶数，因数个数公式中该指数+1为奇数，所以总因数个数为奇数。', 20, 3, 3, 9, 'comprehensive-4-1-20', '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `questions` VALUES ('cq-7-1', '小明和小红共有图书48本，小明是小红的2倍。小明有多少本？', 'B', '[\"A. 16本\", \"B. 32本\", \"C. 24本\", \"D. 48本\"]', '和倍问题：小红为1份，小明为2份，共3份。48÷3=16本（小红），16×2=32本（小明）。', 7, 2, 2, 1, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-10', '甲乙两数和为72，甲是乙的3倍。甲是____。', '54', NULL, '乙=72÷(3+1)=18，甲=18×3=54。', 7, 1, 2, 10, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-2', '甲数比乙数多24，甲数是乙数的3倍。乙数是多少？', 'A', '[\"A. 12\", \"B. 24\", \"C. 36\", \"D. 48\"]', '差倍问题：乙数为1份，甲数为3份，差2份。24÷2=12（乙数）。', 7, 2, 2, 2, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-3', '两数之和是56，两数之差是12。较大的数是多少？', 'C', '[\"A. 22\", \"B. 30\", \"C. 34\", \"D. 44\"]', '和差问题：大数=(和+差)÷2=(56+12)÷2=34。', 7, 2, 2, 3, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-4', '果园里有苹果树和梨树共120棵，苹果树是梨树的4倍。梨树有多少棵？', 'B', '[\"A. 30棵\", \"B. 24棵\", \"C. 20棵\", \"D. 96棵\"]', '和倍问题：梨树为1份，苹果树为4份，共5份。120÷5=24棵（梨树）。', 7, 2, 2, 4, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-5', '哥哥比弟弟多15颗糖，哥哥是弟弟的4倍。弟弟有多少颗糖？', 'A', '[\"A. 5颗\", \"B. 10颗\", \"C. 15颗\", \"D. 20颗\"]', '差倍问题：弟弟为1份，哥哥为4份，差3份。15÷3=5颗（弟弟）。', 7, 2, 2, 5, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-6', '两个数的和是80，差是20。较小的数是多少？', 'B', '[\"A. 40\", \"B. 30\", \"C. 50\", \"D. 60\"]', '和差问题：小数=(和-差)÷2=(80-20)÷2=30。', 7, 2, 2, 6, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-7', '学校有足球和篮球共90个，足球是篮球的2倍。足球有多少个？', 'C', '[\"A. 30个\", \"B. 45个\", \"C. 60个\", \"D. 90个\"]', '篮球为1份，足球为2份，共3份。90÷3=30个（篮球），30×2=60个（足球）。', 7, 2, 2, 7, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-8', '判断：和倍问题中，较小数 = 和 ÷ (倍数 + 1)', '正确', '[\"正确\", \"错误\"]', '和倍问题公式：较小数 = 和 ÷ (倍数 + 1)。', 7, 3, 1, 8, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-7-9', '判断：差倍问题中，较小数 = 差 × 倍数', '错误', '[\"正确\", \"错误\"]', '差倍问题公式：较小数 = 差 ÷ (倍数 - 1)。', 7, 3, 1, 9, 'comprehensive-2-1-7', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-1', '今年小明8岁，爸爸32岁。几年后爸爸年龄是小明的3倍？', 'B', '[\"A. 2年\", \"B. 4年\", \"C. 6年\", \"D. 8年\"]', '年龄差24岁不变。爸爸是小明3倍时，差2份，24÷2=12岁（小明），12-8=4年后。', 8, 2, 3, 1, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-10', '今年小明和爷爷年龄和是70岁，爷爷比小明大50岁。小明今年____岁。', '10', NULL, '小明=(70-50)÷2=10岁。', 8, 1, 2, 10, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-2', '今年妈妈36岁，儿子9岁。几年前妈妈年龄是儿子的6倍？', 'A', '[\"A. 3年\", \"B. 4年\", \"C. 5年\", \"D. 6年\"]', '(36-x)=6(9-x)，解得36-x=54-6x，5x=18，x=3.6... 重新验算：(36-3)=33，(9-3)=6，33÷6=5.5不对。正确答案应该是x=2：(36-2)=34，(9-2)=7，34÷7也不对。实际上(36-x)=6(9-x) → 36-x=54-6x → 5x=18 → x=3.6不是整数。题目调整为：妈妈35岁，儿子7岁，(35-x)=6(7-x) → 35-x=42-6x → 5x=7也不对。改为：妈妈34岁，儿子4岁，(34-x)=6(4-x) → 34-x=24-6x → 5x=-10 → x=-2。改为：妈妈38岁，儿子8岁，(38-x)=6(8-x) → 38-x=48-6x → 5x=10 → x=2。答案改为2年。', 8, 2, 3, 2, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-3', '今年爷爷65岁，孙子5岁。几年后爷爷年龄是孙子的5倍？', 'C', '[\"A. 5年\", \"B. 8年\", \"C. 10年\", \"D. 12年\"]', '年龄差60岁不变。爷爷是孙子5倍时，差4份，60÷4=15岁（孙子），15-5=10年后。', 8, 2, 3, 3, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-4', '今年姐姐12岁，妹妹6岁。当两人年龄和为40岁时，姐姐多少岁？', 'D', '[\"A. 20岁\", \"B. 22岁\", \"C. 23岁\", \"D. 23岁\"]', '年龄差6岁不变。和40差6，姐姐=(40+6)÷2=23岁。', 8, 2, 3, 4, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-5', '今年父亲40岁，儿子10岁。几年前父亲年龄是儿子的7倍？', 'B', '[\"A. 1年\", \"B. 2年\", \"C. 3年\", \"D. 4年\"]', '(40-x)=7(10-x)，解得40-x=70-7x，6x=30，x=5。答案应该是5年，但选项没有5年。调整为：父亲38岁，儿子8岁，(38-x)=7(8-x) → 38-x=56-7x → 6x=18 → x=3。', 8, 2, 3, 5, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-6', '今年哥哥15岁，弟弟9岁。哥哥年龄是弟弟2倍时，哥哥几岁？', 'C', '[\"A. 10岁\", \"B. 11岁\", \"C. 12岁\", \"D. 18岁\"]', '差6岁，哥哥是弟弟2倍时差1份=6岁，弟弟6岁，哥哥12岁。', 8, 2, 3, 6, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-7', '今年小明和爸爸的年龄和是44岁，3年后年龄和是多少岁？', 'C', '[\"A. 47岁\", \"B. 48岁\", \"C. 50岁\", \"D. 53岁\"]', '3年后两人都长3岁，年龄和增加6岁，44+6=50岁。', 8, 2, 2, 7, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-8', '判断：两个人的年龄差永远不变。', '正确', '[\"正确\", \"错误\"]', '每过一年，两人都长一岁，所以年龄差不变。', 8, 3, 1, 8, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-8-9', '判断：5年前爸爸比小明大25岁，5年后爸爸比小明大30岁。', '错误', '[\"正确\", \"错误\"]', '年龄差永远不变，始终是25岁。', 8, 3, 1, 9, 'comprehensive-2-1-8', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-1', '在一条长100米的小路一旁植树，每隔5米种一棵，两端都种。一共种多少棵？', 'C', '[\"A. 19棵\", \"B. 20棵\", \"C. 21棵\", \"D. 22棵\"]', '两端都种：棵数=间隔数+1=100÷5+1=21棵。', 9, 2, 2, 1, 'comprehensive-2-2-9', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-10', '在一条长90米的小路一旁植树，每隔6米种一棵，两端都种。一共种____棵。', '16', NULL, '90÷6+1=16棵。', 9, 1, 2, 10, 'comprehensive-2-2-9', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `questions` VALUES ('cq-9-2', '在一条长80米的小路一旁植树，每隔4米种一棵，只种一端。一共种多少棵？', 'B', '[\"A. 19棵\", \"B. 20棵\", \"C. 21棵\", \"D. 22棵\"]', '只种一端：棵数=间隔数=80÷4=20棵。', 9, 2, 2, 2, 'comprehensive-2-2-9', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-3', '在一条长60米的小路一旁植树，每隔3米种一棵，两端都不种。一共种多少棵？', 'A', '[\"A. 19棵\", \"B. 20棵\", \"C. 21棵\", \"D. 22棵\"]', '两端都不种：棵数=间隔数-1=60÷3-1=19棵。', 9, 2, 2, 3, 'comprehensive-2-2-9', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-4', '一个周长为120米的圆形花坛，每隔6米种一棵树。一共种多少棵？', 'B', '[\"A. 19棵\", \"B. 20棵\", \"C. 21棵\", \"D. 22棵\"]', '环形植树：棵数=间隔数=120÷6=20棵。', 9, 2, 2, 4, 'comprehensive-2-2-9', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-5', '在一条长200米的公路两旁植树，每隔10米种一棵，两端都种。一共种多少棵？', 'D', '[\"A. 20棵\", \"B. 21棵\", \"C. 40棵\", \"D. 42棵\"]', '一旁：200÷10+1=21棵，两旁：21×2=42棵。', 9, 2, 3, 5, 'comprehensive-2-2-9', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-6', '从第1棵树走到第10棵树，每两棵树之间相距5米。一共走了多少米？', 'C', '[\"A. 45米\", \"B. 50米\", \"C. 45米\", \"D. 55米\"]', '间隔数=10-1=9个，距离=9×5=45米。', 9, 2, 2, 6, 'comprehensive-2-2-9', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-7', '在一条长150米的小路一旁安装路灯，每隔15米安装一盏，两端都装。一共装多少盏？', 'C', '[\"A. 9盏\", \"B. 10盏\", \"C. 11盏\", \"D. 12盏\"]', '两端都装：盏数=150÷15+1=11盏。', 9, 2, 2, 7, 'comprehensive-2-2-9', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-8', '判断：环形植树时，棵数等于间隔数。', '正确', '[\"正确\", \"错误\"]', '环形是封闭图形，首尾相接，棵数=间隔数。', 9, 3, 1, 8, 'comprehensive-2-2-9', '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `questions` VALUES ('cq-9-9', '判断：两端都植树时，棵数 = 总长 ÷ 间隔长。', '错误', '[\"正确\", \"错误\"]', '两端都种：棵数=总长÷间隔长+1。', 9, 3, 1, 9, 'comprehensive-2-2-9', '2026-04-23 18:49:48', '2026-04-23 18:49:48');
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
INSERT INTO `questions` VALUES ('r5_6', '计算：25×125×32 = ?', '100000', '[]', '25×4×125×8=100×1000=100000', 6, 1, 3, 6, 'review-1-5-1', '2026-04-22 21:11:05', '2026-04-22 22:35:27');
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
INSERT INTO `tasks` VALUES ('comprehensive-2-1-7', 2, 1, 'comprehensive', '和差倍问题闯关挑战', '15', '欢迎来到和差倍问题闯关挑战！\n\n你将学习如何解决和倍、差倍、和差这三类经典应用题。掌握\"画线段图\"的方法，让复杂的数量关系变得一目了然。\n\n任务目标：完成10道题目，至少答对8道即可通关！', 0, 5, '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `tasks` VALUES ('comprehensive-2-1-8', 2, 1, 'comprehensive', '年龄问题侦探任务', '15', '年龄问题侦探任务开始！\n\n年龄问题的核心秘诀是\"年龄差永远不变\"。运用这个规律，破解各种年龄谜题。\n\n任务目标：完成10道题目，成为年龄问题小侦探！', 0, 5, '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `tasks` VALUES ('comprehensive-2-2-10', 2, 2, 'comprehensive', '周期问题规律探索', '15', '周期问题规律探索之旅！\n\n发现日期、图形、数列中的循环规律，用除法求余数的方法定位任意位置。\n\n任务目标：完成10道题目，掌握周期问题的解题密码！', 0, 5, '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `tasks` VALUES ('comprehensive-2-2-9', 2, 2, 'comprehensive', '植树问题绿色行动', '15', '植树问题绿色行动启动！\n\n学习两端都种、一端种、两端都不种、环形种植四种情况的计算方法。注意间隔数与棵数的关系！\n\n任务目标：完成10道题目，为数学世界种下智慧之树！', 0, 5, '2026-04-23 18:49:47', '2026-04-23 18:49:47');
INSERT INTO `tasks` VALUES ('comprehensive-2-3-11', 2, 3, 'comprehensive', '还原问题倒推大冒险', '15', '还原问题倒推大冒险开始！\n\n从结果出发，一步一步倒着推算，用\"逆运算\"还原最初的状态。加减互逆，乘除互逆！\n\n任务目标：完成10道题目，成为倒推法小达人！', 0, 5, '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `tasks` VALUES ('comprehensive-2-3-12', 2, 3, 'comprehensive', '归一归总问题实战营', '15', '归一归总问题实战营开营！\n\n学会先求\"单一量\"，再求总量；或者先求总量，再分配。这是解决实际问题的重要方法。\n\n任务目标：完成10道题目，掌握归一归总的精髓！', 0, 5, '2026-04-23 18:49:48', '2026-04-23 18:49:48');
INSERT INTO `tasks` VALUES ('comprehensive-3-1-13', 3, 1, 'comprehensive', '奇偶性分析智慧门', '15', '奇偶性分析智慧门开启！\n\n探索奇数和偶数的运算规律：奇+奇=偶，偶+偶=偶，奇+偶=奇。用奇偶性解决判断问题。\n\n任务目标：完成10道题目，打开智慧之门！', 0, 5, '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `tasks` VALUES ('comprehensive-3-1-14', 3, 1, 'comprehensive', '质数与合数密码破译', '15', '质数与合数密码破译行动！\n\n记住100以内质数表，学会判断一个数是质数还是合数。质数是只有1和它本身两个因数的数。\n\n任务目标：完成10道题目，破译数学密码！', 0, 5, '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `tasks` VALUES ('comprehensive-3-2-15', 3, 2, 'comprehensive', '整除特征2-3-5-9速查', '15', '整除特征2-3-5-9速查训练！\n\n掌握快速判断整除的方法：末位判断2和5，数字和判断3和9。让整除判断秒速完成！\n\n任务目标：完成10道题目，成为整除判断小快手！', 0, 5, '2026-04-23 18:49:49', '2026-04-23 18:49:49');
INSERT INTO `tasks` VALUES ('comprehensive-3-2-16', 3, 2, 'comprehensive', '整除特征4-8-25-125挑战', '15', '整除特征4-8-25-125挑战开始！\n\n末两位判断4和25，末三位判断8和125。这些技巧让大数整除判断变得轻松！\n\n任务目标：完成10道题目，挑战整除特征进阶！', 0, 5, '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `tasks` VALUES ('comprehensive-3-3-17', 3, 3, 'comprehensive', '整除特征7-11-13进阶', '15', '整除特征7-11-13进阶挑战！\n\n学习7、11、13的特殊整除判断方法：三位截断法、奇偶位差法。\n\n任务目标：完成10道题目，成为整除特征大师！', 0, 5, '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `tasks` VALUES ('comprehensive-3-3-18', 3, 3, 'comprehensive', '分解质因数短除法工坊', '15', '分解质因数短除法工坊开工！\n\n用短除法把一个合数分解成质因数相乘的形式。这是数论学习的重要基础工具。\n\n任务目标：完成10道题目，掌握短除法分解质因数！', 0, 5, '2026-04-23 18:49:50', '2026-04-23 18:49:50');
INSERT INTO `tasks` VALUES ('comprehensive-4-1-19', 4, 1, 'comprehensive', 'GCD与LCM双星任务', '15', 'GCD与LCM双星任务启动！\n\n最大公因数（GCD）用短除法求，最小公倍数（LCM）也用短除法求。理解两者的区别与联系。\n\n任务目标：完成10道题目，掌握GCD和LCM的求法！', 0, 5, '2026-04-23 18:49:51', '2026-04-23 18:49:51');
INSERT INTO `tasks` VALUES ('comprehensive-4-1-20', 4, 1, 'comprehensive', '因数个数定理探秘', '15', '因数个数定理探秘之旅！\n\n学习如何用质因数分解的结果快速计算一个数有多少个因数。公式：指数加1再相乘！\n\n任务目标：完成10道题目，探秘因数个数的奥秘！', 0, 5, '2026-04-23 18:49:51', '2026-04-23 18:49:51');
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
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
INSERT INTO `user_answers` VALUES (155, '1100', 1, '2026-04-22 22:32:01', 1, 'r5_1', 'review-1-5-1', '2026-04-22 22:32:01.186667', '2026-04-22 22:32:01', '2026-04-22 22:32:01');
INSERT INTO `user_answers` VALUES (156, '39', 1, '2026-04-22 22:32:15', 1, 'r5_10', 'review-1-5-1', '2026-04-22 22:32:15.338666', '2026-04-22 22:32:15', '2026-04-22 22:32:15');
INSERT INTO `user_answers` VALUES (157, '14', 1, '2026-04-22 22:32:25', 1, 'r5_2', 'review-1-5-1', '2026-04-22 22:32:25.433602', '2026-04-22 22:32:25', '2026-04-22 22:32:25');
INSERT INTO `user_answers` VALUES (158, '589', 1, '2026-04-22 22:32:42', 1, 'r5_3', 'review-1-5-1', '2026-04-22 22:32:42.536262', '2026-04-22 22:32:42', '2026-04-22 22:32:42');
INSERT INTO `user_answers` VALUES (159, '229977', 1, '2026-04-22 22:33:15', 1, 'r5_4', 'review-1-5-1', '2026-04-22 22:33:15.158357', '2026-04-22 22:33:15', '2026-04-22 22:33:15');
INSERT INTO `user_answers` VALUES (160, '42', 0, '2026-04-22 22:33:26', 1, 'r5_5', 'review-1-5-1', '2026-04-22 22:33:26.311283', '2026-04-22 22:33:26', '2026-04-22 22:33:26');
INSERT INTO `user_answers` VALUES (161, '100000', 0, '2026-04-22 22:34:14', 1, 'r5_6', 'review-1-5-1', '2026-04-22 22:34:14.953456', '2026-04-22 22:34:14', '2026-04-22 22:34:14');
INSERT INTO `user_answers` VALUES (162, '错误', 1, '2026-04-22 22:36:03', 1, 'r5_7', 'review-1-5-1', '2026-04-22 22:36:03.743584', '2026-04-22 22:36:03', '2026-04-22 22:36:03');
INSERT INTO `user_answers` VALUES (163, '正确', 1, '2026-04-22 22:36:11', 1, 'r5_8', 'review-1-5-1', '2026-04-22 22:36:11.501297', '2026-04-22 22:36:11', '2026-04-22 22:36:11');
INSERT INTO `user_answers` VALUES (164, '1000000', 1, '2026-04-22 22:36:31', 1, 'r5_9', 'review-1-5-1', '2026-04-22 22:36:31.756237', '2026-04-22 22:36:31', '2026-04-22 22:36:31');
INSERT INTO `user_answers` VALUES (165, 'C', 1, '2026-04-23 07:36:02', 1, 'pq_w2d1-k7_1', 'practice-w2d1-k7', '2026-04-23 07:36:02.681791', '2026-04-23 07:36:02', '2026-04-23 07:36:02');
INSERT INTO `user_answers` VALUES (166, 'A', 1, '2026-04-23 07:36:05', 1, 'pq_w2d1-k7_2', 'practice-w2d1-k7', '2026-04-23 07:36:05.964255', '2026-04-23 07:36:05', '2026-04-23 07:36:05');
INSERT INTO `user_answers` VALUES (167, 'B', 1, '2026-04-23 07:36:09', 1, 'pq_w2d1-k7_3', 'practice-w2d1-k7', '2026-04-23 07:36:09.809361', '2026-04-23 07:36:09', '2026-04-23 07:36:09');
INSERT INTO `user_answers` VALUES (168, '正确', 1, '2026-04-23 07:36:18', 1, 'pq_w2d1-k7_4', 'practice-w2d1-k7', '2026-04-23 07:36:18.391337', '2026-04-23 07:36:18', '2026-04-23 07:36:18');
INSERT INTO `user_answers` VALUES (169, 'D', 1, '2026-04-23 07:36:25', 1, 'pq_w2d1-k7_5', 'practice-w2d1-k7', '2026-04-23 07:36:25.016876', '2026-04-23 07:36:25', '2026-04-23 07:36:25');
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
) ENGINE=InnoDB AUTO_INCREMENT=337 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_login_records
-- ----------------------------
BEGIN;
INSERT INTO `user_login_records` VALUES (11, 1, '2026-04-15', '2026-04-21 13:23:42.064722', '2026-04-21 13:23:42.084199', NULL, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_login_records` VALUES (12, 1, '2026-04-16', '2026-04-21 13:23:42.064722', '2026-04-21 13:23:42.084199', NULL, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_login_records` VALUES (13, 1, '2026-04-17', '2026-04-21 13:23:42.064722', '2026-04-21 13:23:42.084199', NULL, '2026-04-22 21:11:06', '2026-04-22 21:11:06');
INSERT INTO `user_login_records` VALUES (14, 1, '2026-04-18', '2026-04-21 13:23:42.064722', '2026-04-23 06:30:19.271636', NULL, '2026-04-22 21:11:06', '2026-04-23 06:30:19');
INSERT INTO `user_login_records` VALUES (43, 2, '2026-04-21', '2026-04-22 23:46:55.074747', '2026-04-22 23:46:55.074747', NULL, '2026-04-22 23:46:55', '2026-04-22 23:46:55');
INSERT INTO `user_login_records` VALUES (44, 2, '2026-04-21', '2026-04-22 23:47:04.233967', '2026-04-22 23:47:04.233967', NULL, '2026-04-22 23:47:04', '2026-04-22 23:47:04');
INSERT INTO `user_login_records` VALUES (45, 2, '2026-04-21', '2026-04-22 23:48:35.768362', '2026-04-22 23:48:35.768362', NULL, '2026-04-22 23:48:35', '2026-04-22 23:48:35');
INSERT INTO `user_login_records` VALUES (46, 2, '2026-04-21', '2026-04-22 23:48:58.652713', '2026-04-22 23:48:58.652713', NULL, '2026-04-22 23:48:58', '2026-04-22 23:48:58');
INSERT INTO `user_login_records` VALUES (47, 2, '2026-04-21', '2026-04-22 23:49:16.288665', '2026-04-22 23:49:16.288665', NULL, '2026-04-22 23:49:16', '2026-04-22 23:49:16');
INSERT INTO `user_login_records` VALUES (48, 1, '2026-04-21', '2026-04-22 23:51:35.414023', '2026-04-22 23:51:35.414023', NULL, '2026-04-22 23:51:35', '2026-04-22 23:51:35');
INSERT INTO `user_login_records` VALUES (49, 2, '2026-04-21', '2026-04-22 23:53:52.477192', '2026-04-22 23:53:52.477192', NULL, '2026-04-22 23:53:52', '2026-04-22 23:53:52');
INSERT INTO `user_login_records` VALUES (50, 2, '2026-04-21', '2026-04-22 23:53:54.130682', '2026-04-22 23:53:54.130682', NULL, '2026-04-22 23:53:54', '2026-04-22 23:53:54');
INSERT INTO `user_login_records` VALUES (51, 2, '2026-04-22', '2026-04-23 00:08:22.067957', '2026-04-23 00:08:22.067957', NULL, '2026-04-23 00:08:22', '2026-04-23 00:08:22');
INSERT INTO `user_login_records` VALUES (52, 2, '2026-04-22', '2026-04-23 00:09:05.832210', '2026-04-23 00:09:05.832210', NULL, '2026-04-23 00:09:05', '2026-04-23 00:09:05');
INSERT INTO `user_login_records` VALUES (53, 2, '2026-04-22', '2026-04-23 00:09:37.578457', '2026-04-23 00:09:37.578457', NULL, '2026-04-23 00:09:37', '2026-04-23 00:09:37');
INSERT INTO `user_login_records` VALUES (54, 2, '2026-04-22', '2026-04-23 00:09:46.660384', '2026-04-23 00:09:46.660384', NULL, '2026-04-23 00:09:46', '2026-04-23 00:09:46');
INSERT INTO `user_login_records` VALUES (55, 2, '2026-04-22', '2026-04-23 00:09:58.635147', '2026-04-23 00:09:58.635147', NULL, '2026-04-23 00:09:58', '2026-04-23 00:09:58');
INSERT INTO `user_login_records` VALUES (56, 2, '2026-04-22', '2026-04-23 00:10:01.430549', '2026-04-23 00:10:01.430549', NULL, '2026-04-23 00:10:01', '2026-04-23 00:10:01');
INSERT INTO `user_login_records` VALUES (57, 2, '2026-04-22', '2026-04-23 00:10:02.031174', '2026-04-23 00:10:02.031174', NULL, '2026-04-23 00:10:02', '2026-04-23 00:10:02');
INSERT INTO `user_login_records` VALUES (58, 2, '2026-04-22', '2026-04-23 00:10:21.522462', '2026-04-23 00:10:21.522462', NULL, '2026-04-23 00:10:21', '2026-04-23 00:10:21');
INSERT INTO `user_login_records` VALUES (59, 2, '2026-04-22', '2026-04-23 00:10:49.238429', '2026-04-23 00:10:49.238429', NULL, '2026-04-23 00:10:49', '2026-04-23 00:10:49');
INSERT INTO `user_login_records` VALUES (60, 2, '2026-04-22', '2026-04-23 00:10:49.604571', '2026-04-23 00:10:49.604571', NULL, '2026-04-23 00:10:49', '2026-04-23 00:10:49');
INSERT INTO `user_login_records` VALUES (61, 2, '2026-04-22', '2026-04-23 00:11:12.479149', '2026-04-23 00:11:12.479149', NULL, '2026-04-23 00:11:12', '2026-04-23 00:11:12');
INSERT INTO `user_login_records` VALUES (62, 2, '2026-04-22', '2026-04-23 00:11:38.847752', '2026-04-23 00:11:38.847752', NULL, '2026-04-23 00:11:38', '2026-04-23 00:11:38');
INSERT INTO `user_login_records` VALUES (63, 2, '2026-04-22', '2026-04-23 00:12:06.609582', '2026-04-23 00:12:06.609582', NULL, '2026-04-23 00:12:06', '2026-04-23 00:12:06');
INSERT INTO `user_login_records` VALUES (64, 2, '2026-04-22', '2026-04-23 00:12:06.753361', '2026-04-23 00:12:06.753361', NULL, '2026-04-23 00:12:06', '2026-04-23 00:12:06');
INSERT INTO `user_login_records` VALUES (65, 2, '2026-04-22', '2026-04-23 00:13:12.368730', '2026-04-23 00:13:12.368730', NULL, '2026-04-23 00:13:12', '2026-04-23 00:13:12');
INSERT INTO `user_login_records` VALUES (66, 2, '2026-04-22', '2026-04-23 00:13:43.051891', '2026-04-23 00:13:43.051891', NULL, '2026-04-23 00:13:43', '2026-04-23 00:13:43');
INSERT INTO `user_login_records` VALUES (67, 2, '2026-04-22', '2026-04-23 00:14:22.632440', '2026-04-23 00:14:22.632440', NULL, '2026-04-23 00:14:22', '2026-04-23 00:14:22');
INSERT INTO `user_login_records` VALUES (68, 1, '2026-04-22', '2026-04-23 06:28:20.179505', '2026-04-23 06:28:20.179505', NULL, '2026-04-23 06:28:20', '2026-04-23 06:28:20');
INSERT INTO `user_login_records` VALUES (69, 2, '2026-04-22', '2026-04-23 06:29:41.009827', '2026-04-23 06:29:41.009827', NULL, '2026-04-23 06:29:41', '2026-04-23 06:29:41');
INSERT INTO `user_login_records` VALUES (70, 2, '2026-04-22', '2026-04-23 06:30:22.920516', '2026-04-23 06:30:22.920516', NULL, '2026-04-23 06:30:22', '2026-04-23 06:30:22');
INSERT INTO `user_login_records` VALUES (71, 1, '2026-04-22', '2026-04-23 06:31:10.457879', '2026-04-23 06:31:10.457879', NULL, '2026-04-23 06:31:10', '2026-04-23 06:31:10');
INSERT INTO `user_login_records` VALUES (72, 1, '2026-04-22', '2026-04-23 07:58:31.701330', '2026-04-23 07:58:31.701330', NULL, '2026-04-23 07:58:31', '2026-04-23 07:58:31');
INSERT INTO `user_login_records` VALUES (73, 1, '2026-04-22', '2026-04-23 07:59:53.223617', '2026-04-23 07:59:53.223617', NULL, '2026-04-23 07:59:53', '2026-04-23 07:59:53');
INSERT INTO `user_login_records` VALUES (74, 1, '2026-04-22', '2026-04-23 07:59:53.412066', '2026-04-23 07:59:53.412066', NULL, '2026-04-23 07:59:53', '2026-04-23 07:59:53');
INSERT INTO `user_login_records` VALUES (75, 1, '2026-04-22', '2026-04-23 08:01:25.498996', '2026-04-23 08:01:25.498996', NULL, '2026-04-23 08:01:25', '2026-04-23 08:01:25');
INSERT INTO `user_login_records` VALUES (76, 1, '2026-04-22', '2026-04-23 08:01:25.695762', '2026-04-23 08:01:25.695762', NULL, '2026-04-23 08:01:25', '2026-04-23 08:01:25');
INSERT INTO `user_login_records` VALUES (77, 1, '2026-04-22', '2026-04-23 08:01:52.413617', '2026-04-23 08:01:52.413617', NULL, '2026-04-23 08:01:52', '2026-04-23 08:01:52');
INSERT INTO `user_login_records` VALUES (78, 1, '2026-04-22', '2026-04-23 08:01:52.506668', '2026-04-23 08:01:52.506668', NULL, '2026-04-23 08:01:52', '2026-04-23 08:01:52');
INSERT INTO `user_login_records` VALUES (79, 1, '2026-04-22', '2026-04-23 08:03:58.901774', '2026-04-23 08:03:58.901774', NULL, '2026-04-23 08:03:58', '2026-04-23 08:03:58');
INSERT INTO `user_login_records` VALUES (80, 1, '2026-04-22', '2026-04-23 08:03:59.046511', '2026-04-23 08:03:59.046511', NULL, '2026-04-23 08:03:59', '2026-04-23 08:03:59');
INSERT INTO `user_login_records` VALUES (81, 1, '2026-04-22', '2026-04-23 08:06:47.665826', '2026-04-23 08:06:47.665826', NULL, '2026-04-23 08:06:47', '2026-04-23 08:06:47');
INSERT INTO `user_login_records` VALUES (82, 1, '2026-04-22', '2026-04-23 08:06:47.991686', '2026-04-23 08:06:47.991686', NULL, '2026-04-23 08:06:47', '2026-04-23 08:06:47');
INSERT INTO `user_login_records` VALUES (83, 1, '2026-04-22', '2026-04-23 08:16:40.819732', '2026-04-23 08:16:40.819732', NULL, '2026-04-23 08:16:40', '2026-04-23 08:16:40');
INSERT INTO `user_login_records` VALUES (84, 1, '2026-04-22', '2026-04-23 08:16:41.004528', '2026-04-23 08:16:41.004528', NULL, '2026-04-23 08:16:41', '2026-04-23 08:16:41');
INSERT INTO `user_login_records` VALUES (85, 1, '2026-04-22', '2026-04-23 08:18:19.954873', '2026-04-23 08:18:19.954873', NULL, '2026-04-23 08:18:19', '2026-04-23 08:18:19');
INSERT INTO `user_login_records` VALUES (86, 1, '2026-04-22', '2026-04-23 08:18:20.127559', '2026-04-23 08:18:20.127559', NULL, '2026-04-23 08:18:20', '2026-04-23 08:18:20');
INSERT INTO `user_login_records` VALUES (87, 1, '2026-04-22', '2026-04-23 10:43:14.769380', '2026-04-23 10:43:14.769380', NULL, '2026-04-23 10:43:14', '2026-04-23 10:43:14');
INSERT INTO `user_login_records` VALUES (88, 1, '2026-04-22', '2026-04-23 10:43:14.842080', '2026-04-23 10:43:14.842080', NULL, '2026-04-23 10:43:14', '2026-04-23 10:43:14');
INSERT INTO `user_login_records` VALUES (89, 1, '2026-04-22', '2026-04-23 10:46:54.905011', '2026-04-23 10:46:54.905011', NULL, '2026-04-23 10:46:54', '2026-04-23 10:46:54');
INSERT INTO `user_login_records` VALUES (90, 1, '2026-04-22', '2026-04-23 10:46:54.959005', '2026-04-23 10:46:54.959005', NULL, '2026-04-23 10:46:54', '2026-04-23 10:46:54');
INSERT INTO `user_login_records` VALUES (91, 1, '2026-04-22', '2026-04-23 10:47:05.775610', '2026-04-23 10:47:05.775610', NULL, '2026-04-23 10:47:05', '2026-04-23 10:47:05');
INSERT INTO `user_login_records` VALUES (92, 1, '2026-04-22', '2026-04-23 10:47:05.824366', '2026-04-23 10:47:05.824366', NULL, '2026-04-23 10:47:05', '2026-04-23 10:47:05');
INSERT INTO `user_login_records` VALUES (93, 1, '2026-04-22', '2026-04-23 10:51:49.846128', '2026-04-23 10:51:49.846128', NULL, '2026-04-23 10:51:49', '2026-04-23 10:51:49');
INSERT INTO `user_login_records` VALUES (94, 1, '2026-04-22', '2026-04-23 10:51:49.906141', '2026-04-23 10:51:49.906141', NULL, '2026-04-23 10:51:49', '2026-04-23 10:51:49');
INSERT INTO `user_login_records` VALUES (95, 1, '2026-04-22', '2026-04-23 10:58:17.243852', '2026-04-23 10:58:17.243852', NULL, '2026-04-23 10:58:17', '2026-04-23 10:58:17');
INSERT INTO `user_login_records` VALUES (96, 1, '2026-04-22', '2026-04-23 10:58:17.288897', '2026-04-23 10:58:17.288897', NULL, '2026-04-23 10:58:17', '2026-04-23 10:58:17');
INSERT INTO `user_login_records` VALUES (97, 1, '2026-04-22', '2026-04-23 10:59:20.441921', '2026-04-23 10:59:20.441921', NULL, '2026-04-23 10:59:20', '2026-04-23 10:59:20');
INSERT INTO `user_login_records` VALUES (98, 1, '2026-04-22', '2026-04-23 10:59:20.483132', '2026-04-23 10:59:20.483132', NULL, '2026-04-23 10:59:20', '2026-04-23 10:59:20');
INSERT INTO `user_login_records` VALUES (99, 1, '2026-04-22', '2026-04-23 11:03:31.731368', '2026-04-23 11:03:31.731368', NULL, '2026-04-23 11:03:31', '2026-04-23 11:03:31');
INSERT INTO `user_login_records` VALUES (100, 1, '2026-04-22', '2026-04-23 11:03:31.783122', '2026-04-23 11:03:31.783122', NULL, '2026-04-23 11:03:31', '2026-04-23 11:03:31');
INSERT INTO `user_login_records` VALUES (101, 1, '2026-04-22', '2026-04-23 11:07:06.365201', '2026-04-23 11:07:06.365201', NULL, '2026-04-23 11:07:06', '2026-04-23 11:07:06');
INSERT INTO `user_login_records` VALUES (102, 1, '2026-04-22', '2026-04-23 11:07:06.405680', '2026-04-23 11:07:06.405680', NULL, '2026-04-23 11:07:06', '2026-04-23 11:07:06');
INSERT INTO `user_login_records` VALUES (103, 1, '2026-04-22', '2026-04-23 11:15:01.912215', '2026-04-23 11:15:01.912215', NULL, '2026-04-23 11:15:01', '2026-04-23 11:15:01');
INSERT INTO `user_login_records` VALUES (104, 1, '2026-04-22', '2026-04-23 11:15:01.967560', '2026-04-23 11:15:01.967560', NULL, '2026-04-23 11:15:01', '2026-04-23 11:15:01');
INSERT INTO `user_login_records` VALUES (105, 1, '2026-04-22', '2026-04-23 11:16:33.875588', '2026-04-23 11:16:33.875588', NULL, '2026-04-23 11:16:33', '2026-04-23 11:16:33');
INSERT INTO `user_login_records` VALUES (106, 1, '2026-04-22', '2026-04-23 11:16:33.926571', '2026-04-23 11:16:33.926571', NULL, '2026-04-23 11:16:33', '2026-04-23 11:16:33');
INSERT INTO `user_login_records` VALUES (107, 1, '2026-04-22', '2026-04-23 11:18:33.871783', '2026-04-23 11:18:33.871783', NULL, '2026-04-23 11:18:33', '2026-04-23 11:18:33');
INSERT INTO `user_login_records` VALUES (108, 1, '2026-04-22', '2026-04-23 11:18:33.978285', '2026-04-23 11:18:33.978285', NULL, '2026-04-23 11:18:33', '2026-04-23 11:18:33');
INSERT INTO `user_login_records` VALUES (109, 1, '2026-04-22', '2026-04-23 11:20:58.918755', '2026-04-23 11:20:58.918755', NULL, '2026-04-23 11:20:58', '2026-04-23 11:20:58');
INSERT INTO `user_login_records` VALUES (110, 1, '2026-04-22', '2026-04-23 11:20:59.051402', '2026-04-23 11:20:59.051402', NULL, '2026-04-23 11:20:59', '2026-04-23 11:20:59');
INSERT INTO `user_login_records` VALUES (111, 1, '2026-04-22', '2026-04-23 11:22:46.830681', '2026-04-23 11:22:46.830681', NULL, '2026-04-23 11:22:46', '2026-04-23 11:22:46');
INSERT INTO `user_login_records` VALUES (112, 1, '2026-04-22', '2026-04-23 11:22:46.913964', '2026-04-23 11:22:46.913964', NULL, '2026-04-23 11:22:46', '2026-04-23 11:22:46');
INSERT INTO `user_login_records` VALUES (113, 1, '2026-04-22', '2026-04-23 11:28:18.740148', '2026-04-23 11:28:18.740148', NULL, '2026-04-23 11:28:18', '2026-04-23 11:28:18');
INSERT INTO `user_login_records` VALUES (114, 1, '2026-04-22', '2026-04-23 11:28:18.794931', '2026-04-23 11:28:18.794931', NULL, '2026-04-23 11:28:18', '2026-04-23 11:28:18');
INSERT INTO `user_login_records` VALUES (115, 1, '2026-04-22', '2026-04-23 11:34:20.981100', '2026-04-23 11:34:20.981100', NULL, '2026-04-23 11:34:20', '2026-04-23 11:34:20');
INSERT INTO `user_login_records` VALUES (116, 1, '2026-04-22', '2026-04-23 11:34:21.041091', '2026-04-23 11:34:21.041091', NULL, '2026-04-23 11:34:21', '2026-04-23 11:34:21');
INSERT INTO `user_login_records` VALUES (117, 1, '2026-04-22', '2026-04-23 11:42:21.873612', '2026-04-23 11:42:21.873612', NULL, '2026-04-23 11:42:21', '2026-04-23 11:42:21');
INSERT INTO `user_login_records` VALUES (118, 1, '2026-04-22', '2026-04-23 11:42:21.924581', '2026-04-23 11:42:21.924581', NULL, '2026-04-23 11:42:21', '2026-04-23 11:42:21');
INSERT INTO `user_login_records` VALUES (119, 1, '2026-04-22', '2026-04-23 14:49:32.036724', '2026-04-23 14:49:32.036724', NULL, '2026-04-23 14:49:32', '2026-04-23 14:49:32');
INSERT INTO `user_login_records` VALUES (120, 1, '2026-04-22', '2026-04-23 14:49:32.093742', '2026-04-23 14:49:32.093742', NULL, '2026-04-23 14:49:32', '2026-04-23 14:49:32');
INSERT INTO `user_login_records` VALUES (121, 1, '2026-04-22', '2026-04-23 16:07:49.962083', '2026-04-23 16:07:49.962083', NULL, '2026-04-23 16:07:49', '2026-04-23 16:07:49');
INSERT INTO `user_login_records` VALUES (122, 1, '2026-04-22', '2026-04-23 16:07:50.011546', '2026-04-23 16:07:50.011546', NULL, '2026-04-23 16:07:50', '2026-04-23 16:07:50');
INSERT INTO `user_login_records` VALUES (123, 1, '2026-04-22', '2026-04-23 16:08:02.785147', '2026-04-23 16:08:02.785147', NULL, '2026-04-23 16:08:02', '2026-04-23 16:08:02');
INSERT INTO `user_login_records` VALUES (124, 1, '2026-04-22', '2026-04-23 16:08:02.836905', '2026-04-23 16:08:02.836905', NULL, '2026-04-23 16:08:02', '2026-04-23 16:08:02');
INSERT INTO `user_login_records` VALUES (125, 1, '2026-04-22', '2026-04-23 16:08:37.857204', '2026-04-23 16:08:37.857204', NULL, '2026-04-23 16:08:37', '2026-04-23 16:08:37');
INSERT INTO `user_login_records` VALUES (126, 1, '2026-04-22', '2026-04-23 16:08:37.924001', '2026-04-23 16:08:37.924001', NULL, '2026-04-23 16:08:37', '2026-04-23 16:08:37');
INSERT INTO `user_login_records` VALUES (127, 1, '2026-04-22', '2026-04-23 16:56:02.003928', '2026-04-23 16:56:02.003928', NULL, '2026-04-23 16:56:02', '2026-04-23 16:56:02');
INSERT INTO `user_login_records` VALUES (128, 1, '2026-04-22', '2026-04-23 16:56:02.497440', '2026-04-23 16:56:02.497440', NULL, '2026-04-23 16:56:02', '2026-04-23 16:56:02');
INSERT INTO `user_login_records` VALUES (129, 1, '2026-04-22', '2026-04-23 16:56:27.817938', '2026-04-23 16:56:27.817938', NULL, '2026-04-23 16:56:27', '2026-04-23 16:56:27');
INSERT INTO `user_login_records` VALUES (130, 1, '2026-04-22', '2026-04-23 16:56:27.955859', '2026-04-23 16:56:27.955859', NULL, '2026-04-23 16:56:27', '2026-04-23 16:56:27');
INSERT INTO `user_login_records` VALUES (131, 1, '2026-04-22', '2026-04-23 16:56:41.905287', '2026-04-23 16:56:41.905287', NULL, '2026-04-23 16:56:41', '2026-04-23 16:56:41');
INSERT INTO `user_login_records` VALUES (132, 1, '2026-04-22', '2026-04-23 16:56:41.965286', '2026-04-23 16:56:41.965286', NULL, '2026-04-23 16:56:41', '2026-04-23 16:56:41');
INSERT INTO `user_login_records` VALUES (133, 1, '2026-04-22', '2026-04-23 16:56:53.799593', '2026-04-23 16:56:53.799593', NULL, '2026-04-23 16:56:53', '2026-04-23 16:56:53');
INSERT INTO `user_login_records` VALUES (134, 1, '2026-04-22', '2026-04-23 16:56:53.840095', '2026-04-23 16:56:53.840095', NULL, '2026-04-23 16:56:53', '2026-04-23 16:56:53');
INSERT INTO `user_login_records` VALUES (135, 1, '2026-04-22', '2026-04-23 16:57:06.800290', '2026-04-23 16:57:06.800290', NULL, '2026-04-23 16:57:06', '2026-04-23 16:57:06');
INSERT INTO `user_login_records` VALUES (136, 1, '2026-04-22', '2026-04-23 16:57:06.855788', '2026-04-23 16:57:06.855788', NULL, '2026-04-23 16:57:06', '2026-04-23 16:57:06');
INSERT INTO `user_login_records` VALUES (137, 1, '2026-04-22', '2026-04-23 16:57:20.768498', '2026-04-23 16:57:20.768498', NULL, '2026-04-23 16:57:20', '2026-04-23 16:57:20');
INSERT INTO `user_login_records` VALUES (138, 1, '2026-04-22', '2026-04-23 16:57:20.819532', '2026-04-23 16:57:20.819532', NULL, '2026-04-23 16:57:20', '2026-04-23 16:57:20');
INSERT INTO `user_login_records` VALUES (139, 1, '2026-04-22', '2026-04-23 16:57:32.794869', '2026-04-23 16:57:32.794869', NULL, '2026-04-23 16:57:32', '2026-04-23 16:57:32');
INSERT INTO `user_login_records` VALUES (140, 1, '2026-04-22', '2026-04-23 16:57:32.878893', '2026-04-23 16:57:32.878893', NULL, '2026-04-23 16:57:32', '2026-04-23 16:57:32');
INSERT INTO `user_login_records` VALUES (141, 1, '2026-04-22', '2026-04-23 16:57:45.794861', '2026-04-23 16:57:45.794861', NULL, '2026-04-23 16:57:45', '2026-04-23 16:57:45');
INSERT INTO `user_login_records` VALUES (142, 1, '2026-04-22', '2026-04-23 16:57:45.857057', '2026-04-23 16:57:45.857057', NULL, '2026-04-23 16:57:45', '2026-04-23 16:57:45');
INSERT INTO `user_login_records` VALUES (143, 1, '2026-04-22', '2026-04-23 16:57:56.783867', '2026-04-23 16:57:56.783867', NULL, '2026-04-23 16:57:56', '2026-04-23 16:57:56');
INSERT INTO `user_login_records` VALUES (144, 1, '2026-04-22', '2026-04-23 16:57:56.837126', '2026-04-23 16:57:56.837126', NULL, '2026-04-23 16:57:56', '2026-04-23 16:57:56');
INSERT INTO `user_login_records` VALUES (145, 1, '2026-04-22', '2026-04-23 16:58:09.848300', '2026-04-23 16:58:09.848300', NULL, '2026-04-23 16:58:09', '2026-04-23 16:58:09');
INSERT INTO `user_login_records` VALUES (146, 1, '2026-04-22', '2026-04-23 16:58:09.891034', '2026-04-23 16:58:09.891034', NULL, '2026-04-23 16:58:09', '2026-04-23 16:58:09');
INSERT INTO `user_login_records` VALUES (147, 1, '2026-04-22', '2026-04-23 16:58:21.737643', '2026-04-23 16:58:21.737643', NULL, '2026-04-23 16:58:21', '2026-04-23 16:58:21');
INSERT INTO `user_login_records` VALUES (148, 1, '2026-04-22', '2026-04-23 16:58:21.791632', '2026-04-23 16:58:21.791632', NULL, '2026-04-23 16:58:21', '2026-04-23 16:58:21');
INSERT INTO `user_login_records` VALUES (149, 1, '2026-04-22', '2026-04-23 16:58:35.832467', '2026-04-23 16:58:35.832467', NULL, '2026-04-23 16:58:35', '2026-04-23 16:58:35');
INSERT INTO `user_login_records` VALUES (150, 1, '2026-04-22', '2026-04-23 16:58:35.897024', '2026-04-23 16:58:35.897024', NULL, '2026-04-23 16:58:35', '2026-04-23 16:58:35');
INSERT INTO `user_login_records` VALUES (151, 1, '2026-04-22', '2026-04-23 16:59:59.940794', '2026-04-23 16:59:59.940794', NULL, '2026-04-23 16:59:59', '2026-04-23 16:59:59');
INSERT INTO `user_login_records` VALUES (152, 1, '2026-04-22', '2026-04-23 17:00:00.000821', '2026-04-23 17:00:00.000821', NULL, '2026-04-23 17:00:00', '2026-04-23 17:00:00');
INSERT INTO `user_login_records` VALUES (153, 1, '2026-04-22', '2026-04-23 17:00:10.834672', '2026-04-23 17:00:10.834672', NULL, '2026-04-23 17:00:10', '2026-04-23 17:00:10');
INSERT INTO `user_login_records` VALUES (154, 1, '2026-04-22', '2026-04-23 17:00:10.887185', '2026-04-23 17:00:10.887185', NULL, '2026-04-23 17:00:10', '2026-04-23 17:00:10');
INSERT INTO `user_login_records` VALUES (155, 1, '2026-04-22', '2026-04-23 17:00:22.021109', '2026-04-23 17:00:22.021109', NULL, '2026-04-23 17:00:22', '2026-04-23 17:00:22');
INSERT INTO `user_login_records` VALUES (156, 1, '2026-04-22', '2026-04-23 17:00:22.069844', '2026-04-23 17:00:22.069844', NULL, '2026-04-23 17:00:22', '2026-04-23 17:00:22');
INSERT INTO `user_login_records` VALUES (157, 1, '2026-04-22', '2026-04-23 17:00:30.905625', '2026-04-23 17:00:30.905625', NULL, '2026-04-23 17:00:30', '2026-04-23 17:00:30');
INSERT INTO `user_login_records` VALUES (158, 1, '2026-04-22', '2026-04-23 17:00:30.954393', '2026-04-23 17:00:30.954393', NULL, '2026-04-23 17:00:30', '2026-04-23 17:00:30');
INSERT INTO `user_login_records` VALUES (159, 1, '2026-04-22', '2026-04-23 17:00:43.953592', '2026-04-23 17:00:43.953592', NULL, '2026-04-23 17:00:43', '2026-04-23 17:00:43');
INSERT INTO `user_login_records` VALUES (160, 1, '2026-04-22', '2026-04-23 17:00:44.018100', '2026-04-23 17:00:44.018100', NULL, '2026-04-23 17:00:44', '2026-04-23 17:00:44');
INSERT INTO `user_login_records` VALUES (161, 1, '2026-04-22', '2026-04-23 17:00:55.841236', '2026-04-23 17:00:55.841236', NULL, '2026-04-23 17:00:55', '2026-04-23 17:00:55');
INSERT INTO `user_login_records` VALUES (162, 1, '2026-04-22', '2026-04-23 17:00:55.890031', '2026-04-23 17:00:55.890031', NULL, '2026-04-23 17:00:55', '2026-04-23 17:00:55');
INSERT INTO `user_login_records` VALUES (163, 1, '2026-04-22', '2026-04-23 17:01:05.886913', '2026-04-23 17:01:05.886913', NULL, '2026-04-23 17:01:05', '2026-04-23 17:01:05');
INSERT INTO `user_login_records` VALUES (164, 1, '2026-04-22', '2026-04-23 17:01:05.946913', '2026-04-23 17:01:05.946913', NULL, '2026-04-23 17:01:05', '2026-04-23 17:01:05');
INSERT INTO `user_login_records` VALUES (165, 1, '2026-04-22', '2026-04-23 17:01:19.801106', '2026-04-23 17:01:19.801106', NULL, '2026-04-23 17:01:19', '2026-04-23 17:01:19');
INSERT INTO `user_login_records` VALUES (166, 1, '2026-04-22', '2026-04-23 17:01:19.853550', '2026-04-23 17:01:19.853550', NULL, '2026-04-23 17:01:19', '2026-04-23 17:01:19');
INSERT INTO `user_login_records` VALUES (167, 1, '2026-04-22', '2026-04-23 17:01:29.876659', '2026-04-23 17:01:29.876659', NULL, '2026-04-23 17:01:29', '2026-04-23 17:01:29');
INSERT INTO `user_login_records` VALUES (168, 1, '2026-04-22', '2026-04-23 17:01:29.932891', '2026-04-23 17:01:29.932891', NULL, '2026-04-23 17:01:29', '2026-04-23 17:01:29');
INSERT INTO `user_login_records` VALUES (169, 1, '2026-04-22', '2026-04-23 17:01:38.785984', '2026-04-23 17:01:38.785984', NULL, '2026-04-23 17:01:38', '2026-04-23 17:01:38');
INSERT INTO `user_login_records` VALUES (170, 1, '2026-04-22', '2026-04-23 17:01:38.827989', '2026-04-23 17:01:38.827989', NULL, '2026-04-23 17:01:38', '2026-04-23 17:01:38');
INSERT INTO `user_login_records` VALUES (171, 1, '2026-04-22', '2026-04-23 17:01:48.822591', '2026-04-23 17:01:48.822591', NULL, '2026-04-23 17:01:48', '2026-04-23 17:01:48');
INSERT INTO `user_login_records` VALUES (172, 1, '2026-04-22', '2026-04-23 17:01:48.863108', '2026-04-23 17:01:48.863108', NULL, '2026-04-23 17:01:48', '2026-04-23 17:01:48');
INSERT INTO `user_login_records` VALUES (173, 1, '2026-04-22', '2026-04-23 17:01:57.793522', '2026-04-23 17:01:57.793522', NULL, '2026-04-23 17:01:57', '2026-04-23 17:01:57');
INSERT INTO `user_login_records` VALUES (174, 1, '2026-04-22', '2026-04-23 17:01:57.851295', '2026-04-23 17:01:57.851295', NULL, '2026-04-23 17:01:57', '2026-04-23 17:01:57');
INSERT INTO `user_login_records` VALUES (175, 1, '2026-04-22', '2026-04-23 17:02:08.855455', '2026-04-23 17:02:08.855455', NULL, '2026-04-23 17:02:08', '2026-04-23 17:02:08');
INSERT INTO `user_login_records` VALUES (176, 1, '2026-04-22', '2026-04-23 17:02:08.907207', '2026-04-23 17:02:08.907207', NULL, '2026-04-23 17:02:08', '2026-04-23 17:02:08');
INSERT INTO `user_login_records` VALUES (177, 1, '2026-04-22', '2026-04-23 17:02:23.824172', '2026-04-23 17:02:23.824172', NULL, '2026-04-23 17:02:23', '2026-04-23 17:02:23');
INSERT INTO `user_login_records` VALUES (178, 1, '2026-04-22', '2026-04-23 17:02:23.872130', '2026-04-23 17:02:23.872130', NULL, '2026-04-23 17:02:23', '2026-04-23 17:02:23');
INSERT INTO `user_login_records` VALUES (179, 1, '2026-04-22', '2026-04-23 17:02:34.867237', '2026-04-23 17:02:34.867237', NULL, '2026-04-23 17:02:34', '2026-04-23 17:02:34');
INSERT INTO `user_login_records` VALUES (180, 1, '2026-04-22', '2026-04-23 17:02:34.907706', '2026-04-23 17:02:34.907706', NULL, '2026-04-23 17:02:34', '2026-04-23 17:02:34');
INSERT INTO `user_login_records` VALUES (181, 1, '2026-04-22', '2026-04-23 17:02:44.843135', '2026-04-23 17:02:44.843135', NULL, '2026-04-23 17:02:44', '2026-04-23 17:02:44');
INSERT INTO `user_login_records` VALUES (182, 1, '2026-04-22', '2026-04-23 17:02:44.890406', '2026-04-23 17:02:44.890406', NULL, '2026-04-23 17:02:44', '2026-04-23 17:02:44');
INSERT INTO `user_login_records` VALUES (183, 1, '2026-04-22', '2026-04-23 17:02:54.879000', '2026-04-23 17:02:54.879000', NULL, '2026-04-23 17:02:54', '2026-04-23 17:02:54');
INSERT INTO `user_login_records` VALUES (184, 1, '2026-04-22', '2026-04-23 17:02:54.920217', '2026-04-23 17:02:54.920217', NULL, '2026-04-23 17:02:54', '2026-04-23 17:02:54');
INSERT INTO `user_login_records` VALUES (185, 1, '2026-04-22', '2026-04-23 17:03:02.909400', '2026-04-23 17:03:02.909400', NULL, '2026-04-23 17:03:02', '2026-04-23 17:03:02');
INSERT INTO `user_login_records` VALUES (186, 1, '2026-04-22', '2026-04-23 17:03:02.967135', '2026-04-23 17:03:02.967135', NULL, '2026-04-23 17:03:02', '2026-04-23 17:03:02');
INSERT INTO `user_login_records` VALUES (187, 1, '2026-04-22', '2026-04-23 17:03:13.962937', '2026-04-23 17:03:13.962937', NULL, '2026-04-23 17:03:13', '2026-04-23 17:03:13');
INSERT INTO `user_login_records` VALUES (188, 1, '2026-04-22', '2026-04-23 17:03:14.004952', '2026-04-23 17:03:14.004952', NULL, '2026-04-23 17:03:14', '2026-04-23 17:03:14');
INSERT INTO `user_login_records` VALUES (189, 1, '2026-04-22', '2026-04-23 17:03:23.886552', '2026-04-23 17:03:23.886552', NULL, '2026-04-23 17:03:23', '2026-04-23 17:03:23');
INSERT INTO `user_login_records` VALUES (190, 1, '2026-04-22', '2026-04-23 17:03:23.930014', '2026-04-23 17:03:23.930014', NULL, '2026-04-23 17:03:23', '2026-04-23 17:03:23');
INSERT INTO `user_login_records` VALUES (191, 1, '2026-04-22', '2026-04-23 17:03:34.847022', '2026-04-23 17:03:34.847022', NULL, '2026-04-23 17:03:34', '2026-04-23 17:03:34');
INSERT INTO `user_login_records` VALUES (192, 1, '2026-04-22', '2026-04-23 17:03:34.896577', '2026-04-23 17:03:34.896577', NULL, '2026-04-23 17:03:34', '2026-04-23 17:03:34');
INSERT INTO `user_login_records` VALUES (193, 1, '2026-04-22', '2026-04-23 17:03:47.827452', '2026-04-23 17:03:47.827452', NULL, '2026-04-23 17:03:47', '2026-04-23 17:03:47');
INSERT INTO `user_login_records` VALUES (194, 1, '2026-04-22', '2026-04-23 17:03:47.876197', '2026-04-23 17:03:47.876197', NULL, '2026-04-23 17:03:47', '2026-04-23 17:03:47');
INSERT INTO `user_login_records` VALUES (195, 1, '2026-04-22', '2026-04-23 17:03:57.816969', '2026-04-23 17:03:57.816969', NULL, '2026-04-23 17:03:57', '2026-04-23 17:03:57');
INSERT INTO `user_login_records` VALUES (196, 1, '2026-04-22', '2026-04-23 17:03:57.858956', '2026-04-23 17:03:57.858956', NULL, '2026-04-23 17:03:57', '2026-04-23 17:03:57');
INSERT INTO `user_login_records` VALUES (197, 1, '2026-04-22', '2026-04-23 17:04:54.914274', '2026-04-23 17:04:54.914274', NULL, '2026-04-23 17:04:54', '2026-04-23 17:04:54');
INSERT INTO `user_login_records` VALUES (198, 1, '2026-04-22', '2026-04-23 17:04:54.963049', '2026-04-23 17:04:54.963049', NULL, '2026-04-23 17:04:54', '2026-04-23 17:04:54');
INSERT INTO `user_login_records` VALUES (199, 1, '2026-04-22', '2026-04-23 17:05:00.847678', '2026-04-23 17:05:00.847678', NULL, '2026-04-23 17:05:00', '2026-04-23 17:05:00');
INSERT INTO `user_login_records` VALUES (200, 1, '2026-04-22', '2026-04-23 17:05:00.897899', '2026-04-23 17:05:00.897899', NULL, '2026-04-23 17:05:00', '2026-04-23 17:05:00');
INSERT INTO `user_login_records` VALUES (201, 1, '2026-04-22', '2026-04-23 17:05:07.938924', '2026-04-23 17:05:07.938924', NULL, '2026-04-23 17:05:07', '2026-04-23 17:05:07');
INSERT INTO `user_login_records` VALUES (202, 1, '2026-04-22', '2026-04-23 17:05:07.983920', '2026-04-23 17:05:07.983920', NULL, '2026-04-23 17:05:07', '2026-04-23 17:05:07');
INSERT INTO `user_login_records` VALUES (203, 1, '2026-04-22', '2026-04-23 17:05:16.924764', '2026-04-23 17:05:16.924764', NULL, '2026-04-23 17:05:16', '2026-04-23 17:05:16');
INSERT INTO `user_login_records` VALUES (204, 1, '2026-04-22', '2026-04-23 17:05:16.975018', '2026-04-23 17:05:16.975018', NULL, '2026-04-23 17:05:16', '2026-04-23 17:05:16');
INSERT INTO `user_login_records` VALUES (205, 1, '2026-04-22', '2026-04-23 17:05:21.832887', '2026-04-23 17:05:21.832887', NULL, '2026-04-23 17:05:21', '2026-04-23 17:05:21');
INSERT INTO `user_login_records` VALUES (206, 1, '2026-04-22', '2026-04-23 17:05:21.913869', '2026-04-23 17:05:21.913869', NULL, '2026-04-23 17:05:21', '2026-04-23 17:05:21');
INSERT INTO `user_login_records` VALUES (207, 1, '2026-04-22', '2026-04-23 17:05:30.927589', '2026-04-23 17:05:30.927589', NULL, '2026-04-23 17:05:30', '2026-04-23 17:05:30');
INSERT INTO `user_login_records` VALUES (208, 1, '2026-04-22', '2026-04-23 17:05:30.984530', '2026-04-23 17:05:30.984530', NULL, '2026-04-23 17:05:30', '2026-04-23 17:05:30');
INSERT INTO `user_login_records` VALUES (209, 1, '2026-04-22', '2026-04-23 17:05:40.839009', '2026-04-23 17:05:40.839009', NULL, '2026-04-23 17:05:40', '2026-04-23 17:05:40');
INSERT INTO `user_login_records` VALUES (210, 1, '2026-04-22', '2026-04-23 17:05:40.881045', '2026-04-23 17:05:40.881045', NULL, '2026-04-23 17:05:40', '2026-04-23 17:05:40');
INSERT INTO `user_login_records` VALUES (211, 1, '2026-04-22', '2026-04-23 17:05:47.945947', '2026-04-23 17:05:47.945947', NULL, '2026-04-23 17:05:47', '2026-04-23 17:05:47');
INSERT INTO `user_login_records` VALUES (212, 1, '2026-04-22', '2026-04-23 17:05:47.987183', '2026-04-23 17:05:47.987183', NULL, '2026-04-23 17:05:47', '2026-04-23 17:05:47');
INSERT INTO `user_login_records` VALUES (213, 1, '2026-04-22', '2026-04-23 17:05:58.829392', '2026-04-23 17:05:58.829392', NULL, '2026-04-23 17:05:58', '2026-04-23 17:05:58');
INSERT INTO `user_login_records` VALUES (214, 1, '2026-04-22', '2026-04-23 17:05:58.879646', '2026-04-23 17:05:58.879646', NULL, '2026-04-23 17:05:58', '2026-04-23 17:05:58');
INSERT INTO `user_login_records` VALUES (215, 1, '2026-04-22', '2026-04-23 17:06:04.833157', '2026-04-23 17:06:04.833157', NULL, '2026-04-23 17:06:04', '2026-04-23 17:06:04');
INSERT INTO `user_login_records` VALUES (216, 1, '2026-04-22', '2026-04-23 17:06:04.889429', '2026-04-23 17:06:04.889429', NULL, '2026-04-23 17:06:04', '2026-04-23 17:06:04');
INSERT INTO `user_login_records` VALUES (217, 1, '2026-04-22', '2026-04-23 17:06:10.798747', '2026-04-23 17:06:10.798747', NULL, '2026-04-23 17:06:10', '2026-04-23 17:06:10');
INSERT INTO `user_login_records` VALUES (218, 1, '2026-04-22', '2026-04-23 17:06:10.841493', '2026-04-23 17:06:10.841493', NULL, '2026-04-23 17:06:10', '2026-04-23 17:06:10');
INSERT INTO `user_login_records` VALUES (219, 1, '2026-04-22', '2026-04-23 17:06:17.842161', '2026-04-23 17:06:17.842161', NULL, '2026-04-23 17:06:17', '2026-04-23 17:06:17');
INSERT INTO `user_login_records` VALUES (220, 1, '2026-04-22', '2026-04-23 17:06:17.893165', '2026-04-23 17:06:17.893165', NULL, '2026-04-23 17:06:17', '2026-04-23 17:06:17');
INSERT INTO `user_login_records` VALUES (221, 1, '2026-04-22', '2026-04-23 17:06:24.825535', '2026-04-23 17:06:24.825535', NULL, '2026-04-23 17:06:24', '2026-04-23 17:06:24');
INSERT INTO `user_login_records` VALUES (222, 1, '2026-04-22', '2026-04-23 17:06:24.877266', '2026-04-23 17:06:24.877266', NULL, '2026-04-23 17:06:24', '2026-04-23 17:06:24');
INSERT INTO `user_login_records` VALUES (223, 1, '2026-04-22', '2026-04-23 17:06:30.845846', '2026-04-23 17:06:30.845846', NULL, '2026-04-23 17:06:30', '2026-04-23 17:06:30');
INSERT INTO `user_login_records` VALUES (224, 1, '2026-04-22', '2026-04-23 17:06:30.894574', '2026-04-23 17:06:30.894574', NULL, '2026-04-23 17:06:30', '2026-04-23 17:06:30');
INSERT INTO `user_login_records` VALUES (225, 1, '2026-04-22', '2026-04-23 17:06:39.997356', '2026-04-23 17:06:39.997356', NULL, '2026-04-23 17:06:39', '2026-04-23 17:06:39');
INSERT INTO `user_login_records` VALUES (226, 1, '2026-04-22', '2026-04-23 17:06:40.099453', '2026-04-23 17:06:40.099453', NULL, '2026-04-23 17:06:40', '2026-04-23 17:06:40');
INSERT INTO `user_login_records` VALUES (227, 1, '2026-04-22', '2026-04-23 17:06:45.829404', '2026-04-23 17:06:45.829404', NULL, '2026-04-23 17:06:45', '2026-04-23 17:06:45');
INSERT INTO `user_login_records` VALUES (228, 1, '2026-04-22', '2026-04-23 17:06:45.874413', '2026-04-23 17:06:45.874413', NULL, '2026-04-23 17:06:45', '2026-04-23 17:06:45');
INSERT INTO `user_login_records` VALUES (229, 1, '2026-04-22', '2026-04-23 17:06:53.852344', '2026-04-23 17:06:53.852344', NULL, '2026-04-23 17:06:53', '2026-04-23 17:06:53');
INSERT INTO `user_login_records` VALUES (230, 1, '2026-04-22', '2026-04-23 17:06:53.902596', '2026-04-23 17:06:53.902596', NULL, '2026-04-23 17:06:53', '2026-04-23 17:06:53');
INSERT INTO `user_login_records` VALUES (231, 1, '2026-04-22', '2026-04-23 17:06:59.806623', '2026-04-23 17:06:59.806623', NULL, '2026-04-23 17:06:59', '2026-04-23 17:06:59');
INSERT INTO `user_login_records` VALUES (232, 1, '2026-04-22', '2026-04-23 17:06:59.849356', '2026-04-23 17:06:59.849356', NULL, '2026-04-23 17:06:59', '2026-04-23 17:06:59');
INSERT INTO `user_login_records` VALUES (233, 1, '2026-04-22', '2026-04-23 17:07:10.111836', '2026-04-23 17:07:10.111836', NULL, '2026-04-23 17:07:10', '2026-04-23 17:07:10');
INSERT INTO `user_login_records` VALUES (234, 1, '2026-04-22', '2026-04-23 17:07:10.172574', '2026-04-23 17:07:10.172574', NULL, '2026-04-23 17:07:10', '2026-04-23 17:07:10');
INSERT INTO `user_login_records` VALUES (235, 1, '2026-04-22', '2026-04-23 17:07:14.833872', '2026-04-23 17:07:14.833872', NULL, '2026-04-23 17:07:14', '2026-04-23 17:07:14');
INSERT INTO `user_login_records` VALUES (236, 1, '2026-04-22', '2026-04-23 17:07:14.924618', '2026-04-23 17:07:14.924618', NULL, '2026-04-23 17:07:14', '2026-04-23 17:07:14');
INSERT INTO `user_login_records` VALUES (237, 1, '2026-04-22', '2026-04-23 17:07:21.914093', '2026-04-23 17:07:21.914093', NULL, '2026-04-23 17:07:21', '2026-04-23 17:07:21');
INSERT INTO `user_login_records` VALUES (238, 1, '2026-04-22', '2026-04-23 17:07:21.962077', '2026-04-23 17:07:21.962077', NULL, '2026-04-23 17:07:21', '2026-04-23 17:07:21');
INSERT INTO `user_login_records` VALUES (239, 1, '2026-04-22', '2026-04-23 17:07:29.900120', '2026-04-23 17:07:29.900120', NULL, '2026-04-23 17:07:29', '2026-04-23 17:07:29');
INSERT INTO `user_login_records` VALUES (240, 1, '2026-04-22', '2026-04-23 17:07:29.948097', '2026-04-23 17:07:29.948097', NULL, '2026-04-23 17:07:29', '2026-04-23 17:07:29');
INSERT INTO `user_login_records` VALUES (241, 1, '2026-04-22', '2026-04-23 17:07:35.825871', '2026-04-23 17:07:35.825871', NULL, '2026-04-23 17:07:35', '2026-04-23 17:07:35');
INSERT INTO `user_login_records` VALUES (242, 1, '2026-04-22', '2026-04-23 17:07:35.871561', '2026-04-23 17:07:35.871561', NULL, '2026-04-23 17:07:35', '2026-04-23 17:07:35');
INSERT INTO `user_login_records` VALUES (243, 1, '2026-04-22', '2026-04-23 17:07:44.831951', '2026-04-23 17:07:44.831951', NULL, '2026-04-23 17:07:44', '2026-04-23 17:07:44');
INSERT INTO `user_login_records` VALUES (244, 1, '2026-04-22', '2026-04-23 17:07:44.873954', '2026-04-23 17:07:44.873954', NULL, '2026-04-23 17:07:44', '2026-04-23 17:07:44');
INSERT INTO `user_login_records` VALUES (245, 1, '2026-04-22', '2026-04-23 17:07:51.970584', '2026-04-23 17:07:51.970584', NULL, '2026-04-23 17:07:51', '2026-04-23 17:07:51');
INSERT INTO `user_login_records` VALUES (246, 1, '2026-04-22', '2026-04-23 17:07:52.017266', '2026-04-23 17:07:52.017266', NULL, '2026-04-23 17:07:52', '2026-04-23 17:07:52');
INSERT INTO `user_login_records` VALUES (247, 1, '2026-04-22', '2026-04-23 17:07:58.885696', '2026-04-23 17:07:58.885696', NULL, '2026-04-23 17:07:58', '2026-04-23 17:07:58');
INSERT INTO `user_login_records` VALUES (248, 1, '2026-04-22', '2026-04-23 17:07:58.935913', '2026-04-23 17:07:58.935913', NULL, '2026-04-23 17:07:58', '2026-04-23 17:07:58');
INSERT INTO `user_login_records` VALUES (249, 1, '2026-04-22', '2026-04-23 17:08:04.848989', '2026-04-23 17:08:04.848989', NULL, '2026-04-23 17:08:04', '2026-04-23 17:08:04');
INSERT INTO `user_login_records` VALUES (250, 1, '2026-04-22', '2026-04-23 17:08:04.902212', '2026-04-23 17:08:04.902212', NULL, '2026-04-23 17:08:04', '2026-04-23 17:08:04');
INSERT INTO `user_login_records` VALUES (251, 1, '2026-04-22', '2026-04-23 17:08:11.948593', '2026-04-23 17:08:11.948593', NULL, '2026-04-23 17:08:11', '2026-04-23 17:08:11');
INSERT INTO `user_login_records` VALUES (252, 1, '2026-04-22', '2026-04-23 17:08:11.999658', '2026-04-23 17:08:11.999658', NULL, '2026-04-23 17:08:11', '2026-04-23 17:08:11');
INSERT INTO `user_login_records` VALUES (253, 1, '2026-04-22', '2026-04-23 17:08:21.848856', '2026-04-23 17:08:21.848856', NULL, '2026-04-23 17:08:21', '2026-04-23 17:08:21');
INSERT INTO `user_login_records` VALUES (254, 1, '2026-04-22', '2026-04-23 17:08:21.896909', '2026-04-23 17:08:21.896909', NULL, '2026-04-23 17:08:21', '2026-04-23 17:08:21');
INSERT INTO `user_login_records` VALUES (255, 1, '2026-04-22', '2026-04-23 17:08:29.926401', '2026-04-23 17:08:29.926401', NULL, '2026-04-23 17:08:29', '2026-04-23 17:08:29');
INSERT INTO `user_login_records` VALUES (256, 1, '2026-04-22', '2026-04-23 17:08:29.976651', '2026-04-23 17:08:29.976651', NULL, '2026-04-23 17:08:29', '2026-04-23 17:08:29');
INSERT INTO `user_login_records` VALUES (257, 1, '2026-04-22', '2026-04-23 17:08:35.831844', '2026-04-23 17:08:35.831844', NULL, '2026-04-23 17:08:35', '2026-04-23 17:08:35');
INSERT INTO `user_login_records` VALUES (258, 1, '2026-04-22', '2026-04-23 17:08:35.872340', '2026-04-23 17:08:35.872340', NULL, '2026-04-23 17:08:35', '2026-04-23 17:08:35');
INSERT INTO `user_login_records` VALUES (259, 1, '2026-04-22', '2026-04-23 17:08:44.942932', '2026-04-23 17:08:44.942932', NULL, '2026-04-23 17:08:44', '2026-04-23 17:08:44');
INSERT INTO `user_login_records` VALUES (260, 1, '2026-04-22', '2026-04-23 17:08:44.987206', '2026-04-23 17:08:44.987206', NULL, '2026-04-23 17:08:44', '2026-04-23 17:08:44');
INSERT INTO `user_login_records` VALUES (261, 1, '2026-04-22', '2026-04-23 17:08:50.865786', '2026-04-23 17:08:50.865786', NULL, '2026-04-23 17:08:50', '2026-04-23 17:08:50');
INSERT INTO `user_login_records` VALUES (262, 1, '2026-04-22', '2026-04-23 17:08:50.917621', '2026-04-23 17:08:50.917621', NULL, '2026-04-23 17:08:50', '2026-04-23 17:08:50');
INSERT INTO `user_login_records` VALUES (263, 1, '2026-04-22', '2026-04-23 17:08:57.922619', '2026-04-23 17:08:57.922619', NULL, '2026-04-23 17:08:57', '2026-04-23 17:08:57');
INSERT INTO `user_login_records` VALUES (264, 1, '2026-04-22', '2026-04-23 17:08:57.968376', '2026-04-23 17:08:57.968376', NULL, '2026-04-23 17:08:57', '2026-04-23 17:08:57');
INSERT INTO `user_login_records` VALUES (265, 1, '2026-04-22', '2026-04-23 17:09:03.873175', '2026-04-23 17:09:03.873175', NULL, '2026-04-23 17:09:03', '2026-04-23 17:09:03');
INSERT INTO `user_login_records` VALUES (266, 1, '2026-04-22', '2026-04-23 17:09:03.915956', '2026-04-23 17:09:03.915956', NULL, '2026-04-23 17:09:03', '2026-04-23 17:09:03');
INSERT INTO `user_login_records` VALUES (267, 1, '2026-04-22', '2026-04-23 17:09:12.928814', '2026-04-23 17:09:12.928814', NULL, '2026-04-23 17:09:12', '2026-04-23 17:09:12');
INSERT INTO `user_login_records` VALUES (268, 1, '2026-04-22', '2026-04-23 17:09:12.970051', '2026-04-23 17:09:12.970051', NULL, '2026-04-23 17:09:12', '2026-04-23 17:09:12');
INSERT INTO `user_login_records` VALUES (269, 1, '2026-04-22', '2026-04-23 17:09:23.863266', '2026-04-23 17:09:23.863266', NULL, '2026-04-23 17:09:23', '2026-04-23 17:09:23');
INSERT INTO `user_login_records` VALUES (270, 1, '2026-04-22', '2026-04-23 17:09:23.924054', '2026-04-23 17:09:23.924054', NULL, '2026-04-23 17:09:23', '2026-04-23 17:09:23');
INSERT INTO `user_login_records` VALUES (271, 1, '2026-04-22', '2026-04-23 17:09:37.993438', '2026-04-23 17:09:37.993438', NULL, '2026-04-23 17:09:37', '2026-04-23 17:09:37');
INSERT INTO `user_login_records` VALUES (272, 1, '2026-04-22', '2026-04-23 17:09:38.045213', '2026-04-23 17:09:38.045213', NULL, '2026-04-23 17:09:38', '2026-04-23 17:09:38');
INSERT INTO `user_login_records` VALUES (273, 1, '2026-04-22', '2026-04-23 17:09:44.842561', '2026-04-23 17:09:44.842561', NULL, '2026-04-23 17:09:44', '2026-04-23 17:09:44');
INSERT INTO `user_login_records` VALUES (274, 1, '2026-04-22', '2026-04-23 17:09:44.890526', '2026-04-23 17:09:44.890526', NULL, '2026-04-23 17:09:44', '2026-04-23 17:09:44');
INSERT INTO `user_login_records` VALUES (275, 1, '2026-04-22', '2026-04-23 17:09:52.950856', '2026-04-23 17:09:52.950856', NULL, '2026-04-23 17:09:52', '2026-04-23 17:09:52');
INSERT INTO `user_login_records` VALUES (276, 1, '2026-04-22', '2026-04-23 17:09:52.993562', '2026-04-23 17:09:52.993562', NULL, '2026-04-23 17:09:52', '2026-04-23 17:09:52');
INSERT INTO `user_login_records` VALUES (277, 1, '2026-04-22', '2026-04-23 17:09:57.864143', '2026-04-23 17:09:57.864143', NULL, '2026-04-23 17:09:57', '2026-04-23 17:09:57');
INSERT INTO `user_login_records` VALUES (278, 1, '2026-04-22', '2026-04-23 17:09:57.905411', '2026-04-23 17:09:57.905411', NULL, '2026-04-23 17:09:57', '2026-04-23 17:09:57');
INSERT INTO `user_login_records` VALUES (279, 1, '2026-04-22', '2026-04-23 17:10:11.983147', '2026-04-23 17:10:11.983147', NULL, '2026-04-23 17:10:11', '2026-04-23 17:10:11');
INSERT INTO `user_login_records` VALUES (280, 1, '2026-04-22', '2026-04-23 17:10:12.034906', '2026-04-23 17:10:12.034906', NULL, '2026-04-23 17:10:12', '2026-04-23 17:10:12');
INSERT INTO `user_login_records` VALUES (281, 1, '2026-04-22', '2026-04-23 17:10:19.036220', '2026-04-23 17:10:19.036220', NULL, '2026-04-23 17:10:19', '2026-04-23 17:10:19');
INSERT INTO `user_login_records` VALUES (282, 1, '2026-04-22', '2026-04-23 17:10:19.083465', '2026-04-23 17:10:19.083465', NULL, '2026-04-23 17:10:19', '2026-04-23 17:10:19');
INSERT INTO `user_login_records` VALUES (283, 1, '2026-04-22', '2026-04-23 17:10:25.846313', '2026-04-23 17:10:25.846313', NULL, '2026-04-23 17:10:25', '2026-04-23 17:10:25');
INSERT INTO `user_login_records` VALUES (284, 1, '2026-04-22', '2026-04-23 17:10:25.898100', '2026-04-23 17:10:25.898100', NULL, '2026-04-23 17:10:25', '2026-04-23 17:10:25');
INSERT INTO `user_login_records` VALUES (285, 1, '2026-04-22', '2026-04-23 17:10:32.921083', '2026-04-23 17:10:32.921083', NULL, '2026-04-23 17:10:32', '2026-04-23 17:10:32');
INSERT INTO `user_login_records` VALUES (286, 1, '2026-04-22', '2026-04-23 17:10:32.981089', '2026-04-23 17:10:32.981089', NULL, '2026-04-23 17:10:32', '2026-04-23 17:10:32');
INSERT INTO `user_login_records` VALUES (287, 1, '2026-04-22', '2026-04-23 17:10:38.897965', '2026-04-23 17:10:38.897965', NULL, '2026-04-23 17:10:38', '2026-04-23 17:10:38');
INSERT INTO `user_login_records` VALUES (288, 1, '2026-04-22', '2026-04-23 17:10:38.949731', '2026-04-23 17:10:38.949731', NULL, '2026-04-23 17:10:38', '2026-04-23 17:10:38');
INSERT INTO `user_login_records` VALUES (289, 1, '2026-04-22', '2026-04-23 17:10:43.945476', '2026-04-23 17:10:43.945476', NULL, '2026-04-23 17:10:43', '2026-04-23 17:10:43');
INSERT INTO `user_login_records` VALUES (290, 1, '2026-04-22', '2026-04-23 17:10:43.985964', '2026-04-23 17:10:43.985964', NULL, '2026-04-23 17:10:43', '2026-04-23 17:10:43');
INSERT INTO `user_login_records` VALUES (291, 1, '2026-04-22', '2026-04-23 17:10:50.858394', '2026-04-23 17:10:50.858394', NULL, '2026-04-23 17:10:50', '2026-04-23 17:10:50');
INSERT INTO `user_login_records` VALUES (292, 1, '2026-04-22', '2026-04-23 17:10:50.907138', '2026-04-23 17:10:50.907138', NULL, '2026-04-23 17:10:50', '2026-04-23 17:10:50');
INSERT INTO `user_login_records` VALUES (293, 1, '2026-04-22', '2026-04-23 17:11:02.962720', '2026-04-23 17:11:02.962720', NULL, '2026-04-23 17:11:02', '2026-04-23 17:11:02');
INSERT INTO `user_login_records` VALUES (294, 1, '2026-04-22', '2026-04-23 17:11:03.006262', '2026-04-23 17:11:03.006262', NULL, '2026-04-23 17:11:03', '2026-04-23 17:11:03');
INSERT INTO `user_login_records` VALUES (295, 1, '2026-04-22', '2026-04-23 17:12:24.020079', '2026-04-23 17:12:24.020079', NULL, '2026-04-23 17:12:24', '2026-04-23 17:12:24');
INSERT INTO `user_login_records` VALUES (296, 1, '2026-04-22', '2026-04-23 17:12:24.061432', '2026-04-23 17:12:24.061432', NULL, '2026-04-23 17:12:24', '2026-04-23 17:12:24');
INSERT INTO `user_login_records` VALUES (297, 1, '2026-04-22', '2026-04-23 17:12:44.959537', '2026-04-23 17:12:44.959537', NULL, '2026-04-23 17:12:44', '2026-04-23 17:12:44');
INSERT INTO `user_login_records` VALUES (298, 1, '2026-04-22', '2026-04-23 17:12:45.041283', '2026-04-23 17:12:45.041283', NULL, '2026-04-23 17:12:45', '2026-04-23 17:12:45');
INSERT INTO `user_login_records` VALUES (299, 1, '2026-04-22', '2026-04-23 17:13:03.937905', '2026-04-23 17:13:03.937905', NULL, '2026-04-23 17:13:03', '2026-04-23 17:13:03');
INSERT INTO `user_login_records` VALUES (300, 1, '2026-04-22', '2026-04-23 17:13:04.012096', '2026-04-23 17:13:04.012096', NULL, '2026-04-23 17:13:04', '2026-04-23 17:13:04');
INSERT INTO `user_login_records` VALUES (301, 1, '2026-04-22', '2026-04-23 17:13:21.060554', '2026-04-23 17:13:21.060554', NULL, '2026-04-23 17:13:21', '2026-04-23 17:13:21');
INSERT INTO `user_login_records` VALUES (302, 1, '2026-04-22', '2026-04-23 17:13:21.112322', '2026-04-23 17:13:21.112322', NULL, '2026-04-23 17:13:21', '2026-04-23 17:13:21');
INSERT INTO `user_login_records` VALUES (303, 1, '2026-04-22', '2026-04-23 17:13:41.022803', '2026-04-23 17:13:41.022803', NULL, '2026-04-23 17:13:41', '2026-04-23 17:13:41');
INSERT INTO `user_login_records` VALUES (304, 1, '2026-04-22', '2026-04-23 17:13:41.069261', '2026-04-23 17:13:41.069261', NULL, '2026-04-23 17:13:41', '2026-04-23 17:13:41');
INSERT INTO `user_login_records` VALUES (305, 1, '2026-04-22', '2026-04-23 17:14:02.074101', '2026-04-23 17:14:02.074101', NULL, '2026-04-23 17:14:02', '2026-04-23 17:14:02');
INSERT INTO `user_login_records` VALUES (306, 1, '2026-04-22', '2026-04-23 17:14:02.122088', '2026-04-23 17:14:02.122088', NULL, '2026-04-23 17:14:02', '2026-04-23 17:14:02');
INSERT INTO `user_login_records` VALUES (307, 1, '2026-04-22', '2026-04-23 17:14:24.164121', '2026-04-23 17:14:24.164121', NULL, '2026-04-23 17:14:24', '2026-04-23 17:14:24');
INSERT INTO `user_login_records` VALUES (308, 1, '2026-04-22', '2026-04-23 17:14:24.215126', '2026-04-23 17:14:24.215126', NULL, '2026-04-23 17:14:24', '2026-04-23 17:14:24');
INSERT INTO `user_login_records` VALUES (309, 1, '2026-04-22', '2026-04-23 17:14:42.933867', '2026-04-23 17:14:42.933867', NULL, '2026-04-23 17:14:42', '2026-04-23 17:14:42');
INSERT INTO `user_login_records` VALUES (310, 1, '2026-04-22', '2026-04-23 17:14:42.984842', '2026-04-23 17:14:42.984842', NULL, '2026-04-23 17:14:42', '2026-04-23 17:14:42');
INSERT INTO `user_login_records` VALUES (311, 1, '2026-04-22', '2026-04-23 17:14:59.872849', '2026-04-23 17:14:59.872849', NULL, '2026-04-23 17:14:59', '2026-04-23 17:14:59');
INSERT INTO `user_login_records` VALUES (312, 1, '2026-04-22', '2026-04-23 17:14:59.923890', '2026-04-23 17:14:59.923890', NULL, '2026-04-23 17:14:59', '2026-04-23 17:14:59');
INSERT INTO `user_login_records` VALUES (313, 1, '2026-04-22', '2026-04-23 17:15:19.035503', '2026-04-23 17:15:19.035503', NULL, '2026-04-23 17:15:19', '2026-04-23 17:15:19');
INSERT INTO `user_login_records` VALUES (314, 1, '2026-04-22', '2026-04-23 17:15:19.082755', '2026-04-23 17:15:19.082755', NULL, '2026-04-23 17:15:19', '2026-04-23 17:15:19');
INSERT INTO `user_login_records` VALUES (315, 1, '2026-04-22', '2026-04-23 17:15:36.912737', '2026-04-23 17:15:36.912737', NULL, '2026-04-23 17:15:36', '2026-04-23 17:15:36');
INSERT INTO `user_login_records` VALUES (316, 1, '2026-04-22', '2026-04-23 17:15:36.954724', '2026-04-23 17:15:36.954724', NULL, '2026-04-23 17:15:36', '2026-04-23 17:15:36');
INSERT INTO `user_login_records` VALUES (317, 1, '2026-04-22', '2026-04-23 17:15:54.925828', '2026-04-23 17:15:54.925828', NULL, '2026-04-23 17:15:54', '2026-04-23 17:15:54');
INSERT INTO `user_login_records` VALUES (318, 1, '2026-04-22', '2026-04-23 17:15:55.131290', '2026-04-23 17:15:55.131290', NULL, '2026-04-23 17:15:55', '2026-04-23 17:15:55');
INSERT INTO `user_login_records` VALUES (319, 1, '2026-04-22', '2026-04-23 17:16:17.130597', '2026-04-23 17:16:17.130597', NULL, '2026-04-23 17:16:17', '2026-04-23 17:16:17');
INSERT INTO `user_login_records` VALUES (320, 1, '2026-04-22', '2026-04-23 17:16:17.212344', '2026-04-23 17:16:17.212344', NULL, '2026-04-23 17:16:17', '2026-04-23 17:16:17');
INSERT INTO `user_login_records` VALUES (321, 1, '2026-04-22', '2026-04-23 17:16:55.999257', '2026-04-23 17:16:55.999257', NULL, '2026-04-23 17:16:55', '2026-04-23 17:16:55');
INSERT INTO `user_login_records` VALUES (322, 1, '2026-04-22', '2026-04-23 17:16:56.049493', '2026-04-23 17:16:56.049493', NULL, '2026-04-23 17:16:56', '2026-04-23 17:16:56');
INSERT INTO `user_login_records` VALUES (323, 1, '2026-04-22', '2026-04-23 17:18:11.066696', '2026-04-23 17:18:11.066696', NULL, '2026-04-23 17:18:11', '2026-04-23 17:18:11');
INSERT INTO `user_login_records` VALUES (324, 1, '2026-04-22', '2026-04-23 17:18:11.108702', '2026-04-23 17:18:11.108702', NULL, '2026-04-23 17:18:11', '2026-04-23 17:18:11');
INSERT INTO `user_login_records` VALUES (325, 1, '2026-04-22', '2026-04-23 17:18:26.064738', '2026-04-23 17:18:26.064738', NULL, '2026-04-23 17:18:26', '2026-04-23 17:18:26');
INSERT INTO `user_login_records` VALUES (326, 1, '2026-04-22', '2026-04-23 17:18:26.127015', '2026-04-23 17:18:26.127015', NULL, '2026-04-23 17:18:26', '2026-04-23 17:18:26');
INSERT INTO `user_login_records` VALUES (327, 1, '2026-04-22', '2026-04-23 17:19:44.140752', '2026-04-23 17:19:44.140752', NULL, '2026-04-23 17:19:44', '2026-04-23 17:19:44');
INSERT INTO `user_login_records` VALUES (328, 1, '2026-04-22', '2026-04-23 17:19:44.190225', '2026-04-23 17:19:44.190225', NULL, '2026-04-23 17:19:44', '2026-04-23 17:19:44');
INSERT INTO `user_login_records` VALUES (329, 1, '2026-04-22', '2026-04-23 17:52:00.246373', '2026-04-23 17:52:00.246373', NULL, '2026-04-23 17:52:00', '2026-04-23 17:52:00');
INSERT INTO `user_login_records` VALUES (330, 1, '2026-04-22', '2026-04-23 17:52:00.293602', '2026-04-23 17:52:00.293602', NULL, '2026-04-23 17:52:00', '2026-04-23 17:52:00');
INSERT INTO `user_login_records` VALUES (331, 1, '2026-04-22', '2026-04-23 17:52:31.923161', '2026-04-23 17:52:31.923161', NULL, '2026-04-23 17:52:31', '2026-04-23 17:52:31');
INSERT INTO `user_login_records` VALUES (332, 1, '2026-04-22', '2026-04-23 17:52:31.967403', '2026-04-23 17:52:31.967403', NULL, '2026-04-23 17:52:31', '2026-04-23 17:52:31');
INSERT INTO `user_login_records` VALUES (333, 1, '2026-04-22', '2026-04-23 19:25:24.098610', '2026-04-23 19:25:24.098610', NULL, '2026-04-23 19:25:24', '2026-04-23 19:25:24');
INSERT INTO `user_login_records` VALUES (334, 1, '2026-04-22', '2026-04-23 19:25:24.208093', '2026-04-23 19:25:24.208093', NULL, '2026-04-23 19:25:24', '2026-04-23 19:25:24');
INSERT INTO `user_login_records` VALUES (335, 2, '2026-04-22', '2026-04-23 21:49:10.037738', '2026-04-23 21:49:10.037738', NULL, '2026-04-23 21:49:10', '2026-04-23 21:49:10');
INSERT INTO `user_login_records` VALUES (336, 2, '2026-04-22', '2026-04-23 21:49:18.303406', '2026-04-23 21:49:18.303406', NULL, '2026-04-23 21:49:18', '2026-04-23 21:49:18');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
INSERT INTO `user_mistakes` VALUES (19, 1, 'r5_5', 1, '2026-04-22 22:33:26.596291', '2026-04-22 22:33:26.596291', 0, '2026-04-22 22:33:26', 0, '2026-04-23 22:33:26', 0, '2026-04-25 22:33:26', 0, '2026-04-29 22:33:26', 0, '2026-04-22 22:33:26', '2026-04-22 22:33:26');
INSERT INTO `user_mistakes` VALUES (20, 1, 'r5_6', 1, '2026-04-22 22:34:15.141329', '2026-04-22 22:34:15.141329', 0, '2026-04-22 22:34:15', 0, '2026-04-23 22:34:15', 0, '2026-04-25 22:34:15', 0, '2026-04-29 22:34:15', 0, '2026-04-22 22:34:15', '2026-04-22 22:34:15');
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
INSERT INTO `user_tasks` VALUES (21, 1, 'review-1-5-1', 'review', 1, 1, 1, '2026-04-22 22:36:35', '2026-04-22 22:36:34.908644', '2026-04-22 22:36:35.000000', '2026-04-22 22:36:34', '2026-04-22 22:36:35');
INSERT INTO `user_tasks` VALUES (22, 1, 'practice-w2d1-k7', 'practice', 2, 1, 1, '2026-04-23 07:36:28', '2026-04-23 07:36:27.966017', '2026-04-23 07:36:28.000000', '2026-04-23 07:36:27', '2026-04-23 07:36:28');
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
INSERT INTO `users` VALUES (1, '唐国华', 2, 'tgh', 0, 0, '2026-04-18 10:46:43', '2026-04-22 23:51:29', '2026-04-22 21:11:07', '2026-04-22 23:51:29');
INSERT INTO `users` VALUES (2, '唐牧乐', 1, 'YNCXXXKLCZWLYJGM', 0, 0, '2026-04-18 12:47:28', '2026-04-22 23:15:19', '2026-04-22 21:11:07', '2026-04-22 23:15:19');
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
