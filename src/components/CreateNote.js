import React, { useState } from "react";

function CreateNote() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  let noteInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const submitNote = (e) => {
    e.preventDefault();
    console.log("Hey");
    setNotes([...notes, input]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={submitNote}>
        <input onChange={noteInput}></input>
        <button>Submit</button>
      </form>
      <h2>{notes}</h2>
    </div>
  );
}

export default CreateNote;
