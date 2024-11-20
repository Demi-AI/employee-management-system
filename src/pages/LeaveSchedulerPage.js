import React from 'react';
import { Link } from 'react-router-dom';
import LeaveScheduler from '../components/LeaveScheduler';
import '../style.css'; // 更新為相對正確路徑

function LeaveSchedulerPage() {
  return (
    <div>
      <h1>劃假行事曆</h1>
      <LeaveScheduler />
      <br />
    </div>
  );
}

export default LeaveSchedulerPage;
