import { v4 as uuidv4 } from 'uuid';
import types from './phonebook-types';

const addContact = text => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    ...text,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.FILTERED_CONTACTS,
  payload: value,
});
export default { addContact, deleteContact, changeFilter };
