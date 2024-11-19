
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../style.css';


function VacationCalendar() {
  const [date, setDate] = useState(new Date()); // 記錄當前選中的日期
  const [vacationDays, setVacationDays] = useState([]); // 記錄請假日期

  // 當選擇日期時，將該日期加入或移除請假日期
  const handleDateChange = (newDate) => {
    setDate(newDate);
    const dateString = newDate.toLocaleDateString();
    // 檢查是否已請假
    if (vacationDays.includes(dateString)) {
      setVacationDays(vacationDays.filter(day => day !== dateString)); // 移除請假日期
    } else {
      setVacationDays([...vacationDays, dateString]); // 新增請假日期
    }
  };

  return (
    <div className="card p-3 mb-3">
      <p>員工可自行劃假，公司可檢視完整行事曆</p>

      {/* 顯示日曆 */}
      <Calendar 
        onChange={handleDateChange} 
        value={date} 
        tileClassName={({ date }) => 
          vacationDays.includes(date.toLocaleDateString()) ? 'highlight' : null
        }
      />

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
    </div>
  );
}

export default VacationCalendar;
