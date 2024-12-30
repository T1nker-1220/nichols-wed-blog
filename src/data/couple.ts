export interface CoupleInfo {
  bride: PersonInfo;
  groom: PersonInfo;
  weddingDate: string;
  venue: VenueInfo;
  story: StoryInfo;
}

interface PersonInfo {
  name: string;
  fullName: string;
  age: number;
  occupation: string;
  about: string;
}

interface VenueInfo {
  ceremony: {
    name: string;
    address: string;
    time: string;
  };
  reception: {
    name: string;
    address: string;
    time: string;
  };
}

interface StoryInfo {
  howWeMet: string;
  firstDate: string;
  proposal: string;
}

export const coupleData: CoupleInfo = {
  bride: {
    name: "Jamaica",
    fullName: "Jamaica M. Madia",
    age: 28,
    occupation: "Professional",
    about:
      "A beautiful soul with a warm heart, Jamaica brings joy and love to everyone around her. Her dedication and caring nature make her the perfect partner.",
  },
  groom: {
    name: "Morgan",
    fullName: "Morgan E. Nichols",
    age: 30,
    occupation: "Professional",
    about:
      "A dedicated and loving person, Morgan balances his professional life with a caring heart. His commitment and sincerity make every moment special.",
  },
  weddingDate: "2024-05-05",
  venue: {
    ceremony: {
      name: "STELLA SUITES EVENTS PLACE",
      address: "1008 Quezon Ave, Diliman, Quezon City, 1003 Metro Manila",
      time: "9:00 AM",
    },
    reception: {
      name: "STELLA SUITES EVENTS PLACE",
      address: "1008 Quezon Ave, Diliman, Quezon City, 1003 Metro Manila",
      time: "10:00 AM",
    },
  },
  story: {
    howWeMet:
      "Our paths crossed in a beautiful moment that brought us together, leading to a connection that would last a lifetime.",
    firstDate:
      "We shared precious moments together that helped us realize we were meant for each other.",
    proposal:
      "In a heartfelt moment that perfectly captured our love story, we decided to spend our lives together.",
  },
};
