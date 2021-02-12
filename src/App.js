import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [user, setUser] = useState("Joshua");
  const [counter, setCounter] = useState(0);
  const sayHelloHandler = () => {
    if (user === "Joshua") {
      setUser("Laika Beats");
    } else {
      setUser("Joshua");
    }
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Hello {user}</h1>
      <h2>You've clicked {counter} times</h2>
      <button onClick={sayHelloHandler}>Click</button>
      {/* <CreateTweet />
      <TweetList user={user} /> */}
    </div>
  );
}

export default App;
