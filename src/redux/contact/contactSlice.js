import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload: { number, name, id } }) => [...state, { name, number, id }],
      prepare: ({ number, name }) => ({
          payload: {
            id: nanoid(),
            number,
            name,
          },
        }),
    },
    deleteContact: (state, { payload }) => [...state.filter(({ id }) => id !== payload)],
  },
});


export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
