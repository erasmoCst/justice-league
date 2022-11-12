import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import banner from "./images/banner2.png";
import "./styles/global.css";
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";


export function App() {
  return (
    <>
      <Header />

      <img width="100%" src={banner} />

      <h2 style={{ margin: 15 }}>Filmes</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Card srcImg={ card1 }/>
        <Card srcImg={ card2 }/>
        <Card srcImg={ card3 }/>
        <Card srcImg={ card4 }/>
      </div>
    </>
  );
}
