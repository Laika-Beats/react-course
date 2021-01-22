import React, { useState } from "react";

function CreateTweet() {
  const [input, setInput] = useState("");

  const userInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <form>
      <textarea value={input} onChange={userInput}></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CreateTweet;
