// File for Twitter related types
export type TweetType = {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  retweet_count: number;
  favorite_count: number;
  user: UserType;
};

export type UserType = {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  protected: string;
  friends_count: number;
  followers_count: number;
  verified: string;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: string;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
}
