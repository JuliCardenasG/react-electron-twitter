import { Alert, Spin } from 'antd';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTweets } from '../../features/tweet/actions';
import { RootState } from '../../store';
import Header from '../Header/Header';
import Timeline from '../Timeline/Timeline';
import UserInfo from '../UserInfo/UserInfo';
import styles from './Dashboard.css';



export default function Dashboard(): ReactElement {

  const dispatch = useDispatch();
  const { username, tweets, isLoading, error , currentUser } = useSelector((state: RootState) => state.tweets);

  useEffect(() => {
    dispatch(fetchTweets(username));
  }, [dispatch]);

  const timeLineProps = { tweets, isLoading };
  const userInfoProps = { currentUser };

  const AlertMessage = (): ReactElement => {
    return (
      <div>
        <p className="ant-alert-description">There was an error loading tweets. Please try again later</p>
        <Link to="/">Go back</Link>
      </div>
    )
  }

  return (
    isLoading ?
      <Spin size="large" /> :
      error ?
        <Alert
          message="Error"
          description={<AlertMessage />}
          type="error"
          showIcon
        /> :
        <div className={styles.container}>
          <Header />
          <UserInfo {...userInfoProps}/>
          <Timeline {...timeLineProps}/>
        </div>
  )
}
