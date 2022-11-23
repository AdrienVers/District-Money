import Industrie from "../assets/Industrie.png";
import Sante from "../assets/Sante.png";
import Telecom from "../assets/Telecom.png";
import Finance from "../assets/Finance.png";
import NonCyclique from "../assets/NonCyclique.png";
import Cyclique from "../assets/Cyclique.png";
import Technologie from "../assets/Technologie.png";
import Service from "../assets/Service.png";
import Energie from "../assets/Energie.png";
import Materiaux from "../assets/Materiaux.png";

export const SECTORS_DATA = [
  {
    id: 1,
    name: "Produits industriels",
    en: "Industrials",
    categories:
      "BTP, Aérospatial, Automobile, Ferroviaire, Défense, Cybersécurité, Outillage, Transport maritime",
    description: "H",
    influence: "Influencé par la conjoncture et prix des composants",
    img: Industrie,
  },
  {
    id: 2,
    name: "Technologies de l'information",
    en: "Information Technology",
    categories: "",
    description: "H",
    influence: "Influencé par ",
    img: Technologie,
  },
  {
    id: 3,
    name: "Santé",
    en: "Health Care",
    categories:
      "Fournitures de soins de santé, services de santé, R&D pharmaceutique et médicale",
    description: "H",
    influence: "Influencé par ",
    img: Sante,
  },
  {
    id: 4,
    name: "Finances",
    en: "Financials",
    categories:
      "Banques, assureurs, immobilier, services financiers, investissements collectifs",
    description: "H",
    influence:
      "Influencé par les taux d'intérêt, marchés financiers et mesures fiscales",
    img: Finance,
  },
  {
    id: 5,
    name: "Consommation de base (essentielle, non cyclique, non durable)",
    en: "Consumer Staples",
    categories:
      "Consommation de détail, dentrées alimentaires, boissons, tabac, médicaments, produits ménagers, produits cosmétiques.",
    description: "H",
    influence:
      "Influencé par la conjoncture, la consommation, le pouvoir d'achat, le cours des produits agricoles",
    img: NonCyclique,
  },
  {
    id: 6,
    name: "Consommation discrétionnaire (non essentielle, cyclique)",
    en: "Consumer Discretionary",
    categories:
      "transport routier, habillement, loisirs, hôtellerie, luxe, tourisme, média, spectacles, publicités, services de divertissement",
    description: "H",
    influence: "Influencé par ",
    img: Cyclique,
  },
  {
    id: 7,
    name: "Services de communication",
    en: "Communication Services",
    categories: "lignes téléphoniques",
    description: "H",
    influence: "Influencé par ",
    img: Telecom,
  },

  {
    id: 8,
    name: "Matériaux",
    en: "Materials",
    categories:
      "métaux, produits chimiques, bois, ressources appliquées (sylviculture, papiers, conteneurs, emballages), ressources minérales (métalurgies, extraction, matériaux de construction)",
    description: "H",
    influence: "Influencé par le cours des matières premières et du pétrole",
    img: Materiaux,
  },
  {
    id: 9,
    name: "Services publics",
    en: "Utilities",
    categories:
      "électricité, gaz, adduction en eau, services académiques et éducatifs (école, collège, université, enseignement professionnel)",
    description: "H",
    influence: "Influencé par ",
    img: Service,
  },
  {
    id: 10,
    name: "Énergie",
    en: "Energy",
    categories:
      "Production, raffinage, transport du gaz, pétrole, fossile, renouvelables, nucléaire",
    description: "H",
    influence: "Influencé par ",
    img: Energie,
  },
];
