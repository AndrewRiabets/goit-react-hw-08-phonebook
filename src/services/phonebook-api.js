import axios from 'axios';

axios.defaults.baseURL = '61978bf75953f10017d23de7.mockapi.io';

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
