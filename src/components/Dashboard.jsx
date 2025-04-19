import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { FaUsers, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import BookStackLoader from './BookstackLoader';
import LoadingScreen from './LoadingScreen';
import HelpButton from './HelpButton';
import TermsAndConditions from './TermsAndConditionsPage';

const classes = [
  { id: 1, name: 'Math', lecturer: 'Mr. Sharma' },
  { id: 2, name: 'Science', lecturer: 'Ms. Iyer' },
  { id: 3, name: 'History', lecturer: 'Dr. Khan' },
  { id: 4, name: 'English', lecturer: 'Mrs. Roy' },
  { id: 5, name: 'Art', lecturer: 'Mr. D’Souza' },
  { id: 6, name: 'Computers', lecturer: 'Mr. Varma' },
  { id: 7, name: 'Yoga', lecturer: 'Ms. Mehta' }
];

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false);
  const { state } = useLocation();
  const role = state?.role || 'student';
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleJoin = (classId) => {
    if (window.confirm('Are you sure you want to join the meeting?')) {
      navigate(`/meeting/${classId}`);
    }
  };

  const handleLeave = (classId) => {
    if (window.confirm('Are you sure you want to leave this classroom?')) {
      alert(`You have left the class ${classId}`);
    }
  };


  useEffect(() => {
    // Simulate loading, or use actual data fetching logic here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second fake delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
    {!loaded ? (
        <BookStackLoader onComplete={() => setLoaded(true)} />
      ) : (
        <div className="p-4">
          <div className="flex bg-gray-100 min-h-screen">
      {/* Fixed Sidebar */}
      <div className="w-[20%] h-screen fixed top-0 left-0 bg-blue-200 shadow-md flex flex-col justify-center items-center text-center p-4 z-10">
        <Link to="/" className="flex flex-col items-center">
          <img
            src="/logo.jpeg"
            alt="EduConnect Logo"
            className="w-24 h-24 rounded-lg transform rotate-[-6deg] mb-2 cursor-pointer"
          />
        </Link>
        <h1 className="text-2xl font-bold text-blue-700">EduConnect</h1>
        <p className="text-sm text-gray-600 mt-2 mb-4">
          A seamless blend of Google Classroom and Google Meet.
        </p>
        <div>
          <HelpButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-[20%] w-[80%] p-6">
        {/* Header Section */}
        <div className="mb-10 bg-white p-6 rounded-lg shadow h-48 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-blue-800">Welcome, {role}</h2>
            <ProfileMenu />
          </div>
          <p className="text-gray-600 text-lg">
            This is your virtual learning space. View your classes, connect with classmates, or create meetings.
          </p>

          {/* Highlighted Custom Meet Button */}
          <button
            className="bg-blue-300 h-16 text-black font-semibold text-base px-6 py-2 rounded-lg hover:bg-purple-500 transition-all shadow-lg mt-2 cursor-pointer"
            onClick={() => navigate('/landing')}
          >
            🚀 Join / Create Custom Meet
          </button>
        </div>

        {/* Teacher Buttons */}
        {role === 'teacher' && (
          <div className="mb-6 flex gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600">
              Create Class
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-600">
              Create/Join Meet
            </button>
          </div>
        )}

        {/* Class Cards */}
        <div className="flex flex-col gap-6 overflow-y-auto">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="bg-white shadow hover:shadow-lg hover:scale-[1.01] transition-transform duration-300 p-6 rounded-lg flex justify-between items-center min-h-[120px] cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-semibold">{cls.name}</h3>
                <p className="text-sm text-gray-600">Lecturer: {cls.lecturer}</p>
              </div>

              {/* Action Buttons with Icons */}
              <div className="flex gap-2">
                {/* Participants Button */}
                <button
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-50 cursor-pointer"
                  onClick={() => alert(`Viewing participants for ${cls.name}`)}
                >
                  <FaUsers /> <span>Participants</span>
                </button>

                {/* Join/Create Meet Button */}
                <button
                  className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 cursor-pointer"
                  onClick={() => handleJoin(cls.id)}
                >
                  <FaSignInAlt /> <span>{role === 'teacher' ? 'Create Meet' : 'Join Meet'}</span>
                </button>

                {/* Leave Class Button */}
                <button
                  className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 cursor-pointer"
                  onClick={() => handleLeave(cls.id)}
                >
                  <FaSignOutAlt /> <span>Leave</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          {/* <h1 className="text-2xl font-bold">Welcome to EduConnect 🎓</h1> */}
        </div>
      )}


    
    </>
  );
}