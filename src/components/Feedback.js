import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    // 處理問題回饋邏輯
    alert("問題已提交！");
  };

  return (
    <div>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="請輸入問題描述..." />
      <button onClick={handleSubmit}>提交</button>
    </div>
  );
}

export default Feedback;
