import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExtended, setIsExtended] =useState(false);
const [note, setNote] = useState({
  title: "",
  content:""
});

function handleChange(event){
  const {name, value} = event.target;
  setNote(prevNote  => {
    return({
      ...prevNote,
      [name]: value
    });
  })
}

function handleAdd(e){

  e.preventDefault();
  props.onAdd(note);

}

function expand(){
setIsExtended(true);
}

  return (
    <div>
      <form className="create-note">
      {isExtended &&   <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />}
        <textarea name="content" placeholder="Take a note..." rows={isExtended ? 3 : 1} onChange={handleChange} onClick={expand} value={note.content} />
        <Zoom in={isExtended}>
          <Fab onClick={handleAdd}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
