import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import MakeMoney from "../../assets/MakeMoney.png";

function HomeJoinUs() {
  return (
    <HomeJoinUsGlobal>
      <div className="HomeJoinUsContainer">
        <div className="HomeJoinUsText">
          <h1>Devenez acteur de vos investissements grâce à District Money.</h1>
          <p>
            Quel que soit votre projet, nous vous aidons à trouver la meilleure
            stratégie
            {" d'investissement"} adaptée à votre profil. Vous pouvez découvrir
            votre profil investisseur en moins de 5 minutes à {"l'aide d'un"}{" "}
            court questionnaire.
          </p>
          <div className="HomeJoinUsButtons">
            <Link
              target="_blank"
              href="https://lautorite.qc.ca/grand-public/outils-et-calculateurs/calculateurs/votre-profil-dinvestisseur"
            >
              <button className="quizzButton">
                Déterminer son profil investisseur
              </button>
            </Link>
            <Link href="/login">
              <button className="loginButton">Se connecter</button>
            </Link>
          </div>
          <p>
            <i
              style={{ color: "rgb(10, 20, 100)" }}
              className="fa-solid fa-circle-exclamation"
            />
            {" N'oubliez"} jamais que tout investissement comporte un risque de
            perte en capital. Nous vous recommandons {"d'investir"} uniquement
            dans des produits financiers correspondant à vos connaissances et à
            votre expérience.
          </p>
        </div>
        <div className="HomeJoinUsImage">
          <Image id="Image" src={MakeMoney} alt="make-money" />
        </div>
      </div>
    </HomeJoinUsGlobal>
  );
}

export default HomeJoinUs;

const HomeJoinUsGlobal = styled.div`
  display: flex;
  padding: 50px 50px 0px 50px;

  @media (max-width: 900px) {
    padding: 30px 20px 0px 20px;
  }

  .HomeJoinUsContainer {
    width: 100%;
    display: flex;
    background-color: white;

    .HomeJoinUsText {
      display: flex;
      width: 55%;
      flex-direction: column;
      padding: 20px 30px;

      @media (max-width: 1000px) {
        width: 100%;
        padding: 10px 20px;
      }

      h1 {
        font-weight: normal;
        padding-right: 100px;

        @media (max-width: 500px) {
          padding: 0;
        }

        @media (max-width: 300px) {
          font-size: 1.8rem;
        }
      }

      p {
        font-size: 1.2rem;
      }

      .HomeJoinUsButtons {
        margin: 20px 0px;
        display: flex;
        justify-content: space-evenly;
        width: 500px;

        @media (max-width: 700px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          width: 100%;
        }

        button {
          padding: 15px 20px;
          font-size: 1.05rem;

          &:hover {
            cursor: pointer;
          }
        }

        .quizzButton {
          background-color: white;
          color: black;
        }

        .loginButton {
          background-color: rgb(10, 20, 100);
          color: white;
        }
      }
    }

    .HomeJoinUsImage {
      display: flex;
      width: 45%;
      justify-content: center;
      align-items: center;
      padding: 20px;

      @media (max-width: 1000px) {
        display: none;
      }

      #Image {
        width: 70%;
        height: auto;
      }
    }
  }
`;
