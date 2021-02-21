import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ user, tweets, setTweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          user={user}
          tweets={tweets}
          tweet={tweet}
          setTweets={setTweets}
        />
      ))}
    </div>
  );
};

export default TweetList;
