import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadSubreddits = createAsyncThunk(
  'subreddits/loadSubreddits',
  async () => {
    const subRedditsData = await getSubreddits()
    return subRedditsData
  }
);
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

  export default subredditsSlice.reducer;
  export const isLoading = (state) => state.subreddits.isLoading;
  export const selectSubreddits = (state) => state.subreddits.subreddits;










