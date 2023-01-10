import React from "react";
import styled from "@emotion/styled";

function Footer() {
  return (
    <FooterGlobal>
      <FooterLinks>
        <div id="Help" className="FooterCategories">
          <div className="FooterCategorie">
            <h3>Aide & Contact</h3>
            <p>Contact</p>
            <p>Consulter la FAQ</p>
          </div>
        </div>
        <div id="Documentation" className="FooterCategories">
          <div className="FooterCategorie">
            <h3>Documentation contractuelle</h3>
            <p>Ouverture de compte</p>
            <p>Conditions générales</p>
          </div>
        </div>
        <div id="Security" className="FooterCategories">
          <div className="FooterCategorie">
            <h3>Sécurité et données personnelles</h3>
            <p>Politique des cookies</p>
            <p>Protection des données personnelles</p>
          </div>
        </div>
        <div id="Knowledge" className="FooterCategories">
          <div className="FooterCategorie">
            <h3>Connaissances</h3>
            <p>Lexique</p>
            <p>Secteurs financiers</p>
          </div>
        </div>
      </FooterLinks>
      <FooterCopyright>
        <div className="FooterTitle">
          <p>District Money ® 2022 - Tous droits réservés</p>
        </div>
        <div className="FooterIcons">
          <div className="Icon">
            <i className="fa-brands fa-facebook-f" />
          </div>
          <div className="Icon">
            <i className="fa-brands fa-twitter" />
          </div>
          <div className="Icon">
            <i className="fa-brands fa-youtube" />
          </div>
        </div>
      </FooterCopyright>
    </FooterGlobal>
  );
  // contact
}

export default Footer;

const FooterGlobal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  bottom: 0;

  h3 {
    color: black;
  }

  p {
    color: black;
  }
`;

const FooterLinks = styled.div`
  width: 100%;
  //height: 165px;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  background-color: white;
  font-size: 1.2rem;
  margin: 5px 0px 30px 0px;

  #Help {
    width: 20%;
    @media (max-width: 1200px) {
      width: 30%;
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }

  #Documentation {
    width: 30%;
    @media (max-width: 1200px) {
      width: 40%;
    }

    @media (max-width: 1000px) {
      width: 50%;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  #Security {
    width: 30%;
    @media (max-width: 1200px) {
      width: 40%;
    }

    @media (max-width: 1000px) {
      width: 50%;
    }

    @media (max-width: 800px) {
      width: 100%;
      text-align: center;
      font-size: 1rem;
    }
  }

  #Knowledge {
    width: 20%;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .FooterCategories {
    display: flex;
    flex-direction: column;
    jusity-content: center;
    align-items: center;

    p {
      padding: 0px 5px;
      margin: 5px 0px;
      &:hover {
        cursor: pointer;
      }
    }

    h3 {
      text-align: center;
    }
  }
`;

const FooterCopyright = styled.div`
  width: 100%;
  //height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(10, 20, 100);
  font-size: 1.2rem;
  padding: 0px 50px;
  color: white;

  .FooterTitle {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 700px) {
      width: 100%;
      justify-content: center;
      text-align: center;
    }
  }

  .FooterIcons {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 700px) {
      display: none;
    }

    .Icon {
      box-shadow: 0px 0px 0px 2px white;
      border-radius: 50px;
      height: 35px;
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
