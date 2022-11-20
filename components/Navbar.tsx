import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.png";

const NavbarGlobal = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 99;

  #Image {
    height: 80%;
    width: auto;

    @media (max-width: 1100px) {
      height: 70%;
    }
  }

  p {
    @media (max-width: 900px) {
      display: none;
    }
  }

  button {
    padding: 10px 15px 10px 15px;
    height: 45px;
    font-size: 1.05rem;
    // background-color: rgb(78, 114, 227);
    background-color: rgb(30, 50, 130);
    color: white;
    border: none;
    box-shadow: inset 0px 0px 0px 0.3px black;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }

    i {
      color: white;
      padding: 0px 5px 0px 12px;
    }
  }

  .connexionButton {
    @media (max-width: 1100px) {
      span {
        display: none;
      }

      i {
        color: white;
        padding: 0px;
      }
    }
  }

  .demoButton {
    @media (max-width: 520px) {
      span {
        display: none;
      }

      i {
        color: white;
        padding: 0px;
      }
    }
  }

  #menuButton {
    font-size: 1.5rem;
  }
`;

function Navbar() {
  return (
    <NavbarGlobal>
      {/* <i id="menuButton" className="fa-solid fa-bars"></i> */}
      <Image id="Image" src={Logo} alt="logo" />
      <p>Secteurs financiers</p>
      <p>Bourse</p>
      <p>Quizz</p>
      <p>Lexique</p>
      <button className="demoButton">
        <span>Essayer la demo avec 500 € </span>
        <i className="fa-solid fa-money-bill-trend-up"></i>
      </button>
      <button className="connexionButton">
        <span>Me connecter </span>
        <i className="fa-solid fa-user"></i>
      </button>
    </NavbarGlobal>
  );
}

export default Navbar;
