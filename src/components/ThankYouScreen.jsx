import React, { useEffect, useState } from "react";

const ThankYouScreen = ({ onReset }) => {
  const [counter, setCounter] = useState(5); // Countdown timer

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      onReset();
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [onReset]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-300 mb-4">
          Your feedback has been submitted successfully. We appreciate your time and effort.
        </p>
        <div className="text-2xl font-semibold text-blue-500 animate-pulse">
          Redirecting in {counter} seconds...
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;
