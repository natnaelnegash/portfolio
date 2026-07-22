import previews  from "./previews";
export const projectsData = [
  {
    id: "astu-eats",
    title: "Astu Eats",
    link: "https://github.com/Mulusewu/astu-crowdsourced-food-delivery",
    preview_img: previews.astueats,
    detail: "A scalable crowdsourced food delivery platform designed to empower peer-to-peer delivery system",
    fullDescription: "Astu Eats is a crowdsourced food delivery platform tailored for university campuses. It empowers students to order food or earn money by delivering it. The platform features real-time order tracking, a robust payment system, and an intuitive UI for both users and couriers.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Chapa Gateway"],
    features: ["Peer-to-peer delivery", "Real-time tracking", "Secure payments", "Rating system"],
    role: "Backend Developer",
    year: "2026"
  },
  {
    id: "astu-eats-admin-dashboard",
    title: "AE Admin Dashboard",
    link: "https://github.com/natnaelnegash/AE-Admin-Dash-Two",
    preview_img: previews.ae_admin_dashboard,
    detail: "A centralized controlling unit for our crowdsourced food delivery platform",
    fullDescription: "This is a centralized control unit designed for managing the entire system of Astu Eats food delivery platform. It grants a high administrative power enabling tracking orders, managing restarants with corresponding staff and menu, handling disputes for customers, and also system configurations.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    features: ["Full dispute resolving mechanisms", "Realtime analytics", "Controlled ledger revision", "System configuration"],
    role: "Full-stack Developer",
    year: "2026"
  },
  {
  id: "clientsync-os",
  title: "ClientSync OS",
  link: "https://github.com/natnaelnegash/client-sync",
  preview_img: previews.clientsync,
  detail: "A comprehensive agency operating system and automated client portal.",
  fullDescription: "ClientSync OS is an end-to-end project management and client portal platform designed for freelancers and creative agencies. It features a robust Workspace Provisioning Engine that deep-copies predefined workflow templates into live projects, alongside AI-enhanced scope generation, automated milestone tracking, and integrated invoicing.",
  techStack: [
    "Next.js",
    "PostgreSQL",
    "Drizzle ORM",
    "Docker",
    "Tailwind CSS",
    "Gemini AI"
  ],
  features: [
    "Dynamic template provisioning engine",
    "AI-powered scope of work enhancement",
    "Automated magic-link client portals",
    "Nested milestone and deliverable tracking",
    "Integrated financials and invoicing"
  ],
  role: "Full-stack Developer",
  year: "2026"
},
{
    id: "linkio",
    title: "Linkio",
    link: "https://github.com/natnaelnegash/Linkio",
    preview_img: null,
    detail: "Chat, conference, facetime, groupchat with your loved ones.",
    fullDescription: "Linkio is a comprehensive communication platform that enables users to connect seamlessly. It supports real-time text chat, video conferencing, and group discussions, built with a focus on low latency and high reliability. The application utilizes modern web sockets and WebRTC to deliver a smooth experience.",
    techStack: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
    features: ["Real-time messaging", "Video calling", "Group chats", "End-to-end encryption basics"],
    role: "Full Stack Developer",
    year: "2023"
  },
  {
    id: "eventio",
    title: "Eventio",
    link: "https://github.com/natnaelnegash/Eventio",
    preview_img: null,
    detail: "Android application for posting and booking nearby events, experience sharing, reviewing and more.",
    fullDescription: "Eventio is a mobile application designed to bridge the gap between event organizers and attendees. Users can discover local events, book tickets, share experiences, and leave reviews. The app features geolocation, push notifications, and a sleek user interface optimized for mobile devices.",
    techStack: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
    features: ["Event discovery", "Ticket booking", "User reviews", "Geolocation services"],
    role: "Mobile App Developer",
    year: "2024"
  },
  {
    id: "groove-play",
    title: "Groove Play",
    link: "https://github.com/natnaelnegash/Groove_Play",
    preview_img: null,
    detail: "User friendly music streaming web-app for music lovers.",
    fullDescription: "Groove Play is a modern music streaming web application. It offers a beautiful, responsive UI where users can discover new music, create playlists, and enjoy continuous playback. The backend handles audio streaming efficiently, ensuring a buffer-free experience for users.",
    techStack: ["React", "Tailwind CSS", "Express", "PostgreSQL"],
    features: ["Audio streaming", "Playlist management", "Search functionality", "Responsive player UI"],
    role: "Front-end Developer & Designer",
    year: "2023"
  },
  {
    id: "student-property-mgmt",
    title: "Student Property Mgmt",
    link: "https://github.com/natnaelnegash/Students-Property-Management-System",
    preview_img: null,
    detail: "Secure and user friendly property management platform for students ensuring safety of their property.",
    fullDescription: "This platform is built specifically to help students manage and secure their properties. It allows for inventory logging, reporting lost items, and interacting with campus security. It features a robust backend to handle user authentication and data privacy securely.",
    techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    features: ["Inventory logging", "Lost & Found reporting", "Secure authentication", "Admin dashboard"],
    role: "Full Stack Developer",
    year: "2024"
  },
];
