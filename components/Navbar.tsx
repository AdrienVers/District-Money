import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";

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
    height: 60px;
    width: auto;

    @media (max-width: 1100px) {
      height: 50px;
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
      <Link href="/">
        <Image id="Image" src={Logo} alt="logo" />
      </Link>
      <Link href="/secteurs" legacyBehavior>
        <a>Secteurs financiers</a>
      </Link>
      <Link href="/bourse" legacyBehavior>
        <a>Bouse</a>
      </Link>
      <Link href="/quizz" legacyBehavior>
        <a>Quizz</a>
      </Link>
      <Link href="/lexique" legacyBehavior>
        <a>Lexique</a>
      </Link>
      <Link href="/signin">
        <button className="demoButton">
          <span>Commencer à investir </span>
          <i className="fa-solid fa-money-bill-trend-up"></i>
        </button>
      </Link>
      <Link href="/login">
        <button className="connexionButton">
          <span>Me connecter </span>
          <i className="fa-solid fa-user"></i>
        </button>
      </Link>
    </NavbarGlobal>
  );
}

export default Navbar;
