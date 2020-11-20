import React, { ReactElement } from 'react';
import Search from 'antd/lib/input/Search';
import styles from './Header.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import { useDispatch } from 'react-redux';
import { fetchTweets, setUsernameAction } from '../../features/tweet/actions';


export default function Header(): ReactElement {
  const dispatch = useDispatch();

  // Load user tweets
  function onSearch(twitterUsername: string) {
    dispatch(setUsernameAction(twitterUsername));
    dispatch(fetchTweets(twitterUsername));
  }

  return (
    <div className={styles.headerContainer}>
      <div>
        <Link to={routes.WELCOME}>
          <ArrowLeftOutlined />
        </Link>
      </div>
      <div className={styles.search}>
      <Search
        className={styles.search}
        addonBefore="@"
        placeholder='Search another user'
        allowClear
        enterButton='Search'
        onSearch={onSearch}
      />
      </div>
    </div>
  )
}
