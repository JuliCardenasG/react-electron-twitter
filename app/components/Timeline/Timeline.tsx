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




export default function Timeline(): ReactElement {
  const dispatch = useDispatch();
  const { username, tweets, isLoading , error } = useSelector((state: RootState) => state.tweets);

  useEffect(() => {
    dispatch(fetchTweets(username));
  }, []);

  const TwitterUsername = ({name, screen_name}) => {
    return (
      <div>
        <span> {name} <span className={styles.screenName}> @{screen_name} </span></span>
      </div>
    )
  }

  return (
    <List className={styles.list}
      itemLayout="vertical"
      size="large"
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
