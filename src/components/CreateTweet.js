import React, { useState } from "react";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <h1>{textInput}</h1>
      <textarea value={textInput} onChange={userInputHandler}></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
