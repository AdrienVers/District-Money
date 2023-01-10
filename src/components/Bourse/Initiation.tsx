import React from "react";
import Image from "next/image";
import Inflation from "../../assets/Inflation.png";
import styled from "@emotion/styled";

function Initiation() {
  return (
    <InitiationGlobal>
      <div className="InitiationContainer">
        <h2 style={{ margin: "0px 5px 15px 5px" }}>
          {"Pourquoi est-il intéressant d'investir en Bourse ?"}
        </h2>
        <p style={{ margin: "0px 5px 0px 5px" }}>
          {
            "On pourrait penser que laisser son argent sur un livret d'épargne réglementé permet de sécuriser ses économies et qu'il n'y a pas de risque de perte en capital. Cependant, lorsque le taux d'inflation augmente et devient trop élevé, les épargnants sont confrontés à une diminution de la valeur de leur argent. Par exemple, le Livret A, rémunéré à 2 % (au 1er août 2022) ne permet pas de protéger votre épargne de l'inflation (à 6,2 % au mois de novembre 2022 en France, et à près de 11 % dans la zone euro)."
          }
        </p>
        <p style={{ margin: "12px 5px" }}>
          {
            "L'inflation correspond à la hausse des prix des biens et services. Dans la zone euro, le taux d'inflation est mesuré grâce à « l'indice des prix à la consommation harmonisé » (IPCH). Le terme « harmonisé » signifie que l'ensemble des pays de l'Union européenne ont adopté la même méthodologie, de sorte que les données peuvent être comparées entre les pays. En novembre 2022, le taux d'inflation dans la zone euro est de 11%."
          }
        </p>
        <Image id="ImageInflation" src={Inflation} alt="inflation" />
        <p
          style={{
            textAlign: "center",
          }}
        >
          <i>
            {
              "Évolution du taux d'inflation dans la zone euro sur une période de 7 ans. Source : ec.europa.eu, site web officiel de la Commission européenne."
            }
          </i>
        </p>
        <p style={{ margin: "0px 5px 0px 5px" }}>
          {
            "Les placements et investissements en bourse vous permettront ainsi de faire fructifier votre argent et de protéger votre épargne de l'inflation. Par ailleurs, investir en Bourse, c'est également soutenir l'économie et les entreprises. En investissant dans des entreprises qui vous intéressent vous contribuez à leur succès économique et pourrez en tirer une gratification sur le plan personnel et financier."
          }
        </p>
        <h2>Combien faut-il investir pour débuter en Bourse ?</h2>
        <p style={{ margin: "0px 5px 0px 5px" }}>
          {
            "Il faut bien avoir en tête qu'en moyenne 90 % des investisseurs perdent en bourse. Les 10 % restant obtiennent des gains durablement grâce à une bonne méthode, de bons outils, et une discipline de fer."
          }
        </p>
        <p style={{ margin: "12px 5px" }}>
          {
            "Là où certains affirment que 1 000 euros suffisent pour commencer à investir, chez District Money, nous vous déconseillons d'investir en dessous de 10 000 euros d'investissement si vous voulez profiter des avantages liés à un bon placement boursier (en prenant en compte les frais de courtage et la fiscalité sur les plus-values et dividendes)."
          }
        </p>
        <p style={{ margin: "0px 5px" }}>
          {
            "Si vous avez moins de 10 000 euros disponibles, c'est-à-dire d'argent dont vous n'avez pas besoin pour votre vie de tous les jours, que vous êtes prêts à perdre, alors tout simplement n'investissez pas en Bourse. Attendez, économisez, utilisez notre simulateur gratuitement pour vous initier, formez-vous, suivez nos articles et nos guides, établissez des stratégies, et dès que vous aurez atteint cette somme vous pourrez alors commencer à investir réellement."
          }
        </p>
        <h2>{"Pourquoi est-il recommandé de diversifier ses placements ?"}</h2>
        <p style={{ margin: "0px 5px 0px 5px" }}>
          {
            "Diversifier son portefeuille boursier permet de réduire les risques et d'optimiser le rendement de ses placements. Si l'ensemble de votre argent se trouve sur le même produit financier, en cas d'effondrement de ce support, vous perdriez tous vos fonds. Alors que si vous engagez des sommes sur divers actifs, la défaillance d'un de vos investissements sera compensée par la performance des autres. Il est particulièrement important de contrebalancer le risque lié aux placement."
          }
        </p>
        <p style={{ margin: "12px 5px" }}>
          {
            "Il est possible de diversifier son portefeuille en ayant différents actifs (actions, obligations, fonds communs, etc.), en ayant des actifs dans différents secteurs (industrie, consommation discrétionnaire, santé, etc.) et également dans différentes zones géographiques."
          }
        </p>
      </div>
    </InitiationGlobal>
  );
}

export default Initiation;

const InitiationGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  .InitiationContainer {
    display: flex;
    width: 100%;
    padding: 20px 20px;
    background-color: white;
    flex-direction: column;

    h2 {
      font-weight: 600;
      font-size: 1.65rem;
      color: black;
    }

    p {
      font-size: 1.05rem;
      color: black;
    }

    #ImageInflation {
      width: 100%;
      height: auto;
    }
  }
`;
