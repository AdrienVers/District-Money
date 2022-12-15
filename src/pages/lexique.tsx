import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";
import LexiqueLayout from "../components/Lexique/LexiqueLayout";

const LexiqueGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

function lexique() {
  return (
    <div>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Lexique
        </title>
        <meta
          name="Lexique"
          content="Le lexique de District Money vous donne les principales notions à connaître pour mieux comprendre la Bourse et ainsi augmenter vos profits. "
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <LexiqueGlobal>
        <LexiqueLayout />
      </LexiqueGlobal>
    </div>
  );
}

export default lexique;
