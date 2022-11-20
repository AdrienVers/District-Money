import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LogIn from "./LogIn";

describe("Render LogIn Form Properly", () => {
  beforeEach(() => {
    render(<LogIn />);
  });

  test("username and password inputs should be empty at the beginning and submit button should be normal", () => {
    const usernameInput = screen.getByLabelText(/Nom/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const button = screen.getByRole("button", { name: /Se connecter/i });

    expect(usernameInput.type).toBe("text");
    expect(usernameInput).toHaveValue("");

    expect(passwordInput.type).toBe("password");
    expect(passwordInput).toHaveValue("");

    expect(button).toBeEnabled();
  });

  it("should not display error when values are valid and submit button should be enabled", async () => {
    const usernameInput = screen.getByLabelText(/Nom/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const button = screen.getByRole("button", { name: /Se connecter/i });

    fireEvent.change(usernameInput, { target: { value: "User" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    await waitFor(() => expect(button).toBeEnabled());
  });

  it("should display two errors when two inputs are incorrect and submit button should be disabled", async () => {
    const usernameInput = screen.getByLabelText(/Nom/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const button = screen.getByRole("button", { name: /Se connecter/i });

    fireEvent.change(usernameInput, { target: { value: "User$" } });
    fireEvent.change(passwordInput, { target: { value: "1234567" } });

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(2));
    await waitFor(() => expect(button).toBeDisabled());
  });
});
