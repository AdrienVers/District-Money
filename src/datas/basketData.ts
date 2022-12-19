interface BasketTitleData {
  id: number;
  label: string;
  quantity: string;
  initialPrice: string;
  rate: string;
  value: string;
  gain: string;
}

interface BasketData {
  id: number;
  label: string;
  quantity: number;
  initialPrice: number;
  rate: number;
  value: number;
  gain: number;
}

export const BASKET_TITLE_DATA: BasketTitleData[] = [
  {
    id: 1,
    label: "Libellé",
    quantity: "Qté",
    initialPrice: "Prix d'achat",
    rate: "Cours actuel",
    value: "Valeur",
    gain: "Gain",
  },
];

export const BASKET_DATA: BasketData[] = [
  {
    id: 1,
    label: "Airbus",
    quantity: 3,
    initialPrice: 114,
    rate: 120,
    value: 360,
    gain: 18,
  },
];
