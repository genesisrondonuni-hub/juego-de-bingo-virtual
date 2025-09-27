import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type Theme = 'dark' | 'light';

interface UiState {
  theme: Theme;
}

const initialState: UiState = {
  theme: 'dark', // Tema por defecto
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = uiSlice.actions;

export const selectTheme = (state: RootState) => state.ui.theme;

export default uiSlice.reducer;
