import React from "react";
import styled from "@emotion/styled";

const QuizzButtonsGlobal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 40px 0px;

  button {
    padding: 15px;
    font-size: 1.15rem;
    margin: 0px 50px;
    border: none;
    background-color: white;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 0px 3px white;
      transition: 0.3s;
    }
  }
`;

function QuizzButtons() {
  return (
    <QuizzButtonsGlobal>
      <button className="next-button">
        <i style={{ marginRight: "15px" }} className="fa-solid fa-arrow-left" />
        <span>Revenir au menu</span>
      </button>
      <button className="next-button">
        <span>Prochaine question</span>
        <i style={{ marginLeft: "15px" }} className="fa-solid fa-arrow-right" />
      </button>
    </QuizzButtonsGlobal>
  );
}

export default QuizzButtons;
