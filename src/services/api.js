// frontend/src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const getExpenses = async () => {
    const response = await axios.get(`${API_BASE_URL}/expenses`);
    return response;
};

export const addExpense = async (expense) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/expenses`, expense);
        return response;
    } catch (error) {
        console.error("Error in addExpense:", error.response || error.message);
        throw error;  // エラーを再スローしてフロントエンドでキャッチできるようにする
    }
};
