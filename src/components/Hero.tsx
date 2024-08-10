import { isFirefox, isChrome } from "react-device-detect";
import HeroImage from "../assets/hero-image.png";
import CardList from "./CardList";
import { Chrome } from "lucide-react"

function Hero() {

  const handleTextBrowser = () => {
    if (isFirefox) {
      return <span className="flex items-center gap-x-3">Instale pelo Firefox</span>
    }
    if (isChrome) {
      return <span className="flex items-center gap-x-3"><Chrome />Instale pelo Chrome</span>
    }
    return 'Não está disponível pra este navegador de merda ai';
  }

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

  return (
    <header className="w-full relative">
      <div className="px-8 md:px-1 container mx-auto flex flex-col md:flex-row items-center mt-20 md:mt-40 relative">
        <div className="flex-1 pr-0 md:pr-8 text-center md:text-left">
          <div className="mb-3 font-title">
            <span className="text-[2rem] text-purple">
              Bem vind<span className="text-white">x</span>
            </span>
            <h1 className="text-4xl md:text-6xl">Twitch Profile</h1>
          </div>
          <p className="mb-8 font-medium text-medium-gray max-w-xl mx-auto md:mx-0">
            Meet <span className="text-white">Twitch Profile</span>! Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed sollicitudin tellus
            quam, sed bibendum dui gravida ut. Integer vestibulum enim a ipsum
            egestas dapibus.
          </p>
          <a
            href="#"
            className="px-8 py-4 bg-purple font-bold rounded w-full md:w-[initial] inline-flex "
          >
            {handleTextBrowser()}
          </a>
        </div>
        <div className="relative flex-1 mt-10 md:mt-0">
          <img
            src={HeroImage}
            alt="hero image"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-wrap items-center justify-center">
            <CardList cardList={cardList} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
