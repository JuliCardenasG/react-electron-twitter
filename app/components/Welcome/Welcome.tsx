import React, { ReactElement } from 'react';
import styles from './Welcome.css';
import twitterLogo from '../../assets/Twitter_Logo_Blue.png';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setUsernameAction } from '../../features/tweet/actions';
import { useHistory } from 'react-router';
import routes from '../../constants/routes.json';


const { Search } = Input;

export default function Welcome(): ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();



  function onSearch(twitterUsername: string) {
    dispatch(setUsernameAction(twitterUsername));
    history.push(routes.DASHBOARD);
  }

  return (
    <div className={styles.welcome}>
      <img src={twitterLogo} className={styles.twitterLogo}></img>
      <h1>Welcome to React-Electron Twitter</h1>
      <p>Please enter a Twitter account to see its timeline</p>

      <Search
        className={styles.search}
        addonBefore="@"
        placeholder='You can try with @axosoft'
        allowClear
        enterButton='Search'
        onSearch={onSearch}
      />
    </div>
  )
}
