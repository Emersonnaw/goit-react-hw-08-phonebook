import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import API from 'API/authAPI';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorization = () => {
    axios.defaults.headers.common.Authorization = '';
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

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken ) {
        return thunkAPI.rejectWithValue();
    } 
    setAuthHeader(persistedToken);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
},
);


export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
    try {
        await axios.post('/users/logout');
        clearAuthorization();
       
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
   }
    
});