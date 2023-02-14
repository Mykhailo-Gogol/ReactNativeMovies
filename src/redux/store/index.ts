import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {rootReducer} from './root-reducer';

import {moviesApi} from '../api';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

import * as flipper from 'redux-flipper';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = flipper.default;

      return getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(moviesApi.middleware)
        .concat(createDebugger());
    } else {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(moviesApi.middleware);
    }
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

setupListeners(store.dispatch);
