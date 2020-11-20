// Actions for Tweet slice

import { Dispatch } from 'react';
import { api } from '../../api';
import { UserType } from './tweet';
import { tweetSlice } from './tweetSlice';

const { tweetsLoad, tweetsSuccess, tweetsError, setUsername, setCurrentUser } = tweetSlice.actions;

// Fetch tweets from Twitter API
export const fetchTweets = (twitterUsername: string) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(tweetsLoad());

    // Params for searching tweets for given username
    const params = {
      screen_name: twitterUsername
    }

    await api.get('/statuses/user_timeline.json', { params })
      .then((response) => {
        dispatch(tweetsSuccess(response.data));
        // Get user from first tweet and set is as currentUser to display their info in the header
        const currentUser: UserType = response.data[0].user;
        dispatch(setCurrentUserAction(currentUser));
      })
  }
  catch (e) {
    dispatch(tweetsError(e.message));
    return console.error(e.message);
  }
}

// Set Twitter username for timeline search
export const setUsernameAction = (twitterUsername: string) => async (dispatch: Dispatch<any>) => {
  dispatch(setUsername(twitterUsername));
}

// Set Twitter user whose tweets are being displayed
export const setCurrentUserAction = (currentUser: UserType) => async (dispatch: Dispatch<any>) => {
  dispatch(setCurrentUser(currentUser))
}
