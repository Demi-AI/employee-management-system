import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api/attendance';

// 保存打卡數據
export const savePunchData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/punch`, data);
    console.log("打卡數據已儲存:", response.data);
  } catch (error) {
    console.error("打卡數據儲存失敗:", error);
  }
};

// 保存請假申請
export const saveLeaveRequest = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/leave`, data);
    console.log("請假數據已儲存:", response.data);
  } catch (error) {
    console.error("請假數據儲存失敗:", error);
  }
};
