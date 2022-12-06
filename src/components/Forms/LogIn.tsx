import React, { useState } from "react";
import styled from "@emotion/styled";
import { FieldError, useForm } from "react-hook-form";
import Image from "next/image";
import LogInIllustration from "../../assets/loginform.png";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

type ErrorProps = {
  isError: FieldError | undefined;
};

type FormValues = {
  email: string;
  password: string;
};

function LogIn() {
  const router = useRouter();
  const { login } = useAuth();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    //alert("Form submitted: " + JSON.stringify(data));

    try {
      await login(data.email, data.password);
      router.push("/profile");
      reset();
      setModalOpen(false);
    } catch (err) {
      setModalOpen(true);
    }
  });

  return (
    <LogInGlobal>
      <div className="LogInContainer">
        <LogInForm onSubmit={onSubmit}>
          <div className="titleBox">
            <h1 className="formTitle">Connexion</h1>
            <p className="formSubTitle">Accès à votre compte</p>
          </div>
          <LogInInputBox isError={errors.email}>
            <input
              type="text"
              required
              {...register("email", {
                required: "Le champ « Adresse e-mail » est requis.",
                pattern: {
                  // value: /^[a-zA-Z0-9]+$/,
                  value: /\S+@\S+\.\S+/,
                  message:
                    "L'adresse e-mail doit avoir un format valide de type : abc@exemple.com.",
                },
              })}
              id="email"
              name="email"
            />
            <label htmlFor="email">{"Adresse e-mail"}</label>
            {errors.email ? (
              <p role="alert" style={{ color: "red" }}>
                {errors.email.message}
              </p>
            ) : null}
          </LogInInputBox>
          <LogInInputBox isError={errors.password}>
            <input
              type={isVisible ? "text" : "password"}
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
            {isVisible ? (
              <button
                className="passwordVisibleButton"
                onClick={() => setIsVisible(!isVisible)}
              >
                <i className="fa-solid fa-eye" />
              </button>
            ) : (
              <button
                className="passwordVisibleButton"
                onClick={() => setIsVisible(!isVisible)}
              >
                <i className="fa-solid fa-eye-slash" />
              </button>
            )}
            {errors.password && (
              <p role="alert" style={{ color: "red" }}>
                {errors.password.message}
              </p>
            )}
          </LogInInputBox>
          {modalOpen ? (
            <span role="alert" style={{ color: "red", textAlign: "center" }}>
              {"L'adresse e-mail ou mot de passe est incorrect."}
            </span>
          ) : null}
          <button
            className="submitButton"
            type="submit"
            disabled={!errors.password && !errors.email ? false : true}
          >
            Se connecter
          </button>
          <div className="GoToSignin">
            Pas encore de compte ?{" "}
            <Link
              style={{ color: "rgb(30,60,130)", fontWeight: "620" }}
              href="/signup"
            >
              {"S'inscrire."}
            </Link>
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

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }

  .GoToSignin {
    text-align: center;
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
  gap: 30px;

  @media (max-width: 900px) {
    width: 100%;
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

  .passwordVisibleButton {
    position: absolute;
    top: 17px;
    right: 12px;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
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
    padding: 30px 0px 40px 0px;
  }

  #Image {
    width: 80%;
    height: auto;
    max-width: 500px;
  }
`;
