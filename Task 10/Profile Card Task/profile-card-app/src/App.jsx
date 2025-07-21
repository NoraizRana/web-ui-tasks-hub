import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  // Initial user profiles data
  const initialProfiles = [
    {
      id: 1,
      name: "Faiza Khan",
      bio: "Full-stack developer passionate about creating beautiful and functional web applications. Love working with React and Node.js.",
      avatar: "https://images.unsplash.com/photo-1669703976236-49f621dad779?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhpamFiJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
      isFollowed: false
    },
    {
      id: 2,
      name: "Noraiz Rana",
      bio: "Front-end Developer with 1+ years of experience. Specializing in mobile-first design and user research. Always learning something new!",
      avatar: "https://images.unsplash.com/photo-1622860685754-2e0787bc8122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFraXN0YW5pJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",
      isFollowed: true
    },
    {
      id: 3,
      name: "Rimsha Fakhar",
      bio: "Data scientist and machine learning engineer. Building AI solutions that make a difference. Coffee enthusiast ☕",
      avatar: "https://images.unsplash.com/photo-1643326217693-d046e41815be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpamFiJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
      isFollowed: false
    },
    {
      id: 4,
      name: "Haider Shah",
      bio: "DevOps engineer and cloud architect. Helping teams deploy faster and more reliably. AWS certified professional.",
      avatar: "https://plus.unsplash.com/premium_photo-1726862588797-2f0cb4fe7b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D",
      isFollowed: false
    },
    {
      id: 5,
      name: "Sara Malik",
      bio: "Product manager with a passion for user-centered design. Bridging the gap between business goals and user needs.",
      avatar: "https://images.unsplash.com/photo-1550546094-9835463f9f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlqYWIlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
      isFollowed: true
    },
    {
      id: 6,
      name: "Ali Raza",
      bio: "Mobile app developer specializing in React Native and Flutter. Creating smooth user experiences across platforms.",
      avatar: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D",
      isFollowed: false
    }
  ];

  // State management
  const [profiles, setProfiles] = useState(initialProfiles);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Theme toggle function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Follow/Unfollow toggle function
  const handleFollowToggle = (profileId) => {
    setProfiles(prevProfiles =>
      prevProfiles.map(profile =>
        profile.id === profileId
          ? { ...profile, isFollowed: !profile.isFollowed }
          : profile
      )
    );
  };

  // Filter profiles based on search query
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // useEffect to log followed users whenever state changes
  useEffect(() => {
    const followedUsers = profiles
      .filter(profile => profile.isFollowed)
      .map(profile => profile.name);
    
    console.log('Currently followed users:', followedUsers);
  }, [profiles]);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Theme Toggle Button */}
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Profile Cards
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover and connect with amazing professionals
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search users by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map(profile => (
              <ProfileCard
                key={profile.id}
                name={profile.name}
                bio={profile.bio}
                avatar={profile.avatar}
                isFollowed={profile.isFollowed}
                onFollowToggle={() => handleFollowToggle(profile.id)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 dark:text-gray-400">
                <svg
                  className="mx-auto h-12 w-12 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.518-.901-6.172-2.379C5.25 12.089 5.25 11.911 5.25 11.5S5.25 10.911 5.828 10.379A7.962 7.962 0 0112 8c2.34 0 4.518.901 6.172 2.379.578.532.578.71.578 1.121s0 .589-.578 1.121z"
                  />
                </svg>
                <p className="text-lg font-medium">No users found</p>
                <p className="text-sm">Try adjusting your search terms</p>
              </div>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {profiles.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Total Users
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {profiles.filter(p => p.isFollowed).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Following
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {filteredProfiles.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Showing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
