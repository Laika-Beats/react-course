import React from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  function helloBtn(event) {
    console.log(event.target.classList);
  }

  return (
    <div className="box">
      <h1>Hello React</h1>
      <button onClick={helloBtn}>Click</button>
    </div>
  );
}

export default App;
