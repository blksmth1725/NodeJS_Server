import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
 const [state, setState] = useState({
  email: "",
  password: "",
  errors: {},
 });

 const onChange = (event) => {
  setState({ [event.target.id]: event.target.value });
 };

 const onSubmit = (event) => {
  event.preventDefault();

  const userData = {
   email: state.email,
   password: state.password,
  };
  console.log(userData);
 };

 return (
  <div className="container">
   <div
    style={{
     marginTop: "4rem",
    }}
    className="row"
   >
    <div className="col s8 offset-s2">
     <Link to="/" className="btn-flat waves-effect">
      <i className="material-icons left">keyboard_backspace</i>Back to home
     </Link>
     <div
      className="col s12"
      style={{
       paddingLeft: "11.250px",
      }}
     >
      <h4>
       <b>Login</b> below
      </h4>
      <p className="grey-text text-darken-1">
       Don't have an account? <Link to="/register">Register</Link>
      </p>
     </div>
     <form noValidate onSubmit={onSubmit}>
      <div className="input-field col s12">
       <input
        onChange={onChange}
        value={state.email}
        error={state.errors}
        id="email"
        type="email"
       />
       <label htmlFor="email">Email</label>
      </div>
      <div className="input-field col s12">
       <input
        onChange={onChange}
        value={state.password}
        error={state.errors}
        type="password"
        id="password"
       />
       <label htmlFor="password">Password</label>
      </div>
      <div
       className="col s12"
       style={{
        paddingLeft: "11.250px",
       }}
      >
       <button
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        style={{
         width: "150px",
         borderRadius: "3px",
         letterSpacing: "1.5px",
         marginTop: "1rem",
        }}
        type="submit"
       >
        Login
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default Login;
