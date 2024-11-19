import React, { useState } from 'react';
import { savePunchData } from '../services/attendanceService';

// 用來格式化時間為 HH:mm 格式
const formatTime = (time) => {
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// 計算當日工時
const calculateWorkHours = (startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);

  // 計算兩個時間之間的毫秒差，然後轉換為小時
  const diff = (end - start) / 1000 / 60 / 60;
  
  // 轉換為半小時為單位的工時
  const workHours = Math.floor(diff * 2) / 2;  // 四捨五入到最接近的半小時

  return workHours;
};

function AttendanceTracker() {
  const [attendanceRecords, setAttendanceRecords] = useState([]); // 儲存所有打卡紀錄
  const [totalHours, setTotalHours] = useState(0); // 累積總工時

  const handlePunch = () => {
    const punchTime = new Date();
    const date = punchTime.toLocaleDateString();
    const time = formatTime(punchTime);  // 使用 HH:mm 格式

    // 若打卡紀錄已經存在於當天，更新上班/下班時間
    setAttendanceRecords((prevRecords) => {
      const updatedRecords = [...prevRecords];
      const existingRecord = updatedRecords.find(record => record.date === date);

      if (existingRecord) {
        // 若已經有打卡紀錄，則更新下班時間
        existingRecord.punchTimes.push(time);
        existingRecord.endTime = time; // 更新下班時間

        // 計算當日工時
        const dailyWorkHours = calculateWorkHours(existingRecord.startTime, time);
        existingRecord.dailyWorkHours = dailyWorkHours;

        // 更新當月總時數
        setTotalHours((prevTotal) => prevTotal + dailyWorkHours);
      } else {
        // 若當天沒有打卡紀錄，新增當天的打卡紀錄
        updatedRecords.push({
          date,
          punchTimes: [time],
          startTime: time,  // 第一次打卡時間為上班時間
          endTime: time,    // 第一次打卡時間也為下班時間
          dailyWorkHours: 0,  // 初始工時為0
        });
      }

      // 儲存打卡數據到伺服器
      savePunchData({ date, punchTime });
      return updatedRecords;
    });
  };

  return (
    <div>
      <button onClick={handlePunch}>打卡</button>
      
      <h2>打卡紀錄</h2>
      <table border="1">
        <thead>
          <tr>
            <th>日期</th>
            <th>上班時間</th>
            <th>下班時間</th>
            <th>當日工時</th>
            <th>當月總時數</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.startTime}</td>
              <td>{record.endTime}</td>
              <td>{record.dailyWorkHours}</td>
              <td>{totalHours.toFixed(2)}</td>  {/* 顯示當月累積總時數，保留兩位小數 */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTracker;
