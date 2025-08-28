import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadSubreddits,
    selectSubreddits,
    isLoading,
  } from './subredditslice';

export const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const isLoadingSubreddits = useSelector(isLoading);
  
    useEffect(() => {
      dispatch(loadSubreddits());
    }, [dispatch]);
  
    if (isLoadingSubreddits) {
      return <div>loading state</div>;
    }
  
    return (
      <>
      <h1>Subreddits</h1>
        <section >
         
          {subreddits.map((subreddit) => (            
              <h1>`${subreddit.title}`</h1>
          ))}
        </section>
      </>
    );
  };
  
  export default Subreddits;