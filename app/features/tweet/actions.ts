// Actions for Tweet slice

import { api } from '../../api';
import { tweetSlice } from './tweetSlice';

const { tweetsLoad, tweetsSuccess, tweetsError, setUsername } = tweetSlice.actions

// Fetch tweets from Twitter API
export const fetchTweets = (twitterUsername: string) => async dispatch => {
  try {
    dispatch(tweetsLoad());

    // Params for searching tweets for given username
    const params = {
      screen_name: twitterUsername
    }

    await api.get('/statuses/user_timeline.json', { params })
      .then((response) => dispatch(tweetsSuccess(response.data)))
  }
  catch (e) {
    dispatch(tweetsError(e.message));
    return console.error(e.message);
  }
}

// Set Twitter username for timeline search
export const setUsernameAction = (twitterUsername: string) => async dispatch => {
  dispatch(setUsername(twitterUsername));
}
