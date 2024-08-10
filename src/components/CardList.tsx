import { useEffect, useState } from "react";
import Card from "./Card";

interface CardProps {
  title: string;
  color: "purple" | "blue" | "orange" | "green";
}

interface CardListProps {
  cardList: CardProps[];
}

const CardList: React.FC<CardListProps> = ({ cardList }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTranslateClasses = (idx: number) => {
    const isLargeScreen = viewportWidth >= 1024;
    const isMediumScreen = viewportWidth < 1024 && viewportWidth >= 765;
    const translateValues = isLargeScreen
      ? [
          "translate-x-[-2rem] translate-y-[-6rem]",
          "translate-x-[5rem] translate-y-[-3rem]",
          "translate-x-[-8rem] translate-y-[0rem]",
          "-translate-x-[-10rem] -translate-y-[-3rem]",
        ]
      : isMediumScreen
      ? [
          "translate-x-[-1rem] translate-y-[-4rem]",
          "translate-x-[6rem] translate-y-[-3rem]",
          "translate-x-[-4rem] translate-y-[-1rem]",
          "-translate-x-[-6rem] -translate-y-[-4rem]",
        ]
      : [
          "translate-x-[-1rem] translate-y-[-12rem]",
          "translate-x-[9rem] translate-y-[-6rem]",
          "translate-x-[1rem] translate-y-[-1rem]",
          "-translate-x-[-5rem] -translate-y-[-5rem]",
        ];

    return translateValues[idx % translateValues.length];
  };

  const getCardClasses = () => {
    if (viewportWidth < 765) {
      return "flex flex-col items-center";
    } else {
      return "absolute flex flex-wrap items-center justify-center";
    }
  };

  return (
    <div className={getCardClasses()}>
      {cardList.map((card, idx) => (
        <div
          key={idx}
          className={`transition-transform duration-700 ${
            viewportWidth >= 765 ? getTranslateClasses(idx) : "mt-6"
          } w-full max-w-xs`}
        >
          <Card title={card.title} color={card.color} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
