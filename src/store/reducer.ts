import { combineReducers } from "@reduxjs/toolkit";
import { moviesApi } from "./movies/moviesSlice";

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
