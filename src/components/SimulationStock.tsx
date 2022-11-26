/*
import React from "react";
import axios from "axios";
import Image from "next/image";

interface StocksProps {
  map(arg0: (item: any) => JSX.Element): React.ReactNode;
  id: Number;
  title: String;
  imageUrl: HTMLImageElement;
  price: Number;
}

const Stocks: React.FC = () => {
  const [stock, setStock] = React.useState<StocksProps>();

  React.useEffect(() => {
    async function fetchStock() {
      try {
        const { data } = await axios.get(
          "https://district-money-backend.vercel.app/"
        );
        setStock(data);
      } catch (error) {
        alert("Impossible de récupérer les données du serveur.");
      }
    }

    fetchStock();
  }, []);

  if (!stock) {
    return <>Loading...</>;
  }

  return (
    <div>
      {stock.map((item) => {
        return (
          <div key={item.id}>
            <Image
              src={item.imageUrl}
              width="200"
              height="65"
              alt={item.title}
            />
            <h2>{item.title}</h2>
            <h4>{item.price} EUR</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Stocks;
*/

import React from "react";
import styled from "@emotion/styled";
import { STOCKS_TITLE_DATA, STOCKS_DATA } from "../datas/stocksData";
import SimulationItem from "./SimulationStockItems";
import axios from "axios";

interface StocksProps {
  map(arg0: (item: any) => JSX.Element): React.ReactNode;
  id: Number;
  name: String;
  logo: HTMLImageElement;
  price: Number;
  nextPrice: Number;
  market: String;
  sector: String;
}

function SimulationStock() {
  const [stock, setStock] = React.useState<StocksProps>();

  React.useEffect(() => {
    async function fetchStock() {
      try {
        const { data } = await axios.get(
          "https://district-money-backend.vercel.app/"
        );
        setStock(data);
      } catch (error) {
        alert("Impossible de récupérer les données du serveur.");
      }
    }

    fetchStock();
  }, []);

  if (!stock) {
    return <>Loading...</>;
  }

  return (
    <SimulationStockGlobal>
      <h2>Marché boursier en temps réel :</h2>
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
      {stock.map((item) => {
        return (
          <SimulationItem
            key={item.id}
            id={item.id}
            name={item.name}
            logo={item.logo}
            price={item.price}
            nextPrice={item.nextPrice}
            sector={item.sector}
            market={item.market}
            quantity={item.quantity}
          />
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

      button {
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

/*
import React from "react";
import styled from "@emotion/styled";
import { STOCKS_TITLE_DATA, STOCKS_DATA } from "../datas/stocksData";
import SimulationItem from "./SimulationStockItems";

function SimulationStock() {
  return (
    <SimulationStockGlobal>
      <h2>Marché boursier en temps réel :</h2>
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
      {STOCKS_DATA.map((item) => {
        return (
          <SimulationItem
            key={item.id}
            id={item.id}
            name={item.name}
            logo={item.logo}
            value={item.value}
            nextValue={item.nextValue}
            sector={item.sector}
            market={item.market}
            quantity={item.quantity}
          />
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

      #Logo {
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

      button {
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
*/
