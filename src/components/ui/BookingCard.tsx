import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Booking } from '../../data/bookings';
import { Link } from 'react-router-dom';

interface BookingCardProps {
  booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  // Helper function to format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Status badge styles
  const statusStyles = {
    upcoming: 'bg-primary-100 text-primary-800',
    completed: 'bg-green-100 text-green-800',
    canceled: 'bg-red-100 text-red-800',
  };

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Workspace image */}
        <div className="w-full md:w-1/3 h-40 md:h-auto">
          <img 
            src={booking.workspaceImage} 
            alt={booking.workspaceName} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Booking details */}
        <div className="p-4 flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="font-semibold text-lg">{booking.workspaceName}</h3>
            <span className={`text-xs px-2 py-1 rounded-full uppercase font-medium mt-1 md:mt-0 inline-block ${statusStyles[booking.status]}`}>
              {booking.status}
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={16} className="mr-2" />
              <span>{formatDate(booking.date)}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <Clock size={16} className="mr-2" />
              <span>{booking.startTime} - {booking.endTime}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span>Workspace #{booking.workspaceId.substring(2)}</span>
            </div>
          </div>
          
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
            <Link to={`/workspace/${booking.workspaceId}`} className="btn btn-secondary btn-sm mt-3 md:mt-0">
              View Workspace
            </Link>
            
            <div className="text-right">
              <span className="text-gray-600 text-sm">Total</span>
              <p className="font-bold text-lg">${booking.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;