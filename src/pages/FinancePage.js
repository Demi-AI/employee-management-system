// pages/FinancePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import FinanceManager from '../components/FinanceManager';
import '../style.css'; // 更新為相對正確路徑

function FinancePage() {
  return (
    <div>
      <h2>財務管理頁面</h2>
      <FinanceManager />
      <br />
      <Link to="/">返回首頁</Link>
    </div>
  );
}

export default FinancePage;
