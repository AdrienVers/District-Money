import React from "react";
import styled from "@emotion/styled";
import { BASKET_TITLE_DATA, BASKET_DATA } from "../datas/basketData";

const SimulationBasketGlobal = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    padding-left: 10px;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  .SimulationBasketItem,
  .SimulationBasketItemTitles {
    display: flex;
    width: 100%;
    margin: 5px 0px;
    background-color: rgb(240, 240, 240);
    align-items: center;
    text-align: center;

    @media (max-width: 500px) {
      font-size: 0.9rem;
    }

    .SimulationBasketTitle {
      width: 20%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketQuantity {
      width: 15%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketInitialPrice {
      width: 15%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketRate {
      width: 20%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketValue {
      width: 20%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketGain {
      width: 20%;
      display: flex;
      justify-content: center;
    }
  }

  .SimulationBasketItemTitles {
    padding: 5px;
    background-color: rgb(10, 20, 100);
    color: white;
  }
`;

function SimulationBasket() {
  return (
    <SimulationBasketGlobal>
      <h2>Portefeuille en temps réel : </h2>
      {BASKET_TITLE_DATA.map((item) => {
        return (
          <div key={item.id} className="SimulationBasketItemTitles">
            <div className="SimulationBasketTitle">{item.label}</div>
            <div className="SimulationBasketQuantity">{item.quantity}</div>
            <div className="SimulationBasketInitialPrice">
              {item.initialPrice}
            </div>
            <div className="SimulationBasketRate">{item.rate}</div>
            <div className="SimulationBasketValue">{item.value}</div>
            <div className="SimulationBasketGain">{item.gain}</div>
          </div>
        );
      })}
      {BASKET_DATA.map((item) => {
        return (
          <div key={item.id} className="SimulationBasketItem">
            <div className="SimulationBasketTitle">{item.label}</div>
            <div className="SimulationBasketQuantity">{item.quantity}</div>
            <div className="SimulationBasketInitialPrice">
              {item.initialPrice} EUR
            </div>
            <div className="SimulationBasketRate">{item.rate} EUR</div>
            <div className="SimulationBasketValue">{item.value} EUR</div>
            <div className="SimulationBasketGain">{item.gain} EUR</div>
          </div>
        );
      })}
    </SimulationBasketGlobal>
  );
}

export default SimulationBasket;
