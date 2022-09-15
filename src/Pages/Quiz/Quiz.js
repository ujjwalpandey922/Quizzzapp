import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";
function Quiz({ name, questions, setQuestions, score, setScore }) {
  const [options, setoptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    setoptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
    // eslint-disable-next-line
  }, [questions, currentQuestion]);
  const handleShuffle = (optionsAll) => {
    return optionsAll.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subTitle">Welcome : {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQuestion].category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            options={options}
            score={score}
            setScore={setScore}
            correctAns={questions[currentQuestion]?.correct_answer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
}

export default Quiz;
