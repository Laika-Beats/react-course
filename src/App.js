import React from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  return (
    <div className="box">
      <h1>Hello React</h1>
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
