export interface Workspace {
  id: string;
  name: string;
  type: 'coworking' | 'cafe' | 'library' | 'hotel';
  description: string;
  shortDescription: string;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    lat: number;
    lng: number;
  };
  price: {
    hourly: number;
    daily?: number;
    monthly?: number;
  };
  rating: number;
  reviewCount: number;
  images: string[];
  features: {
    wifi: boolean;
    powerOutlets: boolean;
    meetingRooms: boolean;
    printing: boolean;
    coffee: boolean;
    food: boolean;
    quiet: boolean;
    parking: boolean;
    accessibility: boolean;
  };
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  amenities: string[];
  popular: boolean;
}

export const workspaces: Workspace[] = [
  {
    id: "ws1",
    name: "CoWork Central",
    type: "coworking",
    description: "CoWork Central is a modern coworking space designed for productivity and networking. With high-speed internet, comfortable workstations, and plenty of natural light, it's the perfect place for freelancers and remote workers. The space features both open areas for collaboration and private rooms for focused work or meetings. Complimentary coffee and snacks are provided throughout the day, and members have 24/7 access to the facility.",
    shortDescription: "A modern coworking space with flexible seating and premium amenities in downtown.",
    location: {
      address: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      lat: 37.7749,
      lng: -122.4194
    },
    price: {
      hourly: 10,
      daily: 45,
      monthly: 350
    },
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg",
      "https://images.pexels.com/photos/7256896/pexels-photo-7256896.jpeg",
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
    ],
    features: {
      wifi: true,
      powerOutlets: true,
      meetingRooms: true,
      printing: true,
      coffee: true,
      food: true,
      quiet: true,
      parking: true,
      accessibility: true
    },
    hours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "09:00 - 18:00",
      sunday: "10:00 - 16:00"
    },
    amenities: [
      "High-speed WiFi", 
      "Standing desks", 
      "Ergonomic chairs", 
      "Meeting rooms", 
      "Phone booths", 
      "Kitchen", 
      "Free coffee & tea", 
      "Printing services"
    ],
    popular: true
  },
  {
    id: "ws2",
    name: "Brew & Work Cafe",
    type: "cafe",
    description: "Brew & Work is a specialty coffee shop that caters to digital nomads and remote workers. With a quiet atmosphere, reliable WiFi, and plenty of power outlets, it's designed for productivity while enjoying great coffee. The cafe offers a variety of seating options, from communal tables to cozy corners with comfortable chairs. They serve specialty coffee, teas, and a selection of light meals and snacks.",
    shortDescription: "A quiet cafe with fast WiFi, great coffee, and workspace-friendly seating.",
    location: {
      address: "456 Oak Avenue",
      city: "Portland",
      state: "OR",
      country: "USA",
      lat: 45.5152,
      lng: -122.6784
    },
    price: {
      hourly: 5,
      daily: 25
    },
    rating: 4.5,
    reviewCount: 89,
    images: [
      "https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg",
      "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
      "https://images.pexels.com/photos/4427622/pexels-photo-4427622.jpeg",
      "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg"
    ],
    features: {
      wifi: true,
      powerOutlets: true,
      meetingRooms: false,
      printing: false,
      coffee: true,
      food: true,
      quiet: true,
      parking: false,
      accessibility: true
    },
    hours: {
      monday: "07:00 - 19:00",
      tuesday: "07:00 - 19:00",
      wednesday: "07:00 - 19:00",
      thursday: "07:00 - 19:00",
      friday: "07:00 - 19:00",
      saturday: "08:00 - 20:00",
      sunday: "08:00 - 18:00"
    },
    amenities: [
      "Free WiFi", 
      "Power outlets", 
      "Specialty coffee", 
      "Pastries & light meals", 
      "Quiet zones", 
      "Outdoor seating"
    ],
    popular: true
  },
  {
    id: "ws3",
    name: "Innovation Hub",
    type: "coworking",
    description: "Innovation Hub is a premium coworking space focused on technology startups and entrepreneurs. The space features modern design, cutting-edge technology, and a vibrant community of like-minded professionals. With dedicated desks, private offices, and meeting spaces equipped with the latest AV technology, it offers everything tech professionals need. The hub regularly hosts networking events, workshops, and mentoring sessions.",
    shortDescription: "Tech-focused coworking space with modern amenities and a vibrant community.",
    location: {
      address: "789 Tech Blvd",
      city: "Austin",
      state: "TX",
      country: "USA",
      lat: 30.2672,
      lng: -97.7431
    },
    price: {
      hourly: 12,
      daily: 50,
      monthly: 450
    },
    rating: 4.9,
    reviewCount: 156,
    images: [
      "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
      "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
    ],
    features: {
      wifi: true,
      powerOutlets: true,
      meetingRooms: true,
      printing: true,
      coffee: true,
      food: true,
      quiet: true,
      parking: true,
      accessibility: true
    },
    hours: {
      monday: "00:00 - 24:00",
      tuesday: "00:00 - 24:00",
      wednesday: "00:00 - 24:00",
      thursday: "00:00 - 24:00",
      friday: "00:00 - 24:00",
      saturday: "00:00 - 24:00",
      sunday: "00:00 - 24:00"
    },
    amenities: [
      "High-speed fiber internet", 
      "Ergonomic workstations", 
      "Private phone booths", 
      "Conference rooms with AV", 
      "24/7 secure access", 
      "Startup events", 
      "Mentoring sessions", 
      "Tech lounge"
    ],
    popular: true
  },
  {
    id: "ws4",
    name: "Metro Library Workspace",
    type: "library",
    description: "Metro Library Workspace is a dedicated area within the city's central library designed specifically for quiet, focused work. It offers comfortable seating, large tables, and a peaceful atmosphere for studying, reading, or working. The workspace provides free high-speed WiFi, power outlets at every table, and access to the library's vast resources. There are also small meeting rooms available for reservation.",
    shortDescription: "Quiet, dedicated workspace within the central library with free WiFi.",
    location: {
      address: "101 Library Street",
      city: "Chicago",
      state: "IL",
      country: "USA",
      lat: 41.8781,
      lng: -87.6298
    },
    price: {
      hourly: 0,
      daily: 0
    },
    rating: 4.3,
    reviewCount: 72,
    images: [
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg"
    ],
    features: {
      wifi: true,
      powerOutlets: true,
      meetingRooms: true,
      printing: true,
      coffee: false,
      food: false,
      quiet: true,
      parking: true,
      accessibility: true
    },
    hours: {
      monday: "09:00 - 20:00",
      tuesday: "09:00 - 20:00",
      wednesday: "09:00 - 20:00",
      thursday: "09:00 - 20:00",
      friday: "09:00 - 18:00",
      saturday: "10:00 - 18:00",
      sunday: "12:00 - 17:00"
    },
    amenities: [
      "Free WiFi", 
      "Power outlets", 
      "Study carrels", 
      "Large tables", 
      "Quiet environment", 
      "Library resources", 
      "Research assistance", 
      "Printing services"
    ],
    popular: false
  },
  {
    id: "ws5",
    name: "Urban Loft Workspace",
    type: "coworking",
    description: "Urban Loft is a trendy, industrial-style coworking space in a converted warehouse. With soaring ceilings, exposed brick, and large windows, it offers an inspiring environment for creatives and entrepreneurs. The space features hot desks, dedicated desks, private offices, and multiple meeting rooms. Members enjoy amenities like craft coffee, a wellness room, shower facilities, and bike storage. The vibrant community hosts regular social events and professional workshops.",
    shortDescription: "Trendy industrial-style coworking space in a converted warehouse with creative vibes.",
    location: {
      address: "222 Warehouse District",
      city: "New York",
      state: "NY",
      country: "USA",
      lat: 40.7128,
      lng: -74.0060
    },
    price: {
      hourly: 15,
      daily: 60,
      monthly: 500
    },
    rating: 4.7,
    reviewCount: 213,
    images: [
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
      "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg",
      "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg",
      "https://images.pexels.com/photos/7256896/pexels-photo-7256896.jpeg"
    ],
    features: {
      wifi: true,
      powerOutlets: true,
      meetingRooms: true,
      printing: true,
      coffee: true,
      food: true,
      quiet: true,
      parking: false,
      accessibility: true
    },
    hours: {
      monday: "07:00 - 22:00",
      tuesday: "07:00 - 22:00",
      wednesday: "07:00 - 22:00",
      thursday: "07:00 - 22:00",
      friday: "07:00 - 22:00",
      saturday: "09:00 - 18:00",
      sunday: "09:00 - 18:00"
    },
    amenities: [
      "High-speed WiFi", 
      "Standing desks", 
      "Phone booths", 
      "Meeting rooms", 
      "Craft coffee & tea", 
      "Wellness room", 
      "Showers", 
      "Bike storage", 
      "Event space"
    ],
    popular: true
  },
  {
    id: "ws6",
    name: "Serenity Cafe & Workspace",
    type: "cafe",
    description: "Serenity is a peaceful cafe designed with remote workers in mind. The space is divided into different zones for various work styles - from communal tables for collaboration to secluded nooks for focused work. The cafe offers specialty coffee, organic teas, and nutritious food options. With reliable WiFi, plenty of outlets, and a no-rush policy, workers are welcome to stay for hours. The calm atmosphere and gentle background music create an ideal environment for concentration.",
    shortDescription: "Zen-inspired cafe with workspace zones, healthy food, and a calm atmosphere.",
    location: {
      address: "333 Calm Street",
      city: "Seattle",
      state: "WA",
      country: "USA",
      lat: 47.6062,
      lng: -122.3321
    },
    price: {
      hourly: 4,
      daily: 20
    },
    rating: 4.6,
    reviewCount: 98,
    images: [
      "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg",
      "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      "https://images.pexels.com/photos/5082270/pexels-photo-5082270.jpeg",
      "https://images.pexels.com/photos/3320516/pexels-photo-3320516.jpeg"
    ],
    features: {
      wifi: true,
      powerOutlets: true,
      meetingRooms: false,
      printing: false,
      coffee: true,
      food: true,
      quiet: true,
      parking: true,
      accessibility: true
    },
    hours: {
      monday: "07:00 - 20:00",
      tuesday: "07:00 - 20:00",
      wednesday: "07:00 - 20:00",
      thursday: "07:00 - 20:00",
      friday: "07:00 - 20:00",
      saturday: "08:00 - 21:00",
      sunday: "08:00 - 18:00"
    },
    amenities: [
      "Fast WiFi", 
      "Power at every table", 
      "Organic coffee & tea", 
      "Healthy food options", 
      "Different seating zones", 
      "Natural lighting", 
      "Plants & calming decor"
    ],
    popular: false
  }
];