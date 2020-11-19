import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../features/tweet/actions';
import { TweetType } from '../../features/tweet/tweet';
import { RootState } from '../../store';
import styles from './Timeline.css';
import { List, Avatar } from 'antd';
import { RetweetOutlined, StarOutlined } from '@ant-design/icons';
import IconText from '../IconText/IconText';
import Linkify from 'react-linkify';
import TwitterUsername from '../TwitterUsername/TwitterUsername';


type Props = {
  tweets: TweetType[],
  isLoading: boolean
};



export default function Timeline({ tweets, isLoading }: Props): ReactElement {

  return (
    <List className={styles.list}
      itemLayout="vertical"
      size="small"
      loading={isLoading}
      dataSource={tweets}
      renderItem={ (tweet: TweetType) => (
        <List.Item
          actions={[
            <IconText icon={RetweetOutlined} text={tweet.retweet_count}/>,
            <IconText icon={StarOutlined} text={tweet.favorite_count}/>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={tweet.user.profile_image_url_https} />}
            title={<TwitterUsername name={tweet.user.name} screen_name={tweet.user.screen_name} />}
          />
          <Linkify>
            {tweet.text}
          </Linkify>
        </List.Item>
      )}
    />
  )
}
