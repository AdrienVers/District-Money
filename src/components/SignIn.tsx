import React, { useState } from "react";
import styled from "@emotion/styled";
import { FieldError, useForm } from "react-hook-form";
import Image from "next/image";
import LogInIllustration from "../assets/signinform.jpg";

const SignInGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  .SignInContainer {
    width: 100%;
    display: flex;
    background-color: white;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
`;

const SignInForm = styled.form`
  width: 50%;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    padding: 30px 0px 20px 0px;
  }

  .titleBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .formTitle {
      font-size: 2.2rem;
      font-weight: normal;
      margin: 0;
      padding: 0;
    }

    .formSubTitle {
      font-size: 1.3rem;
      margin: 0;
      padding: 8px 0px 10px 0px;
      color: rgb(120, 120, 120);
    }
  }

  .submitButton {
    margin-top: 10px;
    width: 105px;
    font-size: 1.05rem;
    padding: 6px 0px;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const SignInInputBox = styled.div<ErrorProps>`
  position: relative;
  width: 400px;

  @media (max-width: 450px) {
    width: 200px;
  }

  input {
    width: 100%;
    padding: 10px 8px;
    margin-top: 3px;
    font-size: 1.1rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    box-shadow: ${({ isError }) =>
      isError ? "0 0 5px 1px red" : "0 0 5px 1px grey"};
  }

  label {
    position: absolute;
    left: 0;
    padding: 13.5px 15px;
    font-size: 1rem;
    pointer-events: none;
    transition: 0.3s;
    color: rgb(120, 120, 120);
    color: ${({ isError }) => (isError ? "red" : "grey")};
  }

  input:valid ~ label,
  input:focus ~ label {
    transform: translateX(10px) translateY(-7px);
    font-size: 0.85rem;
    padding: 0 5px;
    background-color: white;
    border-radius: 5px;
  }

  p {
    margin: 5px 0px 0px 0px;
  }

  #passwordVisible {
    position: absolute;
    top: 18px;
    right: 12px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const SignInImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    padding: 25px 0px 40px 0px;
  }

  #Image {
    width: 75%;
    height: auto;
    max-width: 400px;
  }
`;

type ErrorProps = {
  isError: FieldError | undefined;
};

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmation: string;
};

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmationVisible, setConfirmationVisible] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    alert("Form submitted: " + JSON.stringify(data));
    reset();
  });

  return (
    <SignInGlobal>
      <div className="SignInContainer">
        <SignInForm onSubmit={onSubmit}>
          <div className="titleBox">
            <h1 className="formTitle">Inscription</h1>
            <p className="formSubTitle">Création de votre compte</p>
          </div>
          <SignInInputBox isError={errors.username}>
            <input
              type="text"
              required
              {...register("username", {
                required: "Le champ « Nom d'utilisateur » est requis.",
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message:
                    "Le nom ne doit pas contenir de caractères spéciaux.",
                },
              })}
              id="username"
              name="username"
            />
            <label htmlFor="username">{"Nom d'utilisateur"}</label>
            {errors.username ? (
              <p role="alert" style={{ color: "red" }}>
                {errors.username.message}
              </p>
            ) : null}
          </SignInInputBox>
          <SignInInputBox isError={errors.email}>
            <input
              type="text"
              required
              {...register("email", {
                required: "Le champ « Adresse e-mail » est requis.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message:
                    "L'e-mail doit avoir un format valide de type : abc@exemple.com",
                },
              })}
              id="email"
              name="email"
            />
            <label htmlFor="email">Adresse e-mail</label>
            {errors.email ? (
              <p role="alert" style={{ color: "red" }}>
                {errors.email.message}
              </p>
            ) : null}
          </SignInInputBox>
          <SignInInputBox isError={errors.password}>
            <input
              type={passwordVisible ? "text" : "password"}
              required
              {...register("password", {
                required: "Le champ « Mot de passe » est requis.",
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères.",
                },
              })}
              id="password"
              name="password"
            />
            <label htmlFor="password">Mot de passe</label>
            {passwordVisible ? (
              <i
                id="passwordVisible"
                className="fa-solid fa-eye"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            ) : (
              <i
                id="passwordVisible"
                className="fa-solid fa-eye-slash"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            )}
            {errors.password && (
              <p role="alert" style={{ color: "red" }}>
                {errors.password.message}
              </p>
            )}
          </SignInInputBox>
          <SignInInputBox isError={errors.confirmation}>
            <input
              type={confirmationVisible ? "text" : "password"}
              required
              {...register("confirmation", {
                required: "Le champ « Confirmation » est requis.",
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères.",
                },
              })}
              id="confirmation"
              name="confirmation"
            />
            <label htmlFor="confirmation">Confirmation</label>
            {confirmationVisible ? (
              <i
                id="passwordVisible"
                className="fa-solid fa-eye"
                onClick={() => setConfirmationVisible(!confirmationVisible)}
              />
            ) : (
              <i
                id="passwordVisible"
                className="fa-solid fa-eye-slash"
                onClick={() => setConfirmationVisible(!confirmationVisible)}
              />
            )}
            {errors.confirmation && (
              <p role="alert" style={{ color: "red" }}>
                {errors.confirmation.message}
              </p>
            )}
          </SignInInputBox>
          <button
            className="submitButton"
            type="submit"
            disabled={
              !errors.password && !errors.username && !errors.email
                ? false
                : true
            }
          >
            {"S'inscrire"}
          </button>
        </SignInForm>
        <SignInImage>
          <Image id="Image" src={LogInIllustration} alt="Connexion" />
        </SignInImage>
      </div>
    </SignInGlobal>
  );
}

export default SignIn;

/*
test("When we click on submit button", () => {
  const mockSubmission = jest.fn();
  render(<Account submission={mockSubmission} />);
  const emailInput = screen.getByLabelText(/Email/i);
  userEvent.type(emailInput, "test@example.org");
  const passwordInput = screen.getByLabelText(/Mot de passe/i);
  userEvent.type(passwordInput, "password");
  const submitButton = screen.getByRole("button", {
    name: /Se connecter/i,
  });
  fireEvent.click(submitButton);
  expect(mockSubmission.mock.calls.length).toBe(1);
  expect(mockSubmission.mock.calls[0][0]).toEqual({
    email: "test@example.org",
    password: "password",
  });
});
*/
