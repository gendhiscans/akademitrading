import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const auth = {
  register: async (data: { name: string; email: string; password: string }) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
  
  login: async (data: { email: string; password: string }) => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },
};

// Courses API
export const courses = {
  getAll: async () => {
    const response = await api.get('/courses');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },

  enroll: async (courseId: string) => {
    const response = await api.post(`/courses/${courseId}/enroll`);
    return response.data;
  },

  rate: async (courseId: string, data: { rating: number; review: string }) => {
    const response = await api.post(`/courses/${courseId}/rate`, data);
    return response.data;
  },
};

// Admin API
export const admin = {
  createCourse: async (data: any) => {
    const response = await api.post('/courses', data);
    return response.data;
  },

  updateCourse: async (id: string, data: any) => {
    const response = await api.put(`/courses/${id}`, data);
    return response.data;
  },

  deleteCourse: async (id: string) => {
    const response = await api.delete(`/courses/${id}`);
    return response.data;
  },
};

export default api; 