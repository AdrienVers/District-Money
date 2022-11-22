import React from "react";
import styled from "@emotion/styled";
import Actionnaire from "../assets/Actionnaire.png";
import Entreprise from "../assets/Entreprise.png";
import Europe from "../assets/Europe.png";
import Securite from "../assets/Securite.png";
import Image from "next/image";

const HomeAboutGlobal = styled.div`
  display: flex;
  padding: 0px 50px 50px 50px;

  @media (max-width: 900px) {
    padding: 0px 20px 20px 20px;
  }

  .HomeAboutContainer {
    width: 100%;
    display: flex;
    background-color: white;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    .Invest {
      width: 25%;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;
      padding: 15px;

      @media (max-width: 1000px) {
        width: 100%;
      }

      h2 {
        text-align: center;
      }

      #Image {
        width: 40%;
        height: auto;
        max-width: 150px;
      }
    }
  }
`;

function HomeAbout() {
  return (
    <HomeAboutGlobal>
      <div className="HomeAboutContainer">
        <div className="Invest">
          <h2>Investir en Europe</h2>
          <Image id="Image" src={Europe} alt="Europe" />
          <p>
            Accédez aux principales places boursières en {"Europe"}, avec des
            possibilités interessantes {"d'investissements"} et de
            divesification de vos actifs. Chez Disctrict Money vous pouvez
            ouvrir un PEA ou Compte-Titre et commencer directement à investir.
          </p>
        </div>
        <div className="Invest">
          <h2>Devenir actionnaire</h2>
          <Image id="Image" src={Actionnaire} alt="Actionnaire" />
          <p>
            Au travers des actions, vous devenez propriétaire {"d'une"} partie
            {" de l'entreprise"} et obtenez un droit de vote à{" "}
            {"l'Aassemblée Générale"} (en ligne et sans frais). Vous pouvez
            ainsi maximiser vos investissements et percevoir des dividendes.
          </p>
        </div>
        <div className="Invest">
          <h2>Soutenir une entreprise</h2>
          <Image id="Image" src={Entreprise} alt="Entreprise" />
          <p>
            {
              "L'investissement n'est pas uniquement un acte pour soi, c'est aussi une démarche solidaire permettant de soutenir les entreprises dans leur développement, quelles soient GE, PME/ETI ou start-up."
            }
          </p>
        </div>
        <div className="Invest">
          <h2>Sécurité</h2>
          <Image id="Image" src={Securite} alt="Securite" />
          <p>
            Nous nous sommes engagés à vous offrir un environnement sécurisé
            pour vos investissements. Notre système repose sur la protection de
            vos données et de vos actifs, conforme à la régulation européenne
            DSP 2 et à {"l'Autorité des marchés financiers (AMF)"}.
          </p>
        </div>
      </div>
    </HomeAboutGlobal>
  );
}

export default HomeAbout;
