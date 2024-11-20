import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FinanceManager from './components/FinanceManager';
import CalendarComponent from './components/Calendar';
import AttendanceTracker from './components/AttendanceTracker';
import LeaveScheduler from './components/LeaveScheduler';
import Feedback from './components/Feedback';
import Header from './components/Header';
import HomePage from './pages/HomePage'; // 根據實際的路徑來修改


function App() {
  return (
    <Router>
      {/* 包裹住所有內容 */}
      <div id="wrapper">
        <header id="header">
          <div className="logo">
            <span className="icon fa-gem"></span>
          </div>
          <div className="content">
            <div className="inner">
              <h1>Employee-Management-System</h1>
              <p className="welcome-message">歡迎來到員工管理系統，請選擇您想要前往的功能頁面：</p>
            </div>
          </div>
          <nav>
            <ul>
              <li><Link to="/HomePage">Home</Link></li>
              <li><Link to="/finance">FinanceManager</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/attendance">AttendanceTracker</Link></li>
              <li><Link to="/scheduler">LeaveScheduler</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </nav>
        </header>

        {/* 渲染頁面內容 */}
        <div id="main">
          <Routes>
            <Route path="/" element={<h1><HomePage /></h1>} />
            <Route path="/finance" element={<FinanceManager />} />
            <Route path="/calendar" element={<CalendarComponent />} />
            <Route path="/attendance" element={<AttendanceTracker />} />
            <Route path="/scheduler" element={<LeaveScheduler />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer id="footer">
          <p className="copyright">&copy; Untitled. Design: HTML5 UP</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
