import React from "react";
import styled from "@emotion/styled";
import SearchBar from "./SearchBar";
import Tagsbar from "./Tagsbar";
import LexiqueList from "./LexiqueList";

function LexiqueLayout() {
  return (
    <LexiqueLayoutGlobal>
      <div className="LexiqueLayoutContainer">
        <h1>Les termes techniques à connaître pour comprendre la bourse.</h1>
        <SearchBar />
        <Tagsbar />
        <LexiqueList />
      </div>
    </LexiqueLayoutGlobal>
  );
}

export default LexiqueLayout;

const LexiqueLayoutGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  .LexiqueLayoutContainer {
    display: flex;
    width: 100%;
    padding: 20px 20px;
    background-color: white;
    flex-direction: column;

    h1 {
      font-weight: normal;
      margin: 0px 8px 25px 8px;
    }
`;
