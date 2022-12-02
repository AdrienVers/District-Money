import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  nextPrice: number;
  cartQuantity: number;
};

export interface CartSliceState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  cartTotalNextAmount: number;
  cartTotalGain: number;
  cartTotalCash: number;
}

/*
function bought(state: any, cartTotal : any, cartItem : any) {
  {
    let { totalInitialPrice, totalCash, quantity } = state.cartItems.reduce(
      () => {
        const { price, cartQuantity } = cartItem;
        const itemTotalInitialPrice = price * cartQuantity;

        cartTotal.totalInitialPrice += itemTotalInitialPrice;
        cartTotal.quantity += cartQuantity;

        return cartTotal;
      },
      {
        totalInitialPrice: 0,
        quantity: 0,
        totalCash: state.cartTotalCash,
      }
    );


    totalInitialPrice = parseFloat(totalInitialPrice.toFixed(2));
    totalCash = parseFloat(totalCash.toFixed(2));
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = totalInitialPrice;
    state.cartTotalCash = totalCash - totalInitialPrice;
  }
}
    */

/*
function sold(state: any) {
  {
    let { totalPrice, totalCash, quantity } = state.cartItems.reduce(
      (cartTotal: any, cartItem: any) => {
        const { nextPrice, cartQuantity } = cartItem;
        const itemTotalPrice = nextPrice * cartQuantity;

        cartTotal.totalPrice += itemTotalPrice;
        cartTotal.quantity += cartQuantity;

        return cartTotal;
      },
      {
        totalPrice: 0,
        quantity: 0,
        totalCash: state.cartTotalCash,
      }
    );

    totalPrice = parseFloat(totalPrice.toFixed(2));
    totalCash = parseFloat(totalCash.toFixed(2));
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = totalPrice;
    state.cartTotalCash = totalCash + totalPrice;
  }
}
*/

const getInitialInformations = () => {
  return {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalNextAmount: 0,
    cartTotalGain: 0,
    cartTotalCash: 500,
  };
};

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.cartItems.find((obj) => obj.id === id);

const initialState: CartSliceState = getInitialInformations();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      //bought(state);

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        console.log("Increased product quantity");
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        console.log("Product added to cart");
      }
    },
    decreaseCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      //sold(state);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        console.log("Decreased product quantity");
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        console.log("Product removed from cart");
      }
    },
    getTotals(state) {
      let {
        totalInitialPrice,
        totalPrice,
        totalGain,
        quantity,
        totalCash,
      } = //
        state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const { price, nextPrice, cartQuantity } = cartItem;
            const itemTotalInitialPrice = price * cartQuantity;
            const itemTotalPrice = nextPrice * cartQuantity;
            const itemTotalGain =
              nextPrice * cartQuantity - price * cartQuantity;

            cartTotal.totalInitialPrice += itemTotalInitialPrice;
            cartTotal.totalPrice += itemTotalPrice;
            cartTotal.totalGain += itemTotalGain;
            cartTotal.quantity += cartQuantity;
            //cartTotal.totalCash;

            return cartTotal;
          },
          {
            totalInitialPrice: 0,
            totalPrice: 0,
            totalGain: 0,
            quantity: 0,
            totalCash: 500,
          }
        );

      totalInitialPrice = parseFloat(totalInitialPrice.toFixed(2));
      totalPrice = parseFloat(totalPrice.toFixed(2));
      totalGain = parseFloat(totalGain.toFixed(2));
      totalCash = parseFloat(totalCash.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = totalInitialPrice;
      state.cartTotalNextAmount = totalPrice;
      state.cartTotalGain = totalGain;
      state.cartTotalCash = totalCash - totalInitialPrice;
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      console.log("Cart cleared");
    },
  },
});

export const { addToCart, decreaseCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
