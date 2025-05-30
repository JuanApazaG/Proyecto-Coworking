import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Calendar, Star, ChevronLeft, ChevronRight, Wifi, Coffee, Power } from 'lucide-react';
import { workspaces } from '../data/workspaces';
import WorkspaceCard from '../components/workspace/WorkspaceCard';
import MapComponent from '../components/map/MapComponent';
import fondoImage from '../assets/images/fondo.webp';

const HomePage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  
  // Filter popular workspaces for the featured section
  const featuredWorkspaces = workspaces.filter(workspace => workspace.popular);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={fondoImage}
            alt="Workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/50"></div>
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Encuentra tu Espacio de Trabajo Ideal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Elige dónde trabajar o estudiar con comodidad y buena conexión.
            </p>
            
            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div className="flex items-center bg-gray-100 rounded-lg p-3 mb-4">
                <MapPin size={20} className="text-gray-500 mr-2" />
                <select
                    className={`bg-transparent border-none outline-none w-full
                      ${selectedCity === "" ? "text-gray-400" : "text-gray-800"}
                      placeholder-gray-500`}
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="" disabled>
                      ¿Dónde quieres trabajar?
                    </option>
                    <option value="sucre" className="text-gray-800">Sucre</option>
                    <option value="la-paz" className="text-gray-800">La Paz</option>
                    <option value="santa-cruz" className="text-gray-800">Santa Cruz</option>
                    <option value="cochabamba" className="text-gray-800">Cochabamba</option>
                    <option value="tarija" className="text-gray-800">Tarija</option>
                    <option value="oruro" className="text-gray-800">Oruro</option>
                    <option value="potosi" className="text-gray-800">Potosí</option>
                  </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Tipo de Espacio</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg text-gray-800">
                    <option>Cualquier Tipo</option>
                    <option>Coworking</option>
                    <option>Cafetería</option>
                    <option>Biblioteca</option>
                    <option>Lobby de Hotel</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Fecha</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Rango de Precio</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg text-gray-800">
                    <option>Cualquier Precio</option>
                    <option>Bs. 0-5/hora</option>
                    <option>Bs. 5-15/hora</option>
                    <option>Bs. 15-30/hora</option>
                    <option>Bs. 30+/hora</option>
                  </select>
                </div>
              </div>
              
              <Link 
                to={`/search${selectedCity ? `?city=${selectedCity}` : ''}`}
                className="btn btn-primary w-full flex items-center justify-center"
              >
                <Search size={18} className="mr-2" />
                Buscar Espacios
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/search?type=coworking" 
                className="badge bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                Espacios Coworking
              </Link>
              <Link 
                to="/search?type=cafe" 
                className="badge bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                Cafeterías
              </Link>
              <Link 
                to="/search?type=library" 
                className="badge bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                Bibliotecas
              </Link>
              <Link 
                to="/search?type=hotel" 
                className="badge bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                Lobbies de Hoteles
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Workspaces Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Espacios Destacados</h2>
              <p className="text-gray-600">Descubre los lugares mejor valorados para trabajar y colaborar</p>
            </div>
            
            <Link 
              to="/search" 
              className="flex items-center text-primary-900 font-medium hover:text-primary-700 transition-colors mt-4 md:mt-0"
            >
              Ver Todos
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorkspaces.map(workspace => (
              <WorkspaceCard key={workspace.id} workspace={workspace} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Encuentra Espacios Cerca de Ti</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora los espacios disponibles en tu área y descubre el entorno perfecto para tu estilo de trabajo
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <MapComponent height="h-[500px]" showInfoOnHover />
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/search" className="btn btn-primary">
              Explorar Vista de Mapa
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Cómo Funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra y reserva tu espacio de trabajo perfecto en tres simples pasos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-6 rounded-xl bg-white shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-primary-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Buscar</h3>
              <p className="text-gray-600">
                Encuentra espacios basados en tu ubicación, preferencias y requisitos
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center p-6 rounded-xl bg-white shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-primary-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Explorar</h3>
              <p className="text-gray-600">
                Visualiza detalles del espacio, comodidades, reseñas y disponibilidad
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center p-6 rounded-xl bg-white shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-primary-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reservar</h3>
              <p className="text-gray-600">
                Reserva tu espacio para las horas o días que lo necesites
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fff]">¿Listo para encontrar tu espacio de trabajo perfecto?</h2>
            <p className="text-xl text-white/80 mb-8">
              Únete a miles de nómadas digitales, freelancers y estudiantes que han encontrado su entorno de trabajo ideal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search" className="btn btn-primary bg-white text-primary-900 hover:bg-gray-100">
                Encontrar Espacio
              </Link>
              <Link to="/dashboard" className="btn btn-secondary border-white text-[rgb(38_68_153_/_var(--tw-bg-opacity))] hover:bg-primary-800">
                Listar tu Espacio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;