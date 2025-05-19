import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Star, 
  Heart, 
  Wifi, 
  Volume2, 
  Coffee 
} from 'lucide-react';
import Tabs from '../components/ui/Tabs';
import BookingCard from '../components/ui/BookingCard';
import { bookings } from '../data/bookings';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  
  // Filter bookings by status
  const upcomingBookings = bookings.filter(booking => booking.status === 'upcoming');
  const pastBookings = bookings.filter(booking => booking.status === 'completed');
  
  // Mock user preferences data
  const userPreferences = {
    favoriteAmenities: [
      { name: 'Fast WiFi', icon: <Wifi size={16} /> },
      { name: 'Quiet Environment', icon: <Volume2 size={16} /> },
      { name: 'Coffee Available', icon: <Coffee size={16} /> }
    ],
    favoriteLocations: [
      'San Francisco, CA',
      'New York, NY'
    ],
    workHours: {
      start: '09:00',
      end: '17:00'
    }
  };
  
  // Mock reviews data
  const userReviews = [
    {
      id: 'rev1',
      workspaceName: 'CoWork Central',
      date: '2023-04-15',
      rating: 5,
      content: 'Amazing workspace with great amenities and friendly staff. The WiFi was lightning fast!'
    },
    {
      id: 'rev2',
      workspaceName: 'Brew & Work Cafe',
      date: '2023-03-22',
      rating: 4,
      content: 'Lovely cafe with a quiet atmosphere. Perfect for focused work sessions.'
    }
  ];
  
  // Tab content components
  const ActiveBookingsTab = () => (
    <div className="space-y-6">
      {upcomingBookings.length > 0 ? (
        upcomingBookings.map(booking => (
          <BookingCard key={booking.id} booking={booking} />
        ))
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">No Upcoming Bookings</h3>
          <p className="text-gray-500 mb-6">You don't have any bookings scheduled.</p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/search')}
          >
            Find Workspace
          </button>
        </div>
      )}
    </div>
  );
  
  const PastBookingsTab = () => (
    <div className="space-y-6">
      {pastBookings.length > 0 ? (
        pastBookings.map(booking => (
          <BookingCard key={booking.id} booking={booking} />
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No past bookings found.</p>
        </div>
      )}
    </div>
  );
  
  const PreferencesTab = () => (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Favorite Amenities</h3>
        <div className="flex flex-wrap gap-4">
          {userPreferences.favoriteAmenities.map((amenity, index) => (
            <div 
              key={index}
              className="flex items-center bg-primary-50 text-primary-900 px-4 py-2 rounded-lg"
            >
              <span className="mr-2">{amenity.icon}</span>
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Preferred Locations</h3>
        <div className="flex flex-wrap gap-3">
          {userPreferences.favoriteLocations.map((location, index) => (
            <div 
              key={index}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center"
            >
              <MapPin size={16} className="mr-2" />
              <span>{location}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Typical Work Hours</h3>
        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg w-max">
          <Clock size={18} className="text-gray-600 mr-2" />
          <span>
            {userPreferences.workHours.start} - {userPreferences.workHours.end}
          </span>
        </div>
      </div>
    </div>
  );
  
  const ReviewsTab = () => (
    <div className="space-y-6">
      {userReviews.map(review => (
        <div key={review.id} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold">{review.workspaceName}</h3>
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
          
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={`${
                  i < review.rating 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          
          <p className="text-gray-700">{review.content}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container-custom py-8">
        {/* Profile header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-primary-900">
              <User size={40} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-1">Alex Johnson</h1>
              <p className="text-gray-600 mb-2">Digital Nomad</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-1" />
                  <span>Joined March 2023</span>
                </div>
              </div>
            </div>
            
            <button className="btn btn-secondary">
              Edit Profile
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs 
          tabs={[
            {
              id: 'active-bookings',
              label: 'Active Bookings',
              icon: <Calendar size={16} />,
              content: <ActiveBookingsTab />
            },
            {
              id: 'past-bookings',
              label: 'Past Bookings',
              icon: <Clock size={16} />,
              content: <PastBookingsTab />
            },
            {
              id: 'preferences',
              label: 'Preferences',
              icon: <Heart size={16} />,
              content: <PreferencesTab />
            },
            {
              id: 'reviews',
              label: 'Reviews',
              icon: <Star size={16} />,
              content: <ReviewsTab />
            }
          ]}
          defaultTab="active-bookings"
        />
      </div>
    </div>
  );
};

// Helper component for MapPin
const MapPin = (props: any) => {
  return <div className="flex items-center"><MapPin size={16} className="mr-1" />{props.children}</div>;
};

export default ProfilePage;