/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state): void => {
      state.isLogin = true;
    },
    userLogout: (state): void => {
      state.isLogin = false;
    },
  },
});

export const { userLogin, userLogout } = slice.actions;

export default slice.reducer;
