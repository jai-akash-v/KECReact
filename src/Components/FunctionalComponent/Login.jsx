//import React from "react";
var Login = () => {
  return (
    <div>
      <form style={{padding:10}} >
      <h1>Login</h1>
        <label>Name: </label>
        <input type='text' id='Name' placeholder='Enter your name' />
        <br />
        <label>Password: </label>
        <input type="password" id="passwd" placeholder="Enter your password" />
        <br />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};
export default Login;
