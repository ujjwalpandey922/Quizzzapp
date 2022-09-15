import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Results.css";
function Results({ score, name, setScore }) {
  const NavTo = useNavigate();
  useEffect(() => {
    if (!name) {
      NavTo("/");
    }

    //eslint-disable-next-line
  }, [name, NavTo]);
  return (
    <div className="result">
      <span className="title">FINAL SCORE : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={() => {
          NavTo("/");
          setScore(0);
        }}
      >
        {" "}
        GO TO HOME PAGE
      </Button>
    </div>
  );
}

export default Results;
