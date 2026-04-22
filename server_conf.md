# 线上服务器配置

## 1. Nginx 配置

### 配置文件路径
`/etc/nginx/conf.d/mathmaster.conf`

### 配置内容
```nginx
server {
    listen 443 ssl;
    server_name study.muyin.com;

    ssl_certificate /etc/letsencrypt/live/study.muyin.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/study.muyin.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # 前端静态文件
    location / {
        root /home/ubuntu/mathmaster/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # API 反向代理
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# HTTP 重定向到 HTTPS
server {
    listen 80;
    server_name study.muyin.com;
    return 301 https://$host$request_uri;
}
```

## 2. 前端配置

### API 路径配置
修改前端代码中的 API 路径，使用相对路径：

#### 文件：`src/views/TodayTasks.tsx`
```typescript
// 旧配置
// const API_BASE = 'http://localhost:3001';

// 新配置
const API_BASE = '/api';
```

#### 文件：`src/views/MistakeRange.tsx`
```typescript
// 旧配置
// const API_BASE = 'http://localhost:3001';

// 新配置
const API_BASE = '/api';
```

## 3. 后端服务配置

### 启动命令
```bash
# 进入后端目录
cd /home/ubuntu/mathmaster/server

# 安装依赖
npm install

# 编译 TypeScript
npm run build

# 启动服务（使用 pm2 管理）
npm install -g pm2
npm run start:prod
```

### 环境变量
创建 `.env` 文件：
```
# 数据库配置
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_NAME=mathmaster

# 服务器配置
PORT=3001
NODE_ENV=production

# JWT 配置
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

## 4. 前端构建

### 构建命令
```bash
# 进入前端目录
cd /home/ubuntu/mathmaster

# 安装依赖
npm install

# 构建生产版本
npm run build
```

## 5. 服务器启动顺序

1. 启动后端服务：`npm run start:prod`
2. 启动 Nginx：`sudo systemctl start nginx`

## 6. 访问地址

- 线上地址：`https://study.muyin.com/?t=18602100824`
- API 地址：`https://study.muyin.com/api`

## 7. 常见问题排查

### 后端服务未启动
```bash
# 检查后端服务状态
npm run start:prod

# 查看服务日志
npm run start:prod
```

### Nginx 配置错误
```bash
# 检查 Nginx 配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx

# 查看 Nginx 日志
sudo tail -f /var/log/nginx/error.log
```

### 端口占用
```bash
# 检查端口 3001 是否被占用
lsof -i :3001

# 检查端口 443 是否被占用
lsof -i :443
```

## 8. 部署步骤总结

1. 拉取最新代码：`git pull origin main`
2. 构建前端：`npm run build`
3. 构建后端：`cd server && npm run build`
4. 重启后端服务：`npm run start:prod`
5. 重启 Nginx：`sudo systemctl restart nginx`
