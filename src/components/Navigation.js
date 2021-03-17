import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
   return (
       <nav className="linkStyle">        
         <div><Link to={'/science'}><h1>Science</h1></Link></div>
         <div><Link to={'/history'}><h1>History</h1></Link></div>
         <div><Link to={'/geography'}><h1>Geography</h1></Link></div>
         <div><Link to={'/flashcard'}><h1>+Card</h1></Link></div>
         <div><Link to={'/'}><h1>Home</h1></Link></div> 
       </nav>
   )
}

export default Navigation;