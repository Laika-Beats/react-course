import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import NoteList from "./components/NoteList";

function App() {
  const user = "Joshua";
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <CreateNote
        setInput={setInput}
        input={input}
        setNotes={setNotes}
        notes={notes}
      />
      <NoteList user={user} notes={notes} setNotes={setNotes} input={input} />
    </div>
  );
}

export default App;
