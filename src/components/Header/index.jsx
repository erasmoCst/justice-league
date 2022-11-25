import React from "react";
import { useState } from "react";
import "./style.css";

export const Header = () => {
  const [title, setTitle] = useState("Justice League");

  function handleClickButton() {
    setTitle("Justice League Movies");
  }

  return (
    <header className="header">
      <h1 /*style={{paddingLeft: "1rem"}}*/>{title}</h1>
      <button onClick={handleClickButton}>Click Here</button>
    </header>
  );
};
