import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Categories from "../../Category/Categories";
import "./Home.css";
import { Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
function Home({ name, setName, fetchQuiz }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const NavTo = useNavigate();
  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuiz(category, difficulty);
      NavTo("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz Setting</span>
        <div className="setting_selected">
          {error && <Error>please enter all the fields</Error>}
          <TextField
            id="Name"
            label="Enter Your Name..."
            variant="outlined"
            style={{ paddingBottom: 10 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            id="category"
            label="Select Category"
            variant="outlined"
            style={{ paddingBottom: 10 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((e) => (
              <MenuItem key={e.category} value={e.value}>
                {e.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            id="difficulty"
            label="Select Difficulty"
            variant="outlined"
            style={{ paddingBottom: 10 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem value="easy" key="easy">
              Easy
            </MenuItem>
            <MenuItem value="medium" key="medium">
              Medium
            </MenuItem>
            <MenuItem value="hard" key="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/banner.svg" alt="homeimg" className="Banner" />
    </div>
  );
}

export default Home;
