import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import './TrainerList.css'; // Ensure the path is correct

const trainers = [
  { name: 'Sakthi', age: 19, specialization: 'Power lifting', languages: 'Hindi', experience: '5 years', profilePic: '' },
  { name: 'Raghul', age: 20, specialization: 'Weight lifting', languages: 'Hindi, English', experience: '8 years', profilePic: 'url-to-profile-pic-2.jpg' },
  { name: 'Sudarshan', age: 18, specialization: 'Cardio', languages: 'English', experience: '3 years', profilePic: 'url-to-profile-pic-3.jpg' },
  { name: 'Raj prasanna', age: 19, specialization: 'Pilates', languages: 'English, Spanish', experience: '1 years', profilePic: 'url-to-profile-pic-4.jpg' },
  { name: 'Amuthan', age: 16, specialization: 'CrossFit', languages: 'English, French', experience: '6 months', profilePic: 'url-to-profile-pic-5.jpg' }
];

export default function TrainersList() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleBookClick = (trainerName) => {
    // Placeholder for booking functionality
    alert(`Appointment booked with ${trainerName}`);
  };

  return (
    <div className="trainers-list">
      <header>
        <h1>Available Trainers</h1>
        <button className="back-btn" onClick={handleBackClick}>
          Back
        </button>
      </header>
      <main>
        <div className="trainer-list">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <Avatar 
                alt={`${trainer.name} profile`} 
                src={trainer.profilePic} 
                className="profile-pic"
              />
              <h2>{trainer.name}</h2>
              <p>Age: {trainer.age}</p>
              <p>Specialization: {trainer.specialization}</p>
              <p>Languages: {trainer.languages}</p>
              <p>Experience: {trainer.experience}</p>
              <div className="button-group">
                <button 
                  className="check-availability-btn"
                  onClick={() => alert(`Available: ${trainer.available}`)}
                >
                  Check Availability
                </button>
                <button 
                  className="book-appointment-btn"
                  onClick={() => handleBookClick(trainer.name)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>2023 Fitness Web App</p>
      </footer>
    </div>
  );
}
