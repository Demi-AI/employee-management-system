import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

function CalendarComponent() {
  const [tasks, setTasks] = useState([]); // 代辦事項
  const [workdays, setWorkdays] = useState([]); // 上班日
  const [newTask, setNewTask] = useState(''); // 新輸入的代辦事項
  const [selectedDate, setSelectedDate] = useState(null); // 被選中的日期

  const navigate = useNavigate();  // 使用 useNavigate 來獲取導航函數

  // 從 localStorage 讀取任務和上班日
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const savedWorkdays = JSON.parse(localStorage.getItem('workdays')) || [];
    setTasks(savedTasks);
    setWorkdays(savedWorkdays);
  }, []);

  // 更新 localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('workdays', JSON.stringify(workdays));
  }, [tasks, workdays]);

  // 切換單個任務的完成狀態
  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === '未完成' ? '已完成' : '未完成',
              className: task.status === '未完成' ? 'button-completed' : 'button-pending',
            }
          : task
      )
    );
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

  // 送出新的代辦事項
  const addNewTask = () => {
    const newTaskObj = {
      id: new Date().getTime(), // 使用當前時間戳作為唯一 id
      date: selectedDate.toDateString(),
      task: newTask,
      status: '未完成',
      className: 'button-pending',
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask(''); // 清空輸入框
  };

  // 根據選中日期篩選任務
  const renderTasksForSelectedDate = () => {
    if (!selectedDate) return [];
    return tasks.filter((task) => task.date === selectedDate.toDateString());
  };

  const goHome = () => {
    navigate('/HomePage');  // 導航回首頁
  };

  return (
    <div className="calendar-container content-section">
      <h2 className="major">行事曆任務管理系統</h2>
      <div className="instructions">
        <p>這是一個行事曆任務管理系統，您可以透過以下步驟來管理您的代辦事項：</p>
        <ol>
          <li>選擇上班日：在行事曆中點擊任何一天，將該日期設為上班日，方便閱覽。</li>
          <li>新增代辦事項：先點選日期，然後在代辦事項輸入框中輸入您的任務，並按下「送出」來新增代辦事項。</li>
          <li>查看與更新代辦事項：您可以查看每個日期的代辦事項，並點擊代辦事項旁的按鈕來標記任務為完成或未完成。</li>
        </ol>
      </div>

      {/* 上班日區塊 */}
      <div className="workday">
        <h3>選擇上班日</h3>
        <Calendar
          onClickDay={(date) => {
            setSelectedDate(date); // 設置選中的日期
            handleWorkdaySelection(date); // 設置該日期為上班日
          }}
          tileClassName={({ date }) => {
            const isWorkday = workdays.includes(date.toDateString());
            const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
            return isSelected
              ? 'selected-day'
              : isWorkday
              ? 'workday'
              : null;
          }}
        />
      </div>

      {/* 代辦事項區塊 */}
      <div className="todo-section">
        <h3>代辦事項</h3>
        {/* 代辦事項輸入框 */}
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={newTask}
            onChange={handleTaskInput}
            placeholder="輸入代辦事項"
          />
          <button
            className="button-primary"
            onClick={addNewTask}
            disabled={!selectedDate || !newTask} // 當輸入框為空時禁用按鈕
          >
            送出
          </button>
        </div>

        {/* 代辦事項表格 */}
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>日期</th>
                <th>事項內容</th>
                <th>完成狀態</th>
              </tr>
            </thead>
            <tbody>
              {renderTasksForSelectedDate().map((task) => (
                <tr key={task.id}>
                  <td>{task.date}</td>
                  <td>{task.task}</td>
                  <td>
                    <button
                      className={task.className}
                      onClick={() => toggleTaskStatus(task.id)} // 使用 task.id 來切換狀態
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

      {/* 回到首頁的按鈕 */}
      <button onClick={goHome}>回到首頁</button>
    </div>
  );
}

export default CalendarComponent;
