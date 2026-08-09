import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';

const logger = (storeAPI) => (next) => (action) => {
  console.log('will dispatch', action);
  const result = next(action);
  console.log('state after dispatch', storeAPI.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
