import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";
import SimulationStock from "../components/Investment/Stock";
import SimulationBasket from "../components/Investment/Basket";

function investment() {
  return (
    <InvestmentGlobal>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Investissement
        </title>
        <meta
          name="Investissement"
          content="Simuler vos investissements grâce à notre simulation gratuite, afin de vous initier à la Bourse et aux opérations d'achat et de vente d'actions."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <SimulationGlobal>
        <div className="SimulationContainer">
          <SimulationStock />
          <SimulationBasket />
        </div>
      </SimulationGlobal>
    </InvestmentGlobal>
  );
}

export default investment;

const InvestmentGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

const SimulationGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  @media (max-width: 600px) {
    padding: 20px 10px;
  }

  .SimulationContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100%);
    grid-gap: 10px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 30px;
    background-color: white;

    @media (max-width: 600px) {
      padding: 0px 5px;
    }
  }
`;
