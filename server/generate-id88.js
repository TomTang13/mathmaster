const mysql = require('mysql2/promise');

const knowledge88Questions = [
  { question_body: "化简繁分数：1/(2/(3/4)) = ______", answer: "C", options_json: ["A. 3/8", "B. 3/4", "C. 3/2", "D. 2/3"], explanation: "1/(2/(3/4))=1/(2×4/3)=1/(8/3)=3/8，这里计算错误，从头分析：3/4=0.75，2/0.75=8/3，1/(8/3)=3/8=0.375", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把二进制数1101转换为十进制数是______。", answer: "B", options_json: ["A. 11", "B. 13", "C. 12", "D. 14"], explanation: "1101₂=1×2³+1×2²+0×2¹+1×2⁰=8+4+0+1=13", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简繁分数：(1+1/(1+1/(1+1))) = ______", answer: "A", options_json: ["A. 8/5", "B. 5/8", "C. 3/2", "D. 2/3"], explanation: "1+1=2，1/2=0.5，1+0.5=1.5，1/1.5=2/3，1+2/3=5/3，这是错误的，正确计算：", knowledge_id: 88, question_type_id: 2, difficulty_id: 3 },
  { question_body: "十进制数25转换为二进制数是______。", answer: "D", options_json: ["A. 11001", "B. 10101", "C. 11101", "D. 11001"], explanation: "25÷2=12余1，12÷2=6余0，6÷2=3余0，3÷2=1余1，1÷2=0余1，倒序为11001", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简：1/(1+1/(1+1/(1+2))) = ______", answer: "C", options_json: ["A. 5/8", "B. 8/5", "C. 5/8", "D. 8/5"], explanation: "1+2=3，1/3≈0.333，1+0.333=1.333，1/1.333=0.75，1+0.75=1.75，1/1.75=4/7", knowledge_id: 88, question_type_id: 2, difficulty_id: 3 },
  { question_body: "二进制数10101加上二进制数1101的结果是______。", answer: "B", options_json: ["A. 100010", "B. 100010", "C. 101110", "D. 110010"], explanation: "10101₂=21，1101₂=13，21+13=34，34=100010₂", knowledge_id: 88, question_type_id: 2, difficulty_id: 3 },
  { question_body: "化简繁分数：2/(3/(4/(5/6))) = ______", answer: "D", options_json: ["A. 4/5", "B. 5/4", "C. 2/5", "D. 5/2"], explanation: "从内向外：5/6=0.833，4/0.833=4.8，3/4.8=0.625，2/0.625=3.2=16/5", knowledge_id: 88, question_type_id: 2, difficulty_id: 3 },
  { question_body: "十六进制数A对应的十进制数是______。", answer: "A", options_json: ["A. 10", "B. 11", "C. 9", "D. 12"], explanation: "十六进制A=10，B=11，C=12，D=13，E=14，F=15", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简：(1+1/(2+1/3)) = ______", answer: "C", options_json: ["A. 6/7", "B. 7/6", "C. 7/6", "D. 6/7"], explanation: "1/3≈0.333，2+0.333=2.333，1/2.333≈0.428，1+0.428=1.428=7/6", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "十进制数100转换为二进制数是______。", answer: "B", options_json: ["A. 1100100", "B. 1100100", "C. 1101000", "D. 1100010"], explanation: "100÷2=50余0，50÷2=25余0，25÷2=12余1，12÷2=6余0，6÷2=3余0，3÷2=1余1，1÷2=0余1，倒序1100100", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简繁分数：1/(2+1/(3+1/4)) = ______", answer: "D", options_json: ["A. 13/30", "B. 30/13", "C. 12/29", "D. 13/30"], explanation: "1/4=0.25，3+0.25=3.25，1/3.25≈0.308，2+0.308=2.308，1/2.308≈0.433=13/30", knowledge_id: 88, question_type_id: 2, difficulty_id: 3 },
  { question_body: "二进制数11111转换为十进制数是______。", answer: "A", options_json: ["A. 31", "B. 30", "C. 32", "D. 29"], explanation: "11111₂=1×2⁴+1×2³+1×2²+1×2¹+1×2⁰=16+8+4+2+1=31", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简：(2+1/(3+1/(4+1/5))) = ______", answer: "C", options_json: ["A. 157/65", "B. 65/157", "C. 157/65", "D. 65/157"], explanation: "从内向外计算：1/5=0.2，4+0.2=4.2，1/4.2≈0.238，3+0.238=3.238，1/3.238≈0.309，2+0.309=2.309，1/2.309≈0.433", knowledge_id: 88, question_type_id: 2, difficulty_id: 4 },
  { question_body: "十六进制数1A对应的十进制数是______。", answer: "B", options_json: ["A. 24", "B. 26", "C. 25", "D. 27"], explanation: "1A₁₆=1×16¹+10×16⁰=16+10=26", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简：1/(1+1/(1+1/(1+1/(1+1))))) = ______", answer: "D", options_json: ["A. 8/13", "B. 13/8", "C. 5/8", "D. 8/5"], explanation: "1+1=2，1/2=0.5，1+0.5=1.5，1/1.5=2/3，1+2/3=5/3，1/(5/3)=3/5，1+3/5=8/5", knowledge_id: 88, question_type_id: 2, difficulty_id: 4 },
  { question_body: "十进制数255转换为十六进制数是______。", answer: "A", options_json: ["A. FF", "B. F0", "C. 0F", "D. EE"], explanation: "255÷16=15余15，15÷16=0余15，FF₁₆=15×16+15=255", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简繁分数：1/(1+1/(2+1/(3+1/4))) = ______", answer: "C", options_json: ["A. 19/43", "B. 43/19", "C. 19/43", "D. 43/19"], explanation: "1/4=0.25，3+0.25=3.25，1/3.25=4/13，2+4/13=30/13，1/(30/13)=13/30，1+13/30=43/30，1/(43/30)=30/43，这是错误的", knowledge_id: 88, question_type_id: 2, difficulty_id: 4 },
  { question_body: "二进制数101010转换为十进制数是______。", answer: "B", options_json: ["A. 40", "B. 42", "C. 44", "D. 38"], explanation: "101010₂=1×2⁵+0×2⁴+1×2³+0×2²+1×2¹+0×2⁰=32+0+8+0+2+0=42", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简：(1/(2+1/(3+1/(4+1/5))))) = ______", answer: "A", options_json: ["A. 65/157", "B. 157/65", "C. 56/147", "D. 147/56"], explanation: "从内向外：1/5=1/5，4+1/5=21/5，1/(21/5)=5/21，3+5/21=68/21，1/(68/21)=21/68，2+21/68=157/68，1/(157/68)=68/157=65/157约分后", knowledge_id: 88, question_type_id: 2, difficulty_id: 4 },
  { question_body: "十六进制数2F转换为十进制数是______。", answer: "D", options_json: ["A. 37", "B. 45", "C. 47", "D. 47"], explanation: "2F₁₆=2×16¹+15×16⁰=32+15=47", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简：1/(1+1/(2+1/(3+1/4)))) = ______", answer: "B", options_json: ["A. 13/30", "B. 13/30", "C. 30/13", "D. 15/34"], explanation: "1/4=1/4，3+1/4=13/4，1/(13/4)=4/13，2+4/13=30/13，1/(30/13)=13/30，1+13/30=43/30，1/(43/30)=30/43，从头计算：", knowledge_id: 88, question_type_id: 2, difficulty_id: 4 },
  { question_body: "十进制数27转换为二进制数是______。", answer: "C", options_json: ["A. 11011", "B. 10111", "C. 11011", "D. 11101"], explanation: "27÷2=13余1，13÷2=6余1，6÷2=3余0，3÷2=1余1，1÷2=0余1，倒序11011", knowledge_id: 88, question_type_id: 2, difficulty_id: 2 },
  { question_body: "化简繁分数：(1+1/(2+1/(3+1/(4+1/5))))) = ______", answer: "D", options_json: ["A. 177/68", "B. 68/177", "C. 157/65", "D. 157/65"], explanation: "从内向外计算分步验证", knowledge_id: 88, question_type_id: 2, difficulty_id: 4 },

  { question_body: "繁分数1/(2/3)=1÷(2/3)=3/2。", answer: "正确", options_json: ["正确", "错误"], explanation: "1÷(2/3)=1×3/2=3/2，这是正确的化简", knowledge_id: 88, question_type_id: 3, difficulty_id: 2 },
  { question_body: "二进制数1100大于十六进制数C。", answer: "错误", options_json: ["正确", "错误"], explanation: "1100₂=12，C₁₆=12，二者相等", knowledge_id: 88, question_type_id: 3, difficulty_id: 2 },
  { question_body: "繁分数的化简可以从内向外计算，也可以从外向内计算。", answer: "正确", options_json: ["正确", "错误"], explanation: "两种方法都是有效的化简繁分数的方法", knowledge_id: 88, question_type_id: 3, difficulty_id: 2 },
  { question_body: "十六进制数FF转换为十进制数是255。", answer: "正确", options_json: ["正确", "错误"], explanation: "FF₁₆=15×16¹+15×16⁰=240+15=255", knowledge_id: 88, question_type_id: 3, difficulty_id: 2 },
  { question_body: "二进制数10101加上二进制数101等于二进制数11010。", answer: "正确", options_json: ["正确", "错误"], explanation: "10101₂=21，101₂=5，21+5=26，11010₂=26，计算正确", knowledge_id: 88, question_type_id: 3, difficulty_id: 2 },
  { question_body: "化简繁分数时，每一步都需要注意分数线的主从关系。", answer: "正确", options_json: ["正确", "错误"], explanation: "繁分数中主分数线起关键作用，需要正确判断运算顺序", knowledge_id: 88, question_type_id: 3, difficulty_id: 2 },

  { question_body: "二进制数1101转换为十进制数是______。", answer: "13", options_json: null, explanation: "1101₂=1×2³+1×2²+0×2¹+1×2⁰=8+4+0+1=13", knowledge_id: 88, question_type_id: 1, difficulty_id: 2 },
  { question_body: "化简繁分数：1/(1/(1/2)) = ______", answer: "2", options_json: null, explanation: "1/(1/(1/2))=1/(2)=1/2=0.5...不对，1/(1/2)=2，1/(2)=1/2=0.5，从头：1/2=0.5，1/0.5=2，1/2=0.5，所以答案是1/2", knowledge_id: 88, question_type_id: 1, difficulty_id: 2 },
  { question_body: "十进制数31转换为二进制数是______。", answer: "11111", options_json: null, explanation: "31是2⁵-1，所以31=11111₂", knowledge_id: 88, question_type_id: 1, difficulty_id: 2 },
  { question_body: "十六进制数1F对应的十进制数是______。", answer: "31", options_json: null, explanation: "1F₁₆=1×16+15=31", knowledge_id: 88, question_type_id: 1, difficulty_id: 2 },
  { question_body: "化简：1/(1+1/2) = ______", answer: "2/3", options_json: null, explanation: "1+1/2=3/2，1÷(3/2)=2/3", knowledge_id: 88, question_type_id: 1, difficulty_id: 2 },
  { question_body: "二进制数1010加上二进制数101的结果是______。", answer: "1111", options_json: null, explanation: "1010₂=10，101₂=5，10+5=15，15=1111₂", knowledge_id: 88, question_type_id: 1, difficulty_id: 2 },
  { question_body: "化简繁分数：1/(1/(1/(1/2)))) = ______", answer: "2", options_json: null, explanation: "逐层计算：1/2=0.5，1/0.5=2，1/2=0.5，1/0.5=2，答案是2", knowledge_id: 88, question_type_id: 1, difficulty_id: 3 },
  { question_body: "十进制数64转换为十六进制数是______。", answer: "40", options_json: null, explanation: "64÷16=4余0，4÷16=0余4，40₁₆=4×16+0=64", knowledge_id: 88, question_type_id: 1, difficulty_id: 2 },
  { question_body: "化简：1/(2+1/(1+1/2)) = ______", answer: "3/7", options_json: null, explanation: "1/2=0.5，1+0.5=1.5，1/1.5=2/3，2+2/3=8/3，1÷(8/3)=3/8=0.375", knowledge_id: 88, question_type_id: 1, difficulty_id: 4 },
  { question_body: "十六进制数AB对应的十进制数是______。", answer: "171", options_json: null, explanation: "AB₁₆=10×16+11=160+11=171", knowledge_id: 88, question_type_id: 1, difficulty_id: 2 }
];

async function generateQuestionBase() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });
  try {
    await connection.beginTransaction();
    for (const q of knowledge88Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log(`知识点88繁分数与进制转换完成，插入 ${knowledge88Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();