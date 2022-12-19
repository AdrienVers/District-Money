import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SimulationStock from "./Stock";
import SimulationBasket from "./Basket";
import * as api from "./getStocks";
import { useStore } from "../../store/useStore";
import Finance from "../../assets/Finance.png";

jest.mock("./getStocks");
const originalState = useStore.getState();

describe("Render the Basket component correctly", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useStore.setState(originalState);
  });

  it("should add 2 items to the basket with 2 quantity when the 'Achat' button is clicked twice", async () => {
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
      fireEvent.click(screen.getByRole("button", { name: /Achat/i }));
    });

    render(<SimulationBasket />);
    await waitFor(() => {
      expect(screen.getAllByText("22 EUR"));
      const quantity = document.querySelector("#quantity");
      expect(quantity.innerHTML).toContain("2");
    });
  });

  it("should remove 2 items to the basket with 0 quantity when the 'Vente' button is clicked twice", async () => {
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
      fireEvent.click(screen.getByRole("button", { name: /Achat/i }));
      fireEvent.click(screen.getByRole("button", { name: /Vente/i }));
      fireEvent.click(screen.getByRole("button", { name: /Vente/i }));
    });

    render(<SimulationBasket />);
    await waitFor(() => {
      expect(screen.getAllByText("0 EUR"));
      const totalQuantity = document.querySelector("#totalQuantity");
      expect(totalQuantity.innerHTML).toContain("0");
    });
  });
});
