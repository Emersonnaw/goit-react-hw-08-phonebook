import { createSlice } from "@reduxjs/toolkit"
import { logIn, registration } from './operations';
 
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
//   isRefreshing: false,
    isLoading: false,
  error: null
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registration.pending]: handlePending,
        [registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [registration.rejected]: handleRejected,

        [logIn.pending]: handlePending,
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [logIn.rejected]: handleRejected,
    }
});

export const authReducer = authSlice.reducer;


