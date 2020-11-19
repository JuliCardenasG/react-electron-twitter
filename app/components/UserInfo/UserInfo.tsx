import React, { ReactElement } from 'react';
import { Avatar, Card } from 'antd';
import { UserType } from '../../features/tweet/tweet';
import TwitterUsername from '../TwitterUsername/TwitterUsername';
import styles from './UserInfo.css';


interface Props {
  currentUser: UserType
}

export default function UserInfo({currentUser}: Props): ReactElement {
  console.log(currentUser)

  const { Meta } = Card;

  const FollowersCount = (): ReactElement => {
    return (
      <div>
        <span>Following:{ currentUser.friends_count }</span>
        <span className={styles.followers}>Followers: { currentUser.followers_count }</span>
      </div>
    )
  }

  return (
    <Card
      cover={
        <img src={currentUser.profile_banner_url} className={styles.coverImg}/>
      }
    >
      <Meta
        avatar={<Avatar src={currentUser.profile_image_url_https} className={styles.avatarImg}/>}
        title={<TwitterUsername name={currentUser.name} screen_name={currentUser.screen_name} />}
        description={currentUser.description}

      />
      <FollowersCount />
    </Card>
  )
}
