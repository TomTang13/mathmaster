import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Quote, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const QUOTES = [
  { text: "在这个世界上，只有你可以决定自己的价值。", type: "philosophy", author: "拉克丝 · 英雄联盟" },
  { text: "我们的行为定义了我们的身份，而非我们的意图。", type: "philosophy", author: "蝙蝠侠 · 蝙蝠侠：阿卡姆骑士" },
  { text: "生命的起源并不重要，重要的是你如何使用生命这份赠礼。", type: "philosophy", author: "超梦 · 精灵宝可梦" },
  { text: "不是被迫离开，是我决定为自己的人生出发。", type: "philosophy", author: "希尔瓦娜斯 · 魔兽世界" },
  { text: "当你从梦中醒来，现实世界的挑战才刚刚开始。", type: "philosophy", author: "末影龙 · 我的世界" },
  { text: "无论路有多远，只要心中有光，门就会为你敞开。", type: "philosophy", author: "空 · 王国之心" },
  { text: "不要因为结束而哭泣，要因为发生过而微笑。", type: "philosophy", author: "温斯顿 · 守望先锋" },
  { text: "如果你的生活没有方向，那就去寻找星星。", type: "philosophy", author: "索拉卡 · 英雄联盟" },
  { text: "世界并不完美，但我们仍需为此奋斗。", type: "philosophy", author: "克劳德 · 最终幻想VII" },
  { text: "真正的勇气，是在害怕的时候依然向前。", type: "philosophy", author: "索尔 · 诸神的黄昏" },
  { text: "孩子，这一年不过是漫长人生中的一个休止符，重新拿起书本的你，比谁都勇敢。", type: "father", author: "深爱你的爸爸" }
];

interface SplashScreenProps {
  onComplete: () => void;
  username?: string;
  error?: boolean;
}

export default function SplashScreen({ onComplete, username, error = false }: SplashScreenProps) {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomIndex]);
  }, []);

  const handleStart = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500); // Wait for fade out
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-8 overflow-hidden"
        >
          {/* Decorative background atoms */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute top-10 left-10 text-9xl font-black rotate-12">α</div>
            <div className="absolute bottom-20 right-10 text-9xl font-black -rotate-12">Ω</div>
          </div>

          <div className="max-w-md w-full text-center relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={cn(
                "mb-12 inline-flex p-4 rounded-3xl",
                quote.type === 'father' ? "bg-rose-50 text-rose-500" : "bg-blue-50 text-blue-500"
              )}
            >
              {quote.type === 'father' ? <Heart size={40} /> : <Quote size={40} />}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-text-main leading-relaxed px-4">
                “{quote.text}”
              </h2>
              <p className="text-text-vmuted text-sm font-medium">— {quote.author}</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-20"
            >
              <button
                onClick={handleStart}
                disabled={error}
                className={`w-full py-5 rounded-2xl font-bold text-lg active:scale-95 transition-all flex items-center justify-center gap-2 ${error ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-primary-blue text-white shadow-xl shadow-blue-200 group'}`}
              >
                {error ? '密钥迷路中，请重新输入' : '开启回归之旅'}
                {!error && <ChevronRight className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 text-text-vmuted text-xs font-semibold tracking-widest uppercase"
          >
            欢迎回来，{username || '学霸'}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
