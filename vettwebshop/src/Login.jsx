import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Access granted. Step into the galaxy.");
      navigate('/App');
    } else {
      alert("Please provide your credentials to the admin.");
    }
  };

  return (
    <div className="login">
      <Header />

      <div className="title">
        <h1>Log In</h1>
        <p>The universe awaits you</p>
      </div>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email Address</label><br />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="xxxxx@gmail.com" required 
        /><br />

        <label htmlFor="pass">Password</label><br />
        <div style={{ position: 'relative' }}>
          <input 
            type={showPassword ? "text" : "password"} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password" required 
          />
          <i 
            className={`bx ${showPassword ? 'bx-lock-open-alt' : 'bxs-lock-alt'}`}
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: 'pointer', opacity: showPassword ? 1 : 0.5 }}
          ></i>
        </div><br />

        <button type="submit" className="submitbutton">Log In</button>
        <p>Don't have an account? <Link to="/Sign">Register</Link></p>
      </form>

      <Footer />
    </div>
  );
};

export default Login;
