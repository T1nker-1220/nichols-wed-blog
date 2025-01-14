export interface StoryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface StoryEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  category: "first-meeting" | "dating" | "proposal" | "wedding" | "family";
  images: StoryImage[];
}

export const loveStory: StoryEvent[] = [
  {
    id: "online-meeting",
    title: "A Digital Beginning",
    date: "May 2023",
    description:
      "Our paths crossed on Filipino Cupid, where we discovered shared goals and dreams. Through meaningful conversations about life and the future, we built a strong connection that would become the foundation of our love story.",
    category: "first-meeting",
    images: []  // No images for online meeting
  },
  {
    id: "first-visit-proposal",
    title: "First Visit & Surprise Proposal",
    date: "December 29, 2023",
    description:
      "Morgan made his first journey to the Philippines to meet Jamaica. With the secret help of Jamaica's mom (who helped find the perfect ring size!), Morgan surprised Jamaica with a heartfelt proposal, marking the beginning of their forever journey together.",
    category: "proposal",
    images: [
      {
        src: "/images/story/first-visit/fe743820-c6af-4f0a-90cc-c52b64dd3343.jpg",
        alt: "First meeting in Philippines"
      },
      {
        src: "/images/story/first-visit/e6819bc2-9bd6-4382-8218-927a8f500c8d.jpg",
        alt: "Special moments during first visit"
      },
      {
        src: "/images/story/first-visit/b74ce632-8d97-45ee-8fb9-f2373808cd33.jpg",
        alt: "Proposal moment"
      },
      {
        src: "/images/story/first-visit/b01f3137-42dd-4f6f-98f6-fe878f92f78e.jpg",
        alt: "Celebrating our engagement"
      }
    ]
  },
  {
    id: "wedding-prep",
    title: "Wedding Preparations",
    date: "March 22, 2024",
    description:
      "Morgan returned to the Philippines for a three-month stay, during which we worked together to process our wedding papers and prepare for our special day. Every moment spent planning brought us closer together.",
    category: "wedding",
    images: [
      {
        src: "/images/story/wedding-prep/8749bb91-f880-48d2-a53c-b11a7acbf7e2.jpg",
        alt: "Wedding preparation moments"
      },
      {
        src: "/images/story/wedding-prep/ff43fb13-159c-4c1e-8a75-c25ac69fde9d.jpg",
        alt: "Planning our special day"
      }
    ]
  },
  {
    id: "wedding-day",
    title: "Our Wedding Day",
    date: "May 5, 2024",
    description:
      "We celebrated our love by tying the knot, surrounded by our cherished family and friends. The day was made even more special as we honeymooned at the beautiful Shangri-La Cebu. During this magical time, we received the blessed news that our family would be growing - we were expecting our precious Mayumi!",
    category: "wedding",
    images: [
      {
        src: "/images/story/wedding&honeymoon/weddingday3.jpg",
        alt: "Wedding ceremony"
      },
      {
        src: "/images/story/wedding&honeymoon/weddingday4.jpg",
        alt: "Wedding celebration"
      },
      {
        src: "/images/story/wedding&honeymoon/weddingday5.jpg",
        alt: "Wedding party"
      },
      {
        src: "/images/story/wedding&honeymoon/honeymoon.jpg",
        alt: "Honeymoon at Shangri-La Cebu"
      }
    ]
  },
  {
    id: "family-life",
    title: "Our Growing Family",
    date: "2025",
    description:
      "Now happily married and embracing the joys of parenthood, we're cherishing every moment with our firstborn, Mayumi. Our love story continues to unfold as we build our life together, filled with love, laughter, and countless blessings.",
    category: "family",
    images: [
      {
        src: "/images/story/growing-family/61e0340b-68f4-4adc-9e8a-44323abef3b6.jpg",
        alt: "Family moments"
      },
      {
        src: "/images/story/growing-family/832cbea9-7498-4d6f-8dfd-db669f4f969a.jpg",
        alt: "Growing family"
      }
    ]
  }
];
