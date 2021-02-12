import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [user, setUser] = useState("Joshua");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "test message";

  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList user={user} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
