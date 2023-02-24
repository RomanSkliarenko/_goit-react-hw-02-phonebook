import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../operations/contacts';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearContacts(state) {
      state.contacts = []
    },
  },
  extraReducers:
    (builder) => {
      builder.addCase(addContact.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts = [...state.contacts, payload];
      });
      builder.addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
      builder.addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts = [...payload];
      });
      builder.addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
      builder.addCase(deleteContact.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts = [...state.contacts.filter(({ id }) => id !== payload.id)];
      });
      builder.addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
    },

});

export const {clearContacts} = contactSlice.actions
export const contactReducer = contactSlice.reducer;
