import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Quiz from "./Pages/Quiz/Quiz";
import Home from "./Pages/Home/Home";
import Results from "./Pages/Results/Results";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuiz = async (category = "", difficulty = "") => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    const data = await res.json();
    setQuestions(data.results);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home name={name} setName={setName} fetchQuiz={fetchQuiz} />
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route
            path="/result"
            element={<Results score={score} name={name} setScore={setScore} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
