import Head from "next/head";
import React from "react";
import LexiqueList from "../components/Lexique/LexiqueList";
import styled from "@emotion/styled";

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
        <LexiqueList />
      </LexiqueGlobal>
    </div>
  );
}

export default lexique;
