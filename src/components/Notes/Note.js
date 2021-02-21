const Note = ({ note, notes, setNotes }) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const deleteNote = () => {
    setNotes(notes.filter((n) => n !== note));
  };

  return (
    <div>
      <h3>{`${month}/${date}/${year}`}</h3>
      <h1>{note}</h1>
      <button onClick={deleteNote}>delete</button>
    </div>
  );
};

export default Note;
