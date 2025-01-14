export interface StoryEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  category: "first-meeting" | "dating" | "proposal" | "wedding" | "family";
}

export const loveStory: StoryEvent[] = [
  {
    id: "online-meeting",
    title: "A Digital Beginning",
    date: "May 2023",
    description:
      "Our paths crossed on Filipino Cupid, where we discovered shared goals and dreams. Through meaningful conversations about life and the future, we built a strong connection that would become the foundation of our love story.",
    category: "first-meeting",
  },
  {
    id: "first-visit-proposal",
    title: "First Visit & Surprise Proposal",
    date: "December 29, 2023",
    description:
      "Morgan made his first journey to the Philippines to meet Jamaica. With the secret help of Jamaica's mom (who helped find the perfect ring size!), Morgan surprised Jamaica with a heartfelt proposal, marking the beginning of their forever journey together.",
    category: "proposal",
  },
  {
    id: "wedding-prep",
    title: "Wedding Preparations",
    date: "March 22, 2024",
    description:
      "Morgan returned to the Philippines for a three-month stay, during which we worked together to process our wedding papers and prepare for our special day. Every moment spent planning brought us closer together.",
    category: "wedding",
  },
  {
    id: "wedding-day",
    title: "Our Wedding Day",
    date: "May 5, 2024",
    description:
      "We celebrated our love by tying the knot, surrounded by our cherished family and friends. The day was made even more special as we honeymooned at the beautiful Shangri-La Cebu. During this magical time, we received the blessed news that our family would be growing - we were expecting our precious Mayumi!",
    category: "wedding",
  },
  {
    id: "family-life",
    title: "Our Growing Family",
    date: "2025",
    description:
      "Now happily married and embracing the joys of parenthood, we're cherishing every moment with our firstborn, Mayumi. Our love story continues to unfold as we build our life together, filled with love, laughter, and countless blessings.",
    category: "family",
  },
];
