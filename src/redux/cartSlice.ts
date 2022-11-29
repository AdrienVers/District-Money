import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

/*
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
*/

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
  //cartTotalCash: number;
}

const getInitialInformations = () => {
  return {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalNextAmount: 0,
    cartTotalGain: 0,
    //cartTotalCash: 0,
  };
};

/*
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
*/

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
      //state.cartTotalCash -= calcInitialPrice(state.cartItems);
      //console.log(state.cartTotalCash);

      /*
      let { totalCash } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price } = cartItem;

          cartTotal.totalCash -= price;

          return cartTotal;
        },
        {
          totalCash: 500,
        }
      );

      totalCash = parseFloat(totalCash.toFixed(2));
      state.cartTotalCash = totalCash;
      console.log(totalCash);
      */

      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

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

      /*
      let { totalCash } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { nextPrice } = cartItem;

          cartTotal.totalCash += nextPrice;

          return cartTotal;
        },
        {
          totalCash: 500,
        }
      );


      totalCash = parseFloat(totalCash.toFixed(2));
      state.cartTotalCash = totalCash;
      console.log(totalCash);
      */

      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    /*
    removeFromCart(state, action: PayloadAction<CartItem>) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          console.log("Product removed from cart");
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    */
    getTotals(state) {
      let {
        totalInitialPrice,
        totalPrice,
        totalGain,
        quantity,
        //totalCash,
      } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, nextPrice, cartQuantity } = cartItem;
          const itemTotalInitialPrice = price * cartQuantity;
          const itemTotalPrice = nextPrice * cartQuantity;
          const itemTotalGain = nextPrice * cartQuantity - price * cartQuantity;

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
      //totalCash = parseFloat(totalCash.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = totalInitialPrice;
      state.cartTotalNextAmount = totalPrice;
      state.cartTotalGain = totalGain;
      //state.cartTotalCash = totalCash - totalInitialPrice;
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

/*
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  nextPrice: number;
  logo: string;
  count: number;
};

export interface CartSliceState {
  totalInitialPrice: number;
  totalPrice: number;
  totalCash: number;
  totalGain: number;
  affordable: boolean;
  items: CartItem[];
}

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

const calcTotalInitialPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.nextPrice * obj.count + sum, 0);
};

const calcInitialPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price + 0, 0);
};

const calcCount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.count + 0, 0);
};

const getCartFromLS = () => {
  const totalInitialPrice = calcTotalInitialPrice([]);
  const totalPrice = calcTotalPrice([]);
  const totalGain = calcTotalPrice([]) - calcTotalInitialPrice([]);
  const totalCash = 500 - calcInitialPrice([]);
  const affordable = true;

  return {
    items: [],
    totalInitialPrice,
    totalPrice,
    totalCash,
    totalGain,
    affordable,
  };
};

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalCash -= calcInitialPrice(state.items);
      console.log(
        "totalCash :",
        state.totalCash,
        "price :",
        calcInitialPrice(state.items)
      );
      state.totalInitialPrice = calcTotalInitialPrice(state.items);
      state.totalPrice = calcTotalPrice(state.items);
      state.totalGain =
        calcTotalPrice(state.items) - calcTotalInitialPrice(state.items);
    },
    minusItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        if (findItem.count === 0) {
          findItem.count = 0;
        } else {
          findItem.count--;
        }
      }

      // state.totalCash += state.items.reduce((sum, obj) => obj.price + 0, 0);

      state.totalCash += state.items.reduce((sum, obj) => obj.nextPrice + 0, 0);
      console.log("totalCash :", state.totalCash);
      state.totalInitialPrice = calcTotalInitialPrice(state.items);
      state.totalPrice = calcTotalPrice(state.items);
      state.totalGain =
        calcTotalPrice(state.items) - calcTotalInitialPrice(state.items);
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      // state.totalCash += state.items.reduce((sum, obj) => obj.price + 0, 0);

      state.totalCash += state.items.reduce((sum, obj) => obj.nextPrice + 0, 0);
      console.log("totalCash :", state.totalCash);
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalInitialPrice = calcTotalInitialPrice(state.items);
      state.totalPrice = calcTotalPrice(state.items);
      state.totalGain =
        calcTotalPrice(state.items) - calcTotalInitialPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
*/
