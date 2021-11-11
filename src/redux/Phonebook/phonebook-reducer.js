import { combineReducers } from 'redux';
import types from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (state.some(({ name }) => name === payload.name)) {
        alert(`Sorry, ${payload.name} is already in contacts list`);
        return;
      }
      return [payload, ...state];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTERED_CONTACTS:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
