import { Spin } from 'antd';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../features/tweet/actions';
import { RootState } from '../../store';
import Header from '../Header/Header';
import Timeline from '../Timeline/Timeline';
import UserInfo from '../UserInfo/UserInfo';
import styles from './Dashboard.css';



export default function Dashboard(): ReactElement {

  const dispatch = useDispatch();
  const { username, tweets, isLoading , currentUser } = useSelector((state: RootState) => state.tweets);

  useEffect(() => {
    dispatch(fetchTweets(username));
  }, [dispatch]);

  const timeLineProps = { tweets, isLoading };
  const userInfoProps = { currentUser };

  return (
    isLoading ?
      <Spin size="large" /> :
      <div className={styles.container}>
        <Header />
        <UserInfo {...userInfoProps}/>
        <Timeline {...timeLineProps}/>
      </div>
  )
}
