import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/Fetch', async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/contacts');
      return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
});


export const addContacts = createAsyncThunk('contacts/addContacts', async (data, thunkAPI) => {
    try {
      const resp = await axios.post('/contacts', data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk('contacts/Remove', async (contactId, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
   
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
