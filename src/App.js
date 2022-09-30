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
    setItem((preData)=>{
    return preData.filter((currentData, indx)=>{
      return indx !== id;
     });
  });
}

  return(
    <>
   
      <Header /> 
      <div className='page-container'>
      <CreateNote passNote = {addNote}/>
     
      { addItem.map((val, index)=>{
        return( <Note 
          key = {index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
        ); })}

      </div>
      
    

        <Footer />
    </>
  );
}
export default App;