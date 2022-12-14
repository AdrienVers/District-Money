import React from "react";

interface LexiqueData {
  name: string;
  tag: string;
}

const LEXIQUE_DATA: LexiqueData[] = [
  {
    name: "Action",
    tag: "Produit financier",
  },
  {
    name: "AMF",
    tag: "Réglementation",
  },
  {
    name: "Obligation",
    tag: "Produit financier",
  },
];

/*
function Tagsbar() {
  const productFinancier = LEXIQUE_DATA.filter(item => item.tag === "Produit financier");
  const regulation = LEXIQUE_DATA.filter(item => item.tag === "Réglementation");

  return (
    <div>
      <p>{productFinancier[0].tag}</p>
      <p>{regulation[0].tag}</p>
    </div>
  );
}
*/

function Tagsbar() {

  const filteredData = LEXIQUE_DATA.filter(
    (item) => item.tag === "Produit financier"
  );
  return (
    <div>
      {filteredData.map((item, index) => {
        return <p key={index}>{item.tag}</p>;
      })}
    </div>
  );
}

export default Tagsbar;
