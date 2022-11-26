import React from "react";

interface SimulationBasketItemsProps {
  id: string;
  name: string;
  price: number;
  nextPrice : number;
  count: number;
}

function SimulationBasketItems({
  id,
  name,
  price,
  nextPrice,
  count,
}: SimulationBasketItemsProps) {
  return (
    <div className="SimulationBasketItem">
      <div className="SimulationBasketTitle">{name}</div>
      <div className="SimulationBasketQuantity">{count}</div>
      <div className="SimulationBasketInitialPrice">{price} EUR</div>
      <div className="SimulationBasketRate">{nextPrice} EUR</div>
      <div className="SimulationBasketValue">{nextPrice * count} EUR</div>
      <div className="SimulationBasketGain">{(nextPrice * count) - (price * count)} EUR</div>
    </div>
  );
}

export default SimulationBasketItems;
