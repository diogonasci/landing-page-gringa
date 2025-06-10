import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP,
} from "@/constants/urls";
import { Instagram, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-radial-orange rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Transformando a energia do sol em economia para os lares e
              empresas do Rio de Janeiro.
            </p>

            <div className="text-xs text-gray-400 space-y-1">
              <p>CNPJ: 12.345.678/0001-90</p>
              <p>Empresa 100% Brasileira</p>
            </div>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Endereço:</p>
                <p className="text-white">
                  Av. das Américas, 1000
                  <br />
                  Barra da Tijuca, Rio de Janeiro - RJ
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">Telefone:</p>
                <p className="text-white">{CONTACT_PHONE}</p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">Email:</p>
                <p className="text-white">{CONTACT_EMAIL}</p>
              </div>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais e Certificações */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Redes Sociais
            </h3>

            <div className="flex space-x-3 mb-6">
              <a
                href="https://instagram.com/sejaradial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-radial-orange transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/sejaradial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-radial-orange transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-radial-orange transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Certificações/Selos */}
            <div className="space-y-3">
              <div className="bg-white text-gray-900 px-3 py-2 rounded text-xs font-semibold text-center">
                🔒 SITE 100% SEGURO
              </div>
              <div className="bg-green-600 text-white px-3 py-2 rounded text-xs font-semibold text-center">
                ✓ EMPRESA 100% BRASILEIRA
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
