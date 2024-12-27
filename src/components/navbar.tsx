import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou nome da aplicação */}
        <Link to="/" className="text-xl font-semibold">
          ProfHub
        </Link>

        {/* Links de navegação */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>

          {/* Dropdown de perfil */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Avatar className="w-6 h-6">
                  {/* Imagem do avatar */}
                  <img src="/images/avatar.jpg" alt="User Avatar" />
                </Avatar>
                <span>Perfil</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuItem>
              <Link to="/profile">Meu Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/logout">Sair</Link>
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
