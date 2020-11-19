import React, { ReactElement } from 'react';
import styles from './TwitterUsername.css';

type TwitterUsernameProps = {
  name: string;
  screen_name: string;
}

export default function TwitterUsername({name, screen_name}: TwitterUsernameProps): ReactElement {
  return (
    <div>
      <span> {name} <span className={styles.screenName}> @{screen_name} </span></span>
    </div>
  )
}
