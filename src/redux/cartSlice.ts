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
  totalPrice: number;
  items: CartItem[];
}

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.nextPrice * obj.count + sum, 0);
};

const getCartFromLS = () => {
  const totalPrice = calcTotalPrice([]);

  return {
    items: [],
    totalPrice,
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

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
