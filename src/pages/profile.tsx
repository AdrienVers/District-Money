import React from "react";
import Profile from "../components/Profile/Profile";
import styled from "@emotion/styled";
import Head from "next/head";

const ProfilePageGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

function profile() {
  return (
    <ProfilePageGlobal>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Profil
        </title>
        <meta
          name="Profil"
          content="Retrouvez toutes vos informations sur votre profil, modifiez ou personnalisez le quand vous le souhaitez."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Profile />
    </ProfilePageGlobal>
  );
}

export default profile;
