import { configureStore, combineReducers } from '@reduxjs/toolkit';

import subRedditReducer from '../features/Subreddits/subredditslice';

export default configureStore({
  reducer:{
    subreddits: subRedditReducer
   }
  ,
});
