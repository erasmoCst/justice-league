import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";
import banner from "./images/banner2.png";
import "./styles/global.css";
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { Modal, ModalBody, ModalHeader } from "./components/Modal";
import { useRef } from "react";

const requisition = [
  {
    id: 1,
    title: "Justice League",
    image: card1,
    date: "November 17, 2017",
    director: "Zack Snyder",
    starring: "Ben Affleck, Henry Cavill, Gal Gadot",
    synopsis:
      "Inspirado pelas atitudes Superman, Bruce Wayne decide se reunir com Diana Prince para conseguir enfrentar um inimigo poderoso.",
  },
  {
    id: 2,
    title: "Dark Knight",
    image: card2,
    date: "July 18, 2008",
    director: "Christopher Nolan",
    starring: "Christopher Bale",
    synopsis:
      "Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade.",
  },
  {
    id: 3,
    title: "Wonder Woman",
    image: card3,
    date: "June 1, 2017",
    director: "Patty Jenkins",
    starring: "Gal Gadot, Chris Pine, Connie Nielsen",
    synopsis:
      "Mulher Maravilha conta a história de Diana Prince (Gal Gadot), uma guerreira poderosa que precisa ajudar o piloto Steve Trevor (Chris Pine) a vencer uma terrível guerra. Ao entrar no conflito, ela percebe o seu verdadeiro papel no mundo.",
  },
  {
    id: 4,
    title: "Man of Steel",
    image: card4,
    date: "June 1, 2017",
    director: "Zack Snyder",
    starring: "Henry Cavill, Amy Adams, Michael Shannon",
    synopsis:
      "Com a iminente destruição de Krypton, seu planeta natal, Jor-El e sua mulher procuram preservar a raça enviando o filho recém-nascido para a Terra. A nave espacial da criança aterrissa na fazenda de Jonathan e Martha Kent, que o batizam de Clark e o criam como seu próprio filho.",
  },
];

//Componentes React iniciam com letra maiúscula
export function App() {
  const refModalData = useRef();

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //setLoading(true);

    setTimeout(() => {
      setCards(requisition);
      setLoading(false);
    }, 2000);
  }, []);

  function onClickCard(card) {
    refModalData.current = card;
    setShowModal(true);
    //console.log("Function onClickCard",card);
  }

  return (
    <>
      {loading && <Loading />}

      <Header />

      <img width="100%" alt="Justice League Banner" src={banner} />

      <h2 style={{ margin: 15 }}>Movies</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {cards.map((card) => (
          <Card
            onClick={() => {
              onClickCard(card);
            }}
            key={card.id}
            srcImg={card.image}
            title={card.title}
          />
        ))}
      </div>

      <Footer name=" Erasus" />

      <Modal show={showModal} setModalVisibility={setShowModal}>
        <ModalHeader>
          <h2>{refModalData.current?.title}</h2>
        </ModalHeader>
        <ModalBody>
          <p
            style={{
              fontSize: "0.8rem",
              marginBottom: 10,
            }}
          >
            {refModalData.current?.date}
          </p>

          <div
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "#B3B3B3",
              }}
            >
              Produced by:
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                marginBottom: 10,
              }}
            >
              {refModalData.current?.director};
            </p>
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "#B3B3B3",
              }}
            >
              Starred:
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                marginBottom: 10,
              }}
            >
              {refModalData.current?.starring};
            </p>
          </div>

          <p
            style={{
              fontSize: "0.8rem",
            }}
          >
            {refModalData.current?.synopsis}
          </p>
        </ModalBody>
      </Modal>
    </>
  );
}
