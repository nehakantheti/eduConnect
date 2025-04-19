import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react'; // Optional icon from lucide

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = {
    firstName: "Neha",
    lastName: "Kantheti",
    location: "Chennai, India",
    position: "Student at IIITDMK",
    avatarUrl: "/avatar.jpeg", // use any avatar or image link
    description: `Hello, I'm Neha Kantheti, student at Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram.
I am a 3rd year CSE student passionate about tech, and trying to explore different domains in CS.`,
  };

  const handleUpdateClick = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close the modal without updating
  };

  const handleConfirmUpdate = () => {
    setIsModalOpen(false); // Close the modal and handle update
    alert("Student details updated!"); // Simulate update logic
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-4 relative">
    
      {/* Back Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center text-sm text-gray-500 hover:text-gray-700 absolute top-4 left-4 h-10 mt-3 px-4 py-2"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </button>

      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-xl shadow p-6 mr-4">
        <h2 className="text-xl font-semibold mt-8 mb-4">Settings</h2>
        <div className="flex flex-col space-y-2">
          <button className="text-left px-4 py-2 rounded-md text-blue-600 bg-blue-50 font-medium cursor-pointer hover:bg-blue-100">
            Account preferences
          </button>
          <button className="text-left px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer">
            Sign in & security
          </button>
          <button className="text-left px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer">
            Visibility
          </button>
          <button className="text-left px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer">
            Data privacy
          </button>
          <button className="text-left px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer">
            Advertising data
          </button>
          <button className="text-left px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer">
            Notifications
          </button>
        </div>
      </aside>

      {/* Main profile section */}
      <section className="flex-1 bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-semibold mb-6">Account preferences</h2>

        {/* Avatar and Actions */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.avatarUrl}
            alt="Avatar"
            className="w-35 h-35 rounded-full object-cover"
          />
          <div className="space-x-2">
            <button className="px-2 py-1 border rounded text-blue-600 border-blue-600 hover:bg-blue-50cursor-pointer">
              Change
            </button>
            <button className="px-2 py-1 border rounded text-red-600 border-red-600 hover:bg-red-50 cursor-pointer">
              Remove
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <label className="block mb-1 font-medium ">First name</label>
            <input
              type="text"
              value={user.firstName}
              readOnly
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-caret"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              value={user.location}
              readOnly
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-caret"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Last name</label>
            <input
              type="text"
              value={user.lastName}
              readOnly
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-caret"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Current position</label>
            <input
              type="text"
              value={user.position}
              readOnly
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-caret"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={user.description}
              readOnly
              className="w-full border rounded px-3 py-2 h-32 resize-none bg-gray-100 cursor-caret"
            />
          </div>
        </form>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-2 border rounded text-gray-600 border-gray-400 hover:bg-gray-100 cursor-pointer">
            Cancel
          </button>
          <button onClick={handleUpdateClick} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
            Update
          </button>
        </div>
      </section>

      {/* Confirmation Modal with Blurred Background */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-xs">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h3 className="text-xl mb-4">Confirm Update</h3>
            <p>Are you sure you want to update the student details?</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button onClick={handleCancel} className="px-4 py-2 border rounded">
                Cancel
              </button>
              <button onClick={handleConfirmUpdate} className="px-4 py-2 bg-blue-600 text-white rounded">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProfilePage;
