import React from 'react';
import FinanceManager from '../components/FinanceManager';

function FinancePage() {
  return (
    <div>
      <h1>財務管理</h1>
      <FinanceManager />
      {/* 可以加入更多財務數據分析或報告的視圖 */}
    </div>
  );
}

export default FinancePage;
