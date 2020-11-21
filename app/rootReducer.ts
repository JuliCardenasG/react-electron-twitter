import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import tweetsReducer from './features/tweet/tweetSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    tweets: tweetsReducer,
  });
}
