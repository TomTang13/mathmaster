import React, { useState } from 'react';

const DataGeneratorAdmin: React.FC = () => {
  const [knowledgeIds, setKnowledgeIds] = useState<string>('7');
  const [taskType, setTaskType] = useState<string>('practice');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isQuerying, setIsQuerying] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [queryResult, setQueryResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!knowledgeIds.trim()) {
      setMessage('请输入知识ID');
      return;
    }

    setIsGenerating(true);
    setMessage('正在生成数据...');

    try {
      const response = await fetch('http://localhost:3001/admin/generate-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          knowledgeIds: knowledgeIds.split(',').map(id => id.trim()),
          taskType
        }),
      });

      if (!response.ok) {
        throw new Error('生成数据失败');
      }

      const result = await response.json();
      setMessage(`生成成功！创建了 ${result.tasksCreated} 个任务和 ${result.questionsCreated} 个题目`);
    } catch (error) {
      setMessage('生成数据失败：' + (error as Error).message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!knowledgeIds.trim()) {
      setMessage('请输入知识ID');
      return;
    }

    setIsQuerying(true);
    setMessage('正在查询数据...');

    try {
      const response = await fetch('http://localhost:3001/admin/query-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          knowledgeIds: knowledgeIds.split(',').map(id => id.trim()),
          taskType
        }),
      });

      if (!response.ok) {
        throw new Error('查询数据失败');
      }

      const result = await response.json();
      setQueryResult(result);
      setMessage(`查询成功！找到 ${result.tasks.length} 个任务和 ${result.questions.length} 个题目`);
    } catch (error) {
      setMessage('查询数据失败：' + (error as Error).message);
    } finally {
      setIsQuerying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">数据生成管理</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              知识ID (多个ID用逗号分隔)
            </label>
            <input
              type="text"
              value={knowledgeIds}
              onChange={(e) => setKnowledgeIds(e.target.value)}
              placeholder="例如：7,8,9"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              任务类型
            </label>
            <select
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="comprehensive">综合任务</option>
              <option value="practice">练习任务</option>
              <option value="review">复习任务</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isGenerating}
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
            >
              {isGenerating ? '生成中...' : '生成数据'}
            </button>
            <button
              type="button"
              onClick={handleQuery}
              disabled={isQuerying}
              className="bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 disabled:bg-gray-400 transition-colors"
            >
              {isQuerying ? '查询中...' : '查询数据'}
            </button>
          </div>
        </form>

        {message && (
          <div className="mt-4 p-3 bg-gray-100 rounded-md">
            <p>{message}</p>
          </div>
        )}

        {queryResult && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">查询结果</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">任务列表</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-2">任务ID</th>
                      <th className="border border-gray-200 px-4 py-2">标题</th>
                      <th className="border border-gray-200 px-4 py-2">类型</th>
                      <th className="border border-gray-200 px-4 py-2">周</th>
                      <th className="border border-gray-200 px-4 py-2">日</th>
                    </tr>
                  </thead>
                  <tbody>
                    {queryResult.tasks.map((task: any) => (
                      <tr key={task.taskId}>
                        <td className="border border-gray-200 px-4 py-2">{task.taskId}</td>
                        <td className="border border-gray-200 px-4 py-2">{task.title}</td>
                        <td className="border border-gray-200 px-4 py-2">{task.taskType}</td>
                        <td className="border border-gray-200 px-4 py-2">{task.weekId}</td>
                        <td className="border border-gray-200 px-4 py-2">{task.dayNumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-700 mb-2">题目列表</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-2">题目ID</th>
                      <th className="border border-gray-200 px-4 py-2">题目内容</th>
                      <th className="border border-gray-200 px-4 py-2">答案</th>
                      <th className="border border-gray-200 px-4 py-2">类型</th>
                      <th className="border border-gray-200 px-4 py-2">任务ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {queryResult.questions.map((question: any) => (
                      <tr key={question.questionId}>
                        <td className="border border-gray-200 px-4 py-2">{question.questionId}</td>
                        <td className="border border-gray-200 px-4 py-2">{question.questionBody}</td>
                        <td className="border border-gray-200 px-4 py-2">{question.answer}</td>
                        <td className="border border-gray-200 px-4 py-2">
                          {question.questionTypeId === 1 ? '填充题' : 
                           question.questionTypeId === 2 ? '单选题' : '是非题'}
                        </td>
                        <td className="border border-gray-200 px-4 py-2">{question.taskId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">操作说明</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>输入 key_knowledge 的 ID，多个 ID 用逗号分隔</li>
            <li>选择任务类型：comprehensive (综合)、practice (练习)、review (复习)</li>
            <li>点击「生成数据」按钮生成任务和题目</li>
            <li>点击「查询数据」按钮查看已生成的任务和题目</li>
            <li>系统会根据每个知识生成一个任务，每个任务包含 5 条题目</li>
            <li>每个任务至少包含 3 道选择题</li>
            <li>计算类题目会生成填充题，其他为单选题或是非题</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataGeneratorAdmin;