/*
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //state.items = [...state.items, action.payload];

      const find = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (find >= 0) {
        state.items[find].quantity += 1;
      } else {
        const alreadyItems = { ...action.payload, quantity: 1 };
        state.items.push(alreadyItems);
      }
    },
    removeToBasket: (state, action) => {},
  },
});

export const { addToBasket, removeToBasket } = basketSlice.actions;

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});

export const quantityValue = (state) => state.basket.items;
*/


//export type RootState = ReturnType<typeof store.getState>;

/*
    { id: 1, title: "Airbus", value: 140, quantity: 3 },
    { id: 2, title: "Sanofi", value: 87, quantity: 0 },
    { id: 3, title: "Deutsche Telekom", value: 19, quantity: 0 },
    { id: 4, title: "Unilever", value: 87, quantity: 0 },
    { id: 5, title: "Repsol", value: 14, quantity: 0 },

import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  quantity: number;
}

const initialState: CounterState = {
  quantity: 0,
};

const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    incrementStockQuantity: (state) => {
      state.quantity += 1;
    },
    decrementStockQuantity: (state) => {
      state.quantity -= 1;
    },
  },
});

export const { incrementStockQuantity, decrementStockQuantity } =
  stocksSlice.actions;

export const store = configureStore({
  reducer: {
    stocks: stocksSlice.reducer,
  },
});

export const quantityValue = (state: RootState) => state.stocks.quantity;

export type RootState = ReturnType<typeof store.getState>;
*/
