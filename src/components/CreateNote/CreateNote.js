import { useState } from "react";

const CreateNote = () => {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);

  const inputValue = (event) => {
    setNoteInput(event.target.value);
    console.log(event.target.value);
  };

  const submitNote = (event) => {
    event.preventDefault();
    setNotes([...notes, noteInput]);
    setNoteInput(" ");
  };

  return (
    <div>
      <form onSubmit={submitNote}>
        <h2>Write a Note:</h2>
        <h3>{notes}</h3>
        <textarea value={noteInput} onChange={inputValue}></textarea>
        <button>Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
};

export default CreateNote;
