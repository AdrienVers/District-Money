import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeToBasket } from "../store";

interface SimulationStockItemsProps {
  id: number;
  logo: any;
  name: string;
  value: number;
  nextValue: number;
  market: string;
  sector: string;
  quantity: number;
}

function SimulationStockItems({
  id,
  logo,
  name,
  value,
  nextValue,
  market,
  sector,
  quantity,
}: SimulationStockItemsProps) {
  const dispatch = useDispatch();

  function addItemToBasket() {
    const stock = {
      id,
      logo,
      name,
      value,
      nextValue,
      market,
      sector,
      quantity: (quantity += 1),
    };

    //Object.values(stock).find((item) => item.id === id);

    dispatch(addToBasket(stock));
  }

  return (
    <div className="SimulationStockItem">
      <div className="SimulationStockLogo">
        <Image id="Logo" src={logo} alt={name} />
      </div>
      <div className="SimulationStockTitle">{name}</div>
      <div className="SimulationStockValue">{value} EUR</div>
      <div className="SimulationStockMarket">{market}</div>
      <div className="SimulationStockSector">{sector}</div>
      <div className="SimulationStockButtons">
        <button onClick={() => addItemToBasket()} className="BuyButton">
          Achat
        </button>
        <button className="SellButton">Vente</button>
      </div>
    </div>
  );
}

export default SimulationStockItems;
