import React from "react";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the Customer Survey</h1>
      <p>Your feedback is valuable to us.</p>
      <button onClick={onStart} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Start Survey
      </button>

    </div>
  );
};

export default WelcomeScreen;
