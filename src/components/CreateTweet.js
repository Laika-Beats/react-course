import React, { useState } from "react";

function CreateTweet({ tweets, setTweets, textInput, setTextInput }) {
  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="40"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CreateTweet;
