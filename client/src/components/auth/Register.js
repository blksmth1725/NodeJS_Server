import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
 const [state, setState] = useState({
  name: "",
  email: "",
  password: "",
  password2: "",
  errors: {},
 });

 const onChange = (event) => {
  setState({ [event.target.id]: event.target.value });
 };

 const onSubmit = (event) => {
  event.preventDefault();
  const newUser = {
   name: state.name,
   email: state.email,
   password: state.password,
   password2: state.password2,
   errors: state.errors,
  };
  console.log(newUser);
 };

 const { errors } = state;

 return (
  <div className="container">
   <div className="row">
    <div className="col s8 offset-s2">
     <Link
      to="/"
      className="btn-flat waves-effect"
      style={{
       marginTop: "50px",
      }}
     >
      <i className="material-icons left">keyboard_backspace</i>
      Back to home
     </Link>

     <div
      className="col s12"
      style={{
       paddingLeft: "11.250px",
      }}
     >
      <h4>
       <b>Register</b> below
      </h4>
      <p className="grey-text text-darken-1">
       Already have an account? <Link to="/login">Log in</Link>
      </p>
     </div>
     <form noValidate onSubmit={onSubmit}>
      <div className="input-field col s12">
       <input
        onChange={onChange}
        value={state.name}
        error={state}
        id="name"
        type="text"
       />
       <label htmlFor="name">Name</label>
      </div>
      <div className="input-field col s12">
       <input
        onChange={onChange}
        value={state.email}
        error={state}
        id="email"
        type="email"
       />
       <label htmlFor="email">Email</label>
      </div>
      <div className="input-field col s12">
       <input
        onChange={onChange}
        value={state.password}
        error={state}
        id="password"
        type="password"
       />
       <label htmlFor="password">Password</label>
      </div>
      <div className="input-field col s12">
       <input
        onChange={onChange}
        value={state.password2}
        error={state}
        id="password2"
        type="password"
       />
       <label htmlFor="password2">Confirm Password</label>
      </div>
      <div className="col s12" style={{ paddingLeft: "11.250px" }}>
       <button
        style={{
         width: "150px",
         borderRadius: "3px",
         letterSpacing: "1.5px",
         marginTop: "1rem",
        }}
        type="submit"
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
       >
        Sign up
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default Register;
