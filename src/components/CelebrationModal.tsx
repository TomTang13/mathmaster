import React, { useEffect, useState } from 'react';

interface CelebrationModalProps {
  isVisible: boolean;
  newLevel: number;
  onClose: () => void;
}

const CelebrationModal: React.FC<CelebrationModalProps> = ({ isVisible, newLevel, onClose }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // 生成彩纸粒子
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5
      }));
      setParticles(newParticles);
      
      // 延迟显示内容以等待动画
      setTimeout(() => setShowContent(true), 300);
      
      // 自动关闭（10秒后）
      const timer = setTimeout(() => {
        onClose();
      }, 10000);
      
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
      setParticles([]);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* 彩纸粒子 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* 庆祝内容 */}
      <div 
        className={`relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 ${
          showContent ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* 装饰性星星 */}
        <div className="absolute -top-4 -left-4 text-6xl animate-bounce">⭐</div>
        <div className="absolute -top-4 -right-4 text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌟</div>
        <div className="absolute -bottom-4 -left-4 text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>✨</div>
        <div className="absolute -bottom-4 -right-4 text-5xl animate-bounce" style={{ animationDelay: '0.6s' }}>🎉</div>

        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4 animate-pulse">
            🎊 恭喜升级！🎊
          </h2>
          
          <div className="my-6">
            <p className="text-xl mb-2">您的等级已提升至</p>
            <div className="text-7xl font-bold mb-2">{newLevel}</div>
            <p className="text-lg opacity-90">继续加油！</p>
          </div>

          <div className="flex justify-center gap-4 my-4">
            <span className="text-4xl animate-spin">🏆</span>
            <span className="text-4xl animate-pulse">🎖️</span>
            <span className="text-4xl animate-bounce">🎯</span>
          </div>

          <button
            onClick={onClose}
            className="mt-6 px-8 py-3 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:bg-yellow-100 transition-all transform hover:scale-105"
          >
            继续学习
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CelebrationModal;