import React from "react";
import styled from "@emotion/styled";

interface AnswerProps {
  index: number;
}

const Answer = ({ index }: AnswerProps) => {
  const letterMapping = ["A", "B", "C", "D"];
  return (
    <AnswerGlobal>
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">Réponse</div>
    </AnswerGlobal>
  );
};

export default Answer;

const AnswerGlobal = styled.div`
  width: 50%;
  background: #fff;
  min-height: 70px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    transition : 0.3s;
    box-shadow: 0px 0px 0px 5px white;
    font-size : 1.15rem;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }

  .answer-letter {
    box-shadow: inset 0px 0px 0px 3px white;
    display: flex;
    width: 10%;
    min-height: 70px;
    justify-content: center;
    align-items: center;
    background-color: dodgerblue;
    color: white;
    font-size: 1.4rem;
  }

  .answer-text {
    display: flex;
    width: 90%;
    min-height: 70px;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
  }
`;
