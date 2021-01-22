import React, { useState, useEffect } from "react";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const name = "Joshua";
  return (
    <div>
      <h1>hello react</h1>
      <CreateTweet />
      <TweetList name={name} message="this is a message i think" />
    </div>
  );
}

export default App;
