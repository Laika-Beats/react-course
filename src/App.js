import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const message = "Hello";
  const [name, setName] = useState("Joshua");
  return (
    <div className="box">
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
