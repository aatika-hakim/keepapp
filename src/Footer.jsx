import React from "react";


const Footer = () => {

  const year = new Date().getFullYear().toLocaleString(); 

  return(
    <>
    <footer>
        <p> Copyright ©️ {year} </p>
    </footer>
    </>
  );
}
export default Footer;