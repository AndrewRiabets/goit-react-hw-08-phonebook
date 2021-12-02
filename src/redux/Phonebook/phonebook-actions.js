// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('phonebook/changeFilter');
// const addContact = createAction('contacts/add', text => ({
//   payload: {
//     id: uuidv4(),
//     ...text,
//   },
// }));
// const deleteContact = createAction('contacts/delete');
// const changeFilter = createAction('contacts/filteredContacts');

// const addContact = text => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     ...text,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.FILTERED_CONTACTS,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
