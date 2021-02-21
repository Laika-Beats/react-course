import Note from "./Note";

const NoteFeed = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note} note={note} />
      ))}
    </div>
  );
};

export default NoteFeed;
