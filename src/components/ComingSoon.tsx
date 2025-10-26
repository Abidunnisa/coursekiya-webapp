import React from "react";
import { coursekiyafulllogo } from "public";

export const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <div className="mb-8">
        <img src={coursekiyafulllogo.src} alt="Logo" className="w-[1024px] h-36 mx-auto rounded-full object-cover" />
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Coming Soon
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-md">
        Our platform is under construction. Stay tuned for something amazing!
      </p>

      {/* Countdown Placeholder */}
      {/* <div className="grid grid-cols-3 gap-4 sm:gap-6 text-gray-800 mb-8">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-2xl font-bold">00</div>
          <div className="text-sm text-gray-500">Days</div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-2xl font-bold">00</div>
          <div className="text-sm text-gray-500">Hours</div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-2xl font-bold">00</div>
          <div className="text-sm text-gray-500">Minutes</div>
        </div>
      </div> */}

      {/* Notify Me Button */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
        Notify Me
      </button>
    </div>
  );
};
