import React from "react";
import Image from "next/image";

// Define the data card types
type DataCardType = "standard" | "image" | "stat" | "background";

// Define the base data card structure
interface BaseDataCard {
  id: number;
  type: DataCardType;
}

// Define the standard card structure
interface StandardDataCard extends BaseDataCard {
  type: "standard";
  image: string;
  title: string;
  description: string;
}

// Define the image card structure
interface ImageDataCard extends BaseDataCard {
  type: "image";
  image: string;
}

// Define the stat card structure
interface StatDataCard extends BaseDataCard {
  type: "stat";
  bgColor: string;
  icon: string;
  stat: string;
  title: string;
  description: string;
  textColor: string;
  descriptionColor: string;
}

// Define the background card structure
interface BackgroundDataCard extends BaseDataCard {
  type: "background";
  backgroundImage: string;
  title: string;
  description: string;
}

// Union type for all data cards
type DataCard = StandardDataCard | ImageDataCard | StatDataCard | BackgroundDataCard;

// Define the column structure
interface DataColumn {
  id: number;
  cards: DataCard[];
}

// Data security data
const dataSecurityData: DataColumn[] = [
  {
    id: 1,
    cards: [
      {
        id: 1,
        type: "standard",
        image: "/images/about/ai-logo.png",
        title: "AI For Absolute Security",
        description: "Our platform uses advanced encryption protocols to ensure your sensitive",
      },
    ],
  },
  {
    id: 2,
    cards: [
      {
        id: 2,
        type: "image",
        image: "/images/about/ai-img-1.jpg",
      },
    ],
  },
  {
    id: 3,
    cards: [
      {
        id: 3,
        type: "stat",
        bgColor: "bg_primary",
        icon: "/images/icons/shield-white.svg",
        stat: "100%",
        title: "Security Guarantee",
        description: "AI Encryption keeps your data safe.",
        textColor: "text-white",
        descriptionColor: "text-offwhite",
      },
      {
        id: 4,
        type: "stat",
        bgColor: "bg-white",
        icon: "/images/icons/shield-blue.svg",
        stat: "24/7",
        title: "Real- time monitoring",
        description: "Track activity and get security analytics 24/7",
        textColor: "text-title",
        descriptionColor: "",
      },
    ],
  },
  {
    id: 4,
    cards: [
      {
        id: 5,
        type: "background",
        backgroundImage: "/images/about/data-card-bg-2.jpg",
        title: "Military - Grade Encryption",
        description: "advanced encryption protocols to ensure your sensitive",
      },
    ],
  },
];

// Component to render a data card
const DataCard: React.FC<{ card: DataCard }> = ({ card }) => {
  switch (card.type) {
    case "standard":
      return (
        <div className="data-card style-one bg-f d-flex flex-wrap flex-column text-center round-10">
          <div className="data-logo rounded-circle">
            <Image
              src={card.image}
              alt={card.title}
              width={134}
              height={134}
              className="rounded-circle"
            />
          </div>
          <h3 className="fs-24 fw-semibold mb-15">{card.title}</h3>
          <p className="mb-0">{card.description}</p>
        </div>
      );
    case "image":
      return (
        <div className="data-card-img bg-f round-10 mb-30">
          <Image
            src={card.image}
            alt="Data"
            width={570}
            height={796}
            className="round-10"
          />
        </div>
      );
    case "stat":
      return (
        <div className={`data-card ${card.bgColor === "bg_primary" ? "style-two" : "style-three"} ${card.bgColor} round-10 mb-30`}>
          <div className="data-card-header fs-30 font-secondary fw-semibold d-flex flex-wrap align-items-center mb-15">
            <span className="data-icon d-flex flex-wrap align-items-center justify-content-center rounded-circle">
              <Image
                src={card.icon}
                alt="Icon"
                width={24}
                height={26}
              />
            </span>
            <span className={`data-header-text ${card.textColor}`}>{card.stat}</span>
          </div>
          <h3 className={`fs-20 fw-bold ${card.textColor} mb-1`}>{card.title}</h3>
          <p className={`${card.descriptionColor} mb-0`}>{card.description}</p>
        </div>
      );
    case "background":
      return (
        <div
          className="data-card style-four position-relative z-1 bg-f d-flex flex-column align-items-center justify-content-end round-10 text-center"
          style={{
            backgroundImage: `url("${card.backgroundImage}")`,
          }}
        >
          <h3 className="fs-20 text-white mb-10">{card.title}</h3>
          <p className="text-offwhite mb-0">{card.description}</p>
        </div>
      );
    default:
      return null;
  }
};

const DataSecurity: React.FC = () => {
  return (
    <>
      <div className="data-section style-one pt-130 pb-100 round-20">
        <div className="container style-one">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-10 text-center">
              <span className="section-subtitle style-two fs-13 fw-medium ls-1 d-inline-block bg_secondary text-title round-oval mb-15">
                <Image
                  src="/images/icons/lock.svg"
                  alt="Icon"
                  width={12}
                  height={15}
                />
                DATA SECURITY
              </span>
              <h2 className="section-title style-one font-secondary fw-medium mb-40">
                Secure Your Data With Zero Trust Architecture And Controls
              </h2>
            </div>
          </div>
          <div className="row">
            {dataSecurityData.map((column) => (
              <div key={column.id} className="col-xl-3 col-md-6 mb-30">
                {column.cards.map((card) => (
                  <DataCard key={card.id} card={card} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSecurity;