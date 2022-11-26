import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, CartItem, selectCartItemById } from "../redux/cartSlice";

interface SimulationStockItemsProps {
  id: string;
  logo: string;
  name: string;
  price: number;
  nextPrice: number;
  market: string;
  sector: string;
  quantity: number;
}

function SimulationStockItems({
  id,
  logo,
  name,
  price,
  nextPrice,
  market,
  sector,
  quantity,
}: SimulationStockItemsProps) {
  //const dispatch = useDispatch();
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      price,
      nextPrice,
      logo,
      count: 0,
    };
    dispatch(addItem(item));
  };

  /*
  function addItemToBasket() {
    const stock = {
      id,
      imageUrl,
      title,
      price,
      nextValue,
      market,
      sector,
      quantity: (quantity += 1),
    };

    //Object.values(stock).find((item) => item.id === id);

    dispatch(addToBasket(stock));
  }
  */

  return (
    <div className="SimulationStockItem">
      <div className="SimulationStockLogo">
        <Image className="Logo" src={logo} width="200" height="65" alt={name} />
      </div>
      <div className="SimulationStockTitle">{name}</div>
      <div className="SimulationStockValue">{price} EUR</div>
      <div className="SimulationStockMarket">{market}</div>
      <div className="SimulationStockSector">{sector}</div>
      <div className="SimulationStockButtons">
        <button onClick={onClickAdd} className="BuyButton">
          Achat
        </button>
        {/*  
        <button onClick={() => addItemToBasket()} className="BuyButton">
          Achat
        </button>
        */}
        <button className="SellButton">Vente</button>
      </div>
    </div>
  );
}

export default SimulationStockItems;
