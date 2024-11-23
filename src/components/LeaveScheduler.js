import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../style.css';
import { useNavigate } from 'react-router-dom';

// 儲存請假日期到 localStorage
const saveVacationDays = (vacationDays) => {
  localStorage.setItem('vacationDays', JSON.stringify(vacationDays));
};

// 讀取儲存的請假日期
const loadVacationDays = () => {
  const savedVacationDays = localStorage.getItem('vacationDays');
  return savedVacationDays ? JSON.parse(savedVacationDays) : [];
};

function VacationCalendar() {
  const [date, setDate] = useState(new Date()); // 記錄當前選中的日期
  const [vacationDays, setVacationDays] = useState(loadVacationDays()); // 請假日期，從 localStorage 載入

  // 將日期轉換為本地格式 YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份從0開始，所以加1
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 當選擇日期時，將該日期加入或移除請假日期
  const handleDateChange = (newDate) => {
    setDate(newDate);
    const dateString = formatDate(newDate); // 使用本地格式 YYYY-MM-DD
    if (vacationDays.includes(dateString)) {
      // 移除已選日期
      const updatedVacationDays = vacationDays.filter((day) => day !== dateString);
      setVacationDays(updatedVacationDays);
      saveVacationDays(updatedVacationDays); // 儲存到 localStorage
    } else {
      // 新增請假日期
      const updatedVacationDays = [...vacationDays, dateString];
      setVacationDays(updatedVacationDays);
      saveVacationDays(updatedVacationDays); // 儲存到 localStorage
    }
  };

  const navigate = useNavigate();  // 使用 useNavigate 來獲取導航函數

  const goHome = () => {
    navigate('/HomePage');  // 導航回首頁
  };

  return (
    <div className="container">
      <h2 className="major">劃假行事曆系統</h2>
      <div className="instructions">
        <p>這是一個劃假行事曆，員工可以選擇請假日期，而公司則可檢視完整的劃假行事曆。</p>
        <ol>
          <li>選擇劃假日期：點擊行事曆中的任何日期來選擇劃假日，選中的日期會標記顯示。</li>
          <li>取消劃假：如果您已選擇日期並想要取消，請再次點擊該日期，即可取消。</li>
          <li>查看劃假日期：在下方列表中查看所有已選擇的劃假日期。</li>
        </ol>
      </div>

      {/* 顯示日曆 */}
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date }) =>
            vacationDays.includes(formatDate(date)) ? 'highlight' : null
          }
        />
      </div>

      {/* 顯示選中的請假日期 */}
      <div className="vacation-summary">
        <h3>已劃假日期</h3>
        <ul>
          {vacationDays.length === 0 ? (
            <li>尚未劃假</li>
          ) : (
            vacationDays.map((day, index) => <li key={index}>{day}</li>)
          )}
        </ul>
      </div>
      {/* 回到首頁的按鈕 */}
      <button onClick={goHome}>回到首頁</button>
    </div>
  );
}

export default VacationCalendar;
