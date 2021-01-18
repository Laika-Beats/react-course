import React, { useState } from "react";

function CreateTweet() {
  const [textInput, setTextInput] = useState("");

  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <form>
      <textarea onChange={userInputHandler} cols="40" rows="5"></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CreateTweet;
