import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function FinanceManager() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [salary, setSalary] = useState(0);
  
  const handleCalculate = () => {
    // 實作計算薪資、獎金等邏輯
  };

  return (
    <div>
      <input type="number" placeholder="收入" onChange={(e) => setIncome(e.target.value)} />
      <input type="number" placeholder="支出" onChange={(e) => setExpense(e.target.value)} />
      <input type="number" placeholder="薪資" onChange={(e) => setSalary(e.target.value)} />
      <button onClick={handleCalculate}>計算</button>
      
      <BarChart width={500} height={300} data={[{name: '收入', value: income}, {name: '支出', value: expense}]}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default FinanceManager;
