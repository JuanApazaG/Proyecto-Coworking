import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Calendar, Star, ChevronLeft, ChevronRight, Wifi, Coffee, Power } from 'lucide-react';
import { workspaces } from '../data/workspaces';
import WorkspaceCard from '../components/workspace/WorkspaceCard';
import MapComponent from '../components/map/MapComponent';

const HomePage: React.FC = () => {
  // Filter popular workspaces for the featured section
  const featuredWorkspaces = workspaces.filter(workspace => workspace.popular);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/7172089/pexels-photo-7172089.jpeg" 
            alt="Workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/50"></div>
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Ideal Workspace
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover coworking spaces, cafes, and libraries perfect for 
              digital nomads, freelancers, and students.
            </p>
            
            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div className="flex items-center bg-gray-100 rounded-lg p-3 mb-4">
                <MapPin size={20} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Where do you want to work?"
                  className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Workspace Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg text-gray-800">
                    <option>Any Type</option>
                    <option>Coworking</option>
                    <option>Cafe</option>
                    <option>Library</option>
                    <option>Hotel Lobby</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Price Range</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg text-gray-800">
                    <option>Any Price</option>
                    <option>$0-$5/hour</option>
                    <option>$5-$15/hour</option>
                    <option>$15-$30/hour</option>
                    <option>$30+/hour</option>
                  </select>
                </div>
              </div>
              
              <Link 
                to="/search" 
                className="btn btn-primary w-full flex items-center justify-center"
              >
                <Search size={18} className="mr-2" />
                Find Workspaces
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/search?type=coworking" 
                className="badge bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                Coworking Spaces
              </Link>
              <Link 
                to="/search?type=cafe" 
                className="badge bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                Cafes
              </Link>
              <Link 
                to="/search?type=library" 
                className="badge bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                Libraries
              </Link>
              <Link 
                to="/search?type=hotel" 
                className="badge bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                Hotel Lobbies
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
              <h2 className="text-3xl font-bold mb-2">Featured Workspaces</h2>
              <p className="text-gray-600">Discover top-rated places to work and collaborate</p>
            </div>
            
            <Link 
              to="/search" 
              className="flex items-center text-primary-900 font-medium hover:text-primary-700 transition-colors mt-4 md:mt-0"
            >
              View All
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
            <h2 className="text-3xl font-bold mb-2">Find Workspaces Near You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore available workspaces in your area and discover the perfect environment for your work style
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <MapComponent height="h-[500px]" showInfoOnHover />
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/search" className="btn btn-primary">
              Explore Map View
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find and book your perfect workspace in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-6 rounded-xl bg-white shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-primary-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-gray-600">
                Find workspaces based on your location, preferences, and requirements
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center p-6 rounded-xl bg-white shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-primary-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore</h3>
              <p className="text-gray-600">
                View workspace details, amenities, reviews, and availability
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center p-6 rounded-xl bg-white shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-primary-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book</h3>
              <p className="text-gray-600">
                Reserve your workspace for the hours or days you need it
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to find your perfect workspace?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of digital nomads, freelancers, and students who have found their ideal work environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search" className="btn btn-primary bg-white text-primary-900 hover:bg-gray-100">
                Find Workspace
              </Link>
              <Link to="/dashboard" className="btn btn-secondary border-white text-white hover:bg-primary-800">
                List Your Space
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;