import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from "../features/api/apiSlice";
import projectReducer from "../features/project/projectSlice";
import authReducer from "../features/auth/authSlice";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    project: projectReducer,
    auth: authReducer,
  },
  middleware: (getDefultMiddlewares) => getDefultMiddlewares().concat(apiSlice.middleware),
});
