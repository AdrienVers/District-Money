import Image from "next/image";
import React from "react";
import { SECTORS_DATA } from "../../datas/sectorsData";
import styled from "@emotion/styled";

function Sectors() {
  return (
    <SectorsGlobal>
      <div className="SectorsContainer">
        {SECTORS_DATA.map((item) => {
          return (
            <div className="SectorsItem" key={item.id}>
              <div className="SectorsImage">
                <Image id="Image" src={item.img} alt={item.name} />
              </div>
              <div className="SectorsText">
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectorsGlobal>
  );
}

export default Sectors;

const SectorsGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  .SectorsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, 600px);
    grid-gap: 20px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px 20px;
    background-color: white;

    @media (max-width: 1300px) {
      grid-template-columns: repeat(auto-fit, 500px);
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(auto-fit, 450px);
    }

    @media (max-width: 1100px) {
      grid-template-columns: repeat(auto-fit, 90%);
    }

    #Image {
      width: 70%;
      height: auto;
      max-width: 120px;
    }

    .SectorsItem {
      background-color: rgb(240, 240, 240);
      display: flex;

      @media (max-width: 500px) {
        flex-direction: column;
      }
    }

    .SectorsImage {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    .SectorsText {
      width: 70%;
      //   background-color: gold;
      padding: 20px;

      @media (max-width: 500px) {
        width: 100%;
      }
    }
  }
`;
