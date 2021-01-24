import React, { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  let [name, setName] = useState("Joshua");
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);

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
      <CreateTweet
        input={input}
        setInput={setInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        name={name}
        input={input}
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
