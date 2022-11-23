import React from "react";
import styled from "@emotion/styled";
import SimulationStock from "../components/SimulationStock";
import SimulationBasket from "./SimulationBasket";

const SimulationGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  .SimulationContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100%);
    grid-gap: 20px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
    background-color: white;
  }
`;

function Simulation() {
  return (
    <SimulationGlobal>
      <div className="SimulationContainer">
        <SimulationStock />
        <SimulationBasket />
      </div>
    </SimulationGlobal>
  );
}

export default Simulation;
