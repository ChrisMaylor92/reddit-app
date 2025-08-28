import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () => {
      const data = await fetch('https://www.reddit.com/subreddits.json');
      const json = await data.json();
      return json;
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
          state.articles = action.payload;
        })
        .addCase(loadSubreddits.rejected, (state, action) => {
          state.isLoading = false;
          state.error = true;
          state.articles = [];
        })
    },
  });
  
  export const selectSubreddits = (state) => state.subreddits.subreddits;
  
  export const isLoading = (state) => state.subreddits.isLoading;
  
  export default subredditsSlice.reducer;












