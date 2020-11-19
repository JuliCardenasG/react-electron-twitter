import React, { ReactElement } from 'react';
import { Card, Avatar } from 'antd';
import { TweetType } from './tweet';


export default function Tweet(tweet: TweetType): ReactElement {
  const { Meta } = Card;

  return (
    <Card>
      <Meta
        avatar={<Avatar src={tweet.user.profile_image_url_https} />}
        title={tweet.user.screen_name}
        description={tweet.text}
      />
    </Card>
  )
}
