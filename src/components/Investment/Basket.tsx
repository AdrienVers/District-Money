import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { BASKET_TITLE_DATA } from "../../datas/basketData";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";

function SimulationBasket() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <SimulationBasketGlobal>
      <h2 style={{ margin: "5px 0px 10px 0px" }}>
        Portefeuille (2 jours après achat) :
      </h2>
      <p>
        Votre solde en espèces : <strong>{cart.cartTotalCash} EUR</strong>.
      </p>
      {/* Votre solde en actifs : <strong>0 EUR</strong>. */}
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
      {cart.cartItems &&
        cart.cartItems.map((item: any) => {
          return (
            <div className="SimulationBasketItem" key={item.id}>
              <div className="SimulationBasketTitle">{item.name}</div>
              <div className="SimulationBasketQuantity">
                {item.cartQuantity}
              </div>
              <div className="SimulationBasketInitialPrice">
                {item.price * item.cartQuantity} EUR
              </div>
              <div className="SimulationBasketRate">
                {item.nextPrice * item.cartQuantity} EUR
              </div>
              <div className="SimulationBasketValue">
                {item.nextPrice * item.cartQuantity} EUR
              </div>
              <div className="SimulationBasketGain">
                {item.nextPrice * item.cartQuantity -
                  item.price * item.cartQuantity}{" "}
                EUR
              </div>
            </div>
          );
        })}
      <div className="SimulationBasketItemResume">
        <div style={{ fontWeight: "500" }} className="SimulationBasketTitle">
          SOMME TOTALE
        </div>
        <div className="SimulationBasketQuantity">{cart.cartTotalQuantity}</div>
        <div className="SimulationBasketInitialPrice">
          {cart.cartTotalAmount} EUR
        </div>
        <div className="SimulationBasketRate">
          {cart.cartTotalNextAmount} EUR
        </div>
        <div className="SimulationBasketValue">
          {cart.cartTotalNextAmount} EUR
        </div>
        <div className="SimulationBasketGain">{cart.cartTotalGain} EUR</div>
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

  .SimulationBasketItemResume {
    background-color: gold;
    color: black;
  }
`;
