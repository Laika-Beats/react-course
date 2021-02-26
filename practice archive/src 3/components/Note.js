import React from "react";

function Note({ user, note, setNotes, notes, key }) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  } else {
    month = newDate.getMonth();
  }

  let year = newDate.getFullYear();
  const deleteNote = () => {
    setNotes(notes.filter((n) => n !== note));
  };
  return (
    <div>
      <h1>{user}</h1>
      <h3>
        {month}/{date}/{year}
      </h3>
      <h2>{note}</h2>
      <button onClick={deleteNote}>delete</button>
      <button>complete</button>
    </div>
  );
}

export default Note;
