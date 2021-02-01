import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 return (
  <div className="navbar-fixed">
   <nav className="z-depth-0">
    <div className="nav-wrapper white">
     <Link
      to="/"
      style={{ fontFamily: "monospace" }}
      className="col 5 brand-logo center black-text"
     >
      <i className="materual-icons">Code</i>
     </Link>
    </div>
   </nav>
  </div>
 );
};

export default Navbar;
