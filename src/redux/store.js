import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import LoginSlice from './userSlice';

export const store = configureStore({
    reducer: {
        login: LoginSlice,
        backendData: dataSlice,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
