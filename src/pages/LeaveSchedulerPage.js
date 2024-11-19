import React from 'react';
import LeaveScheduler from '../components/LeaveScheduler';

function LeaveSchedulerPage() {
  return (
    <div>
      <h1>劃假行事曆</h1>
      <LeaveScheduler />
      {/* 顯示已申請的假期 */}
      <div>
        <h2>已申請假期</h2>
        <ul>
          <li>11月5日 - 病假</li>
          <li>11月10日 - 年假</li>
          {/* 更多假期 */}
        </ul>
      </div>
    </div>
  );
}

export default LeaveSchedulerPage;
