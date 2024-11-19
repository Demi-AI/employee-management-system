import React, { useState } from 'react';
import { savePunchData, saveLeaveRequest } from '../services/attendanceService';

function AttendanceTracker() {
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [hoursWorked, setHoursWorked] = useState(0);
  const [dailySalary, setDailySalary] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [leaveRequested, setLeaveRequested] = useState(false);

  const hourlyRate = 190; // 假設時薪為 190

  const handlePunchIn = () => {
    const now = new Date();
    setPunchInTime(now);
    console.log("打卡上班時間：", now);
  };

  const handlePunchOut = () => {
    if (!punchInTime) {
      alert("請先打卡上班！");
      return;
    }
    const now = new Date();
    setPunchOutTime(now);
    const workedHours = (now - punchInTime) / (1000 * 60 * 60); // 計算工時
    setHoursWorked(workedHours);

    const salaryForTheDay = workedHours * hourlyRate;
    setDailySalary(salaryForTheDay);
    setTotalHours(totalHours + workedHours);
    setTotalSalary(totalSalary + salaryForTheDay);

    // 發送打卡數據到後端
    savePunchData({ punchInTime, punchOutTime: now, workedHours, salaryForTheDay });
  };

  const handleLeaveRequest = (isHalfDay = false) => {
    const leaveSalary = isHalfDay ? (dailySalary / 2) : 0;
    setLeaveRequested(true);
    setDailySalary(leaveSalary);

    // 發送請假申請到後端
    saveLeaveRequest({ isHalfDay, leaveSalary });
  };

  return (
    <div>
      <button onClick={handlePunchIn}>打卡上班</button>
      <button onClick={handlePunchOut}>打卡下班</button>
      <button onClick={() => handleLeaveRequest(false)}>請假申請</button>
      <button onClick={() => handleLeaveRequest(true)}>半薪請假</button>
      <div>今日工時: {hoursWorked.toFixed(2)} 小時</div>
      <div>今日薪資: {dailySalary.toFixed(2)} 元</div>
      <div>累積工時: {totalHours.toFixed(2)} 小時</div>
      <div>累積薪資: {totalSalary.toFixed(2)} 元</div>
      {leaveRequested && <div>已申請請假</div>}
    </div>
  );
}

export default AttendanceTracker;
