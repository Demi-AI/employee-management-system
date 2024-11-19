import React from 'react';
import './Header.css';

function Header({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage('Finance')}>財務管理</button>
      <button onClick={() => setPage('Calendar')}>行事曆</button>
      <button onClick={() => setPage('Attendance')}>請假打卡</button>
      <button onClick={() => setPage('LeaveScheduler')}>劃假行事曆</button>
      <button onClick={() => setPage('Feedback')}>問題回饋</button>
    </nav>
  );
}

export default Header;
