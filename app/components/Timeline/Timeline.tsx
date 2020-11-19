import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../features/tweet/actions';
import Tweet from '../../features/tweet/Tweet';
import { RootState } from '../../store';

export default function Timeline(): ReactElement {
  const dispatch = useDispatch();
  const { username, tweets, isLoading , error } = useSelector((state: RootState) => state.tweets);

  useEffect(() => {
    dispatch(fetchTweets(username));
  }, []);
  return (
    <div>
      {tweets.map(tweet => <Tweet {...tweet}/>)}
    </div>
  )
}
