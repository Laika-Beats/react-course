import React from "react";

const Tweet = ({ user, tweet, setTweets, tweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t !== tweet));
  };
  return (
    <div>
      <h2>{user}</h2>
      <h3>{tweet}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
