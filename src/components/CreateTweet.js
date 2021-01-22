import React from "react";

function CreateTweet() {
  function submitBtn(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form>
      <textarea onSubmit={submitBtn}></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CreateTweet;
