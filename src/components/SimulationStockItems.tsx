import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  getTotals,
  CartItem,
  selectCartItemById,
} from "../redux/cartSlice";
import { RootState } from "../redux/store";

interface SimulationStockItemsProps {
  id: string;
  logo: string;
  name: string;
  price: number;
  nextPrice: number;
  cartQuantity: number;
  market: string;
  sector: string;
}

function SimulationStockItems({
  id,
  logo,
  name,
  price,
  nextPrice,
  cartQuantity,
  market,
  sector,
}: SimulationStockItemsProps) {

  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItemById(id));

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const onClickBuy = () => {
    const item: CartItem = {
      id,
      name,
      price,
      nextPrice,
      cartQuantity,
    };
    dispatch(addToCart(item));
  };

  const onClickSale = () => {
    const item: CartItem = {
      id,
      name,
      price,
      nextPrice,
      cartQuantity,
    };
    dispatch(decreaseCart(item));
  };

  return (
    <div key={id} className="SimulationStockItem">
      <div className="SimulationStockLogo">
        <Image className="Logo" src={logo} width="200" height="65" alt={name} />
      </div>
      <div className="SimulationStockTitle">{name}</div>
      <div className="SimulationStockValue">{price} EUR</div>
      <div className="SimulationStockMarket">{market}</div>
      <div className="SimulationStockSector">{sector}</div>
      <div className="SimulationStockButtons">
        <button
          onClick={onClickBuy}
          className={"BuyButton"}
        >
          Achat
        </button>
        <button
          onClick={onClickSale}
          className={
            cartItem && cartItem.cartQuantity > 0
              ? "SaleButton"
              : "SaleButtonNotAllowed"
          }
          disabled={cartItem && cartItem.cartQuantity > 0 ? false : true}
        >
          Vente
        </button>
      </div>
    </div>
  );
}

export default SimulationStockItems;
