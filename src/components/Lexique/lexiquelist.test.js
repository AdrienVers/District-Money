import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import LexiqueList from "./LexiqueList";

test("handleSearchTerm updates searchTerm correctly", () => {
  render(<SearchBar />);
  render(<LexiqueList />);
  const searchInput = screen.getByPlaceholderText("Rechercher...");

  fireEvent.change(searchInput, { target: { value: "test" } });
  expect(searchInput.value).toBe("test");
});
