// import { addContactService, deleteContactService, fetchContactsService } from '../../services/fetchService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactService, deleteContactService, fetchContactsService } from '../../services/appServices';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await fetchContactsService();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`${error.message}`);
  }
});

export const deleteContact = createAsyncThunk('contacts/delete-contact', async (id, thunkAPI) => {
  try {
    const { data } = await deleteContactService(id);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`${error.message}`);
  }
});

export const addContact = createAsyncThunk('contacts/add-contact', async ({ name, number }, thunkAPI) => {
  try {
    const { data } = await addContactService({ name, number });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`${error.message}`);
  }
});
