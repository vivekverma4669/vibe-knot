import React, { useState } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

 const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   
  return ( 
     
    <nav>
      <Link to="/" className="title">
      <img src="https://i.postimg.cc/NK4LR6YZ/file.png" alt='logo ' style={{height: "100px", marginLeft :'12px'}}/>
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen) }>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""} id="atag">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create">Add-Task</NavLink>
        </li>
        <li>
          <NavLink to="/list">Task List</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
        <NavLink to="/profile">
          <img src="https://www.citypng.com/public/uploads/small/11639594342hjraqgbufi3xlb66lt30fz1pwfcydxkjqbynfqdpvufz41ysjtngiet4dyrywgqqqqu56w5nozgrhyecs4ixrlllkl150ogbiid1.png" height="40px" width="30px" />
        </NavLink>

        </li>
         
        </ul> 
         {/* <div   id="log" style={{marginRight: "30px",  display : menuOpen? "block" : ""}} > 

        
        <h3> <NavLink to="/login" style={{borderRadius :"5px", padding:'10px' , color :'black'}}>
        
         Login
          </NavLink> 
          :  <p style={{color :'black'}}>user  <br/> <button > log out </button> </p>  

         </h3>

         
       </div>  */}
      
    </nav>                   
  );                          
};
 export default Navbar;