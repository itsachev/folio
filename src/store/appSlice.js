import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isAnimating: false,
  cursorActive: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsAnimating: (state, action) => {
      state.isAnimating = action.payload;
    },
    setCursorActive: (state, action) => {
      state.cursorActive = action.payload;
    }
  },
});

export const { setLoading, setIsAnimating, setCursorActive } = appSlice.actions;
export default appSlice.reducer;
