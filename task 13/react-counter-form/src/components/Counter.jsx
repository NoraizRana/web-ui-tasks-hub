import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Counter: {count}</h2>
      <div className="space-x-2">
        <button onClick={() => setCount(count + 1)} className="bg-green-500 px-4 py-2 text-white rounded">+</button>
        <button onClick={() => setCount(count - 1)} className="bg-red-500 px-4 py-2 text-white rounded">-</button>
        <button onClick={() => setCount(0)} className="bg-gray-600 px-4 py-2 text-white rounded">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
