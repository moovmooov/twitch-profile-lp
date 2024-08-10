import { twMerge } from "tailwind-merge";

type CardProps = {
  title: string;
  color: "orange" | "green" | "blue" | "purple";
};

function Card({ title, color }: CardProps) {
  return (
    <div
      className={twMerge(
        `max-w-96 w-full px-4 py-4 bg-gradient-${color} space-y-1 rounded-lg`
      )}
    >
      <h1 className="font-bold text-2xl">{title}</h1>
      <p>
        Lorem Ipsum <span className="font-bold">+1M</span> blocked messages
      </p>
    </div>
  );
}

export default Card;
