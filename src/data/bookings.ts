export interface Booking {
  id: string;
  userId: string;
  workspaceId: string;
  workspaceName: string;
  workspaceImage: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'próximo' | 'completado' | 'cancelado';
  totalPrice: number;
}

export const bookings: Booking[] = [
  {
    id: "book1",
    userId: "user1",
    workspaceId: "ws1",
    workspaceName: "CoWork Central",
    workspaceImage: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg",
    date: "2023-05-10",
    startTime: "09:00",
    endTime: "17:00",
    status: "próximo",
    totalPrice: 45
  },
  {
    id: "book2",
    userId: "user1",
    workspaceId: "ws3",
    workspaceName: "Hub de Innovación",
    workspaceImage: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
    date: "2023-05-15",
    startTime: "10:00",
    endTime: "18:00",
    status: "próximo",
    totalPrice: 50
  },
  {
    id: "book3",
    userId: "user1",
    workspaceId: "ws2",
    workspaceName: "Café & Trabajo",
    workspaceImage: "https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg",
    date: "2023-04-28",
    startTime: "08:00",
    endTime: "14:00",
    status: "completado",
    totalPrice: 30
  },
  {
    id: "book4",
    userId: "user1",
    workspaceId: "ws5",
    workspaceName: "Urban Loft Workspace",
    workspaceImage: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    date: "2023-04-20",
    startTime: "09:00",
    endTime: "17:00",
    status: "completado",
    totalPrice: 60
  },
  {
    id: "book5",
    userId: "user1",
    workspaceId: "ws6",
    workspaceName: "Serenity Cafe & Workspace",
    workspaceImage: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg",
    date: "2023-04-15",
    startTime: "10:00",
    endTime: "16:00",
    status: "completado",
    totalPrice: 24
  }
];