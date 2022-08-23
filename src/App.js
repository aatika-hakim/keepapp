import React, { useState } from "react";
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';


const App = () => {
  const[addItem, setItem] = useState([]);

  const addNote = (note) => {
   setItem((preData)=>{
    return [...preData, note];
   });
  };
  const onDelete = (id) => {
    setItem((oldData)=>{
    oldData.filter((currentData, indx)=>{
      return indx !== id
    });
  });
}

  return(
    <>
      <Header />
      <CreateNote passNote = {addNote}/>
      <Note /> 

      { addItem.map((val, index)=>{
        return( <Note 
          key = {index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
        );
      })
      }

      <Footer />
    </>
  );
}
export default App;