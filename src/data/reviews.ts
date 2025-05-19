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
    userName: "Alex Johnson",
    userAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    date: "2023-03-15",
    content: "Fantastic coworking space! The WiFi is lightning fast, and the coffee is delicious. I love the quiet areas for focused work, and the community events have helped me make valuable connections. Highly recommend for freelancers and remote workers."
  },
  {
    id: "rev2",
    workspaceId: "ws1",
    userId: "user2",
    userName: "Sam Rodriguez",
    userAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    rating: 4,
    date: "2023-02-28",
    content: "Great amenities and excellent location. The staff is friendly and helpful. The only downside is that it can get a bit crowded during peak hours, but overall it's a fantastic place to work."
  },
  {
    id: "rev3",
    workspaceId: "ws1",
    userId: "user3",
    userName: "Jamie Smith",
    userAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5,
    date: "2023-04-02",
    content: "This is my go-to workspace in the city. The environment is perfect for productivity, and I love the ergonomic chairs. The meeting rooms are well-equipped, and booking is hassle-free."
  },
  {
    id: "rev4",
    workspaceId: "ws2",
    userId: "user4",
    userName: "Taylor Wong",
    userAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 4,
    date: "2023-03-10",
    content: "Brew & Work has the perfect balance of cafe ambiance and workspace functionality. Their specialty coffee is amazing, and the WiFi is reliable. It can get a bit noisy during lunch hours, but they have quiet corners if you need focus."
  },
  {
    id: "rev5",
    workspaceId: "ws2",
    userId: "user5",
    userName: "Riley Martinez",
    userAvatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    rating: 5,
    date: "2023-04-05",
    content: "My favorite spot to work remotely! The atmosphere is relaxed but professional, and they don't mind if you stay for hours. The staff remembers regular customers, which adds a nice personal touch."
  },
  {
    id: "rev6",
    workspaceId: "ws3",
    userId: "user6",
    userName: "Jordan Patel",
    userAvatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 5,
    date: "2023-03-22",
    content: "Innovation Hub is a game-changer for tech professionals. The networking opportunities are invaluable, and the workspace is designed with tech needs in mind. The 24/7 access is perfect for my irregular schedule."
  },
  {
    id: "rev7",
    workspaceId: "ws3",
    userId: "user7",
    userName: "Casey Nguyen",
    userAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 4,
    date: "2023-02-18",
    content: "Excellent facilities and a great community of tech entrepreneurs. The events and workshops add a lot of value to the membership. It's a bit pricey, but worth it for the amenities and networking."
  },
  {
    id: "rev8",
    workspaceId: "ws4",
    userId: "user8",
    userName: "Morgan Lee",
    userAvatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    rating: 4,
    date: "2023-03-30",
    content: "The library workspace is perfect for focused study sessions. It's quiet, clean, and free! The only improvement could be extended hours on weekends. I appreciate the meeting rooms for group projects."
  },
  {
    id: "rev9",
    workspaceId: "ws5",
    userId: "user9",
    userName: "Avery Thompson",
    userAvatar: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg",
    rating: 5,
    date: "2023-04-08",
    content: "Urban Loft's industrial design is so inspiring for creative work. The community is diverse and friendly, and the events are always interesting. I've made great connections here that have led to collaborative projects."
  },
  {
    id: "rev10",
    workspaceId: "ws6",
    userId: "user10",
    userName: "Dylan Garcia",
    userAvatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg",
    rating: 5,
    date: "2023-03-25",
    content: "Serenity lives up to its name! It's the perfect balance of cafe and workspace. The food is healthy and delicious, and the atmosphere helps me focus. I love that they've created different zones for different work styles."
  }
];