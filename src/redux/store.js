import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contact/contactSlice';
import { filterReducer } from './filter/filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
})

