import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-base-url.com/api', // Troque pelo seu backend real
  timeout: 10000,
});

export default api;
