import _axios from 'axios';

// Default config options for sending requests
const defaultOptions = {
	baseURL: 'http://voomsway.herokuapp.com/api/v1/ng',
	params: {},
	headers: {
		'Content-Type': 'application/json',
		'x-api-key': 'string'
	}
};

/**
 * @function updateAxiosParams
 * @param obj the params object to merge the existing axios request's query parameters
 */
export function updateAxiosParams(obj) {
	Object.assign(defaultOptions.params, obj);
}

// Create instance
const axios = _axios.create(defaultOptions);

// Set the AUTH token for any request
axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	});

// Add a response interceptor
axios.interceptors.response.use(
	(response) => {
		// Do something with response data
		return response.data;
	},
	(error) => {
		// Do something with response error
		return Promise.reject(error.data);
	});

const locationPath = '/resources/locations';
const todoPath = '/resources/todos';
const Location = {
	getAll: (page = 1) => {
		updateAxiosParams({page});
		return axios.get(locationPath);
	},
	get: (id) => axios.get(`${locationPath}/${id}`),
	update: (id, data) => axios.put(`${locationPath}/${id}`, data),
	delete: (id) => axios.delete(`${locationPath}/${id}`),
	create: (data) => axios.post(`${locationPath}`, data)
};

const Todo = {
	getAll: (page = 1) => {
		updateAxiosParams({page});
		return axios.get(todoPath);
	},
	get: (id) => axios.get(`${todoPath}/${id}`),
	update: (id, data) => axios.put(`${todoPath}/${id}`, data),
	delete: (id) => axios.delete(`${todoPath}/${id}`),
	create: (data) => axios.post(`${todoPath}`, data)
};

export default {
	Location,
	Todo
};
