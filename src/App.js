import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [user, setUser] = useState("Joshua");
  return (
    <div>
      <CreateTweet />
      <TweetList user={user} />
    </div>
  );
}

export default App;
