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

// User API calls
export const loginUser = (email, password) => {
  return api.post('/users/login', { email, password }); // Acestea vor folosi baseURL corect acum
};

export const registerUser = (userData) => {
  return api.post('/users', userData); // Acestea vor folosi baseURL corect acum
};

// ... restul funcțiilor tale API rămân la fel ...

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