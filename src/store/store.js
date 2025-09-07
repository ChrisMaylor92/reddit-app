import { configureStore, combineReducers } from '@reduxjs/toolkit';

import subRedditReducer from './subredditslice';

export default configureStore({
  reducer:{
    subreddits: subRedditReducer
   }
  ,
});
