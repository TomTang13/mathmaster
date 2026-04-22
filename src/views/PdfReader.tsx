import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Home, Menu } from 'lucide-react';
import { cn } from '../lib/utils';

interface PdfReaderProps {
  pdfUrl: string;
  onClose: () => void;
}

export default function PdfReader({ pdfUrl, onClose }: PdfReaderProps) {
  const [zoom, setZoom] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  // 处理缩放
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.5));
  };

  // 处理侧边栏切换
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 处理返回
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col">
      {/* 顶部导航栏 */}
      <div className="bg-slate-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
            title="返回"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold truncate">PDF阅读器</h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleZoomOut}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
            title="缩小"
          >
            <ZoomOut size={20} />
          </button>
          <button 
            onClick={handleZoomIn}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
            title="放大"
          >
            <ZoomIn size={20} />
          </button>
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
            title="目录"
          >
            <Menu size={20} />
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
            title="关闭"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="flex-1 flex overflow-hidden">
        {/* 侧边栏 */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '200px', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-slate-700 text-white overflow-y-auto"
            >
              <div className="p-4">
                <h2 className="font-bold mb-4">目录</h2>
                <div className="space-y-2">
                  {/* 这里可以添加PDF的目录内容，暂时使用占位符 */}
                  <div className="p-2 hover:bg-slate-600 rounded cursor-pointer">
                    <p className="text-sm">第1页：介绍</p>
                  </div>
                  <div className="p-2 hover:bg-slate-600 rounded cursor-pointer">
                    <p className="text-sm">第2页：核心概念</p>
                  </div>
                  <div className="p-2 hover:bg-slate-600 rounded cursor-pointer">
                    <p className="text-sm">第3页：例题解析</p>
                  </div>
                  <div className="p-2 hover:bg-slate-600 rounded cursor-pointer">
                    <p className="text-sm">第4页：练习题目</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PDF内容 */}
        <div 
          ref={pdfContainerRef}
          className="flex-1 overflow-auto bg-white"
          style={{ 
            transform: `scale(${zoom})`,
            transformOrigin: 'top left',
            width: `${100 / zoom}%`,
            height: `${100 / zoom}%`
          }}
        >
          <iframe 
            src={pdfUrl} 
            className="w-full h-full border-0"
            title="PDF Reader"
          />
        </div>
      </div>
    </div>
  );
}
