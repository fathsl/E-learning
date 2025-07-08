import React, { useState } from 'react';

const BubbleSearch = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [hoveredBubble, setHoveredBubble] = useState(null);

  const bubbles = [
    'from-blue-400 to-purple-500',
    'from-green-400 to-blue-500',
    'from-pink-400 to-red-500',
  ];

  return (
    <div className="flex flex-col items-center space-y-6 mt-10">
      <div className="flex space-x-4">
        {bubbles.map((gradient, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredBubble(index)}
            onMouseLeave={() => setHoveredBubble(null)}
            className={`w-12 h-12 rounded-full cursor-pointer transition duration-300 
              bg-gradient-to-r ${gradient} 
              ${hoveredBubble === index ? 'translate-y-[-5px] shadow-xl' : ''}`}
          ></div>
        ))}
      </div>

      <div
        className={`bg-white border border-gray-300 rounded-full px-2 flex items-center 
          shadow-md transition-all duration-300 ease-in-out 
          ${searchFocused ? 'w-[220px]' : 'w-[44px]'}`}
      >
        <input
          type="text"
          onFocus={() => setSearchFocused(true)}
          onBlur={(e) => {
            if (!e.target.value) setSearchFocused(false);
          }}
          className="w-full py-2 px-3 outline-none text-sm transition-all duration-200"
          placeholder="Recherche..."
        />
      </div>
    </div>
  );
};

export default BubbleSearch;
