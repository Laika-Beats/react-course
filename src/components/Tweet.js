import React from "react";

function Tweet({ name, message }) {
  const tweetDate = "1/21/2021";
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweetDate}</h3>
      <h3>{message}</h3>
      <button>Delete</button>
      <button> Like</button>
    </div>
  );
}

export default Tweet;
