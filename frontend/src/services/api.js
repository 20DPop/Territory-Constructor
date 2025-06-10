import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      // console.log('Adding auth token to request'); // Poți decomenta pentru debugging
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      // console.warn('No auth token found - request might fail if authentication is required'); // Poți decomenta pentru debugging
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginUser = (email, password) => {
  return api.post('/api/users/login', { email, password }); // Modificat
};

export const registerUser = (userData) => {
  return api.post('/api/users', userData); // Modificat (sau '/api/users/' dacă backend-ul e strict cu slash-ul final)
};

export const getUserProfile = () => {
  return api.get('/api/users/profile'); // Modificat
};

// Territory API calls
export const createTerritory = (territoryData) => {
  return api.post('/api/territories', territoryData); // Modificat
};

export const getTerritories = () => {
  return api.get('/api/territories'); // Modificat
};

export const getTerritoryById = (id) => {
  return api.get(`/api/territories/${id}`); // Modificat
};

export const updateTerritory = (id, territoryData) => {
  return api.put(`/api/territories/${id}`, territoryData); // Modificat
};

export const deleteTerritory = (id) => {
  return api.delete(`/api/territories/${id}`); // Modificat
};

export default api;