import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import stock from "./stockSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    cart,
    stock,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
