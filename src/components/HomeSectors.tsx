import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import Secteurs from "../assets/secteurs.png";

const HomeSectorsGlobal = styled.div`
  display: flex;
  padding: 0px 50px;

  @media (max-width: 900px) {
    padding: 0px 20px 0px 20px;
  }

  .HomeSectorsContainer {
    width: 100%;
    display: flex;
    background-color: rgb(240, 240, 240);
    padding: 10px 0px 30px 0px;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    .HomeSectorsImage {
      display: flex;
      width: 50%;
      justify-content: center;
      align-items: center;

      @media (max-width: 1000px) {
        display: none;
      }

      #Image {
        width: 80%;
        height: auto;
      }
    }

    .HomeSectorsText {
      display: flex;
      flex-direction: column;
      // background-color: purple;
      width: 50%;
      padding: 20px;

      @media (max-width: 1000px) {
        width: 100%;
      }

      h1 {
        font-weight: normal;
        padding-right: 100px;

        @media (max-width: 1000px) {
          padding: 0px;
        }
      }

      p {
        font-size: 1.2rem;
      }

      span {
        padding-top: 5px;
        color: rgb(10, 20, 100);
        font-size: 1.05rem;
      }

      i {
        padding-left: 5px;
        color: rgb(10, 20, 100);
        font-size: 1rem;
      }
    }
  }
`;

function HomeSectors() {
  return (
    <HomeSectorsGlobal>
      <div className="HomeSectorsContainer">
        <div className="HomeSectorsImage">
          <Image id="Image" src={Secteurs} alt="Secteurs" />
        </div>
        <div className="HomeSectorsText">
          <h1>Découvrez les différents secteurs boursiers</h1>
          <p>
            {
              "Chacune des entreprises cotées en bourse appartient à un secteur d'activité particulier, la totalité de ces secteurs couvre l'ensemble des champs d'activité de la sphère économique. Il est primordial de bien connaître ces secteurs pour pouvoir investir en toute séreinité."
            }
          </p>
          <Link className="link" href="/secteurs" legacyBehavior>
            <a>
              <span>Découvrez les secteurs financiers</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </HomeSectorsGlobal>
  );
}

export default HomeSectors;
