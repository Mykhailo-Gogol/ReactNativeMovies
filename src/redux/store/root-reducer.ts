import {combineReducers} from '@reduxjs/toolkit';
import {savedReducer} from '../slices/saved';
import {moviesApi} from '../api';

export const rootReducer = combineReducers({
  saved: savedReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});
