import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker.css';


function CalendarComponent() {
  const [tasks, setTasks] = useState([]);

  const handleTaskCompletion = (date) => {
    // 處理任務完成狀態
  };

  return (
    <div>
      <Calendar onClickDay={handleTaskCompletion} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.date}: {task.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarComponent;
