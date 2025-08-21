import React from "react";

export default function Button({
  variant = "primary",
  loading = false,
  disabled = false,
  children,
  onClick,
  className = "",
  type = "button"
}) {
  const base =
    "inline-flex py-1 items-center justify-center px-4 py-2 rounded-md font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900";
  const variants = {
    primary:
      "bg-primary text-white hover:bg-blue-700 focus:ring-primary dark:bg-blue-600 dark:hover:bg-blue-700",
    secondary:
      "bg-secondary text-white hover:bg-gray-700 focus:ring-secondary dark:bg-gray-700 dark:hover:bg-gray-600",
    outline:
      "border border-primary text-primary bg-white hover:bg-blue-50 focus:ring-primary dark:bg-transparent dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-950"
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={[
        base,
        variants[variant],
        (disabled || loading) && "opacity-60 cursor-not-allowed",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading && (
        <svg
          className="animate-spin mr-2 h-5 w-5 text-inherit"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3 3-3h-4a8 8 0 01-8-8z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}