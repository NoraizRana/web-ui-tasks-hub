import React from "react";

export default function DarkModeToggle({ isDark, toggle }) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggle}
      className="ml-auto flex items-center px-2 py-1 rounded-md 
        bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
        transition-colors shadow text-gray-800 dark:text-gray-100"
    >
      <span className="mr-2">{isDark ? "Dark" : "Light"}</span>
      {isDark ? (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 19.778l-.707-.707M21 12h-1M4 12H3m16.485 4.485l-.707-.707M4.222 4.222l-.707.707M16 12A4 4 0 118 12a4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.59 9.79z" />
        </svg>
      )}
    </button>
  );
}