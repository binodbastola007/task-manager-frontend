import axios from "axios";

const API_URL = "https://task-manager-backend-4vbc.onrender.com/tasks";

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (id) => {
  const response = await axios.put(`${API_URL}/${id}`);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
