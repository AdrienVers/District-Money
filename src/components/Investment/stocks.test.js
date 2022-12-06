import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Stock from "./Stock";
import * as api from "./getStocks";
import { useStore } from "../../store/useStore";
import Finance from "../../assets/Finance.png";

jest.mock("./getStocks");
const originalState = useStore.getState();

describe("Render the Stock component correctly", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useStore.setState(originalState);
  });

  it("should render stocks names when api responds", async () => {
    api.getStocks.mockResolvedValue({
      results: [{ name: "Entreprise", logo: Finance, price: 10 }],
    });

    render(<Stock />);
    await waitFor(() => {
      screen.getByText("Entreprise");
      screen.getByText("10 EUR");
    });
  });

  it("should render error message when api fails", async () => {
    api.getStocks.mockRejectedValue({});

    render(<Stock />);
    await waitFor(() => {
      screen.getByText("Impossible de récupérer les données.");
    });
  });
});
