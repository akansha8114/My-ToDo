// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk'; // ✅ Correct
import { loggerMiddleware, localStorageMiddleware } from './middleware';


import rootReducer from './Reducers';

// Configure persist options
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'tasks'] // Only auth and tasks will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false, // Disabling warnings for non-serializable values in redux-persist
      }).concat(thunk, loggerMiddleware, localStorageMiddleware),
    devTools: import.meta.env.MODE !== 'production',
  });

export const persistor = persistStore(store);