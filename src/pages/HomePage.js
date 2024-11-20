import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../style.css'; // 更新為相對正確路徑

function HomePage() {
  return (
    <div className="content-section">
      <ul className="home-page-links">
        <li><Link to="/finance" className="link-button">財務管理</Link></li>
        <li><Link to="/calendar" className="link-button">行事曆</Link></li>
        <li><Link to="/attendance" className="link-button">請假打卡系統</Link></li>
        <li><Link to="/leave-scheduler" className="link-button">劃假行事曆</Link></li>
        <li><Link to="/feedback" className="link-button">問題回饋</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
