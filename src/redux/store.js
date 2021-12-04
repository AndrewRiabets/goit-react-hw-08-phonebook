import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import phonebookReducer from './Phonebook/phonebook-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './Auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    auth: persistReducer(authPersistConfig, authSlice),
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
