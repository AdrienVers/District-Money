import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem } from "../redux/cart/slice";
import { CartItem as CartItemType } from "../redux/cart/types";

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItemType)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-info">
        <h3>{title}</h3>
      </div>
      <div className="cart__item-count">
        <button
          disabled={count === 1}
          onClick={onClickMinus}
          className="button button--outline button--circle cart__item-count-minus"
        ></button>
        <b>{count}</b>
        <button
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        ></button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} EUR</b>
      </div>
      <div className="cart__item-remove"></div>
    </div>
  );
};
