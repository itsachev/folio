import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAnimating: false,
  error: null,
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
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError, setIsAnimating } = appSlice.actions;
export default appSlice.reducer;
