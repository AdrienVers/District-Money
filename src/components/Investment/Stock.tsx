import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { STOCKS_TITLE_DATA } from "../../datas/stocksData";
import useStore, { Stock } from "../../store/useStore";
import Image from "next/image";

function SimulationStock() {
  const {
    increaseCash,
    decreaseCash,
    addToBasket,
    removeFromBasket,
    cash,
    basket,
    updateQuantityTotal,
    updatePriceTotal,
    updateNextPriceTotal,
  } = useStore();
  const store = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const fetchStocks = async () => {
    setIsLoading(true);

    try {
      await fetch("https://district-money-backend.vercel.app/")
        .then((resp) => resp.json())
        .then((items: Stock[]) => store.setStocks(items));
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  const addToCart = (item: any) => {
    addToBasket({
      id: item.id,
      name: item.name,
      price: item.price,
      nextPrice: item.nextPrice,
    });
  };

  const removeFromCart = (item: any) => {
    removeFromBasket({
      id: item.id,
      name: item.name,
      price: item.price,
      nextPrice: item.nextPrice,
    });
  };

  const availableForSale = (item: any) => {
    const basketItem = basket.find((i) => i.id === item.id);
    const itemQuantity = basketItem ? basketItem.quantity : 0;

    if (itemQuantity > 0) {
      return false;
    } else {
      return true;
    }
  };

  const availableForSaleStyle = (item: any) => {
    const basketItem = basket.find((i) => i.id === item.id);
    const itemQuantity = basketItem ? basketItem.quantity : 0;

    if (itemQuantity > 0) {
      return "SaleButton";
    } else {
      return "SaleButtonNotAllowed";
    }
  };

  return (
    <SimulationStockGlobal>
      <h2 style={{ margin: "12px 0px 10px 0px" }}>
        Marché boursier en temps réel :
      </h2>
      {STOCKS_TITLE_DATA.map((item) => {
        return (
          <div key={item.id} className="SimulationStockItemTitles">
            <div className="SimulationStockLogo">{item.logo}</div>
            <div className="SimulationStockTitle">{item.name}</div>
            <div className="SimulationStockValue">{item.value}</div>
            <div className="SimulationStockMarket">{item.market}</div>
            <div className="SimulationStockSector">{item.sector}</div>
            <div className="SimulationStockButtons">Achat / Vente</div>
          </div>
        );
      })}
      {store.stocks.map((item) => {
        return (
          <div key={item.id} className="SimulationStockItem">
            <div className="SimulationStockLogo">
              <Image
                className="Logo"
                src={item.logo}
                width="200"
                height="65"
                alt={item.name}
              />
            </div>
            <div className="SimulationStockTitle">{item.name}</div>
            <div className="SimulationStockValue">{item.price} EUR</div>
            <div className="SimulationStockMarket">{item.market}</div>
            <div className="SimulationStockSector">{item.sector}</div>
            <div className="SimulationStockButtons">
              <button
                onClick={() => {
                  decreaseCash(item.price);
                  addToCart(item);
                  updateQuantityTotal();
                  updatePriceTotal();
                  updateNextPriceTotal();
                }}
                className={
                  cash - item.price > 0 ? "BuyButton" : "BuyButtonNotAllowed"
                }
                disabled={cash - item.price > 0 ? false : true}
              >
                Achat
              </button>
              <button
                onClick={() => {
                  increaseCash(item.nextPrice);
                  removeFromCart(item);
                  updateQuantityTotal();
                  updatePriceTotal();
                  updateNextPriceTotal();
                }}
                className={availableForSaleStyle(item)}
                disabled={availableForSale(item)}
              >
                Vente
              </button>
            </div>
          </div>
        );
      })}
    </SimulationStockGlobal>
  );
}

export default SimulationStock;

const SimulationStockGlobal = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    padding-left: 10px;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  .SimulationStockItem,
  .SimulationStockItemTitles {
    display: flex;
    width: 100%;
    margin: 5px 0px;
    align-items: center;
    text-align: center;

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

      .Logo {
        width: 50%;
        height: auto;
      }
    }

    .SimulationStockTitle {
      width: 20%;
      display: flex;
      justify-content: center;

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

      .BuyButton,
      .SaleButton,
      .BuyButtonNotAllowed,
      .SaleButtonNotAllowed {
        padding: 6px 8px;
        font-size: 1rem;
        color: white;
        border: none;
        box-shadow: inset 0px 0px 0px 0.5px black;

        @media (max-width: 600px) {
          padding: 2px 5px;
        }

        @media (max-width: 300px) {
          padding: 1px;
          font-size: 0.8rem;
        }
      }

      .BuyButton {
        background-color: rgb(0, 170, 0);
        margin-right: 10px;
        cursor: pointer;

        @media (max-width: 600px) {
          margin-right: 0px;
        }
      }

      .SaleButton {
        background-color: rgb(240, 30, 60);
        margin-left: 10px;
        cursor: pointer;
      }

      .BuyButtonNotAllowed {
        background-color: grey;
        color: rgb(230, 230, 230);
        margin-right: 10px;
        cursor: not-allowed;
      }

      .SaleButtonNotAllowed {
        background-color: grey;
        color: rgb(230, 230, 230);
        margin-left: 10px;
        cursor: not-allowed;
      }
    }
  }

  .SimulationStockItem {
    background-color: rgb(240, 240, 240);

    &:nth-of-type(odd) {
      background-color: rgba(185, 225, 245, 0.5);
    }
  }

  .SimulationStockItemTitles {
    padding: 5px;
    background-color: rgb(10, 20, 100);
    color: white;
  }
`;
