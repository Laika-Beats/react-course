import React from "react";

function Tweet({ name, message }) {
  const tweetDate = "01/17/2021";
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweetDate}</h3>
      <h4>{message}</h4>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
}

export default Tweet;
