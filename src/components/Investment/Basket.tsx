import React from "react";
import styled from "@emotion/styled";
import { BASKET_TITLE_DATA } from "../../datas/basketData";
import useStore from "../../store/useStore";

function SimulationBasket() {
  const { cash, quantityTotal, priceTotal, nextPriceTotal } = useStore();
  const store = useStore();

  return (
    <SimulationBasketGlobal>
      <h2 style={{ margin: "5px 0px 10px 0px" }}>
        Portefeuille (2 jours après achat) :
      </h2>
      <p style={{ margin: "0px 0px 8px 5px" }}>
        Votre solde en espèce : <strong>{cash} EUR</strong>.
      </p>
      {BASKET_TITLE_DATA.map((item) => {
        return (
          <div key={item.id} className="SimulationBasketItemTitles">
            <div className="SimulationBasketTitle">{item.label}</div>
            <div className="SimulationBasketQuantity">{item.quantity}</div>
            <div className="SimulationBasketInitialPrice">
              {item.initialPrice}
            </div>
            <div className="SimulationBasketRate">{item.rate}</div>
            <div className="SimulationBasketGain">{item.gain}</div>
          </div>
        );
      })}
      {store.basket.map((item) => {
        return (
          <div key={item.id} className="SimulationBasketItem">
            <div className="SimulationBasketTitle">{item.name}</div>
            <div id="quantity" className="SimulationBasketQuantity">
              {item.quantity}
            </div>
            <div className="SimulationBasketInitialPrice">
              {item.price * item.quantity} EUR
            </div>
            <div className="SimulationBasketRate">
              {item.nextPrice * item.quantity} EUR
            </div>
            <div className="SimulationBasketGain">
              {item.nextPrice * item.quantity - item.price * item.quantity} EUR
            </div>
          </div>
        );
      })}
      <div className="SimulationBasketItemResume">
        <div style={{ fontWeight: "500" }} className="SimulationBasketTitle">
          SOMME TOTALE
        </div>
        <div id="totalQuantity" className="SimulationBasketQuantity">
          {quantityTotal}
        </div>
        <div className="SimulationBasketInitialPrice">{priceTotal} EUR</div>
        <div className="SimulationBasketRate">{nextPriceTotal} EUR</div>
        <div className="SimulationBasketGain">
          {nextPriceTotal - priceTotal} EUR
        </div>
      </div>
    </SimulationBasketGlobal>
  );
}

export default SimulationBasket;

const SimulationBasketGlobal = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    padding-left: 10px;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  .BasketResume {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 2px 0px 5px 0px;
  }

  .SimulationBasketItem,
  .SimulationBasketItemResume {
    color: black;
  }

  .SimulationBasketItemTitles {
    color: white;
  }

  .SimulationBasketItem,
  .SimulationBasketItemTitles,
  .SimulationBasketItemResume {
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
      width: 25%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketQuantity {
      width: 15%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketInitialPrice {
      width: 20%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketRate {
      width: 25%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketValue {
      width: 20%;
      display: flex;
      justify-content: center;
    }

    .SimulationBasketGain {
      width: 25%;
      display: flex;
      justify-content: center;
    }
  }

  .SimulationBasketItemTitles {
    padding: 5px;
    background-color: rgb(10, 20, 100);
    color: white;
  }

  .SimulationBasketItemResume {
    background-color: gold;
    color: black;
  }
`;
