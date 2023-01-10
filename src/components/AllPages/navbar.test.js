import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";

jest.mock("firebase/app", () => {
  require("firestore-jest-mock");
});

jest.mock("firebase/auth", () => {
  require("firestore-jest-mock");
});

jest.mock("../../firebase-config", () => {
  require("firestore-jest-mock");
});

describe("Navbar", () => {
  it("should render correctly", () => {
    render(<Navbar />);
  });
});
