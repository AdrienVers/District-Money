import React from "react";
import styled from "@emotion/styled";
import { STOCKS_DATA } from "../datas/stocksData";
import Image from "next/image";

const SimulationStockGlobal = styled.div`
  display: flex;
  flex-direction: column;

  .SimulationStockItem {
    display: flex;
    width: 100%;
    margin: 5px 0px;
    background-color: rgb(240, 240, 240);
    align-items: center;

    .SimulationStockLogo {
      width: 18%;
      display: flex;
      justify-content: center;

      @media (max-width: 800px) {
        width: 20%;
      }

      @media (max-width: 600px) {
        display: none;
      }

      #Logo {
        width: 50%;
        height: auto;
      }
    }

    .SimulationStockTitle {
      width: 20%;
      display: flex;
      justify-content: center;
      text-align: center;

      @media (max-width: 800px) {
        width: 30%;
      }

      @media (max-width: 300px) {
        font-size: 0.8rem;
      }
    }

    .SimulationStockValue {
      width: 10%;
      display: flex;
      justify-content: center;

      @media (max-width: 1100px) {
        width: 15%;
      }

      @media (max-width: 800px) {
        width: 20%;
      }

      @media (max-width: 600px) {
        width: 25%;
      }

      @media (max-width: 300px) {
        font-size: 0.8rem;
      }
    }

    .SimulationStockMarket {
      width: 22%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      @media (max-width: 1100px) {
        width: 25%;
      }

      @media (max-width: 800px) {
        display: none;
      }
    }

    .SimulationStockSector {
      width: 15%;
      display: flex;
      justify-content: center;
      padding: 0px 5px;

      @media (max-width: 1100px) {
        display: none;
      }
    }

    .SimulationStockButtons {
      width: 15%;
      display: flex;
      justify-content: center;

      @media (max-width: 1100px) {
        width: 20%;
      }

      @media (max-width: 800px) {
        width: 30%;
      }

      @media (max-width: 600px) {
        width: 45%;
      }

      button {
        padding: 6px 8px;
        font-size: 1rem;
        color: white;
        border : none;
        box-shadow : inset 0px 0px 0px 0.5px black;

        @media (max-width: 600px) {
          padding: 2px 5px;
        }

        @media (max-width: 300px) {
          padding: 1px;
          font-size: 0.8rem;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .BuyButton {
        background-color: rgb(0, 170, 0);
        margin-right: 10px;

        @media (max-width: 600px) {
          margin-right: 0px;
        }
      }

      .SellButton {
        background-color: rgb(240, 30, 60);
        margin-left: 10px;
      }
    }
  }
`;

function SimulationStock() {
  return (
    <SimulationStockGlobal>
      {STOCKS_DATA.map((item) => {
        return (
          <div key={item.id} className="SimulationStockItem">
            <div className="SimulationStockLogo">
              <Image id="Logo" src={item.img} alt={item.name} />
            </div>
            <div className="SimulationStockTitle">{item.name}</div>
            <div className="SimulationStockValue">{item.value} EUR</div>
            <div className="SimulationStockMarket">{item.market}</div>
            <div className="SimulationStockSector">{item.sector}</div>
            <div className="SimulationStockButtons">
              <button className="BuyButton">Achat</button>
              <button className="SellButton">Vente</button>
            </div>
          </div>
        );
      })}
    </SimulationStockGlobal>
  );
}

export default SimulationStock;
