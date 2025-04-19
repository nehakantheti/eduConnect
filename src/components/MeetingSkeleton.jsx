import React from 'react';
import './MeetingSkeleton.css'; // CSS file for styles

const MeetingSkeleton = () => {
  return (
    <div className="meeting-skeleton">
      <div className="top-bar">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-id shimmer"></div>
      </div>

      {/* Skeleton Video Area */}
    <div className="flex-grow flex items-center justify-center bg-black px-4 py-6 animate-pulse">
    <div className="flex w-full max-w-7xl gap-4">
        {/* Main Video Skeleton */}
        <div className="flex-1">
        <div className="w-full aspect-video bg-gray-700 rounded-lg"></div>
        </div>

        {/* Right Side Participant Skeletons */}
        <div className="flex flex-col gap-4 w-48">
        {[1, 2, 3, 4].map((id) => (
            <div key={id} className="w-full h-35 bg-gray-700 rounded-md"></div>
        ))}
        </div>
    </div>
    </div>


      <div className="bottom-bar">
        <div className="skeleton-button shimmer"></div>
        <div className="skeleton-button shimmer"></div>
        <div className="skeleton-button shimmer"></div>
        <div className="skeleton-button shimmer"></div>
      </div>
    </div>
  );
};

export default MeetingSkeleton;