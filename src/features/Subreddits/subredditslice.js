import { createSlice } from '@reduxjs/toolkit';
import { loadSubreddits } from '../../api/reddit';



export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        error: false,
        isLoading: false,
      },
    extraReducers: (builder) => {
      builder
        .addCase(loadSubreddits.pending, (state) => {
          state.isLoading = true;
          state.error = false;
        })
        .addCase(loadSubreddits.fulfilled, (state, action) => {
          state.isLoading = false;
          state.subreddits = action.payload;
        })
        .addCase(loadSubreddits.rejected, (state, action) => {
          state.isLoading = false;
          state.error = true;
          state.subreddits = [];
        })
    },
  });
  
  export const selectSubreddits = (state) => state.subreddits.subreddits;
  
  export const isLoading = (state) => state.subreddits.isLoading;
  
  export default subredditsSlice.reducer;












