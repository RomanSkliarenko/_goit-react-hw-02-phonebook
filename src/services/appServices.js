import axios from 'axios';

const apiServices = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

// Utility to add JWT
const setAuthHeader = token => {
  apiServices.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  apiServices.defaults.headers.common.Authorization = '';
};



export const signupUser = async (credentials) => {
  const { data } = await apiServices.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await apiServices.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const getCurrentUser = async (token) => {
  setAuthHeader(token);
  const { data } = await apiServices.get('/users/current');
  return data;
};

export const logoutUser = async () => {
  const data = await apiServices.post('/users/logout');
  clearAuthHeader();
  return data;
};


export const fetchContactsService = async () => {
  return await apiServices.get('/contacts')
};

export const addContactService = async ({ name, number }) => {
  return await apiServices.post('/contacts', { name, number });
};

export const deleteContactService = async (id) => {
  return await apiServices.delete(`/contacts/${id}`)
};

