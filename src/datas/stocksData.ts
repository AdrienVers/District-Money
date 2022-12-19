interface StocksTitleData {
  id: number;
  logo: string;
  name: string;
  market: string;
  value: string;
  sector: string;
}

export const STOCKS_TITLE_DATA: StocksTitleData[] = [
  {
    id: 1,
    logo: "Logotype",
    name: "Nom de l'entreprise",
    market: "Marché boursier",
    value: "Valeur",
    sector: "Secteur",
  },
];
