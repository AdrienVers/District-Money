import React from "react";
import styled from "@emotion/styled";
import LogIn from "../components/LogIn";
import Head from "next/head";

const LogInGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

function login() {
  return (
    <LogInGlobal>
      <Head>
        <title>District Money - Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <LogIn />
    </LogInGlobal>
  );
}

export default login;
