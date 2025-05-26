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
    description: "CoWork Central es un espacio de coworking moderno diseñado para la productividad y el networking. Con internet de alta velocidad, estaciones de trabajo cómodas y mucha luz natural, es el lugar perfecto para freelancers y trabajadores remotos. El espacio cuenta con áreas abiertas para colaboración y salas privadas para trabajo enfocado o reuniones. Se proporciona café y snacks gratuitos durante todo el día, y los miembros tienen acceso 24/7 a las instalaciones.",
    shortDescription: "Un espacio de coworking moderno con asientos flexibles y comodidades premium en el centro.",
    location: {
      address: "123 Calle Principal",
      city: "La Paz",
      state: "La Paz",
      country: "Bolivia",
      lat: -16.4897,
      lng: -68.1193
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
      "WiFi de alta velocidad", 
      "Escritorios de pie", 
      "Sillas ergonómicas", 
      "Salas de reuniones", 
      "Cabinas telefónicas", 
      "Cocina", 
      "Café y té gratis", 
      "Servicios de impresión"
    ],
    popular: true
  },
  {
    id: "ws2",
    name: "Café & Trabajo",
    type: "cafe",
    description: "Café & Trabajo es una cafetería especializada que atiende a nómadas digitales y trabajadores remotos. Con un ambiente tranquilo, WiFi confiable y muchos enchufes, está diseñado para la productividad mientras se disfruta de un excelente café. La cafetería ofrece varias opciones de asientos, desde mesas comunales hasta rincones acogedores con sillas cómodas. Sirven café especial, tés y una selección de comidas ligeras y snacks.",
    shortDescription: "Una cafetería tranquila con WiFi rápido, buen café y asientos aptos para trabajar.",
    location: {
      address: "456 Avenida Roboré",
      city: "Santa Cruz",
      state: "Santa Cruz",
      country: "Bolivia",
      lat: -17.7833,
      lng: -63.1821
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
      "WiFi gratis", 
      "Enchufes", 
      "Café especial", 
      "Pasteles y comidas ligeras", 
      "Zonas silenciosas", 
      "Asientos al aire libre"
    ],
    popular: true
  },
  {
    id: "ws3",
    name: "Hub de Innovación",
    type: "coworking",
    description: "Hub de Innovación es un espacio de coworking premium enfocado en startups tecnológicas y emprendedores. El espacio cuenta con diseño moderno, tecnología de vanguardia y una vibrante comunidad de profesionales con ideas afines. Con escritorios dedicados, oficinas privadas y espacios de reunión equipados con la última tecnología audiovisual, ofrece todo lo que los profesionales tecnológicos necesitan. El hub organiza regularmente eventos de networking, talleres y sesiones de mentoría.",
    shortDescription: "Espacio de coworking enfocado en tecnología con comodidades modernas y una comunidad vibrante.",
    location: {
      address: "789 Avenida Tecnológica",
      city: "Cochabamba",
      state: "Cochabamba",
      country: "Bolivia",
      lat: -17.3895,
      lng: -66.1568
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
      "Internet de fibra de alta velocidad", 
      "Estaciones de trabajo ergonómicas", 
      "Cabinas telefónicas privadas", 
      "Salas de conferencias con AV", 
      "Acceso seguro 24/7", 
      "Eventos para startups", 
      "Sesiones de mentoría", 
      "Sala de tecnología"
    ],
    popular: true
  },
  {
    id: "ws4",
    name: "Espacio de Trabajo Biblioteca Metro",
    type: "library",
    description: "El Espacio de Trabajo Biblioteca Metro es un área dedicada dentro de la biblioteca central de la ciudad diseñada específicamente para trabajo tranquilo y enfocado. Ofrece asientos cómodos, mesas grandes y un ambiente pacífico para estudiar, leer o trabajar. El espacio de trabajo proporciona WiFi de alta velocidad gratuito, enchufes en cada mesa y acceso a los vastos recursos de la biblioteca. También hay pequeñas salas de reuniones disponibles para reserva.",
    shortDescription: "Espacio de trabajo tranquilo y dedicado dentro de la biblioteca central con WiFi gratis.",
    location: {
      address: "101 Calle Biblioteca",
      city: "Sucre",
      state: "Chuquisaca",
      country: "Bolivia",
      lat: -19.0473,
      lng: -65.2596
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
      monday: "09:00 - 18:00",
      tuesday: "09:00 - 18:00",
      wednesday: "09:00 - 18:00",
      thursday: "09:00 - 18:00",
      friday: "09:00 - 18:00",
      saturday: "10:00 - 16:00",
      sunday: "Cerrado"
    },
    amenities: [
      "WiFi gratis", 
      "Enchufes en cada mesa", 
      "Acceso a recursos de la biblioteca", 
      "Salas de estudio", 
      "Salas de reuniones", 
      "Áreas silenciosas"
    ],
    popular: false
  },
  {
    id: "ws5",
    name: "Urban Loft Workspace",
    type: "coworking",
    description: "Urban Loft es un espacio de coworking de estilo industrial en un almacén reconvertido. Con techos altos, ladrillos expuestos y grandes ventanales, ofrece un ambiente inspirador para creativos y emprendedores. El espacio cuenta con escritorios compartidos, escritorios dedicados, oficinas privadas y múltiples salas de reuniones. Los miembros disfrutan de comodidades como café artesanal, sala de bienestar, duchas y almacenamiento para bicicletas. La vibrante comunidad organiza regularmente eventos sociales y talleres profesionales.",
    shortDescription: "Espacio de coworking de estilo industrial en un almacén reconvertido con ambiente creativo.",
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
    description: "Serenity es una cafetería tranquila diseñada pensando en trabajadores remotos. El espacio está dividido en diferentes zonas para varios estilos de trabajo, desde mesas comunales para colaboración hasta rincones aislados para trabajo enfocado. La cafetería ofrece café especial, tés orgánicos y opciones de comida nutritiva. Con WiFi confiable, muchos enchufes y una política sin prisas, los trabajadores son bienvenidos a quedarse por horas. La atmósfera tranquila y la música suave de fondo crean un ambiente ideal para la concentración.",
    shortDescription: "Cafetería inspirada en el zen con zonas de trabajo, comida saludable y ambiente tranquilo.",
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