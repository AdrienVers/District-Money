import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import { STOCK_INDEX_DATA } from "../../datas/stockIndexData";

function HomeNews() {
  return (
    <HomeNewsGlobal>
      <div className="slide-track">
        {STOCK_INDEX_DATA.map((item) => {
          return (
            <div key={item.id} className="slide">
              <div className="slide-top">
                <span style={{ fontSize: "1.1rem" }}>{item.name}</span>
                <span
                  style={{ color: item.state === "increase" ? "green" : "red" }}
                >
                  {item.percent}
                </span>
              </div>
              <div className="slide-bottom">
                <Image id="flag" src={item.flag} alt="france" />
                <span>{item.points}</span>
              </div>
            </div>
          );
        })}
      </div>
    </HomeNewsGlobal>
  );
}

export default HomeNews;

const scroll = keyframes`
  0% {
      transform: translateX(0);
  }
  100% {
      transform: translateX(calc(-200px * 7));
  }
  `;

const HomeNewsGlobal = styled.div`
  width: 100%;
  height: 62px;
  margin: auto;
  overflow: hidden;
  background-color: rgb(242, 247, 255);
  color: black;
  display: flex;
  align-items: center;
  border-top: 0.2px solid rgb(150, 150, 150);

  span {
    color: black;
  }

  .slide-track {
    display: flex;
    animation: scroll 40s linear infinite;
    -webkit-animation: ${scroll} 120s linear infinite;
    width: calc(200px * 15);
  }

  .slide {
    width: 200px;
    display: flex;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
    border-left: 1px solid black;
    height: 100%;

    .slide-top {
      display: flex;
      justify-content: space-between;
    }

    .slide-bottom {
      display: flex;
      justify-content: space-between;

      #flag {
        margin-top: 3px;
        height: 15px;
        width: auto;
      }
    }
  }
`;
