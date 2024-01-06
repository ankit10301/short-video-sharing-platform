import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './api/apiSlice';
import authReducer from './api/auth/authSlice';
// import homepageReducer from '../../feature/homepage/homepageSlice';
// import headerReducer from '../../feature/header/headerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [ apiSlice.reducerPath ]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    apiSlice.middleware,
  )
})

setupListeners(store.dispatch);