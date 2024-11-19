import React from 'react';
import AttendanceTracker from '../components/AttendanceTracker';

function AttendancePage() {
  return (
    <div>
      <h1>請假打卡</h1>
      <AttendanceTracker />
      {/* 可顯示更詳細的工時紀錄 */}
      <div>
        <h2>工時紀錄</h2>
        <table>
          <thead>
            <tr>
              <th>日期</th>
              <th>出勤狀態</th>
              <th>工時</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11月1日</td>
              <td>出勤</td>
              <td>8小時</td>
            </tr>
            {/* 更多紀錄 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendancePage;
