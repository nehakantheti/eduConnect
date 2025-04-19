// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import MeetLanding from './components/MeetLanding';
import MeetingRoom from './components/MeetingRoom';
import ProfilePage from './components/ProfilePage';
import HelpPage from './components/HelpPage';
import TermsAndConditions from './components/TermsAndConditionsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<MeetLanding />} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='help' element={<HelpPage />} />
        <Route path='/termsAndConditions' element={<TermsAndConditions/>}/>
        <Route path="/meeting/:classId" element={<MeetingRoom />} />
      </Routes>
    </Router>
  );
}
