export interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  description: string;
  location: string;
  category: EventCategory;
  icon?: string;
}

export enum EventCategory {
  PREPARATION = "preparation",
  CEREMONY = "ceremony",
  PHOTOS = "photos",
  RECEPTION = "reception",
  CELEBRATION = "celebration",
}

export const weddingSchedule: TimelineEvent[] = [
  {
    id: "prep-1",
    title: "Bridal Party Preparation",
    time: "6:00 AM",
    description: "Hair, makeup, and dressing for the bride and bridesmaids",
    location: "STELLA SUITES EVENTS PLACE - Bridal Suite",
    category: EventCategory.PREPARATION,
    icon: "💄",
  },
  {
    id: "prep-2",
    title: "Groom's Party Preparation",
    time: "7:00 AM",
    description: "Getting ready and photos for the groom and groomsmen",
    location: "STELLA SUITES EVENTS PLACE - Groom's Suite",
    category: EventCategory.PREPARATION,
    icon: "👔",
  },
  {
    id: "photo-1",
    title: "First Look & Couple Photos",
    time: "8:00 AM",
    description: "Private first look moment and couple's photo session",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.PHOTOS,
    icon: "📸",
  },
  {
    id: "ceremony-1",
    title: "Guest Arrival",
    time: "8:30 AM",
    description: "Guests begin arriving at the ceremony venue",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.CEREMONY,
    icon: "🚗",
  },
  {
    id: "ceremony-2",
    title: "Wedding Ceremony",
    time: "9:00 AM",
    description: "Exchange of vows and rings officiated by Ramon Orbeta",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.CEREMONY,
    icon: "💒",
  },
  {
    id: "photo-2",
    title: "Group Photos",
    time: "10:00 AM",
    description: "Family and wedding party photos",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.PHOTOS,
    icon: "👥",
  },
  {
    id: "reception-1",
    title: "Reception Begins",
    time: "10:30 AM",
    description: "Welcome drinks and appetizers",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.RECEPTION,
    icon: "🍷",
  },
  {
    id: "reception-2",
    title: "Grand Entrance",
    time: "11:00 AM",
    description: "Introduction of the newlyweds and wedding party",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.RECEPTION,
    icon: "✨",
  },
  {
    id: "celebration-1",
    title: "First Dance",
    time: "11:15 AM",
    description: "Newlyweds' first dance",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.CELEBRATION,
    icon: "💃",
  },
  {
    id: "celebration-2",
    title: "Lunch Service",
    time: "11:45 AM",
    description: "Formal lunch service begins",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.CELEBRATION,
    icon: "🍽️",
  },
  {
    id: "celebration-3",
    title: "Toasts & Speeches",
    time: "12:30 PM",
    description: "Toasts from the wedding party and family",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.CELEBRATION,
    icon: "🥂",
  },
  {
    id: "celebration-4",
    title: "Cake Cutting",
    time: "1:30 PM",
    description: "Traditional cake cutting ceremony",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.CELEBRATION,
    icon: "🎂",
  },
  {
    id: "celebration-5",
    title: "Open Dancing",
    time: "2:00 PM",
    description: "Dance floor opens for all guests",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.CELEBRATION,
    icon: "🎉",
  },
  {
    id: "celebration-6",
    title: "Grand Send-Off",
    time: "3:00 PM",
    description: "Special send-off for the newlyweds",
    location: "STELLA SUITES EVENTS PLACE",
    category: EventCategory.CELEBRATION,
    icon: "✨",
  },
];
