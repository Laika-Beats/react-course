import Note from "./Note";

const NoteFeed = ({ notes, setNotes }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note} note={note} notes={notes} setNotes={setNotes} />
      ))}
    </div>
  );
};

export default NoteFeed;
