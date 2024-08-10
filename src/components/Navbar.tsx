import { User } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full border-b py-5 border-dark-gray">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <User width="24" className="text-medium-gray" />
          <p className="text-medium-gray text-xl font-bold">Twitch Profile</p>
        </div>

        <div className="flex items-center gap-x-8">
          <a href="#" className="px-4 py-3 rounded-lg border  border-dark-gray">
            Inicio
          </a>
          <a href="#" className="px-4 py-3  border-dark-gray">
            Como usar?
          </a>
        </div>

        <div>
          <a href="#" className="px-8 py-3 bg-purple  font-bold rounded">
            Entrar em contato
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
