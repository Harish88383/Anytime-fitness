import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AppNoLogin from './AppNoLogin'; // Import the new component
import Inter from './login';
import Bim from './Bim2';
import Sign from './SignUp';
import Ap from './st';
import TrainersList from './TrainerList';
import JoinAsTrainer from './JoinAsTrainer';
import ExerciseList from './ExerciseList';

export default function Root() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Inter />} />
          <Route path='/Bim2' element={<Bim />} />
          <Route path='/SignUp' element={<Sign />} />
          <Route path='/st' element={<Ap />} />
          <Route path='/TrainersList' element={<TrainersList />} />
          <Route path="/join-as-trainer" element={<JoinAsTrainer />} />
          <Route path="/exercises/:muscle" element={<ExerciseList />} />
          <Route path="/app-no-login" element={<AppNoLogin />} /> {/* New route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
