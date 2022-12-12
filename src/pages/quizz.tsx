import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";
import QuizzQuestion from "../components/Quizz/QuizzQuestion";
import QuizzButtons from "../components/Quizz/QuizzButtons";

const QuizzGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

function quizz() {
  return (
    <QuizzGlobal>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Quizz
        </title>
        <meta
          name="Quizz"
          content="Utilisez notre questionnaire pour en apprendre plus sur la Bourse et le monde financier."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <QuizzQuestion />
      <QuizzButtons/>
    </QuizzGlobal>
  );
}

export default quizz;
