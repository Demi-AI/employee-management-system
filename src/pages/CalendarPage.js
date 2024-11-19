import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
import '../style.css'; // 更新為相對正確路徑

function CalendarPage() {
  return (
    <div>
      <h2>行事曆頁面</h2>
      <Calendar />
      <br />
      <Link to="/">返回首頁</Link>
    </div>
  );
}

export default CalendarPage;
