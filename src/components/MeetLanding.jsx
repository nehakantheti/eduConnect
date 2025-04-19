import React from 'react';
import { Link } from 'react-router-dom';

export default function MeetLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-300 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/logo.jpeg"
              alt="EduConnect Logo"
              className="h-16 w-16 rotate-[-6deg] rounded-lg"
            />
          </Link>
            <span className="ml-2 text-xl font-semibold text-gray-700">EduConnect</span>
          </div>

          {/* Navigation */}
          <nav className="space-x-4 flex gap-10">
          <Link to="/features">
          <button className="text-gray-600 hover:text-gray-900 transform transition-transform duration-200 hover:scale-110">
            Features
          </button>
          </Link>
          <Link to="/features">
            <button className="text-gray-600 hover:text-gray-900 transform transition-transform duration-200 hover:scale-110">
              Pricing
            </button>
          </Link>
          <Link to="/features">
            <button className="text-gray-600 hover:text-gray-900 transform transition-transform duration-200 hover:scale-110">
              Support
            </button>
          </Link>
          <Link to="/features">
            <button className="text-gray-600 hover:text-gray-900 transform transition-transform duration-200 hover:scale-110">
              Sign in
            </button>
          </Link>
          </nav>

        </div>
      </header>

      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[28rem] font-display text-blue-700 opacity-20 select-none pointer-events-none z-0 leading-none">
        E
      </div> */}

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Premium video meetings. Now free for everyone.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We re-engineered the service we built for secure business meetings, EduConnect Meet, to make it free and available for all.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 hover:scale-105">
              New Meeting
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-lg hover:bg-gray-300 hover:scale-105">
              Enter a code or link
            </button>
          </div>
          {/* Placeholder for an image or illustration */}
          <div className="mt-20">
            <img
              src="/workspace.gif"
              alt="Illustration"
              className="mx-auto w-full max-w-md"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 text-white text-center py-4">
      <div className="px-6">
        <p>&copy; {new Date().getFullYear()} EduConnect LLC</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy</a>
          <a href="#" className="hover:text-gray-300">Terms</a>
          <a href="#" className="hover:text-gray-300">About</a>
        </div>
      </div>
    </footer>
    </div>
  );
}
  