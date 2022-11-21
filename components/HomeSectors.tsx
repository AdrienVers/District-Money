import React from "react";
import styled from "@emotion/styled";

const HomeSectorsGlobal = styled.div`
  display: flex;
  padding: 0px 50px;

  .HomeSectorsContainer {
    width: 100%;
    display: flex;
    background-color: white;

    .HomeSectorsImage {
      display: flex;
      background-color: yellow;
      width: 50%;
    }

    .HomeSectorsText {
      display: flex;
      background-color: purple;
      width: 50%;
    }
  }
`;

function HomeSectors() {
  return (
    <HomeSectorsGlobal>
      <div className="HomeSectorsContainer">
        <div className="HomeSectorsText">a</div>
        <div className="HomeSectorsImage">b</div>
      </div>
    </HomeSectorsGlobal>
  );
}

export default HomeSectors;
