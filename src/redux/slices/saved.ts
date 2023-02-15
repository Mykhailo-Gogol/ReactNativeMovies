import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TMovie} from '../../types';
const initialSaved: TMovie[] = [];

const savedSlice = createSlice({
  name: 'saved',
  initialState: initialSaved,
  reducers: {
    toggleSaved: (state, action: PayloadAction<TMovie>) => {
      const saved = state.find(el => el?.id === action.payload.id);
      const updated = saved
        ? state.filter(el => el?.id !== action.payload.id)
        : [...state, action.payload];
      return updated;
    },
  },
});

export const savedActions = savedSlice.actions;
export const savedReducer = savedSlice.reducer;
