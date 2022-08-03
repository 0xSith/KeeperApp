import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function submitNote(note){
    setNotes(prevNotes => [...prevNotes, note]);
  }

function deleteNote(id){
setNotes(prevNotes => {
  return prevNotes.filter((note,i) => {
    return i !== id;
  });
})
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={submitNote} />
      {notes.map((note,i) => <Note key={i} id={i} title={note.title} content={note.content} onDelete={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
