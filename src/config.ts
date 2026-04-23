// API 配置文件
const getApiBaseUrl = (): string => {
  // 生产环境使用相对路径，本地开发环境使用绝对路径
  return process.env.NODE_ENV === 'production' 
    ? '/api' 
    : 'http://localhost:3001';
};

export const API_BASE_URL = getApiBaseUrl();
