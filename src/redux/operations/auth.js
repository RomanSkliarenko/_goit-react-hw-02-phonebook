import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser, loginUser, logoutUser, signupUser } from '../../services/appServices';
import { fetchContacts } from './contacts';
import { clearContacts } from '../contact/contactSlice';

const handleLogoutResponse = (res) => {
  if (res.status === 200) {
    return null;
  }
  throw new Error('Logout error');
};


export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    return await loginUser({ email, password });
  } catch (error) {
    return thunkAPI.rejectWithValue(`${error.message}`);
  }
});


export const signUp = createAsyncThunk('auth/signUp', async ({ name, email, password }, thunkAPI) => {
  try {
    return await signupUser({ name, email, password });
  } catch (error) {
    return thunkAPI.rejectWithValue(`${error.message}`);
  }
});

export const currentUser = createAsyncThunk('auth/getCurrentUser', async (token, thunkAPI) => {
  try {
    const res = await getCurrentUser(token);
    thunkAPI.dispatch(fetchContacts());
    return { ...res, token };
  } catch (error) {
    return thunkAPI.rejectWithValue(`${error.message}`);
  }
});


export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const res = await logoutUser();
    thunkAPI.dispatch(clearContacts());
    return handleLogoutResponse(res);
  } catch (error) {
    return thunkAPI.rejectWithValue(`${error.message}`);
  }
});


