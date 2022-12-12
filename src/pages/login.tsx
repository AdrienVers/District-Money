import React from "react";
import styled from "@emotion/styled";
import LogIn from "../components/Forms/LogIn";
import Head from "next/head";

const LogInGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

function login() {
  return (
    <LogInGlobal>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Se connecter
        </title>
        <meta
          name="Connexion"
          content="Connectez-vous à votre compte District Money et commencez à trader et à investir. Nous vous rappelons qu'il ne faut jamais transmettre votre identifiant ou mot de passe de connexion à qui que ce soit."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <LogIn />
    </LogInGlobal>
  );
}

export default login;
