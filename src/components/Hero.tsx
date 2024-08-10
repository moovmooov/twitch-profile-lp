import HeroImage from "../assets/hero-image.png";
import Card from "./Card";

function Hero() {
  const cardList: {
    title: string;
    color: "purple" | "blue" | "orange" | "green";
  }[] = [
    {
      title: "Pronomes",
      color: "purple",
    },
    {
      title: "Atividades",
      color: "blue",
    },
    {
      title: "Customização",
      color: "orange",
    },
    {
      title: "Lorem",
      color: "green",
    },
  ];

  const getTranslateClasses = (idx: number) => {
    const translateValues = [
      "translate-x-[-2rem] translate-y-[-10rem]",
      "translate-x-[15rem] translate-y-[-3rem]",
      "translate-x-[-8rem] translate-y-[0rem]",
      "-translate-x-[-10rem] -translate-y-[-8rem]",
    ];
    return translateValues[idx % translateValues.length];
  };

  return (
    <header className="w-full relative">
      <div className="container mx-auto flex items-center mt-40 relative">
        <div className="flex-1 pr-8">
          <div className="mb-3 font-title">
            <span className="text-[2rem] text-purple">
              Bem vind<span className="">x</span>
            </span>
            <h1 className="text-6xl">Twitch Profile</h1>
          </div>
          <p className="mb-8 font-medium text-medium-gray max-w-xl">
            Meet <span className="">Twitch Profile</span>! Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed sollicitudin tellus quam, sed
            bibendum dui gravida ut. Integer vestibulum enim a ipsum egestas
            dapibus.
          </p>
          <a href="#" className="px-8 py-4 bg-purple font-bold rounded">
            Instalar
          </a>
        </div>
        <div className="relative flex-1">
          <img
            src={HeroImage}
            alt="hero image"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {cardList.map((card, idx) => (
              <div
                key={idx}
                className={`absolute transition-transform duration-700 ${
                  getTranslateClasses(idx)
                } w-full max-w-xs`}
              >
                <Card title={card.title} color={card.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
