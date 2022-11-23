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
      width: 10%;

      #Logo {
        width: 100%;
        height: auto;
      }
    }

    .SimulationStockTitle {
      width: 25%;
      display: flex;
      justify-content: center;
    }

    .SimulationStockValue {
      width: 10%;
    }

    .SimulationStockMarket {
      width: 20%;
    }

    .SimulationStockSector {
      width: 20%;
    }

    .SimulationStockButtons {
      width: 15%;
      display: flex;
      justify-content: space-around;
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
              <button>Acheter</button>
              <button>Vendre</button>
            </div>
          </div>
        );
      })}
    </SimulationStockGlobal>
  );
}

export default SimulationStock;
