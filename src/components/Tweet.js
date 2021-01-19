import React from "react";

function Tweet({ name, message, tweets }) {
  const tweetDate = "01/17/2021";
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweetDate}</h3>
      <h4>{tweets}</h4>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
}

export default Tweet;
