import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // 引入 CSS 以使日曆顯示正常

function CalendarComponent() {
  // 儲存上班日和代辦事項的 state
  const [tasks, setTasks] = useState([]);  // 代辦事項
  const [workdays, setWorkdays] = useState([]);  // 上班日
  const [newTask, setNewTask] = useState('');  // 新輸入的代辦事項
  const [selectedDate, setSelectedDate] = useState(null);  // 被選中的日期

  // 處理任務完成狀態的函數
  const toggleTaskStatus = (taskDate) => {
    setTasks(tasks.map((task) =>
      task.date === taskDate 
        ? { ...task, status: task.status === '未完成' ? '已完成' : '未完成' }
        : task
    ));
  };

  // 設定上班日
  const handleWorkdaySelection = (date) => {
    const dateString = date.toDateString();
    if (workdays.includes(dateString)) {
      setWorkdays(workdays.filter((day) => day !== dateString));
    } else {
      setWorkdays([...workdays, dateString]);
    }
  };

  // 更新代辦事項的內容
  const handleTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  // 顯示代辦事項
  const renderTasksForDate = (date) => {
    const taskForDay = tasks.filter((task) => task.date === date.toDateString());
    return taskForDay.length > 0 ? taskForDay[0].task : '';
  };

  return (
    <div className="calendar-container">
      <h2>日曆任務管理</h2>

      {/* 顯示上班日區塊 */}
      <div className="workday-section">
        <h3>選擇上班日</h3>
        {/* 顯示日曆 */}
        <Calendar
          onClickDay={(date) => {
            setSelectedDate(date);  // 設置選中的日期
            handleWorkdaySelection(date);  // 設置該日期為上班日
          }}
          tileClassName={({ date }) => 
            workdays.includes(date.toDateString()) ? 'workday' : null
          }
        />
      </div>

      {/* 顯示代辦事項區域 */}
      <div className="todo-section">
        <h3>代辦事項</h3>
        {/* 代辦事項輸入框 */}
        <div>
          <input
            type="text"
            value={newTask}
            onChange={handleTaskInput}
            placeholder="輸入代辦事項"
          />
          <button onClick={() => {
            if (selectedDate && newTask) {
              setTasks([
                ...tasks,
                { date: selectedDate.toDateString(), task: newTask, status: '未完成' }
              ]);
              setNewTask('');  // 清空輸入框
            }
          }}>
            送出
          </button>
        </div>

        {/* 代辦事項表格 */}
        <table>
          <thead>
            <tr>
              <th>日期</th>
              <th>事項內容</th>
              <th>完成狀態</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.date}</td>
                <td>{task.task}</td>
                <td>
                  {/* 用於點擊更新任務狀態的按鈕 */}
                  <button 
                    onClick={() => toggleTaskStatus(task.date)}
                    style={{
                      color: task.status === '已完成' ? 'green' : 'red',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {task.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CalendarComponent;
