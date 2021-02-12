import React, { useState } from "react";

const CreateTweet = () => {
  const [textInput, setTextInput] = useState("");

  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <form>
      <h1>{textInput}</h1>
      <textarea value={textInput} onChange={userInputHandler}></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
