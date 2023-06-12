import axios from 'axios';

export const SERVER_LOCATION = 'http://localhost:8080'; 


const apiClient = axios.create({
	baseURL: SERVER_LOCATION,
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json',
	},
});


export default apiClient;
