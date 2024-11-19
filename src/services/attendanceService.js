import apiClient from './apiClient';

const attendanceService = {
  getAttendanceRecords: async () => {
    const response = await apiClient.get('/attendance/records');
    return response.data;
  },
  clockIn: async () => {
    const response = await apiClient.post('/attendance/clock-in');
    return response.data;
  },
  clockOut: async () => {
    const response = await apiClient.post('/attendance/clock-out');
    return response.data;
  },
};

export default attendanceService;
