import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../style.css'; // 更新為相對正確路徑

// pages/HomePage.js

function HomePage() {
  return (
    <div>
      <h1>歡迎來到公司管理系統</h1>
      <p>請選擇您想要前往的功能頁面：</p>
      <ul>
        <li><Link to="/finance">財務管理</Link></li>
        <li><Link to="/calendar">行事曆</Link></li>
        <li><Link to="/attendance">請假打卡系統</Link></li>
        <li><Link to="/leave-scheduler">劃假行事曆</Link></li>
        <li><Link to="/feedback">問題回饋</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
