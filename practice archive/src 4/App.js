import { useState } from "react";
import NoteFeed from "./components/Notes/NoteFeed";
import CreateNote from "./components/CreateNote/CreateNote";

function App() {
  const [noteInput, setNoteInput] = useState();
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <CreateNote
        noteInput={noteInput}
        setNoteInput={setNoteInput}
        notes={notes}
        setNotes={setNotes}
      />
      <NoteFeed notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
