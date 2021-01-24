import React from "react";

function Tweet({ name, message, input, tweet, setTweets, tweets }) {
  const tweetDate = "1/21/2021";
  const deleteTweet = (e) => {
    setTweets(tweets.filter((t) => t.id !== tweet.id));
  };
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweetDate}</h3>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button> Like</button>
    </div>
  );
}

export default Tweet;
