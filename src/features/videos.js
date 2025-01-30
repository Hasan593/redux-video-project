import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getVideos } from './videosApi';

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const videos = await getVideos();
    return videos;
});

export const videoSlice = createSlice({  //createSlice দুইটা জিনিস রির্টান করে action, reducer
    name: 'videos',
    initialState: {
        videos: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default videoSlice.reducer;