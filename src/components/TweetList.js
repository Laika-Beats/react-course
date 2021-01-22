import React from "react";
import Tweet from "./Tweet";

function TweetList({ name, message }) {
  return (
    <>
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
    </>
  );
}

export default TweetList;
