import React from "react";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Our Customer Survey
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-lg">
        Your feedback helps us improve our products and services. This survey will take less than 2 minutes to complete.
      </p>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 animate-pulse"
      >
        Start Survey
      </button>
    </div>
  );
};

export default WelcomeScreen;
