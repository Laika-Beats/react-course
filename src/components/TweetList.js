import React from "react";
import Tweet from "./Tweet";

function TweetList({ name, tweets, setTweets }) {
  return (
    <>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet}
          name={name}
          tweet={tweet}
          setTweets={setTweets}
          tweets={tweets}
        />
      ))}
    </>
  );
}

export default TweetList;
