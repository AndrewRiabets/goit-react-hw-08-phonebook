import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

export const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    if (state.some(({ name }) => name === payload.name)) {
      alert(`Sorry, contact is already in contacts list`);
      return state;
    }
    return [payload, ...state];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
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

export default combineReducers({
  items,
  filter,
});
