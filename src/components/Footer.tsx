import {
  COMPANY_NAME,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP,
} from "@/constants/urls";
import { Instagram, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-radial-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna de informações da empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-radial-orange mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Telefone:</p>
                  <p>{CONTACT_PHONE}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-radial-orange mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">E-mail:</p>
                  <p>{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-radial-orange mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Endereço:</p>
                  <p>
                    Avenida das Américas, 3500
                    <br />
                    Barra da Tijuca, {CONTACT_ADDRESS}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/sejaradial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-radial-orange/20 rounded-full flex items-center justify-center hover:bg-radial-orange/30 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-radial-orange/20 rounded-full flex items-center justify-center hover:bg-radial-orange/30 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna de horário de funcionamento e mensagem */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <p className="mb-6">
              Segunda a Sexta: 8h às 18h
              <br />
              Sábado: 8h às 13h
            </p>

            <h3 className="text-xl font-bold mb-4">
              Transformando vidas no Rio de Janeiro
            </h3>
            <p className="text-gray-300">
              Transformamos a maneira como os moradores do Rio de Janeiro
              consomem energia, oferecendo independência energética e economia
              real. Nosso compromisso vai além da instalação de painéis solares,
              trabalhamos para um futuro mais sustentável.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
