export interface StoryEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  category: "first-meeting" | "dating" | "proposal" | "engagement" | "wedding";
}

export const loveStory: StoryEvent[] = [
  {
    id: "first-meeting",
    title: "The First Hello",
    date: "January 15, 2020",
    description:
      "Our paths crossed unexpectedly, leading to a conversation that would change our lives forever. What started as a chance meeting blossomed into something beautiful.",
    category: "first-meeting",
  },
  {
    id: "first-date",
    title: "Our First Date",
    date: "February 1, 2020",
    description:
      "A cozy dinner filled with laughter, stories, and the beginning of our journey together. We knew this was the start of something special.",
    category: "dating",
  },
  {
    id: "official",
    title: "Making It Official",
    date: "March 15, 2020",
    description:
      "Through the challenges of the pandemic, we found strength in each other. Our bond grew stronger as we officially began our relationship.",
    category: "dating",
  },
  {
    id: "adventures",
    title: "Adventures Together",
    date: "2020-2023",
    description:
      "From weekend getaways to quiet moments at home, every day brought us closer. We discovered that home isn't a place - it's being with each other.",
    category: "dating",
  },
  {
    id: "proposal",
    title: "The Proposal",
    date: "June 15, 2023",
    description:
      'Under a starlit sky, surrounded by the warmth of love, Morgan got down on one knee. Jamaica said "Yes!" to forever, marking the beginning of our next chapter.',
    category: "proposal",
  },
  {
    id: "engagement",
    title: "Engagement Celebration",
    date: "July 1, 2023",
    description:
      "Surrounded by family and friends, we celebrated our engagement and began planning our dream wedding. The countdown to forever began!",
    category: "engagement",
  },
  {
    id: "wedding-prep",
    title: "Wedding Planning",
    date: "2023-2024",
    description:
      "Every detail carefully chosen, every moment planned with love. From venue visits to cake tastings, we're creating the perfect celebration of our love.",
    category: "wedding",
  },
  {
    id: "wedding-day",
    title: "Our Wedding Day",
    date: "May 05, 2024",
    description:
      'The day we say "I do" at STELLA SUITES EVENTS PLACE, surrounded by our loved ones. The beginning of our greatest adventure yet.',
    category: "wedding",
  },
];
