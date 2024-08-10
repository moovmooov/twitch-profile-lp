import { useState } from "react";
import { Menu, User } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full border-b py-5 border-dark-gray">
      <div className="px-8 container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <User width="24" className="text-medium-gray" />
          <p className="text-medium-gray text-xl font-bold">Twitch Profile</p>
        </div>

        <div className="hidden md:flex items-center gap-x-8">
          <a
            href="#"
            className="px-4 py-3 rounded-lg border text-white border-dark-gray"
          >
            Inicio
          </a>
          <a href="#" className="px-4 py-3 text-white border-dark-gray">
            Como usar?
          </a>
        </div>

        <div className="hidden md:flex">
          <a
            href="#"
            className="px-8 py-3 bg-purple text-white font-bold rounded"
          >
            Entrar em contato
          </a>
        </div>

        <button
          className="md:hidden flex items-center p-2 text-white"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-dark-gray z-50`}
      >
        <a
          href="#"
          className="block px-4 py-3 text-white border-dark-gray border-b"
        >
          Inicio
        </a>
        <a
          href="#"
          className="block px-4 py-3 text-white border-dark-gray border-b"
        >
          Como usar?
        </a>
        <a href="#" className="block px-4 py-3 text-white bg-purple">
          Entrar em contato
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
