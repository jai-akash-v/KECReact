//import React from "react";
var Signup = () => {
    return (
      <div>
        <form style={{padding:10}} onSubmit={Signup} >
            <h1>Sign Up</h1>
          <label>Name: </label>
          <input type='text' id='Name' placeholder='Enter your name' />
          <br />
          <label>Gender:</label>
          <br />
          <input type='radio' name='Gender' value='Male' />
          Male
          <input type='radio' name='Gender' value='Female' />
          Female
          <br />
          <label>Password: </label>
        <input type="password" id="passwd" placeholder="Enter your password" />
          <br />
          <label>Department: </label>
          <select id='Department' name='Department'>
            <option value='AIML'>AIML</option>
            <option value='AIDS'>AIDS</option>
            <option value='CSE'>CSE</option>
          </select>
          <br />
          <br />
          <button type='submit' value='Sign up'>Sign up</button>
        </form>
      </div>
    );
  };
  export default Signup;
  