import { combineReducers } from "@reduxjs/toolkit";
import { moviesApi } from "./movies/moviesSlice";
import authSlice from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
