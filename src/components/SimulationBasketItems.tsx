import Image from "next/image";
import React from "react";

interface SimulationBasketItemsProps {
  id: number;
  name: string;
  quantity: number;
  value: number;
  nextValue: number;
}

function SimulationBasketItems({
  id,
  name,
  quantity,
  value,
  nextValue,
}: SimulationBasketItemsProps) {
  return (
    <div className="SimulationBasketItem">
      <div className="SimulationBasketTitle">{name}</div>
      <div className="SimulationBasketQuantity">{quantity}</div>
      <div className="SimulationBasketInitialPrice">{value} EUR</div>
      <div className="SimulationBasketRate">{nextValue} EUR</div>
      <div className="SimulationBasketValue">{nextValue * quantity} EUR</div>
      <div className="SimulationBasketGain">
        {nextValue * quantity - value * quantity} EUR
      </div>
    </div>
  );
}

export default SimulationBasketItems;
