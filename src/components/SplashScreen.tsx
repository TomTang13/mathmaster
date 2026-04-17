import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Quote, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const QUOTES = [
  { text: "你现在偷的懒，未来真的会找你对线。", type: "philosophy", author: "10后醒世恒言" },
  { text: "别等状态来了才开始，你一开始状态就不会在。", type: "philosophy", author: "行动派" },
  { text: "没人会突然变厉害，都是悄悄撑过很多烂日子。", type: "philosophy", author: "过来人" },
  { text: "你以为你在摆烂，其实时间在把你甩开。", type: "philosophy", author: "时间观察者" },
  { text: "可以慢一点，但别一直停在“等会儿再说”。", type: "philosophy", author: "清醒指引" },
  { text: "不用很燃，但至少别一直在降温。", type: "philosophy", author: "生活逻辑" },
  { text: "你今天做的每个小决定，都会变成你的默认人生。", type: "philosophy", author: "策略师" },
  { text: "有些路不是你选的，是你不选之后自动给你的。", type: "philosophy", author: "成长真相" },
  { text: "你不用赢所有人，但别输给昨天那个你。", type: "philosophy", author: "自我博弈" },
  { text: "清醒一点：没人救你，但你也没那么容易完蛋。", type: "philosophy", author: "硬核导师" },
  { text: "孩子，这一年不过是漫长人生中的一个休止符，重新拿起书本的你，比谁都勇敢。", type: "father", author: "深爱你的爸爸" },
  { text: "只要你还想学，爸爸永远会在后面推你一把。", type: "father", author: "你最坚实的后盾" }
];

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
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
                className="w-full bg-primary-blue text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                开启回归之旅
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 text-text-vmuted text-xs font-semibold tracking-widest uppercase"
          >
            欢迎回来，学霸
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
