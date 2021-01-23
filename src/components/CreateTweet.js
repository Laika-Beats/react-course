import React from "react";

function CreateTweet({ input, setInput, tweets, setTweets }) {
  const userInput = (e) => {
    setInput(e.target.value);
  };
  const submitTweet = (e) => {
    e.preventDefault();
    setTweets([...tweets, input]);
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
