import React from 'react';

const ProfileCard = ({ name, bio, avatar, isFollowed, onFollowToggle }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-2">
        {name}
      </h3>

      {/* Bio */}
      <p className="text-gray-600 dark:text-gray-300 text-center mb-4 text-sm leading-relaxed">
        {bio}
      </p>

      {/* Follow Button */}
      <div className="flex justify-center">
        <button
          onClick={onFollowToggle}
          className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
            isFollowed
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          } shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
        >
          {isFollowed ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;