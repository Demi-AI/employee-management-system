import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>歡迎來到公司系統</h1>
      <p>這裡是公司內部系統的主頁面。</p>
      <h2>公司公告</h2>
      <ul>
        <li>11月15日 - 年終聚餐</li>
        <li>11月20日 - 截止專案提交</li>
        {/* 更多公告 */}
      </ul>
      <h2>快速連結</h2>
      <div>
        <button onClick={() => window.location.href = '/finance'}>財務管理</button>
        <button onClick={() => window.location.href = '/calendar'}>行事曆</button>
        <button onClick={() => window.location.href = '/attendance'}>請假打卡</button>
        <button onClick={() => window.location.href = '/leave-scheduler'}>劃假行事曆</button>
        <button onClick={() => window.location.href = '/feedback'}>問題回饋</button>
      </div>
    </div>
  );
}

export default HomePage;
