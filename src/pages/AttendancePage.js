import React from 'react';
import { Link } from 'react-router-dom';
import AttendanceTracker from '../components/AttendanceTracker';
import '../style.css'; // 更新為相對正確路徑

function AttendancePage() {
  return (
    <div>
      <h2>打卡＆請假頁面</h2>
      <AttendanceTracker />
      <br />
      <Link to="/">返回首頁</Link>
    </div>
  );
}

export default AttendancePage;