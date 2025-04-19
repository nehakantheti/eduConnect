import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export default function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to sign out?");
    if (confirmLogout) {
      navigate('/');
    }
  };

  return (
    <div className="relative inline-block text-left mr-5" ref={menuRef}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="w-20 h-20 gap-3 text-white flex items-center justify-center ring-blue-500 cursor-pointer"
        title="Profile"
      >
        <div className="flex items-center hover:scale-110 transition-transform duration-300 ease-in-out">
          <span className="text-m font-medium text-gray-700 mr-2">User</span>
          <img src="/avatar.jpeg" alt="Avatar" className="w-15 h-15" />
        </div>
      </button>

    {/* <div className="flex items-center gap-2">
        
    </div> */}


      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
          <button
            onClick={() => navigate('/profile')}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 cursor-pointer"
          >
            My Profile
          </button>
          
          <button
            onClick={() => navigate('/termsAndConditions')}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 cursor-pointer"
          >
            Terms & Conditions
          </button>
          
          <button
            onClick={handleSignOut}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
