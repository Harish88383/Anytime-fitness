import React, { useState, useEffect } from 'react';
import './int.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formClass, setFormClass] = useState('');
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    setFormClass('show');
    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setHeaderClass('show-header');
      } else {
        setHeaderClass('hide-header');
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
      if (response.status === 200) {
        localStorage.setItem('userEmail', response.data.email); // Store email in local storage
        nav('/app-no-login'); // Navigate to AppNoLogin page on successful login
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const navigateHome = () => {
    nav('/');
  };

  const Sign = () => {
    nav('/SignUp');
  };

  return (
    <div className="inter-container">
      <header className={`header ${headerClass}`}>
        <a href="#" className="logo">
          <ion-icon name="rose"></ion-icon> ANYTIME FITNESS
        </a>

        <nav className="nav">
          <a onClick={navigateHome}>HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">MENU</a>
          <a href="#">REVIEW</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>

      {/* Background video */}
      <video className="background-video" autoPlay loop >
        <source src="/3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="hello">
        <div className="content"></div>
        <div className={`wrapper-login ${formClass}`}>
          <h2>Member login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <span className="icon"></span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Enter your email</label>
            </div>

            <div className="input-box">
              <span className="icon"></span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Enter your password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="register-link"></div>
            <p>
              Not a Member?<a onClick={Sign}> Sign up Now</a>
            </p>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
