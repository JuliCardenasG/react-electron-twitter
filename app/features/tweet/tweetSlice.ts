import { createSlice } from '@reduxjs/toolkit';

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState: {
    username: '',
    tweets: [],
    isLoading: false,
    error: false
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
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
    }
  }
})

export default tweetSlice.reducer;

