import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialSaved: any[] = [];

const savedSlice = createSlice({
  name: 'saved',
  initialState: initialSaved,
  reducers: {
    toggleSaved: (state, action: PayloadAction<any>) => {
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
