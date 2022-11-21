import React from "react";
import styled from "@emotion/styled";
import { FieldError, useForm } from "react-hook-form";
import Image from "next/image";
import LogInIllustration from "../assets/loginform.png";
import Link from "next/link";

const LogInGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  .LogInContainer {
    background-color: dodgerblue;
    width: 100%;
    display: flex;
  }
`;

const LogInForm = styled.form`
  width: 50%;
  padding: 40px 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    padding: 50px 0px 20px 0px;
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
      padding: 10px 0px 15px 0px;
      color: rgb(120, 120, 120);
    }
  }

  .submitButton {
    margin-top: 10px;
    width: 125px;
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

const LogInInputBox = styled.div<ErrorProps>`
  position: relative;
  width: 250px;

  @media (max-width: 330px) {
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
`;

const LogInImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    padding: 25px 0px 40px 0px;
  }

  #Image {
    width: 80%;
    height: auto;
  }
`;

type ErrorProps = {
  isError: FieldError | undefined;
};

type FormValues = {
  username: string;
  password: string;
};

function LogIn() {
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
    <LogInGlobal>
      <div className="LogInContainer">
        <LogInForm onSubmit={onSubmit}>
          <div className="titleBox">
            <h1 className="formTitle">Connexion</h1>
            <p className="formSubTitle">Accès à votre compte</p>
          </div>
          <LogInInputBox isError={errors.username}>
            <input
              type="text"
              required
              {...register("username", {
                required: "Le champ « Nom » est requis.",
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
          </LogInInputBox>
          <LogInInputBox isError={errors.password}>
            <input
              type="password"
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
            {errors.password && (
              <p role="alert" style={{ color: "red" }}>
                {errors.password.message}
              </p>
            )}
          </LogInInputBox>
          <button
            className="submitButton"
            type="submit"
            disabled={!errors.password && !errors.username ? false : true}
          >
            Se connecter
          </button>
          <div>
            Pas encore de compte ? <Link href="/signin">{"S'inscrire"}</Link>.
          </div>
        </LogInForm>
        <LogInImage>
          <Image id="Image" src={LogInIllustration} alt="Connexion" />
        </LogInImage>
      </div>
    </LogInGlobal>
  );
}

export default LogIn;
