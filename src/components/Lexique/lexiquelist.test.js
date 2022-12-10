import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LexiqueList from "./LexiqueList";

test("handleSearchTerm updates searchTerm correctly", () => {
  render(<LexiqueList />);
  const searchInput = screen.getByPlaceholderText("Rechercher...");

  fireEvent.change(searchInput, { target: { value: "test" } });
  expect(searchInput.value).toBe("test");
});
