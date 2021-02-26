import React from "react";
import Note from "./Note";
import { v4 as uuidv4 } from "uuid";

function NoteList({ user, notes, setNotes }) {
  const key = () => uuidv4();
  console.log(key);
  return (
    <div>
      {notes.map((note) => (
        <Note
          user={user}
          note={note}
          notes={notes}
          setNotes={setNotes}
          key={key}
        />
      ))}
    </div>
  );
}

export default NoteList;
