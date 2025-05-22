import { FORM_URL } from "@/constants/urls";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-radial-darker py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#como-funciona"
              className="text-white hover:text-radial-orange transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#depoimentos"
              className="text-white hover:text-radial-orange transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#por-que-escolher"
              className="text-white hover:text-radial-orange transition-colors"
            >
              Por que Escolher
            </a>
            <a
              href="#contato"
              className="bg-radial-orange text-white px-6 py-2 rounded-md font-medium hover:brightness-110 transition-all"
            >
              Análise Gratuita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#como-funciona"
                className="text-white hover:text-radial-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#depoimentos"
                className="text-white hover:text-radial-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="#por-que-escolher"
                className="text-white hover:text-radial-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Por que Escolher
              </a>
              <a
                href={FORM_URL}
                className="bg-radial-orange text-white px-6 py-2 rounded-md font-medium inline-block text-center hover:brightness-110 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Análise Gratuita
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
