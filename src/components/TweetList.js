import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }) => {
  return (
    <div>
      <Tweet name={name} tweets={tweets} />
      <Tweet name={name} tweets={tweets} />
      <Tweet name={name} tweets={tweets} />
    </div>
  );
};

export default TweetList;
