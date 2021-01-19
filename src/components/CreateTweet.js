import React from "react";
import { v4 as uuidv4 } from "uuid";

function CreateTweet({ tweets, setTweets, textInput, setTextInput }) {
  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
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
