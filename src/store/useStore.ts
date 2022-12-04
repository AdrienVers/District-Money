import create from "zustand";

export interface Stock {
  id: number;
  name: string;
  price: number;
  nextPrice: number;
  quantity: number;
  logo: string;
  market: string;
  sector: string;
}

interface Store {
  stocks: Stock[];
  setStocks: (stocks: Stock[]) => void;
  basket: Stock[];
  addToBasket: (items: any) => void;
  removeFromBasket: (items: any) => void;
  cash: number;
  increaseCash: (incrementValue: number) => void;
  decreaseCash: (decrementValue: number) => void;
  quantityTotal: number;
  updateQuantityTotal: () => void;
  priceTotal: number;
  updatePriceTotal: () => void;
  nextPriceTotal: number;
  updateNextPriceTotal: () => void;
}

const useStore = create<Store>()(
  (set): Store => ({
    stocks: [],

    setStocks: (stocks: Stock[]) =>
      set((state) => ({
        ...state,
        stocks,
      })),

    basket: [],

    addToBasket: (item: Stock) =>
      set((state) => {
        const existingItem = state.basket.find((i) => i.id === item.id);

        if (existingItem) {
          existingItem.quantity++;
          return state;
        }

        return {
          ...state,
          basket: [...state.basket, { ...item, quantity: 1 }],
        };
      }),

    removeFromBasket: (item: Stock) =>
      set((state) => {
        const existingItem = state.basket.find((i) => i.id === item.id);

        if (!existingItem) {
          return state;
        }

        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          return state;
        }

        return {
          ...state,
          basket: state.basket.filter((i) => i.id !== item.id),
        };
      }),

    cash: 500,

    increaseCash: (incrementValue: number) =>
      set((state) => ({ cash: state.cash + incrementValue })),

    decreaseCash: (decrementValue: number) =>
      set((state) => ({ cash: state.cash - decrementValue })),

    quantityTotal: 0,

    updateQuantityTotal: () =>
      set((state) => {
        let total = 0;
        state.basket.forEach((item) => {
          total += item.quantity;
        });
        return {
          ...state,
          quantityTotal: total,
        };
      }),

    priceTotal: 0,

    updatePriceTotal: () =>
      set((state) => {
        let total = 0;
        state.basket.forEach((item) => {
          total += item.price;
        });
        return {
          ...state,
          priceTotal: total,
        };
      }),

    nextPriceTotal: 0,

    updateNextPriceTotal: () =>
      set((state) => {
        let total = 0;
        state.basket.forEach((item) => {
          total += item.nextPrice;
        });
        return {
          ...state,
          nextPriceTotal: total,
        };
      }),
  })
);

export default useStore;
