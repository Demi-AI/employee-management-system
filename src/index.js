import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 引入 App.js
import reportWebVitals from './reportWebVitals';
import './style.css'; // 導入自訂的 style.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* 渲染 App 組件 */}
  </React.StrictMode>
);

reportWebVitals();
