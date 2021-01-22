import React, { useState, useEffect } from "react";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "Joshua";
  return (
    <div>
      <h1>hello react</h1>
      <CreateTweet />
      <Tweet name={name} message="whats kickin fresh boi" />
    </div>
  );
}

export default App;
