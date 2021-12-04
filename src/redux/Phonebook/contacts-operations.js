import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsAPI,
  addContactAPI,
  deleteContactsAPI,
} from '../../services/phonebook-api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchContactsAPI();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/сontactsGlobal',
  async cont => {
    const contacts = await addContactAPI(cont);
    return contacts;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteContactsAPI(id);
    return id;
  },
);
