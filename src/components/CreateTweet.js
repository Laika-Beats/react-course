import React from "react";
import { v4 as uuidv4 } from "uuid";

function CreateTweet({ input, setInput, tweets, setTweets }) {
  const userInput = (e) => {
    setInput(e.target.value);
  };
  const submitTweet = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: input, id: uuidv4() }]);
    setInput("");
  };

  return (
    <form onSubmit={submitTweet}>
      <textarea value={input} onChange={userInput}></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CreateTweet;
