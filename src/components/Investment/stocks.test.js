import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SimulationStock from "./Stock";
import * as api from "./getStocks";
import { useStore } from "../../store/useStore";
import Finance from "../../assets/Finance.png";
import SimulationBasket from "./Basket";

jest.mock("./getStocks");
const originalState = useStore.getState();
useStore.addToBasket = jest.fn();

describe("Render the Stock component correctly", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useStore.setState(originalState);
  });

  it("should render stocks names when api responds", async () => {
    api.getStocks.mockResolvedValue({
      results: [{ name: "Entreprise", logo: Finance, price: 10 }],
    });

    render(<SimulationStock />);
    await waitFor(() => {
      screen.getByText("Entreprise");
      screen.getByText("10 EUR");
    });
  });

  it("should render error message when api fails", async () => {
    api.getStocks.mockRejectedValue({});

    render(<SimulationStock />);
    await waitFor(() => {
      screen.getByText("Impossible de récupérer les données.");
    });
  });
  it("should add an item to the basket when the 'Acheter' button is clicked", async () => {
    api.getStocks.mockResolvedValue({
      results: [
        {
          id: 1,
          name: "Entreprise",
          logo: Finance,
          price: 10,
          nextPrice: 11,
        },
      ],
    });

    render(<SimulationStock />);
    await waitFor(() => {
      fireEvent.click(screen.getByRole("button", { name: /Achat/i }));
    });

    render(<SimulationBasket />);
    await waitFor(() => {
      expect(screen.getAllByText("11 EUR"));
    });
  });
});
