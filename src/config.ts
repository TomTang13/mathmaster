// API 配置文件
// 根据环境自动切换API基础URL
const isProduction = window.location.hostname !== 'localhost';
export const API_BASE_URL = isProduction ? 'https://study.muyin.com' : 'http://localhost:3001/api';