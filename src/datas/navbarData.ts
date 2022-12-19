interface NavbarData {
  id: number;
  name: string;
  path: string;
}

export const NAVBAR_DATA: NavbarData[] = [
  {
    id: 1,
    name: "Secteurs financiers",
    path: "/secteurs",
  },
  {
    id: 2,
    name: "S'initier à la Bouse",
    path: "/bourse",
  },
  {
    id: 4,
    name: "Lexique",
    path: "/lexique",
  },
];
