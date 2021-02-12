import React from "react";

const Tweet = ({ user, tweet, setTweets, tweets }) => {
  const deleteTweet = () => {
    console.log(tweet.id);
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  return (
    <div>
      <h2>{user}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
