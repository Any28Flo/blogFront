import axios from 'axios';
// TODO: Move this to .env file 
const API_BASE_URL = 'http://localhost:3000/api/v1'; 

const api = axios.create({
	baseURL: API_BASE_URL,
});

export default api;