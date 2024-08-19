import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Ensure the correct CSS file is imported

export default function App() {
  const nav = useNavigate();
  const muscleBoxRefs = useRef([]);
  const stateSectionRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    muscleBoxRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (stateSectionRef.current) {
      observer.observe(stateSectionRef.current);
    }

    return () => {
      muscleBoxRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (stateSectionRef.current) {
        observer.unobserve(stateSectionRef.current);
      }
    };
  }, []);

  const loginPage = () => {
    // Simulate login action
    handleLoginSuccess();
    nav('/login');
  };

  const BmI = () => {
    nav('/Bim2');
  };

  const time = () => {
    nav('/st');
  };

  const showTrainers = () => {
    nav('/TrainersList');
  };

  const joinAsTrainer = () => {
    nav('/join-as-trainer');
  };

  const handleBoxClick = (muscle) => {
    nav(`/exercises/${muscle}`);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <header>
        <nav>
          <ul className="menu">
            <li><a onClick={() => nav('/')}>HOME</a></li>
            <li><a onClick={BmI}>BMI</a></li>
            <li><a onClick={time}>TRACKER</a></li>
            <li><a onClick={joinAsTrainer}>TRAINERS</a></li>
            {!isLoggedIn && (
              <li><button className="login-btn" onClick={loginPage}>Login</button></li>
            )}
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>ANYTIME FITNESS</h1>
          <p></p>
          <button className="cta-button" onClick={showTrainers}>FIND TRAINERS</button>
        </section>

        <section className="state-section" ref={stateSectionRef}>
          <p>STAT YOUR JOURNEY</p>
          <button className="cta-button" onClick={BmI}>FIT CHECK</button>
        </section>

        <section className="content">
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[0] = el)} onClick={() => handleBoxClick('Underweight')}>
            Underweight
            <img src="/underweight.png" alt="Underweight Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[1] = el)} onClick={() => handleBoxClick('Healthy')}>
            Healthy
            <img src="/healthy.png" alt="Healthy Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[2] = el)} onClick={() => handleBoxClick('Overweight')}>
            Overweight
            <img src="/overweight2.png" alt="Overweight Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[3] = el)} onClick={() => handleBoxClick('Chest')}>
            Chest
            <img src="/chest.png" alt="Chest Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[4] = el)} onClick={() => handleBoxClick('Back')}>
            Back
            <img src="/back.png" alt="Back Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[5] = el)} onClick={() => handleBoxClick('Legs')}>
            Legs
            <img src="/leg.png" alt="Leg Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[6] = el)} onClick={() => handleBoxClick('Triceps')}>
            Triceps
            <img src="/tris.jpg" alt="Triceps Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[7] = el)} onClick={() => handleBoxClick('Biceps')}>
            Biceps
            <img src="/biceps.png" alt="Biceps Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[9] = el)} onClick={() => handleBoxClick('Abs')}>
            Abs
            <img src="/abs.png" alt="Abs Workout" className="muscle-image" />
          </div>
          <div className="muscle-box" ref={(el) => (muscleBoxRefs.current[8] = el)} onClick={() => handleBoxClick('Cardio')}>
            Cardio
            <img src="/cardio.jpg" alt="Cardio Workout" className="muscle-image" />
          </div>
        </section>
      </main>
      <footer className="footer">
      <div className="footer-column">
        <a href="#workouts">Workouts</a>
        <a href="#meals">Meals</a>
        <a href="#success-stories">Success stories</a>
        <a href="#articles">Articles</a>
      </div>
      <div className="footer-column">
        <a href="#about">About</a>
        <a href="#careers">Careers</a>
        <a href="#press">Press</a>
        <a href="#help-center">Help center</a>
      </div>
      <div className="footer-column">
        <a href="#terms-of-service">Terms of service</a>
        <a href="#privacy-policy">Privacy policy</a>
        <a href="#cookies-policy">Cookies policy</a>
        <a href="#impressum">Impressum</a>
      </div>
      <div className="footer-column social-links">
        <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#instagram"><i className="fab fa-instagram"></i></a>
        <a href="#twitter"><i className="fab fa-twitter"></i></a>
        <a href="#youtube"><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
    </div>
  );
}
