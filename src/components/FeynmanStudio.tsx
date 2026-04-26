import React, { useState, useRef } from 'react';
import { Mic, StopCircle, Play, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '../config';

interface FeynmanStudioProps {
  question: any;
  userId: number;
  existingAudioPath?: string;
  onComplete: () => void;
}

export const FeynmanStudio: React.FC<FeynmanStudioProps> = ({
  question,
  userId,
  existingAudioPath,
  onComplete
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(existingAudioPath || null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 防护：如果question为空，显示错误信息
  if (!question) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl">
        <p className="text-center text-red-600">题目信息加载失败</p>
      </div>
    );
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      // 开始计时
      timerRef.current = window.setInterval(() => {
        setRecordingTime(t => t + 1);
      }, 1000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      setUploadError('无法访问麦克风，请检查权限设置');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        setIsRecording(false);
        
        // 自动提交录音
        await handleUploadAudio(audioBlob);
      };
    }
  };

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const handleUploadAudio = async (audioBlob?: Blob) => {
    let blob: Blob;
    
    if (audioBlob) {
      blob = audioBlob;
    } else if (audioUrl) {
      const response = await fetch(audioUrl);
      blob = await response.blob();
    } else {
      return;
    }

    setUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      // 创建formData
      const formData = new FormData();
      formData.append('audio', blob, 'feynman.wav');

      console.log('开始上传音频:', `${API_BASE_URL}/mistakes/${userId}/question/${question.questionId}/feynman-audio`);
      
      const uploadResponse = await fetch(
        `${API_BASE_URL}/mistakes/${userId}/question/${question.questionId}/feynman-audio`,
        {
          method: 'POST',
          body: formData
        }
      );

      console.log('上传响应状态:', uploadResponse.status);
      
      if (uploadResponse.ok) {
        const result = await uploadResponse.json();
        console.log('上传成功:', result);
        setUploadSuccess(true);
        setTimeout(() => {
          onComplete();
        }, 1500);
      } else {
        const errorText = await uploadResponse.text();
        console.error('上传失败:', errorText);
        throw new Error('上传失败');
      }

    } catch (error) {
      console.error('Error uploading audio:', error);
      setUploadError('音频上传失败，请重试');
    } finally {
      setUploading(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg relative">
      {/* 关闭按钮 */}
      <button
        onClick={() => onComplete()}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">费曼输出室</h2>
      <p className="text-gray-600 mb-6">用你自己的话讲一遍这道题的解题思路，录制音频提交</p>

      <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">题目：</h3>
        <p className="text-gray-700">{question.questionBody}</p>
      </div>

      {audioUrl && (
        <div className="mb-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-orange-800 font-medium text-sm">费曼录音</span>
            {existingAudioPath && (
              <p className="text-sm text-green-600 flex items-center gap-2">
                <CheckCircle2 size={16} />
                已存在费曼输出记录
              </p>
            )}
          </div>
          <audio
            ref={audioRef}
            src={existingAudioPath ? `${API_BASE_URL}${existingAudioPath}` : audioUrl}
            onEnded={handleAudioEnded}
            className="w-full h-10"
            controls
          />
        </div>
      )}

      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex flex-col items-center gap-6">
          {/* 录制状态显示 */}
          {isRecording && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-red-600">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                <span className="font-medium">录制中</span>
              </div>
              <div className="text-3xl font-mono font-bold text-gray-800">
                {formatTime(recordingTime)}
              </div>
            </div>
          )}

          {/* 录制控制按钮 */}
          <div className="flex flex-col items-center gap-4">
            {!isRecording && !audioUrl ? (
              <button
                onClick={startRecording}
                className="flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
              >
                <Mic size={24} />
                <span className="font-medium">开始讲解</span>
              </button>
            ) : isRecording ? (
              <button
                onClick={stopRecording}
                className="flex items-center gap-2 px-8 py-4 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors border border-red-300"
              >
                <StopCircle size={24} />
                <span className="font-medium">完成录制</span>
              </button>
            ) : uploading ? (
              <div className="flex items-center gap-2 px-8 py-4 text-gray-600">
                <div className="w-5 h-5 border-2 border-gray-300 border-t-primary-blue rounded-full animate-spin" />
                <span className="font-medium">上传中...</span>
              </div>
            ) : (
              <button
                onClick={() => setAudioUrl(null)}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors border border-gray-300 rounded-full"
              >
                重新讲解
              </button>
            )}
          </div>

          {uploadSuccess && (
            <div className="flex flex-col items-center gap-2 text-green-600">
              <CheckCircle2 size={48} className="text-green-600" />
              <span className="text-lg font-medium">费曼输出提交成功！</span>
            </div>
          )}

          {uploadError && (
            <div className="flex items-center gap-2 text-red-600 mt-4">
              <AlertCircle size={20} />
              <span className="text-sm">{uploadError}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
