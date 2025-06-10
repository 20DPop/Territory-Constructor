import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      console.log('Adding auth token to request');
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.warn('No auth token found - request might fail if authentication is required');
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// User API calls
export const loginUser = (email, password) => {
  return api.post('/users/login', { email, password });
};

export const registerUser = (userData) => {
  return api.post('/users', userData);
};

export const getUserProfile = () => {
  return api.get('/users/profile');
};

// Territory API calls
export const createTerritory = (territoryData) => {
  return api.post('/territories', territoryData);
};

export const getTerritories = () => {
  return api.get('/territories');
};

export const getTerritoryById = (id) => {
  return api.get(`/territories/${id}`);
};

export const updateTerritory = (id, territoryData) => {
  return api.put(`/territories/${id}`, territoryData);
};

export const deleteTerritory = (id) => {
  return api.delete(`/territories/${id}`);
};

export default api;