import {configureStore} from '@reduxjs/toolkit';
import videoSlice from '../features/videos';

export const store = configureStore({
    reducer: {
        videoSlice
    }
});