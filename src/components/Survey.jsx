import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useSwipeable } from "react-swipeable";

const questions = [
  { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, text: "On a scale of 1-10, how likely are you to recommend us?", type: "rating", scale: 10 },
  { id: 5, text: "What could we do to improve our service?", type: "text" },
];

const Survey = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [rating, setRating] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(""); // Tracks swipe direction for animation

  // Load saved answers when the component mounts
  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem("survey-answers")) || {};
    setAnswers(savedAnswers);
    setRating(savedAnswers[questions[currentQuestion]?.id] || 0);
  }, [currentQuestion]);

  // Save the current answer
  const handleAnswer = () => {
    const updatedAnswers = { ...answers, [questions[currentQuestion].id]: rating };
    setAnswers(updatedAnswers);
    localStorage.setItem("survey-answers", JSON.stringify(updatedAnswers));
  };

  // Navigate to the next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setSwipeDirection("right");
      setTimeout(() => {
        handleAnswer();
        setCurrentQuestion((prev) => prev + 1);
        setSwipeDirection("");
      }, 300);
    } else {
      handleAnswer();
      localStorage.setItem("survey-status", "COMPLETED");
      onComplete();
    }
  };

  // Navigate to the previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setSwipeDirection("left");
      setTimeout(() => {
        setCurrentQuestion((prev) => prev - 1);
        setSwipeDirection("");
      }, 300);
    }
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe right to left for "Next"
    onSwipedRight: handlePrevious, // Swipe left to right for "Previous"
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swipe gestures with a mouse
  });

  return (
    <Box
      {...handlers}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
        height: "70vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          transition: "transform 0.3s ease-in-out",
          transform:
            swipeDirection === "right"
              ? "translateX(10%)"
              : swipeDirection === "left"
              ? "translateX(-10%)"
              : "translateX(0)",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="text-center text-lg md:text-xl">
            Question {currentQuestion + 1} of {questions.length}
          </Typography>
          <Typography variant="body1" className="text-center text-sm md:text-base">
            {questions[currentQuestion].text}
          </Typography>

          {questions[currentQuestion].type === "rating" && (
            <Box sx={{ mt: 2 }} className="flex justify-center">
              <Rating
                name="question-rating"
                value={rating}
                precision={1}
                max={questions[currentQuestion].scale}
                onChange={(event, newValue) => setRating(newValue)}
              />
            </Box>
          )}
        </CardContent>

        <CardActions className="flex flex-col sm:flex-row items-center justify-between p-4">
          <Button
            size="small"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="w-full sm:w-auto mb-2 sm:mb-0"
          >
            Previous
          </Button>
          <Button
            size="small"
            onClick={handleNext}
            className="w-full sm:w-auto"
          >
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Survey;
