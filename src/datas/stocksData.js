import AirbusLogo from "../assets/AirbusLogo.png";
import SanofiLogo from "../assets/SanofiLogo.png";
import TelekomLogo from "../assets/TelekomLogo.png";
import UnileverLogo from "../assets/UnileverLogo.png";
import RepsolLogo from "../assets/RepsolLogo.png";

export const STOCKS_TITLE_DATA = [
  {
    id: 1,
    logo: "Logotype",
    name: "Nom de l'entreprise",
    market: "Marché boursier",
    value: "Valeur",
    sector: "Secteur",
  },
];

export const STOCKS_DATA = [
  {
    id: 1,
    logo: AirbusLogo,
    name: "Airbus",
    market: "EURONEXT PARIS",
    value: 114,
    nextValue: 120,
    sector: "Industrie",
    quantity: 0,
  },
  {
    id: 2,
    logo: SanofiLogo,
    name: "Sanofi",
    market: "EURONEXT PARIS",
    value: 87,
    nextValue: 90,
    sector: "Santé",
    quantity: 0,
  },
  {
    id: 3,
    logo: TelekomLogo,
    name: "Deutsche Telekom",
    market: "DEUTSCHE BOERSE AG",
    value: 19,
    nextValue: 15,
    sector: "Télécom",
    quantity: 0,
  },
  {
    id: 4,
    logo: UnileverLogo,
    name: "Unilever",
    market: "LONDON STOCK EXCHANGE",
    value: 410,
    nextValue: 400,
    sector: "Consommation",
    quantity: 0,
  },
  {
    id: 5,
    logo: RepsolLogo,
    name: "Repsol",
    market: "BOLSA DE MADRID",
    value: 14,
    nextValue: 40,
    sector: "Énergie",
    quantity: 0,
  },
];
