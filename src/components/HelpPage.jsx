import React from 'react';

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Need Help?</h1>
        
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-medium text-blue-600">EduMeet</span> — a platform designed to combine the best of video conferencing and virtual classrooms.
        </p>

        <p className="text-gray-700 mb-4">
          With EduMeet, teachers can host live classes, share content, and manage student interactions all in one place — just like Google Meet + Google Classroom in a single app.
        </p>

        <p className="text-gray-700 mb-4">
          If you're stuck, unsure how to do something, or experiencing any issue — feel free to reach out. We're here to help you make the most of your online teaching or learning experience.
        </p>

        <p className="text-sm text-gray-500">For more help, contact support at <a href="mailto:support@edumeet.app" className="text-blue-600 underline">support@edumeet.app</a></p>
      </div>
    </div>
  );
};

export default HelpPage;