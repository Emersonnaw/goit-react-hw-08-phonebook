import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { contactsReducer } from "./contacts/contactSlice";
import { filterSlice} from "./Filter/FilterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const persistConfig = {
  key:'auth',
    storage,
    whitelist: ['token'],
   
};

const persistedReducer = persistReducer(persistConfig, authReducer);



export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        contacts: contactsReducer,
        filter: filterSlice.reducer,
    },
    middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);





