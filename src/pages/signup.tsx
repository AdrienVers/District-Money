import Head from "next/head";
import React from "react";
import SignUp from "../components/Forms/SignUp";
import styled from "@emotion/styled";

const SignUpGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

function signup() {
  return (
    <SignUpGlobal>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Inscription
        </title>
        <meta
          name="Inscription"
          content="La procédure d'ouverture de compte (PEA ou Compte-titres) sur District Money est relativement simple et ne prend que quelques minutes. Aucun dépôt minimum."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <SignUp />
    </SignUpGlobal>
  );
}

export default signup;
