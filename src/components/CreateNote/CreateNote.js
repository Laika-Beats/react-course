const CreateNote = ({ noteInput, setNoteInput, notes, setNotes }) => {
  const inputValue = (event) => {
    setNoteInput(event.target.value);
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
        <textarea value={noteInput} onChange={inputValue}></textarea>
        <button>Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
};

export default CreateNote;
