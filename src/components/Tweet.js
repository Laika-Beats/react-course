import React from "react";

function Tweet({ name, tweet, setTweets, tweets }) {
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t !== tweet));
  };
  const tweetDate = "01/17/2021";
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweetDate}</h3>
      <h4>{tweet}</h4>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
}

export default Tweet;
