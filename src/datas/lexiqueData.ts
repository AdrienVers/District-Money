export interface LexiqueData {
  name: string;
  definition: string;
  tag: string;
}

export interface LexiqueTags {
  tag: string;
}

export const LEXIQUE_DATA: LexiqueData[] = [
  {
    name: "Action",
    definition:
      "Titre de propriété d'une part du capital d'une société. Lorsque vous possédez des actions d'une société, cela signifie que vous êtes l'un de ses nombreux propriétaires (actionnaires), vous obtenez ainsi un droit de vote lors des assemblées générales.",
    tag: "Produit financier",
  },
  {
    name: "AMF (Autorité des marchés financiers)",
    definition:
      "est une autorité publique indépendante ayant pour mission de veiller à la protection de l'épargne investie en produits financiers, à l'information des investisseurs et au bon fonctionnement des marchés. Cet organisme régulateur des marchés financiers est en charge d'informer les épargnants, de réglementer les produits d'épargne et de surveiller les marchés.",
    tag: "Réglementation",
  },
  {
    name: "Assemblée générale",
    definition:
      "Moment privilégié pour les actionnaires (propriétaires des actions d'une société) de s'informer sur la situation de l'entreprise, de s'exprimer sur sa gestion et de débattre sur le versemment ou non des dividendes aux titulaires d'actions.",
    tag: "Gestion des investissements",
  },
  {
    name: "Blockchain",
    definition:
      "La blockchain est une technologie de stockage et de transmission d'informations, transparente, sécurisée, et fonctionnant sans organe central de contrôle.",
    tag: "Technologie financière",
  },
  {
    name: "Broker",
    definition:
      "Un broker (également appelé courtier) est un intermédiaire financier en charge d'exécuter nos ordres d'achat ou de ventes d'actifs en Bourse et par lequel on doit obligatoirement passer pour gérer nos placements. Tout courtier en ligne est soumis aux mêmes exigences qu'une banque, et se doit de vous proposer de vraies garanties.",
    tag: "Courtage",
  },
  {
    name: "CTO (Compte titres ordinaire)",
    definition:
      "Compte sur lequel les investisseurs peuvent acheter et vendre des titres (actions, obligations, fonds communs de placement, etc.). Le CTO ne permet pas de bénéficier d'avantages fiscaux (contrairement au PEA), mais il n'est pas soumis à des plafonds de versement et de détention.",
    tag: "Compte",
  },
  {
    name: "Cryptomonnaie",
    definition:
      "La cryptomonnaie est monnaie existant sous forme  virtuelle et utilisant la cryptographie pour sécuriser les transactions.",
    tag: "Technologie financière",
  },
  {
    name: "Dividende",
    definition:
      "Part du bénéfice distribuée aux actionnaires, dont le versement ou non est décidé à l'assemblée générale des actionnaires.",
    tag: "Rendement financier",
  },
  {
    name: "DSP 2 (Directive sur les services de paiement)",
    definition:
      "Directive européenne mise en application le 14 septembre 2019, ayant pour objectifs de mieux informer et protéger les consommateurs face à la cybercriminalité, au vol de données, aux fraudes, et de garantir un accès équitable et ouvert aux marchés de paiement.",
    tag: "Réglementation",
  },
  {
    name: "ETF (Exchange traded funds ou Trackers)",
    definition:
      "Instrument financier destiné à répliquer fidèlement les variations d'un indice (CAC 40, FTSE 100, etc.), à la hausse comme à la baisse. Lorsque vous achetez des parts d'un ETF, vous devenez actionnaire de ce fonds, et vous avez droit à une partie des bénéfices (comme de potentiels dividendes).",
    tag: "Produit financier",
  },
  {
    name: "Indice",
    definition:
      "Outil utilisé pour mesurer l'évolution d'un groupe de titres ou d'actifs financiers. Les indices permettent ainsi d'analyser les performances des marchés financiers.",
    tag: "Indicateur",
  },
  {
    name: "Moins-value",
    definition:
      "Perte enregistée au moment de la cession (vente) d'un actif, calculée en faisant la différence entre le prix d'achat et le prix de vente (y compris avec les frais de transaction).",
    tag: "Rendement financier",
  },
  {
    name: "Obligation",
    definition:
      "Titre de créance négociable représentant une part de la dette d'un État ou d'une entreprise.",
    tag: "Produit financier",
  },
  {
    name: "Obligation conversible (OC)",
    definition:
      "Obligation pouvant être échangée à tout moment contre une nouvelle action de la société émettrice.",
    tag: "Produit financier",
  },
  {
    name: "OPCVM (Organisme de placement collectif en valeurs mobilières)",
    definition:
      "Produit financier permettant aux investisseurs de mettre en commun leurs économies et de les placer sur les marchés financiers. Les OPCVM sont gérés par des sociétés de gestion agréées qui s'occupent de choisir les actifs dans lesquels l'argent est investi. Ce sont souvent des fonds communs de placement (SICAV ou FCP).",
    tag: "Produit financier",
  },
  {
    name: "Option",
    definition:
      "Contrat donnant à son titulaire le droit (et non l'obligation) d'acheter ou de vendre un actif sous-jacent à un prix et à une date déterminée à l'avance.",
    tag: "Produit financier",
  },
  {
    name: "PEA (Plan d'épargne en action)",
    definition:
      "Compte sur lequel les investisseurs peuvent placer de l'argent pour acheter des actions de sociétés françaises ou de l'Union européenne (avec un plafond de versement est fixé à 150 000 €). Il n'est pas possible d'avoir plus d'un PEA par personne en revanche, ce compte permet de bénéficier d'avantages fiscaux après 5 ans.",
    tag: "Compte",
  },
  {
    name: "PER (Price Earning Ratio)",
    definition:
      "Rapport entre le cours d'une action et le bénéfice de l'action (BPA). En pratique, il permet d'indiquer combien d'années de bénéfices sont nécessaires pour rembourser le prix d'une action.",
    tag: "Indicateur",
  },
  {
    name: "Portefeuille",
    definition:
      "Ensemble d'actifs financiers détenus par un investisseur (actions, obligations, fonds communs de placement, devises, matières premières, etc.). Il est préférable de diversifier les investissements dans son portefeuille afin de réduire le risque global et d'optimiser les rendements.",
    tag: "Gestion des investissements",
  },
  {
    name: "Plus-value",
    definition:
      "Gain enregisté au moment de la cession (vente) d'un actif, calculée en faisant la différence entre le prix d'achat et le prix de vente (y compris avec les frais de transaction).",
    tag: "Rendement financier",
  },
  {
    name: "SICAV (Société d'investissement à capital variable)",
    definition:
      "Société de gestion de patrimoine gérées par des profesionnels permettant aux investisseurs de mettre en commun leurs économies et de les placer sur les marchés financiers.",
    tag: "Produit financier",
  },
  {
    name: "SRD (Service de règlement différé)",
    definition:
      "Service bancaire qui permet aux investisseurs d'acheter ou de vendre des actions cotées en bourse de manière décalée par rapport au marché, c'est-à-dire que l'ordre d'achat ou de vente est exécuté à une date ultérieure (généralement 2 jours ouvrés après la date de l'ordre), ce qui permet aux investisseurs de profiter des fluctuations des cours des actions, ainsi d'acheter à un cours bas et de vendre à un cours haut.",
    tag: "Produit finacier",
  },
  {
    name: "Turbo",
    definition:
      "Produit dérivé permettant aux investisseurs de spéculer sur l'évolution des prix des actifs, tout en bénéficiant d'un effet de levier.",
    tag: "Produit financier",
  },
  {
    name: "Valeur mobilière",
    definition:
      "Terme désignant tous les titres négociables cotés ou non en Bourse.",
    tag: "Produit financier",
  },
  {
    name: "Warrant",
    definition:
      "Produit dérivé complexe ayant le caractère d'une option et proposé par un établissement financier spécialisé. Les warrants sont principalement liés à des actions ou indices boursiers (tandis que les options peuvent être plus générales avec des actions, indices, devises, taux d'intérêt, etc.).",
    tag: "Produit financier",
  },
];

export const LEXIQUE_TAGS: LexiqueTags[] = [
  {
    tag: "Tous",
  },
  {
    tag: "Réglementation",
  },
  {
    tag: "Produit financier",
  },
  {
    tag: "Gestion des investissements",
  },
  {
    tag: "Technologie financière",
  },
  {
    tag: "Indicateur",
  },
  {
    tag: "Rendement financier",
  },
  {
    tag: "Courtage",
  },
  {
    tag: "Compte",
  },
];
