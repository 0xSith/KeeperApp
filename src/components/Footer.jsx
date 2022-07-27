import React from "react";

function Footer(){
  const currentYear = new Date().getFullYear();
  return(
    <footer>
      <p> © 0x Analysis {currentYear}</p>
    </footer>
  );
}

export default Footer;
