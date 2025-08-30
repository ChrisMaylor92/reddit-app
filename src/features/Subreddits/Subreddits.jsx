import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectSubreddits,
    isLoading,
    loadSubreddits
  } from './subredditslice';

export const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const isLoadingSubreddits = useSelector(isLoading);

    
    useEffect(() => {
      dispatch(loadSubreddits());
    }, [dispatch]);
  
    if (isLoadingSubreddits) {
      return <div>Loading</div>;
    }
    // console.log(subreddits, '....')
    

    return (
      <>
      <h1>Subreddits</h1>
        <ul>
         
          {subreddits.map((subreddit) => (            
              <li key={subreddit.id}>{`${subreddit.display_name}`}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default Subreddits;