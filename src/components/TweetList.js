import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ user, tweets }) => {
  return (
    <div>
      <Tweet user={user} tweets={tweets} />
      <Tweet user={user} />
      <Tweet user={user} />
    </div>
  );
};

export default TweetList;
