import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ user }) => {
  return (
    <div>
      <Tweet user={user} />
      <Tweet user={user} />
      <Tweet user={user} />
    </div>
  );
};

export default TweetList;
