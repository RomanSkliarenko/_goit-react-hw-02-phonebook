import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63f3b489fe3b595e2ee7da54.mockapi.io/phonebook/v1',
});


export const fetchContactsService = () => {
  return instance.get('/contacts');
};

export const addContactService = ({ name, number }) => {
  return instance.post('/contacts', { name, number });
};

export const deleteContactService = (id) => {
  return instance.delete(`/contacts/${id}`);
};
