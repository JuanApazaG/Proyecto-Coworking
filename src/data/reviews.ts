export interface Review {
  id: string;
  workspaceId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  content: string;
}

export const reviews: Review[] = [
  {
    id: "rev1",
    workspaceId: "ws1",
    userId: "user1",
    userName: "Alejandro Jiménez",
    userAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    date: "2023-03-15",
    content: "¡Fantástico espacio de coworking! El WiFi es súper rápido y el café es delicioso. Me encantan las áreas silenciosas para trabajo enfocado, y los eventos comunitarios me han ayudado a hacer conexiones valiosas. Altamente recomendado para freelancers y trabajadores remotos."
  },
  {
    id: "rev2",
    workspaceId: "ws1",
    userId: "user2",
    userName: "Samuel Rodríguez",
    userAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    rating: 4,
    date: "2023-02-28",
    content: "Excelentes comodidades y ubicación perfecta. El personal es amable y servicial. El único inconveniente es que puede estar un poco lleno en horas pico, pero en general es un lugar fantástico para trabajar."
  },
  {
    id: "rev3",
    workspaceId: "ws1",
    userId: "user3",
    userName: "Jimena Sánchez",
    userAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5,
    date: "2023-04-02",
    content: "Este es mi espacio de trabajo favorito en la ciudad. El ambiente es perfecto para la productividad, y me encantan las sillas ergonómicas. Las salas de reuniones están bien equipadas y la reserva es sin complicaciones."
  },
  {
    id: "rev4",
    workspaceId: "ws2",
    userId: "user4",
    userName: "Tatiana Wong",
    userAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 4,
    date: "2023-03-10",
    content: "Café & Trabajo tiene el equilibrio perfecto entre ambiente de cafetería y funcionalidad de espacio de trabajo. Su café especial es increíble y el WiFi es confiable. Puede estar un poco ruidoso durante la hora del almuerzo, pero tienen rincones silenciosos si necesitas concentrarte."
  },
  {
    id: "rev5",
    workspaceId: "ws2",
    userId: "user5",
    userName: "Ricardo Martínez",
    userAvatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    rating: 5,
    date: "2023-04-05",
    content: "¡Mi lugar favorito para trabajar remotamente! El ambiente es relajado pero profesional, y no les molesta si te quedas por horas. El personal recuerda a los clientes frecuentes, lo que añade un toque personal agradable."
  },
  {
    id: "rev6",
    workspaceId: "ws3",
    userId: "user6",
    userName: "Jorge Patiño",
    userAvatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 5,
    date: "2023-03-22",
    content: "Hub de Innovación es revolucionario para profesionales tecnológicos. Las oportunidades de networking son invaluables, y el espacio está diseñado pensando en las necesidades tecnológicas. El acceso 24/7 es perfecto para mi horario irregular."
  },
  {
    id: "rev7",
    workspaceId: "ws3",
    userId: "user7",
    userName: "Carlos Núñez",
    userAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 4,
    date: "2023-02-18",
    content: "Excelentes instalaciones y una gran comunidad de emprendedores tecnológicos. Los eventos y talleres añaden mucho valor a la membresía. Es un poco costoso, pero vale la pena por las comodidades y el networking."
  },
  {
    id: "rev8",
    workspaceId: "ws4",
    userId: "user8",
    userName: "María López",
    userAvatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    rating: 4,
    date: "2023-03-30",
    content: "El espacio de trabajo de la biblioteca es perfecto para sesiones de estudio enfocadas. Es silencioso, limpio y ¡gratis! La única mejora podría ser horarios extendidos los fines de semana. Aprecio las salas de reuniones para proyectos grupales."
  },
  {
    id: "rev9",
    workspaceId: "ws5",
    userId: "user9",
    userName: "Ana Thompson",
    userAvatar: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg",
    rating: 5,
    date: "2023-04-08",
    content: "El diseño industrial de Urban Loft es tan inspirador para el trabajo creativo. La comunidad es diversa y amigable, y los eventos son siempre interesantes. He hecho grandes conexiones aquí que han llevado a proyectos colaborativos."
  },
  {
    id: "rev10",
    workspaceId: "ws6",
    userId: "user10",
    userName: "Diego García",
    userAvatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg",
    rating: 5,
    date: "2023-03-25",
    content: "¡Serenity cumple con su nombre! Es el equilibrio perfecto entre cafetería y espacio de trabajo. La comida es saludable y deliciosa, y el ambiente me ayuda a concentrarme. Me encanta que han creado diferentes zonas para diferentes estilos de trabajo."
  }
];