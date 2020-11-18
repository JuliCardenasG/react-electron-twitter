import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../features/tweet/actions';
import { RootState } from '../../store';


export default function Dashboard(): ReactElement {
  const dispatch = useDispatch();
  const { username, tweets, isLoading , error} = useSelector((state: RootState) => state.tweets);
  console.log({username});
  console.log(tweets);

  useEffect(() => {
    dispatch(fetchTweets(username));
  }, []);

  return (
    <div>
      <p>Soon there will be a timeline here</p>
    </div>
  )
}
