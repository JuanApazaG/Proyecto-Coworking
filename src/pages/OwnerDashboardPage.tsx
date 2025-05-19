import React from 'react';
import { 
  Home, 
  Calendar, 
  BarChart, 
  Edit, 
  PlusCircle, 
  Users, 
  TrendingUp, 
  DollarSign 
} from 'lucide-react';
import Tabs from '../components/ui/Tabs';
import { workspaces } from '../data/workspaces';

const OwnerDashboardPage: React.FC = () => {
  // Mock data for owner's workspaces - using the first 3 workspaces from our dataset
  const ownerWorkspaces = workspaces.slice(0, 3);
  
  // Mock bookings data
  const ownerBookings = [
    {
      id: 'book101',
      workspaceName: 'CoWork Central',
      customerName: 'Jamie Smith',
      date: '2023-05-10',
      time: '09:00 - 17:00',
      status: 'confirmed',
      amount: 45
    },
    {
      id: 'book102',
      workspaceName: 'CoWork Central',
      customerName: 'Riley Martinez',
      date: '2023-05-12',
      time: '10:00 - 14:00',
      status: 'confirmed',
      amount: 20
    },
    {
      id: 'book103',
      workspaceName: 'Innovation Hub',
      customerName: 'Taylor Wong',
      date: '2023-05-15',
      time: '08:00 - 18:00',
      status: 'pending',
      amount: 50
    }
  ];
  
  // Tab content components
  const MyWorkspacesTab = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">My Workspaces</h2>
        <button className="btn btn-primary btn-sm flex items-center">
          <PlusCircle size={16} className="mr-2" />
          Add Workspace
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ownerWorkspaces.map(workspace => (
          <div key={workspace.id} className="card overflow-hidden">
            {/* Workspace image */}
            <div className="h-48 relative">
              <img 
                src={workspace.images[0]} 
                alt={workspace.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <button 
                  className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-900 transition-colors"
                  aria-label="Edit workspace"
                >
                  <Edit size={16} />
                </button>
              </div>
            </div>
            
            {/* Workspace details */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{workspace.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  workspace.popular 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {workspace.popular ? 'Popular' : 'Active'}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                {workspace.location.address}, {workspace.location.city}
              </p>
              
              <div className="flex justify-between items-center text-sm mb-4">
                <div>
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium ml-1">${workspace.price.hourly}/hr</span>
                </div>
                <div>
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-medium ml-1">{workspace.rating} ★</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="btn btn-secondary btn-sm flex-1">View</button>
                <button className="btn btn-primary btn-sm flex-1">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  const BookingsTab = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Bookings</h2>
        <select className="p-2 border border-gray-300 rounded-lg text-sm">
          <option>All Bookings</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Canceled</option>
        </select>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Workspace
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ownerBookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{booking.id.substring(4)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.workspaceName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.date}<br />
                    <span className="text-xs">{booking.time}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${booking.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900">
                    <button>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
  const AnalyticsTab = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Revenue */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">Total Revenue</h3>
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <DollarSign size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold mb-2">$2,584</p>
          <p className="text-sm text-green-600 flex items-center">
            <TrendingUp size={16} className="mr-1" />
            <span>+12.5% from last month</span>
          </p>
        </div>
        
        {/* Total Bookings */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">Total Bookings</h3>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Calendar size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold mb-2">48</p>
          <p className="text-sm text-green-600 flex items-center">
            <TrendingUp size={16} className="mr-1" />
            <span>+8.2% from last month</span>
          </p>
        </div>
        
        {/* New Customers */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">New Customers</h3>
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <Users size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold mb-2">18</p>
          <p className="text-sm text-green-600 flex items-center">
            <TrendingUp size={16} className="mr-1" />
            <span>+4.9% from last month</span>
          </p>
        </div>
      </div>
      
      {/* Placeholder for chart */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="font-semibold mb-6">Revenue Overview</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart size={40} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">
              This is a simulated chart. In a real application, this would show revenue trends.
            </p>
          </div>
        </div>
      </div>
      
      {/* Placeholder for another chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-semibold mb-6">Booking Statistics</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart size={40} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">
              This is a simulated chart. In a real application, this would show booking statistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container-custom py-8">
        {/* Dashboard header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">Owner Dashboard</h1>
              <p className="text-gray-600">Manage your workspaces and monitor your business performance</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="btn btn-secondary btn-sm">
                Settings
              </button>
              <button className="btn btn-primary btn-sm flex items-center">
                <PlusCircle size={16} className="mr-2" />
                Add New Workspace
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs 
          tabs={[
            {
              id: 'my-workspaces',
              label: 'My Workspaces',
              icon: <Home size={16} />,
              content: <MyWorkspacesTab />
            },
            {
              id: 'bookings',
              label: 'Bookings',
              icon: <Calendar size={16} />,
              content: <BookingsTab />
            },
            {
              id: 'analytics',
              label: 'Analytics',
              icon: <BarChart size={16} />,
              content: <AnalyticsTab />
            }
          ]}
          defaultTab="my-workspaces"
        />
      </div>
    </div>
  );
};

export default OwnerDashboardPage;