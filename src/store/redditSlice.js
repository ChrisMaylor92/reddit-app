import { createSlice, createSelector } from '@reduxjs/toolkit';


const redditSlice = createSlice({
    name: redditsPosts,
    initialState: {
        posts: [], 
        error: false,
        isLoading: false, 
        searchTerm: '',
        selectedSubreddit: '/r/pics/'
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
        }
    }
})