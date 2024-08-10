import Card from "./Card";

interface CardProps {
  title: string;
  color: "purple" | "blue" | "orange" | "green";
}

interface CardListProps {
  cardList: CardProps[];
}

const CardList: React.FC<CardListProps> = ({ cardList }) => {
  return (
    <div className="relative flex flex-col md:flex-row flex-wrap items-center justify-center">
      {cardList.map((card, idx) => (
        <div
          key={idx}
          className={`transition-transform duration-700 w-full max-w-xs mt-6 md:mt-0
            ${idx === 0
              ? "md:translate-x-[-1rem] md:translate-y-[-4rem] lg:translate-x-[-2rem] lg:translate-y-[-6rem]"
              : idx === 1
                ? "md:translate-x-[6rem] md:translate-y-[-3rem] lg:translate-x-[5rem] lg:translate-y-[-3rem]"
                : idx === 2
                  ? "md:translate-x-[-4rem] md:translate-y-[-1rem] lg:translate-x-[-8rem] lg:translate-y-[0rem]"
                  : "md:-translate-x-[-6rem] md:-translate-y-[-4rem] lg:-translate-x-[-10rem] lg:-translate-y-[-3rem]"
            }`}
        >
          <Card title={card.title} color={card.color} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
