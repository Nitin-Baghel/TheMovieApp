import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../reducer';

export interface User {
  user: {
    email: string;
    password: string;
  } | null;
}

const initialState: User = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveEmailPassword(state, action: PayloadAction<User>) {
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const {saveEmailPassword, logout} = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.user;
