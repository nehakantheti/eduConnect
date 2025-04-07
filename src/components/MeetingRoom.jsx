import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaDoorOpen, FaUsers } from 'react-icons/fa';

export default function MeetingRoom() {
  const { classId } = useParams();
  const navigate = useNavigate();

  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  const handleLeave = () => {
    const confirmLeave = window.confirm('Are you sure you want to leave the meeting?');
    if (confirmLeave) navigate('/dashboard');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="p-4 flex justify-between items-center bg-gray-800 shadow">
        <h2 className="text-xl font-semibold">EduConnect Meeting - Class {classId}</h2>
        <span className="text-sm text-gray-300">10:32 AM | Meeting ID: abc-def-{classId}</span>
      </div>

      {/* Main Video Area */}
      <div className="flex-grow flex items-center justify-center bg-black relative">
        {/* Simulated video feed */}
        <div className="w-[60%] h-[60%] bg-gray-700 rounded-lg flex items-center justify-center text-2xl text-gray-300">
          [ Video Feed ]
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="p-4 bg-gray-800 flex justify-center gap-6">
        <button
            onClick={() => setMicOn(!micOn)}
            className={` cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all ${
                micOn ? 'bg-green-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-purple-700'
            }`}
            >
            {micOn ? (
                <>
                <FaMicrophone />
                <span>Mic On</span>
                </>
            ) : (
                <>
                <FaMicrophoneSlash />
                <span>Mic Off</span>
                </>
            )}
        </button>

        <button
            onClick={() => setCamOn(!camOn)}
            className={` cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all ${
                camOn ? 'bg-green-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-purple-700'
            }`}
            >
            {camOn ? (
                <>
                <FaVideo />
                <span>Video On</span>
                </>
            ) : (
                <>
                <FaVideoSlash />
                <span>Video Off</span>
                </>
            )}
        </button>

        <button
            onClick={() => alert('Display Participants panel!')}
            className="cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow transition-all"
            >
            <FaUsers className="text-lg" />
            <span>Participants</span>
        </button>

        <button
            onClick={handleLeave}
            className="cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium shadow transition-all">
            <FaDoorOpen className="text-lg" />
            <span>Leave</span>
        </button>


      </div>
    </div>
  );
}
