import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TweetType, UserType } from '../../app/features/tweet/tweet';
import { configureStore } from '@reduxjs/toolkit';
import * as tweetSlice from '../../app/features/tweet/tweetSlice';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../../app/components/Dashboard/Dashboard';
import renderer from 'react-test-renderer';
import * as redux from "react-redux";

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

//Mocking window.matchMedia as it's not available in the test environment
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const initialState = {
  username: '',
  currentUser: {} as UserType,
  tweets: [] as TweetType[],
  isLoading: false,
  error: false
}

// Mock data for user
const mockUser: UserType = {
  id: 68653811,
  id_str: "68653811",
  name: "John Doe",
  screen_name: "JohnDoe",
  location: "",
  description: "Description.",
  url: null,
  protected: false,
  followers_count: 195,
  friends_count: 155,
  verified: false,
  profile_image_url_https: "https://pbs.twimg.com/profile_images/766422613182783488/CIPmI1mj_normal.jpg",
  profile_banner_url: "https://pbs.twimg.com/profile_banners/68653811/1469288403",
}

// Mock tweets to test timeline rendering
const mockTweets: TweetType[] = [
  {
    created_at: "Sat Nov 07 19:54:24 +0000 2020",
    id: 132516472105881190,
    id_str: "132516472105881190",
    text: "Lorem Ipsum Dolor Sit Amet",
    retweet_count: 15,
    favorite_count: 10,
    user: {...mockUser},
  },
  {
    created_at: "Fri Nov 06 14:05:08 +0000 2020",
    id: 1324714436897230850,
    id_str: "1324714436897230850",
    text: "Amet Lorem Ipsum Dolor Sit ",
    retweet_count: 5,
    favorite_count: 2,
    user: {...mockUser},
  },
];

const tweetsPreloadState =  {
  tweets: { ...initialState}
}

function setup (preloadedState = tweetsPreloadState) {
  const store = configureStore({
    reducer: { tweets: tweetSlice.default },
    preloadedState
  });
  const getWrapper = () => {
    mount(
      <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    )
  }
  const shallowComponent = shallow(
    <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
  )
  const component = getWrapper();
  return { store, component, shallowComponent };
}

describe('Dashboard component', () => {
  it('should render', () => {
    const { shallowComponent } = setup({
      tweets: {
        username: mockUser.screen_name,
        currentUser: { ...mockUser },
        tweets: [...mockTweets],
        ...initialState
      }
    }, );
    expect(shallowComponent).toBeTruthy();
  });

  it('should match exact snapshot', () => {
    const { store } = setup();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Dashboard />
          </Router>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should dispatch fetch tweets actions', () => {
    // Mocke useDispatch function
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    const { shallowComponent } = setup({
      tweets: {
        username: mockUser.screen_name,
        currentUser: { ...mockUser },
        tweets: [...mockTweets],
        ...initialState
      }
    }, );
    expect(mockDispatchFn).toHaveBeenCalled();

    useDispatchSpy.mockClear();
  });
})
