import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
 return (
  <div
   style={{
    height: "75vh",
   }}
   className="container valign-wrapper"
  >
   <div className="row">
    <div className=" col s12 center-align">
     <h4>
      <b>Build</b> a login/auth app with the{" "}
      <span
       style={{
        fontFamily: "monospace",
       }}
      >
       MERN
      </span>
     </h4>
     <p className="flow-text grey-text text-darken-1">
      Create minimal full-stack app with user authentication via Passport and
      JWT
     </p>
     <br />
     <div className="col s6">
      <Link
       to="/login"
       style={{
        width: "140px",
        borderRadius: "3px",
        letterSpacing: "1.5px",
       }}
       className=" btn btn-large btn-flat waves-effect white black-text"
      >
       Log In
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Landing;
