import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../Error/Error";
import "./Question.css";
function Question({
  questions,
  currentQuestion,
  setCurrentQuestion,
  options,
  score,
  setScore,
  correctAns,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const handleSelected = (i) => {
    if (selected === i && selected === correctAns) {
      return "selected";
    } else if (selected === i && selected !== correctAns) {
      return "wrong";
    } else if (i === correctAns) {
      return "selected";
    }
  };
  const handleCheck = (i) => {
    setSelected(i);
    if (i === correctAns) setScore(score + 1);
    setError(false);
  };
  const NavTo = useNavigate();
  const handleNext = () => {
    if (currentQuestion >= 9 && selected) NavTo("/result");
    else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {
      setError("Please Select An Option First ");
    }
  };
  const handleQuit = () => {
    NavTo("/");
  };
  return (
    <div className="ques">
      <h1>Question - {currentQuestion + 1}</h1>

      <div className="singleQuestion">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options" tabIndex="0">
          {error && <Error>{error}</Error>}
          {options &&
            options.map((ops) => (
              <button
                onClick={() => {
                  handleCheck(ops);
                }}
                key={ops}
                className={`singleOption ${selected && handleSelected(ops)}`}
                disabled={selected}
              >
                {ops}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Question;
