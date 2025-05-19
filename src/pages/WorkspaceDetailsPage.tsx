import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Wifi, Coffee, Power, Clock, Calendar, CheckCircle } from 'lucide-react';
import { workspaces } from '../data/workspaces';
import { reviews } from '../data/reviews';
import ImageGallery from '../components/workspace/ImageGallery';
import ReviewsList from '../components/workspace/ReviewsList';
import MapComponent from '../components/map/MapComponent';

const WorkspaceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);
  
  const workspace = workspaces.find(w => w.id === id);
  const workspaceReviews = reviews.filter(r => r.workspaceId === id);
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  if (!workspace) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Workspace Not Found</h2>
          <p className="text-gray-600 mb-6">The workspace you're looking for doesn't exist or has been removed.</p>
          <Link to="/search" className="btn btn-primary">
            Browse Workspaces
          </Link>
        </div>
      </div>
    );
  }
  
  const handleBookNow = () => {
    setShowBookingConfirmation(true);
    // In a real app, this would navigate to a booking flow
    setTimeout(() => {
      setShowBookingConfirmation(false);
    }, 3000);
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-primary-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/search" className="hover:text-primary-900">Workspaces</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{workspace.name}</span>
        </div>
        
        {/* Booking Confirmation Message */}
        {showBookingConfirmation && (
          <div className="mb-6 bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center animate-fade-in slide-in">
            <CheckCircle size={20} className="mr-2" />
            <span>Booking request submitted successfully! You will receive a confirmation email shortly.</span>
          </div>
        )}
        
        {/* Header with title, location, and rating */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{workspace.name}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>
                  {workspace.location.address}, {workspace.location.city}, {workspace.location.state}
                </span>
              </div>
              <div className="flex items-center">
                <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                <span>{workspace.rating} ({workspace.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="text-primary-900 text-right">
              <span className="font-bold text-2xl">${workspace.price.hourly}</span>
              <span className="text-gray-600">/hour</span>
            </div>
            {workspace.price.daily && (
              <div className="text-gray-600 text-right text-sm">
                ${workspace.price.daily}/day
              </div>
            )}
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-8">
          <ImageGallery images={workspace.images} alt={workspace.name} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">About This Workspace</h2>
              <p className="text-gray-700 mb-6">{workspace.description}</p>
              
              {/* Amenities */}
              <h3 className="text-lg font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {workspace.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-accent-900 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              
              {/* Features */}
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {workspace.features.wifi && (
                  <div className="flex items-center">
                    <Wifi size={18} className="text-primary-900 mr-2" />
                    <span>Fast WiFi</span>
                  </div>
                )}
                {workspace.features.powerOutlets && (
                  <div className="flex items-center">
                    <Power size={18} className="text-primary-900 mr-2" />
                    <span>Power Outlets</span>
                  </div>
                )}
                {workspace.features.coffee && (
                  <div className="flex items-center">
                    <Coffee size={18} className="text-primary-900 mr-2" />
                    <span>Coffee Available</span>
                  </div>
                )}
                {/* Add more features as needed */}
              </div>
            </div>
            
            {/* Hours */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock size={20} className="mr-2 text-primary-900" />
                Opening Hours
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Monday</span>
                  <span>{workspace.hours.monday}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Tuesday</span>
                  <span>{workspace.hours.tuesday}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Wednesday</span>
                  <span>{workspace.hours.wednesday}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Thursday</span>
                  <span>{workspace.hours.thursday}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Friday</span>
                  <span>{workspace.hours.friday}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Saturday</span>
                  <span>{workspace.hours.saturday}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Sunday</span>
                  <span>{workspace.hours.sunday}</span>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin size={20} className="mr-2 text-primary-900" />
                Location
              </h2>
              <MapComponent selectedWorkspace={workspace.id} height="h-64" />
              <p className="mt-4 text-gray-700">
                {workspace.location.address}, {workspace.location.city}, {workspace.location.state}, {workspace.location.country}
              </p>
            </div>
            
            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Star size={20} className="mr-2 text-primary-900" />
                Reviews
              </h2>
              <ReviewsList 
                reviews={workspaceReviews} 
                averageRating={workspace.rating} 
                reviewCount={workspace.reviewCount} 
              />
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Book This Workspace</h2>
              
              {/* Date Picker */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">Select Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="input pr-10"
                  />
                  <Calendar size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              
              {/* Time Slots */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Time Slot</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Start Time</label>
                    <select className="input">
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">End Time</label>
                    <select className="input">
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                      <option>03:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Price Calculation */}
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Hourly Rate</span>
                  <span>${workspace.price.hourly.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Duration</span>
                  <span>3 hours</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${(workspace.price.hourly * 3).toFixed(2)}</span>
                </div>
              </div>
              
              {/* Book Button */}
              <button 
                className="btn btn-primary w-full mb-4"
                onClick={handleBookNow}
              >
                Book Now
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                You won't be charged until your booking is confirmed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceDetailsPage;