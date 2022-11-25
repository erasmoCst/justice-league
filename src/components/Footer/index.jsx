import React from "react";
import "./style.css";

export const Footer = (props) => {
  return (
    <footer className="footer">
      <a
        style={{ color: "white", textDecoration: "none" }}
        href="https://github.com/erasmoCst"
        target="blank"
      >
        {`Developed by ${props.name} - 2022`}
      </a>
    </footer>
  );
};
