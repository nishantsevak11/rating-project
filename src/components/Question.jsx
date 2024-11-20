import React, { useState, useEffect } from "react";

const Question = ({ question, onAnswer, onNext, onPrevious, isLast, savedAnswer }) => {
  const [input, setInput] = useState(savedAnswer);

  // Update the input field when savedAnswer changes
  useEffect(() => {
    setInput(savedAnswer);
  }, [savedAnswer]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    onAnswer(question.id, input);
    onNext();
  };

  return (
    <div>
      <h2>{question.text}</h2>
      {question.type === "rating" ? (
        <input
          type="number"
          min="1"
          max={question.scale}
          value={input}
          onChange={handleInputChange}
        />
      ) : (
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type your answer here..."
        />
      )}
      <div>
        <button onClick={onPrevious} disabled={question.id === 1}>
          Previous
        </button>
        <button onClick={handleSubmit}>
          {isLast ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Question;
