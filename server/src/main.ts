import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  // 配置静态文件服务，用于提供PDF文件
  app.use('/file', express.static(path.join(__dirname, '..', '..', 'file'), {
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.pdf')) {
        // 设置Content-Type为PDF
        res.setHeader('Content-Type', 'application/pdf');
        // 允许浏览器内嵌显示PDF
        res.setHeader('Content-Disposition', 'inline');
        // 缓存控制
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
    }
  }));

  // 配置静态文件服务，用于提供音频文件
  app.use('/audio', express.static(path.join(__dirname, '..', 'audio'), {
    setHeaders: (res, filePath, stat) => {
      if (filePath.endsWith('.wav') || filePath.endsWith('.mp3')) {
        // 设置Content-Type为音频
        res.setHeader('Content-Type', 'audio/wav');
        // 缓存控制
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
    }
  }));

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`MathMaster Server is running on: http://localhost:${port}`);
}

bootstrap();
