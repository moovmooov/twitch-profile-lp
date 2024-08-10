import { twMerge } from "tailwind-merge";

type CardProps = {
  title: string;
  color: "orange" | "green" | "blue" | "purple";
};

const gradientClasses = {
  orange: "bg-gradient-orange",
  green: "bg-gradient-green",
  blue: "bg-gradient-blue",
  purple: "bg-gradient-purple",
};

function Card({ title, color }: CardProps) {
  const bgColor = gradientClasses[color] || "bg-gradient-blue";

  return (
    <div
      className={twMerge(
        `max-w-96 w-full px-4 py-4 ${bgColor} space-y-1 rounded-lg`
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
