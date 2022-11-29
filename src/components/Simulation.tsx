import React from "react";
import styled from "@emotion/styled";
import SimulationStock from "./SimulationStock";
import SimulationBasket from "./SimulationBasket";

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
