import React, { useState } from "react";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  let [name, setName] = useState("Joshua");
  const sayHelloHandler = () => {
    if (name === "Joshua") {
      setName("Laika Beats");
    } else {
      setName("Joshua");
    }
  };

  return (
    <div>
      <h1>hello {name}</h1>
      <button className="active" onClick={sayHelloHandler}>
        Click
      </button>
      <CreateTweet />
      <TweetList name={name} message="this is a message i think" />
    </div>
  );
}

export default App;
