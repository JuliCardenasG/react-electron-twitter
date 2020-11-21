import { createSlice } from '@reduxjs/toolkit';
import { TweetType, UserType } from './tweet';

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState: {
    username: '',
    currentUser: {} as UserType,
    tweets: [] as TweetType[],
    isLoading: false,
    error: false
  },
  reducers: {
    tweetsLoad: (state) => {
      state.tweets = [],
      state.isLoading = true;
      state.error = false
    },
    tweetsSuccess: (state, action) => {
      state.tweets = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    tweetsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      state.isLoading = false;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
  }
})

export default tweetSlice.reducer;

