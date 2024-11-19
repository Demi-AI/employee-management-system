import React from 'react';
import CalendarComponent from '../components/Calendar';

function CalendarPage() {
  return (
    <div>
      <h1>行事曆</h1>
      <CalendarComponent />
      {/* 顯示該月份的事件列表 */}
      <div>
        <h2>本月事件</h2>
        <ul>
          <li>11月15日 - 公司會議</li>
          <li>11月20日 - 截止專案提交</li>
          {/* 可加入更多事件 */}
        </ul>
      </div>
    </div>
  );
}

export default CalendarPage;
