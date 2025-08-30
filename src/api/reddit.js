import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
  
    return json.data.children.map((post) => post.data);
  };

  export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () => {
      const data = await fetch(`${API_ROOT}/subreddits.json`);
      const json = await data.json();
      return json.data.children.map((subreddit) => subreddit.data);
    }
  );
// export const getSubreddits = async () => {
//     const response = await fetch(`${API_ROOT}/subreddits.json`)
//     const json = await response.json()

//     return json.data.children.map((subreddit) => subreddit.data)
// }

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
  
    return json[1].data.children.map((subreddit) => subreddit.data);
  };
  