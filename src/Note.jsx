import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const Note = (props) => {

    // const deleteNote = () => {
    //     props.deleteItem(props.id);
    // }

return(
    <>
    <div className="note">
       <h1> {props.title} </h1>
       <br />
       <p>  {props.content} </p>  
    <button className="btn" onClick={()=>{
        props.deleteItem(props.id);
    }}>
        <DeleteIcon className="deleteIcon" />
    </button>  
    </div> 
    </>
);
}
export default Note;