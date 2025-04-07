import React from 'react';
import { Link } from 'react-router-dom';

export default function MeetLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/logo.jpeg"
              alt="EduConnect Logo"
              className="h-16 w-16"
            />
          </Link>
            <span className="ml-2 text-xl font-semibold text-gray-700">EduConnect</span>
          </div>
          {/* Navigation */}
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
            <a href="/" className="text-gray-600 hover:text-gray-900">Sign In</a>
          </nav>
        </div>
      </header>

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
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700">
              New Meeting
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-lg hover:bg-gray-300">
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
      <footer className="bg-white shadow-inner">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} EduConnect LLC</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
