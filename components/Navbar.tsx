import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { NAVBAR_DATA } from "../datas/navbarData";

type AnimationProps = {
  isActive: boolean;
};

function Navbar() {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <NavbarGlobal>
      <i
        id="menuButton"
        className="fa-solid fa-bars"
        onClick={() => setActive(!active)}
      />
      <Link href="/">
        <Image id="Image" src={Logo} alt="logo" />
      </Link>
      <SidebarContent isActive={active}>
        <div className="SidebarLinks">
          {NAVBAR_DATA.map((item: any) => {
            return (
              <Link key={item.id} href={item.path} legacyBehavior>
                <a onClick={() => setActive(!active)}>{item.name}</a>
              </Link>
            );
          })}
        </div>
      </SidebarContent>
      <SidebarBackground isActive={active} />
      {NAVBAR_DATA.map((item: any) => {
        return (
          <Link key={item.id} href={item.path} legacyBehavior>
            <a className="TextLink" onClick={() => setActive(!active)}>
              {item.name}
            </a>
          </Link>
        );
      })}
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

  .TextLink {
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
    display: none;
    font-size: 1.5rem;

    @media (max-width: 900px) {
      display: flex;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const SidebarContent = styled.div<AnimationProps>`
  display: none;
  z-index: 2;

  @media (max-width: 900px) {
    display: flex;
    position: absolute;
    color: rgb(30, 50, 130);
    top: 80px;
    height: 100vh;
    width: 100%;
    left: 0;
    transition: all 1.4s;
    background-color: transparent;
    transform: ${({ isActive }) =>
      isActive ? "translateX(0)" : "translateX(-100%)"};
  }

  .SidebarLinks {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 30px 30px 40px 20px;
    width: 225px;
    height: 100%;

    @media (max-width: 900px) {
      display: flex;
    }
  }
`;

const SidebarBackground = styled.div<AnimationProps>`
  position: absolute;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    transition: background-color 1.2s ease-in-out;
    background-color: ${({ isActive }) =>
      isActive ? "rgba(0, 0, 0, 0.5)" : "transparent"};
    transform: ${({ isActive }) =>
      isActive ? "translateX(0)" : "translateX(-100%)"};
    top: 80px;
    left: 0px;
    z-index: 1;
  }
`;
