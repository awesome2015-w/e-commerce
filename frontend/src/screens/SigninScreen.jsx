import React from "react";

export const SigninScreen = () => {
  return (
    <div className='container'>
      <h1>Sign In</h1>
      <form action='/signin' method='post' className="form-control">
        <label htmlFor='email' className="form-label">Email Address: </label>
        <input type='text' name='email' id='email' />
        <br />
        <label htmlFor='password' className="form-label">Password: </label>
        <input type='password' name='password' id='password' className=""/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
