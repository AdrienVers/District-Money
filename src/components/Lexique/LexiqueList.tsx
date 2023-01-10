import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { LEXIQUE_DATA } from "../../datas/lexiqueData";
import { useTags } from "../../store/useTags";

function LexiqueList() {
  const { tag, searchTerm } = useTags();

  return (
    <LexiqueListGlobal>
      <div className="lexiqueList">
        {tag === "Tous"
          ? LEXIQUE_DATA.filter((item) => {
              return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            }).map((item, index) => {
              return (
                <div key={index}>
                  <p>
                    <span style={{ fontWeight: "500" }}>{item.name}</span> :{" "}
                    {item.definition}
                  </p>
                </div>
              );
            })
          : LEXIQUE_DATA.filter((item) => item.tag === tag)
              .filter((item) => {
                return item.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              })
              .map((item, index) => {
                return (
                  <div key={index}>
                    <p>
                      <span style={{ fontWeight: "500" }}>{item.name}</span> :{" "}
                      {item.definition}
                    </p>
                  </div>
                );
              })}
      </div>
    </LexiqueListGlobal>
  );
}

export default LexiqueList;

const LexiqueListGlobal = styled.div`
  .lexiqueList {
    font-size: 1.25rem;

    p {
      border-top: 0.2px black solid;
      padding: 25px 0px 10px 5px;
      color: black;
    }
  }
`;
