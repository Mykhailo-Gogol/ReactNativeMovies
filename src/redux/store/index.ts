import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {rootReducer} from './root-reducer';
import * as flipper from 'redux-flipper';

import {moviesApi} from '../api';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({serializableCheck: false})
          .concat(moviesApi.middleware)
          .concat(flipper.default())
      : getDefaultMiddleware({serializableCheck: false}).concat(
          moviesApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

setupListeners(store.dispatch);
