import React, { ReactElement } from 'react';
import styles from './Welcome.css';
import twitterLogo from '../../utils/Twitter_Logo_Blue.png';
import { Input } from 'antd';

const { Search } = Input;

export default function Welcome(): ReactElement {
  return (
    <div className={styles.welcome}>
      <img src={twitterLogo} className={styles.twitterLogo}></img>
      <h1>Welcome to React-Electron Twitter</h1>
      <p>Please enter a Twitter account to see its timeline</p>
      {/* <Input placeholder="@axosoft"></Input> */}
      <Search
        placeholder="You can try with @axosoft"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </div>
  )
}

function onSearch(twitterAccount: string) {
  console.log(twitterAccount);
}
