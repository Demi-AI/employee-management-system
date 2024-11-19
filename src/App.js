import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FinanceManager from './components/FinanceManager';
import CalendarComponent from './components/Calendar';
import AttendanceTracker from './components/AttendanceTracker';
import LeaveScheduler from './components/LeaveScheduler';
import Feedback from './components/Feedback';
import HomePage from './pages/HomePage';
import FinancePage from './pages/FinancePage';
import CalendarPage from './pages/CalendarPage';
import AttendancePage from './pages/AttendancePage';
import LeaveSchedulerPage from './pages/LeaveSchedulerPage';
import FeedbackPage from './pages/FeedbackPage';
import './style.css';


function App() {
  const [page, setPage] = useState('Finance');

  const renderPage = () => {
    switch (page) {
      case 'Finance':
        return <FinanceManager />;
      case 'Calendar':
        return <CalendarComponent />;
      case 'Attendance':
        return <AttendanceTracker />;
      case 'LeaveScheduler':
        return <LeaveScheduler />;
      case 'Feedback':
        return <Feedback />;
      default:
        return <FinanceManager />;
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/leave-scheduler" element={<LeaveSchedulerPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header setPage={setPage} />
          {/* Use react-router for navigation */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/leave-scheduler" element={<LeaveSchedulerPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </header>
        {/* Render the page based on state */}
        <div>{renderPage()}</div>
      </div>
    </Router>
  );
}

export default App;
