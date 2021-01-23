import React from "react";
import Note from "./Note";

function NoteList({ user, notes, setNotes }) {
  return (
    <div>
      {notes.map((note) => (
        <Note user={user} note={note} notes={notes} setNotes={setNotes} />
      ))}
    </div>
  );
}

export default NoteList;
