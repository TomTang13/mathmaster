const fs = require('fs');
const path = require('path');

// 读取 curriculum.ts 文件
const filePath = path.join(__dirname, '../src/data/curriculum.ts');
const content = fs.readFileSync(filePath, 'utf8');

// 提取数据部分
const startMarker = 'export const CURRICULUM_DATA: WeekPlan[] = [';
const endMarker = '];';

const startIndex = content.indexOf(startMarker) + startMarker.length;
const endIndex = content.lastIndexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find CURRICULUM_DATA in curriculum.ts');
  process.exit(1);
}

let dataStr = content.substring(startIndex, endIndex).trim();

// 转换为有效的 JSON
// 移除类型注解
// 处理字符串
// 处理布尔值
// 处理数组和对象

// 简化处理：创建一个临时的 Node.js 模块
const tempModuleContent = `
const data = [${dataStr}];
console.log(JSON.stringify(data, null, 2));
`;

const tempModulePath = path.join(__dirname, 'temp-module.js');
fs.writeFileSync(tempModulePath, tempModuleContent);

// 运行临时模块
const { execSync } = require('child_process');
const jsonOutput = execSync(`node ${tempModulePath}`, { encoding: 'utf8' });

// 写入 JSON 文件
const curriculumJsonPath = path.join(__dirname, 'curriculum-data.json');
fs.writeFileSync(curriculumJsonPath, jsonOutput);

// 清理临时文件
fs.unlinkSync(tempModulePath);

console.log('Curriculum data extracted to curriculum-data.json');
