import React from 'react';

const Card = () => {
  return (
    <div className="flex items-center justify-center w-[30em] h-[30em]">
      <div className="relative flex flex-col items-center mt-20">
        {/* TV */}
        <div className="relative w-68 h-36 mt-12 rounded-lg bg-orange-600 border-2 border-black shadow-inner shadow-yellow-500 flex justify-center items-center">
          {/* Display */}
          <div className="flex items-center justify-center rounded-lg shadow-lg">
            <div className="w-44 h-32 border-2 border-black bg-gradient-to-r from-black to-white via-black animate-bounce flex items-center justify-center font-bold text-gray-700 tracking-wide text-center">
              NOT FOUND
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="absolute flex space-x-32 mt-8">
          <div className="w-8 h-4 bg-gray-700 border-2 border-black"></div>
          <div className="w-8 h-4 bg-gray-700 border-2 border-black"></div>
          <div className="w-70 h-0.6 bg-black mt-2"></div>
        </div>

        {/* Text 404 */}
        <div className="absolute flex space-x-24 opacity-50 text-5xl font-montserrat">
          <div className="transform scale-y-24 scale-x-9">4</div>
          <div className="transform scale-y-24 scale-x-9">0</div>
          <div className="transform scale-y-24 scale-x-9">4</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
