import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { LEXIQUE_DATA } from "../../datas/lexiqueData";
import Tagsbar from "./Tagsbar";
import { useTags } from "../../store/useTags";

function LexiqueList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { tag } = useTags();

  const handleSearchTerm = (e: any) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <LexiqueListGlobal>
      <div className="LexiqueListContainer">
        <h1>Les termes techniques à connaître pour comprendre la bourse.</h1>
        <div className="searchBar">
          <input
            type="text"
            className="searchTerm"
            placeholder="Rechercher..."
            onChange={handleSearchTerm}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
        <Tagsbar />
        <div className="lexiqueList">
          {tag === "Tous"
            ? LEXIQUE_DATA.filter((item) => {
                return item.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
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
      </div>
    </LexiqueListGlobal>
  );
}

export default LexiqueList;

const LexiqueListGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  .LexiqueListContainer {
    display: flex;
    width: 100%;
    padding: 20px 20px;
    background-color: white;
    flex-direction: column;

    h1 {
      font-weight: normal;
      margin: 0px 8px 25px 8px;
    }

    .searchBar {
      width: 100%;
      position: relative;
      display: flex;
    }

    .searchTerm {
      width: 100%;
      height: 36px;
      border: 3px solid rgb(10, 20, 100);
      border-right: none;
      padding: 5px 5px 5px 10px;
      font-size: 1.05rem;
      border-radius: 5px 0 0 5px;
      outline: none;
      color: black;
    }

    .searchButton {
      width: 40px;
      height: 36px;
      border: 1px solid rgb(10, 20, 100);
      background: rgb(10, 20, 100);
      text-align: center;
      color: #fff;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      font-size: 20px;
    }
  }

  .lexiqueList {
    font-size: 1.25rem;

    p {
      border-top: 0.2px black solid;
      padding: 25px 0px 10px 5px;
    }
  }
`;
