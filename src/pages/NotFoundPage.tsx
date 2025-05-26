import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-16 pb-8 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary-900 mb-6">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Página No Encontrada</h2>
        <p className="text-gray-600 mb-8">
          El espacio de trabajo que buscas podría haber sido movido o no existe. 
          ¡Te ayudaremos a encontrar un mejor espacio para trabajar!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            Volver al Inicio
          </Link>
          <Link to="/search" className="btn btn-secondary flex items-center justify-center">
            <Search size={18} className="mr-2" />
            Buscar Espacios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;