import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";

const BourseGlobal = styled.div`
  //background-color: rgb(10, 20, 100);
`;

function bourse() {
  return (
    <BourseGlobal>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Initiation à la Bourse
        </title>
        <meta
          name="Initiation à la Bourse"
          content="District Money organise chaque mois des formations, webinaires et conférences gratuites pour vous permettre de développer et optimiser votre propre stratégie."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      Bourse
    </BourseGlobal>
  );
}

export default bourse;
