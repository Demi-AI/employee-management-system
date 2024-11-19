import React, { useState } from 'react';

function AttendanceTracker() {
  const [hoursWorked, setHoursWorked] = useState(0);
  const [salary, setSalary] = useState(0);

  const handlePunchIn = () => {
    // 處理打卡邏輯
  };

  const handleLeaveRequest = () => {
    // 處理請假申請邏輯
  };

  return (
    <div>
      <button onClick={handlePunchIn}>打卡</button>
      <button onClick={handleLeaveRequest}>請假申請</button>
      <div>今日薪資: {salary}</div>
      <div>累積工時: {hoursWorked}</div>
    </div>
  );
}

export default AttendanceTracker;
