import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContactsAPI() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContactAPI(o) {
  const { data } = await axios.post('/contacts', o);
  return data;
}
export async function deleteContactsAPI(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
