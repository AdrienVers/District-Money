import Head from "next/head";
import React from "react";
import Sectors from "../components/Sectors/Sectors";
import styled from "@emotion/styled";

const SecteursGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

function secteurs() {
  return (
    <SecteursGlobal>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Secteurs
        </title>
        <meta
          name="Secteurs"
          content="Pourquoi est-ce important de connaître les différents secteurs avant d'investir dans des actions ? Les maitriser vous permettront d'avoir un plan d'investissement solide et une bonne répartition de vos actifs."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Sectors />
    </SecteursGlobal>
  );
}

export default secteurs;
