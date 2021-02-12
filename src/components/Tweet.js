import React from "react";

const Tweet = ({ user, tweets }) => {
  return (
    <div>
      <h2>{user}</h2>
      <h3>{tweets}</h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
