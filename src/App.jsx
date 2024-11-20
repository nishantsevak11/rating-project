import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Survey from "./components/Survey";
import ThankYouScreen from "./components/ThankYouScreen";
// import BasicRating from "./components/BasicRating";
// import Card from "./components/Card";

const App = () => {
  const [step, setStep] = useState(0); // 0: Welcome, 1: Survey, 2: ThankYou

  const resetApp = () => {
    setStep(0);
  };

  return (
    <div>
      {/* <BasicRating />
      <Card /> */}
      {step === 0 && <WelcomeScreen onStart={() => setStep(1)} />}
      {step === 1 && <Survey onComplete={() => setStep(2)} />}
      {step === 2 && <ThankYouScreen onReset={resetApp} />}
    </div>
  );
};

export default App;
