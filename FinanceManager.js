import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function FinanceManager() {
  const [income, setIncome] = useState(0); // 收入
  const [expense, setExpense] = useState(0); // 支出
  const [salary, setSalary] = useState(0); // 基本薪資
  const [bonus, setBonus] = useState(0); // 獎金
  const [laborInsurance, setLaborInsurance] = useState(0); // 勞保費
  const [healthInsurance, setHealthInsurance] = useState(0); // 健保費
  const [netIncome, setNetIncome] = useState(0); // 淨收入

  // 勞保和健保費率及比例
  const LABOR_INSURANCE_RATE = 0.115; // 勞保費率 11.5%
  const EMPLOYEE_LABOR_CONTRIBUTION = 0.2; // 勞保員工負擔 20%
  const HEALTH_INSURANCE_RATE = 0.0517; // 健保費率 5.17%
  const EMPLOYEE_HEALTH_CONTRIBUTION = 0.3; // 健保員工負擔 30%

  // 計算薪資、獎金、勞健保費
  const handleCalculate = () => {
    const incomeValue = parseFloat(income) || 0;
    const expenseValue = parseFloat(expense) || 0;
    const salaryValue = parseFloat(salary) || 0;

    // 假設獎金為薪資的 15%
    const calculatedBonus = salaryValue * 0.15;

    // 計算勞保費，假設投保薪資等於薪資值
    const calculatedLaborInsurance = salaryValue * LABOR_INSURANCE_RATE * EMPLOYEE_LABOR_CONTRIBUTION;

    // 計算健保費
    const calculatedHealthInsurance = salaryValue * HEALTH_INSURANCE_RATE * EMPLOYEE_HEALTH_CONTRIBUTION;

    // 計算淨收入
    const calculatedNetIncome = incomeValue - expenseValue + salaryValue + calculatedBonus - calculatedLaborInsurance - calculatedHealthInsurance;

    // 更新狀態
    setBonus(calculatedBonus);
    setLaborInsurance(calculatedLaborInsurance);
    setHealthInsurance(calculatedHealthInsurance);
    setNetIncome(calculatedNetIncome);
  };

  // 視覺化資料
  const data = [
    { name: '收入', value: parseFloat(income) || 0 },
    { name: '支出', value: parseFloat(expense) || 0 },
    { name: '薪資', value: parseFloat(salary) || 0 },
    { name: '獎金', value: bonus },
    { name: '勞保費', value: laborInsurance },
    { name: '健保費', value: healthInsurance },
    { name: '淨收入', value: netIncome }
  ];

  return (
    <div>
      <h2>財務管理系統</h2>

      {/* 收入輸入框 */}
      <div>
        <label>
          收入:
          <input type="number" placeholder="輸入收入" onChange={(e) => setIncome(e.target.value)} />
        </label>
      </div>

      {/* 支出輸入框 */}
      <div>
        <label>
          支出:
          <input type="number" placeholder="輸入支出" onChange={(e) => setExpense(e.target.value)} />
        </label>
      </div>

      {/* 薪資輸入框 */}
      <div>
        <label>
          薪資:
          <input type="number" placeholder="輸入薪資" onChange={(e) => setSalary(e.target.value)} />
        </label>
      </div>

      {/* 計算按鈕 */}
      <button onClick={handleCalculate}>計算</button>

      {/* 計算結果顯示 */}
      <div>
        <h3>計算結果</h3>
        <p>獎金: {bonus.toFixed(2)}</p>
        <p>勞保費: {laborInsurance.toFixed(2)}</p>
        <p>健保費: {healthInsurance.toFixed(2)}</p>
        <p>淨收入: {netIncome.toFixed(2)}</p>
      </div>

      {/* 財務視覺化圖表 */}
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default FinanceManager;
