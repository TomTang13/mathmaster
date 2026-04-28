const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

async function testAudioUpload() {
  try {
    // 创建测试音频文件
    const testContent = 'test audio content';
    const testFile = path.join(__dirname, 'test-audio.wav');
    fs.writeFileSync(testFile, testContent);

    // 读取文件
    const fileContent = fs.readFileSync(testFile);
    const blob = new Blob([fileContent], { type: 'audio/wav' });

    // 创建FormData
    const formData = new FormData();
    formData.append('audio', blob, 'feynman.wav');

    // 测试上传
    const response = await fetch(
      'http://localhost:3001/mistakes/1/question/cq-7-1/feynman-audio',
      {
        method: 'POST',
        body: formData
      }
    );

    const result = await response.json();
    console.log('上传结果:', result);

    // 检查文件是否创建
    const audioDir = path.join(__dirname, 'audio', '1');
    if (fs.existsSync(audioDir)) {
      const files = fs.readdirSync(audioDir);
      console.log('音频目录文件:', files);
    }

    // 清理测试文件
    if (fs.existsSync(testFile)) {
      fs.unlinkSync(testFile);
    }

  } catch (error) {
    console.error('测试错误:', error);
  }
}

testAudioUpload();
