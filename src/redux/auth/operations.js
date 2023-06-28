import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';
const setAuthHeader = token => {
    console.log('token', token)
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const registration = createAsyncThunk('auth/registration', async (credetials, thunkAPI) => {
    try {
        const resp = await axios.post('/users/signup', credetials);
        setAuthHeader(resp.data.token);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credetials, thunkAPI) => {
    try {
        const resp = await axios.post('/users/login', credetials);
        setAuthHeader(resp.data.token);
        return resp.data;
    } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
    }

});