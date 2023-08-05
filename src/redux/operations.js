import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAll } from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const data = await fetchAll();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsToBackend = createAsyncThunk(
  'contacts/addContacts',
  async (contactInfo, thunkApi) => {
    try {
      const data = await addContact(contactInfo);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContactsFromBackend = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkApi) => {
    try {
      const data = await deleteContact(contactId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
