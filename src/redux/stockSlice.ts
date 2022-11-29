import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://district-money-backend.vercel.app/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;

export type Stock = {
  id: string;
  name: string;
  price: number;
  nextPrice : number;
  logo : string;
  market : string;
  sector : string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export interface StockSliceState {
  items: Stock[];
  status: Status;
}

const initialState: StockSliceState = {
  items: [],
  //status: null,
  status: Status.LOADING,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        "https://district-money-backend.vercel.app/"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },

  /*
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
  */
});

export default productsSlice.reducer;

/*
import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type Stock = {
  id: string;
  name: string;
  price: number;
  logo: string;
  nextPrice: number;
  rating: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type SearchStockParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export interface StockSliceState {
  items: Stock[];
  status: Status;
}

export const fetchStocks = createAsyncThunk<Stock[], SearchStockParams>(
  "stock/fetchStocksStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Stock[]>(
      `https://district-money-backend.vercel.app/`,
      {
        params: {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
      }
    );

    return data;
  }
);

export const selectStockData = (state: RootState) => state.stock;

const initialState: StockSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Stock[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchStocks.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = stockSlice.actions;

export default stockSlice.reducer;
*/
