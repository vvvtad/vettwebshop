import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="title">
        <h1>Sign Up</h1>
        <p>The universe awaits you</p>
      </div>
      <div className="signup">
        <Header />
        <form>
          <label htmlFor="fname">First Name</label><br />
          <input type="text" id="fname" placeholder="Amy" required /><br />
          
          <label htmlFor="email">Email Address</label><br />
          <input type="email" id="email" placeholder="xxxxx@gmail.com" required /><br />
          
          <label htmlFor="address">Home Address</label><br />
          <input type="text" id="address" placeholder="From the small train station by the sea" /><br />

          <input type="submit" className="submitbutton" value="Create Account" />
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </form>

        <Footer />
      </div>
    </>
  );
};

export default Sign;
