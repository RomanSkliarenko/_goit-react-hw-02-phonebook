import { createSlice } from '@reduxjs/toolkit';
import { currentUser, login, logOut, signUp } from '../operations/auth';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    isLogin: false,
    name: '',
    email: '',
    token: '',
    error: null,
  },
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(login.pending, (state) => {
      state.loading = true;
    });
    addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLogin = true;
      state.email = payload.user.email;
      state.name = payload.user.name;
      state.token = payload.token;
    });
    addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    addCase(signUp.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLogin = true;
      state.name = payload.user.name;
      state.email = payload.user.email;
      state.token = payload.token;
    });
    addCase(signUp.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    addCase(logOut.pending, (state) => {
      state.loading = true;
    });
    addCase(logOut.fulfilled, (state) => {
      state.loading = false;
      state.isLogin = false;
      state.name = '';
      state.email = '';
      state.token = null;
    });
    addCase(logOut.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    addCase(currentUser.pending, (state) => {
      state.loading = true;
    });
    addCase(currentUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLogin = true;
      state.name = payload.name;
      state.email = payload.email;
      state.token = payload.token;
    });
    addCase(currentUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const authReducer = authSlice.reducer;

