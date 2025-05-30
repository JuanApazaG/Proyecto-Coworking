import React from 'react';
// import { Link } from 'react-router-dom'; // Eliminamos esta importación
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Logo color="white" />
              <span className="ml-2 text-xl font-bold">SumaqHub</span>
            </div>
            <p className="text-gray-400 mb-6">
              Conectando nómadas digitales, freelancers y estudiantes con espacios de trabajo productivos desde 2025.
            </p>
            <div className="flex space-x-4">
              {/* Enlaces de redes sociales (dejar como está si ya son '#' o URLs dummy) */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                {/* Cambiado de Link a a */}
                <a className="text-gray-400 hover:text-white transition-colors">
                  Inicio 
                </a>
              </li>
              <li>
                {/* Cambiado de Link a a */}
                <a className="text-gray-400 hover:text-white transition-colors">
                  Buscar Espacios 
                </a>
              </li>
              <li>
                {/* Cambiado de Link a a */}
                <a className="text-gray-400 hover:text-white transition-colors">
                  Mis Reservas 
                </a>
              </li>
              <li>
                {/* Cambiado de Link a a */}
                <a className="text-gray-400 hover:text-white transition-colors">
                  Panel de Control 
                </a>
              </li>
            </ul>
          </div>

          {/* Workspace Types */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tipos de Espacios</h4>
            <ul className="space-y-2">
              <li>
                {/* Cambiado de Link a a */}
                <a className="text-gray-400 hover:text-white transition-colors">
                  Espacios de Coworking 
                </a>
              </li>
              <li>
                {/* Cambiado de Link a a */}
                <a className="text-gray-400 hover:text-white transition-colors">
                  Cafeterías 
                </a>
              </li>
              <li>
                {/* Cambiado de Link a a */}
                <a className="text-gray-400 hover:text-white transition-colors">
                  Bibliotecas
                </a>
              </li>
              <li>
                {/* Cambiado de Link a a */}
                <a className="text-gray-400 hover:text-white transition-colors">
                  Lobbies de Hoteles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contáctanos</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400" />
                <a href="mailto:info@sumaqhub.com" className="text-gray-400 hover:text-white transition-colors">
                  info@sumaqhub.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400" />
                {/* Número de teléfono actualizado */}
                <span className="text-gray-400">
                  +591 (78790716)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SumaqHub. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            {/* Cambiado de Link a a */}
            <a className="text-gray-500 hover:text-white text-sm transition-colors">
              Términos de Servicio
            </a>
            {/* Cambiado de Link a a */}
            <a className="text-gray-500 hover:text-white text-sm transition-colors">
              Política de Privacidad 
            </a>
            {/* Cambiado de Link a a */}
            <a className="text-gray-500 hover:text-white text-sm transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;