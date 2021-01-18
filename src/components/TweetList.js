import React from "react";
import Tweet from "./Tweet";

const TweetList = () => {
  const name = "Joshua";
  const message = "this is a dope tweeeeet";
  return (
    <div>
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
    </div>
  );
};

export default TweetList;
