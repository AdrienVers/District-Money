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
  /*
    { id: 1, title: "Airbus", value: 140, quantity: 3 },
    { id: 2, title: "Sanofi", value: 87, quantity: 0 },
    { id: 3, title: "Deutsche Telekom", value: 19, quantity: 0 },
    { id: 4, title: "Unilever", value: 87, quantity: 0 },
    { id: 5, title: "Repsol", value: 14, quantity: 0 },
    */
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
