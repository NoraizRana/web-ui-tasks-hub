# Dynamic Profile Card App

A responsive React application built with Vite and Tailwind CSS that displays a list of user profile cards with follow/unfollow functionality and dark/light theme toggle.

## 🚀 Features

- **Reusable Components**: Modular `ProfileCard` component with props
- **State Management**: React hooks (`useState`, `useEffect`) for managing user profiles and theme
- **Theme Toggle**: Dark/light mode switching with Tailwind's dark mode classes
- **Search Functionality**: Real-time filtering of users by name (case-insensitive)
- **Follow/Unfollow**: Toggle follow state for each profile card
- **Console Logging**: Automatically logs followed users using `useEffect`
- **Responsive Design**: Mobile-first design with responsive grid layout
- **Modern UI**: Beautiful styling with Tailwind CSS utilities

## 🛠️ Tech Stack

- **React** - Frontend library with functional components
- **Vite** - Fast development build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - `useState` and `useEffect` for state management

## 📋 Requirements Fulfilled

### ✅ Component with Props
- Created reusable `<ProfileCard />` component
- Accepts props: `name`, `bio`, `avatar`, `isFollowed`, `onFollowToggle`

### ✅ State Management
- Main App component stores user profiles in state array using `useState`
- Each profile includes: `id`, `name`, `bio`, `avatar`, `isFollowed`
- Implements follow/unfollow toggle functionality

### ✅ Dark/Light Theme Toggle
- Global theme toggle using state
- Uses Tailwind's `dark:` classes for theme switching
- Theme changes apply across all components

### ✅ Bonus Features
- **Search Input**: Filters users by name (case-insensitive)
- **useEffect Logging**: Logs followed users to console when state changes
- **Statistics Display**: Shows total users, following count, and filtered results
- **Responsive Layout**: Optimized for mobile and desktop views

## 🎯 Functionality

- **Dynamic Cards**: Generated from user objects array
- **Props Passing**: Correct parent-to-child component communication
- **Real-time Updates**: Follow/Unfollow updates state and UI instantly
- **Global Theme**: Theme toggle affects styles across the entire application
- **Modern Design**: Clean, attractive UI with hover effects and transitions

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd profile-card-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Two-column grid layout
- **Desktop**: Three-column grid layout

## 🎨 UI Features

- **Hover Effects**: Cards scale and shadow on hover
- **Smooth Transitions**: 300ms transition animations
- **Icons**: Custom SVG icons for search, theme toggle, and empty states
- **Color Coding**: Different colors for follow states (blue/green)
- **Professional Avatars**: High-quality profile images from Unsplash

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Structure

```
src/
├── components/
│   ├── ProfileCard.jsx    # Reusable profile card component
│   └── ThemeToggle.jsx    # Theme toggle button component
├── App.jsx                # Main application component
├── main.jsx              # Entry point
└── index.css             # Tailwind CSS imports
```

## 🎮 Usage

1. **Browse Profiles**: View all user profile cards in the responsive grid
2. **Search Users**: Use the search bar to filter users by name
3. **Follow/Unfollow**: Click the follow button to toggle follow state
4. **Toggle Theme**: Use the theme button (top-right) to switch between light/dark modes
5. **Check Console**: Open browser dev tools to see logged followed users

## 🌟 Key Components

### ProfileCard Component
- Displays user avatar, name, bio, and follow button
- Accepts props for customization
- Responsive design with hover effects

### ThemeToggle Component
- Fixed position theme switcher
- Sun/moon icons for visual feedback
- Smooth transitions and hover effects

### App Component
- Manages all application state
- Handles follow/unfollow logic
- Implements search functionality
- Controls theme switching

## 📊 State Management

The app uses React's built-in state management:
- `profiles` - Array of user profile objects
- `darkMode` - Boolean for theme state
- `searchQuery` - String for search functionality

## 🎨 Styling Approach

- **Utility-First**: Tailwind CSS utility classes
- **Dark Mode**: Class-based dark mode implementation
- **Responsive**: Mobile-first responsive design
- **Modern**: Contemporary UI patterns and spacing

Built with ❤️ using React, Vite, and Tailwind CSS
