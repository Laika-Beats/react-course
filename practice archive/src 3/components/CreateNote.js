import React from "react";

function CreateNote({ setInput, setNotes, input, notes }) {
  let noteInput = (e) => {
    setInput(e.target.value);
  };
  const submitNote = (e) => {
    e.preventDefault();
    setNotes([...notes, input]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={submitNote}>
        <input value={input} onChange={noteInput}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateNote;
