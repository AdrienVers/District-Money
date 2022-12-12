import Head from "next/head";
import styled from "@emotion/styled";
import Link from "next/link";
import HomeJoinUs from "../components/Home/HomeJoinUs";
import HomeSectors from "../components/Home/HomeSectors";
import HomeAbout from "../components/Home/HomeAbout";

const HomeGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

export default function Home() {
  return (
    <HomeGlobal>
      <Head>
        <title>
          District Money - Courtage en ligne | Tarifs au plus bas | Offres 2023
          | Accueil
        </title>
        <meta
          name="Accueil"
          content="District Money est un courtier en ligne incontournable en France et qui s'adresse à des clients désirant apprendre à investir en Bourse de façon autonome, au travers d'un PEA ou Compte-titres."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <HomeJoinUs />
      <HomeSectors />
      <HomeAbout />
    </HomeGlobal>
  );
}
