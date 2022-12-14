import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) => {
  const [expand, setExpand] = useState(true);

  const [note, setNote] = useState({
    title:"",
    content:"",
  });

  const InputEvent = (event) => {
     const{name,value} = event.target;

   setNote((preData) => {
   return{
        ...preData,
        [name]: value,      
  };
    });
  };
  const Expand = () =>{
    setExpand(true);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title:"",
      content:"",
    });
  };


  return(
    <>
    <div className="container">
    <div className="main-note">
        <form>
            {expand?
            <input 
            type="text"
            name="title"
            value={note.title} 
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
             />:null}

            <textarea 
            name="content"
            value={note.content}
             onChange={InputEvent} 
             placeholder="Write a note" 
             rows=" " 
             column=" "
             onClick={Expand}
             ></textarea>

            <Button onClick={addEvent}>
               <AddIcon  className="add"/>
            </Button>
        </form>
    </div>
    </div>
    </>
  );
}
export default CreateNote;