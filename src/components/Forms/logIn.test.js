import React from "react";
import {
  screen,
  render,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LogIn, { setPasswordVisible } from "./LogIn";
import { AuthContextProvider, useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

const mockedAuth = {
  user: null,
  login: jest.fn(),
};
jest.mock("../../context/AuthContext", () => ({
  useAuth: () => mockedAuth,
}));

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Render LogIn Form Properly", () => {
  beforeEach(cleanup);

  test("email and password inputs should be empty at the beginning and submit button should be normal", () => {
    render(<LogIn />);

    const emailInput = screen.getByLabelText(/Adresse e-mail/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const submitButton = screen.getByRole("button", { name: /Se connecter/i });

    expect(emailInput.type).toBe("text");
    expect(emailInput).toHaveValue("");

    expect(passwordInput.type).toBe("password");
    expect(passwordInput).toHaveValue("");

    expect(submitButton).toBeEnabled();
  });

  it("should toggle password visibility", async () => {
    render(<LogIn />);

    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const visibilityButton = screen.getByRole("button", { name: "" });

    expect(passwordInput.type).toBe("password");

    fireEvent.click(visibilityButton);
    await waitFor(() => expect(passwordInput.type).toBe("text"));
    fireEvent.click(visibilityButton);
    await waitFor(() => expect(passwordInput.type).toBe("password"));
  });

  it("should not display error when values are valid and submit button should be enabled", async () => {
    render(<LogIn />);

    const emailInput = screen.getByLabelText(/Adresse e-mail/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const submitButton = screen.getByRole("button", { name: /Se connecter/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    await waitFor(() => expect(submitButton).toBeEnabled());
  });

  it("should display two errors when two inputs are incorrect and submit button should be disabled", async () => {
    render(<LogIn />);

    const emailInput = screen.getByLabelText(/Adresse e-mail/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const submitButton = screen.getByRole("button", { name: /Se connecter/i });

    fireEvent.change(emailInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "1234567" } });

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(2));
    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  it("should submit the form with correct values and call login function", async () => {
    render(<LogIn />);

    const emailInput = screen.getByLabelText(/Adresse e-mail/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const submitButton = screen.getByRole("button", { name: /Se connecter/i });

    fireEvent.change(emailInput, { target: { value: "abc@exemple.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(mockedAuth.login).toHaveBeenCalledWith(
        "abc@exemple.com",
        "12345678"
      )
    );
  });
});
