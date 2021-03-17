import React from "react";
import './Header.css';
import Navigation from "./Navigation";
  
  function Header() {
     return (
         <div className="box">
            <div><h1>Knowledge Quest</h1></div>
            <div><Navigation /></div>            
         </div>
     )
  }
  
  export default Header;