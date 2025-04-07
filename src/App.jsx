// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import Dashboard from './components/Dashboard';
// import MeetingRoom from './components/MeetingRoom';

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/meeting/:classId" element={<MeetingRoom />} />
//       </Routes>
//     </Router>
//   );
// }

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import MeetLanding from './components/MeetLanding';
import MeetingRoom from './components/MeetingRoom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<MeetLanding />} />
        <Route path="/meeting/:classId" element={<MeetingRoom />} />
      </Routes>
    </Router>
  );
}
