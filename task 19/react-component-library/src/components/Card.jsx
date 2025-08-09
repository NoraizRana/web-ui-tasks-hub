import React from "react";

export default function Card({
  image,
  title,
  description,
  children,
  className = ""
}) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg overflow-hidden transition-colors ${className}`}>
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        {title && <h3 className="text-lg mb-2 font-semibold mb-1 dark:text-white">{title}</h3>}
        {description && <p className="text-gray-500 dark:text-gray-300 mb-2">{description}</p>}
        {children}
      </div>
    </div>
  );
}