import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from '../Phonebook/contacts-operations';

export const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    console.log(payload);
    if (state.some(({ name }) => name === payload.name)) {
      alert(`Sorry, ${payload.name} is already in contacts list`);
      return state;
    }
    return [payload, ...state];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       if (state.some(({ name }) => name === payload.name)) {
//         alert(`Sorry, ${payload.name} is already in contacts list`);
//         return;
//       }
//       return [payload, ...state];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTERED_CONTACTS:
//       return payload;
//     default:
//       return state;
//   }
// };
export const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
