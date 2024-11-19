import React, { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState(""); // 用戶的問題反饋
  const [isSubmitted, setIsSubmitted] = useState(false); // 是否已提交成功

  const handleSubmit = () => {
    if (feedback.trim() === "") {
      alert("請輸入問題描述！");
      return;
    }
    setIsSubmitted(true); // 切換到成功訊息頁面
  };

  const handleGoBack = () => {
    setIsSubmitted(false); // 返回反饋頁面
    setFeedback(""); // 清空輸入
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {isSubmitted ? (
        // 成功訊息頁面
        <div>
          <h2>提交成功！</h2>
          <p>感謝您的反饋，我們會盡快處理您的問題。</p>
          <button onClick={handleGoBack} style={{ padding: "10px 20px", marginTop: "20px" }}>
            返回
          </button>
        </div>
      ) : (
        // 反饋輸入頁面
        <div>
          <h2>問題反饋</h2>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="請輸入問題描述..."
            style={{ width: "100%", height: "100px", marginBottom: "20px", padding: "10px" }}
          />
          <br />
          <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
            提交
          </button>
        </div>
      )}
    </div>
  );
}

export default Feedback;
