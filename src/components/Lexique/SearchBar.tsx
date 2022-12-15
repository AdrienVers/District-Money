import React from "react";
import styled from "@emotion/styled";
import { useTags } from "../../store/useTags";

function SearchBar() {
  const { setSearchTerm } = useTags();

  const handleSearchTerm = (e: any) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <SearchBarGlobal>
      <input
        type="text"
        className="searchTerm"
        placeholder="Rechercher..."
        onChange={handleSearchTerm}
      />
      <button type="submit" className="searchButton">
        <i className="fa fa-search" />
      </button>
    </SearchBarGlobal>
  );
}

export default SearchBar;

const SearchBarGlobal = styled.div`
  width: 100%;
  position: relative;
  display: flex;

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
`;
