import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import PuzzleCaptcha from './PuzzleCaptcha';

export default function LoginPage() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsCaptchaVisible(true);
    // navigate('/dashboard', { state: { role } });
  };

  const handleCaptchaSuccess = () => {
    navigate('/dashboard'); // Redirect to dashboard upon solving the puzzle
  };

  const handleCaptchaCancel = () => {
    setIsCaptchaVisible(false); // Hide captcha overlay on cancel
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-blue-100 flex flex-col items-center justify-center p-8">
        {/* Placeholder Logo */}
        <img
            src="/logo.jpeg"
            alt="EduConnect Logo"
            className="w-32 h-32 rounded-xl rotate-[-6deg] shadow-lg mb-4 object-cover"
        />
        <h2 className="text-3xl font-semibold text-blue-800 mb-2">
          EduConnect
        </h2>
        <p className="text-gray-700 text-center max-w-sm">
          Seamlessly connect classrooms and meetings. EduConnect brings teachers and students together in a unified learning space.
        </p>
      </div>

      {/* Right Panel - Login */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Login</h1>

        <div className="mb-2 w-64 text-left">
          <label className="block text-sm font-medium mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-400 rounded w-full"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-2 w-64 text-left relative">
        <label className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
        </label>
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-400 rounded w-full pr-10"
            required
        />
        {/* Faint plain text preview */}
        {password && (
            <p className="text-xs text-gray-400 mt-1 italic">
            {password}
            </p>
        )}
        </div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mb-4 p-2 border border-gray-400 rounded w-64"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button
          onClick={handleLogin}
          className="bg-blue-100 text-blue-800 px-4 py-2 rounded w-64 mb-3 border border-blue-400 cursor-pointer"
        >
          Continue
        </button>

        <div className="flex flex-col items-center">
          <p className="mb-2">Or login using:</p>
          <div className="flex space-x-4">
            <button className="flex items-center gap-2 bg-white-100 hover:bg-red-100 text-red-700 px-4 py-2 rounded border border-red-400 cursor-pointer">
              <FcGoogle/> <span> Google </span>
            </button>
            <button className="flex items-center gap-2 bg-white-200 hover:bg-gray-300 text-black px-4 py-2 rounded border border-gray-600 cursor-pointer">
              <FaGithub/> <span> GitHub </span>
            </button>
          </div>
        </div>
      </div>

      {/* Render Puzzle Overlay */}
      {isCaptchaVisible && (
        <PuzzleCaptcha 
          imageUrl="/captcha.png" // Provide the path to the image
          onSuccess={handleCaptchaSuccess} 
          onCancel={handleCaptchaCancel} 
        />
      )}

    </div>
  );
}
