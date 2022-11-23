import AirbusLogo from "../assets/AirbusLogo.png";
import SanofiLogo from "../assets/SanofiLogo.png";
import TelekomLogo from "../assets/TelekomLogo.png";
import UnileverLogo from "../assets/UnileverLogo.png";
import RepsolLogo from "../assets/RepsolLogo.png";
import Industrie from "../assets/Industrie.png";
import Sante from "../assets/Sante.png";
import Telecom from "../assets/Telecom.png";
import NonCyclique from "../assets/NonCyclique.png";
import Energie from "../assets/Energie.png";

export const STOCKS_DATA = [
  {
    id: 1,
    img: AirbusLogo,
    name: "Airbus",
    market: "EURONEXT PARIS",
    value: 114,
    sector: "Industrie",
    sectorImg: Industrie,
  },
  {
    id: 2,
    img: SanofiLogo,
    name: "Sanofi",
    market: "EURONEXT PARIS",
    value: 87,
    sector: "Santé",
    sectorImg: Sante,
  },
  {
    id: 3,
    img: TelekomLogo,
    name: "Deutsche Telekom",
    market: "DEUTSCHE BOERSE AG",
    value: 19,
    sector: "Télécom",
    sectorImg: Telecom,
  },
  {
    id: 4,
    img: UnileverLogo,
    name: "Unilever",
    market: "LONDON STOCK EXCHANGE",
    value: 410,
    sector: "Consommation",
    sectorImg: NonCyclique,
  },
  {
    id: 5,
    img: RepsolLogo,
    name: "Repsol",
    market: "BOLSA DE MADRID",
    value: 14,
    sector: "Énergie",
    sectorImg: Energie,
  },
];
