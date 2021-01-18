import React, { useState } from "react";

function CreateTweet() {
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea onChange={userInputHandler} cols="40" rows="5"></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CreateTweet;
