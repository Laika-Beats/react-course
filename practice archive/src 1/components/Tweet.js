import React, { useEffect } from "react";
import "./Tweet.scss";

function Tweet({ name, tweet, setTweets, tweets }) {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  const tweetDate = "01/17/2021";
  useEffect(() => {
    console.log("we run a function");
  }, []);
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweetDate}</h3>
      <h4>{tweet.message}</h4>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
}

export default Tweet;
