export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

export const categories = [
  "All",
  "Couple Moments",
  "First Dance",
  "Reception",
  "Group Photos",
];

export const galleryImages: GalleryImage[] = [
  // Couple Moments
  {
    id: "couple-1",
    src: "/images/couple/br-gr.webp",
    alt: "Beautiful moment of the bride and groom",
    category: "Couple Moments",
    featured: true,
  },
  {
    id: "couple-2",
    src: "/images/couple/br-gr-2.webp",
    alt: "Romantic portrait of the newlyweds",
    category: "Couple Moments",
  },
  {
    id: "couple-3",
    src: "/images/couple/br-gr-3.webp",
    alt: "Intimate moment between bride and groom",
    category: "Couple Moments",
  },
  {
    id: "couple-4",
    src: "/images/couple/showing_rings.webp",
    alt: "Newlyweds showing their wedding rings",
    category: "Couple Moments",
    featured: true,
  },
  {
    id: "couple-5",
    src: "/images/couple/main-event-kiss.webp",
    alt: "The wedding kiss",
    category: "Couple Moments",
    featured: true,
  },
  {
    id: "couple-6",
    src: "/images/couple/grand-chair.webp",
    alt: "Couple in their grand chairs",
    category: "Couple Moments",
  },
  {
    id: "couple-7",
    src: "/images/couple/gm&br-holding-flower.webp",
    alt: "Bride and groom with wedding flowers",
    category: "Couple Moments",
  },
  {
    id: "couple-8",
    src: "/images/couple/slice-cake.webp",
    alt: "Couple cutting their wedding cake",
    category: "Couple Moments",
  },
  {
    id: "couple-9",
    src: "/images/couple/holding-knife-for-cake.webp",
    alt: "Couple preparing to cut the cake",
    category: "Couple Moments",
  },
  {
    id: "couple-10",
    src: "/images/couple/first-meal-as-hb-wf.webp",
    alt: "First meal as husband and wife",
    category: "Couple Moments",
  },
  {
    id: "couple-11",
    src: "/images/couple/groom-give-food.webp",
    alt: "Groom feeding the bride",
    category: "Couple Moments",
  },
  {
    id: "couple-12",
    src: "/images/couple/bride-give-food.webp",
    alt: "Bride feeding the groom",
    category: "Couple Moments",
  },

  // First Dance
  {
    id: "dance-1",
    src: "/images/dance/first-dance-as-hb-wf.webp",
    alt: "First dance as husband and wife",
    category: "First Dance",
    featured: true,
  },
  {
    id: "dance-2",
    src: "/images/dance/2first-dance-as-hb-wf.webp",
    alt: "Romantic first dance moment",
    category: "First Dance",
  },
  {
    id: "dance-3",
    src: "/images/dance/3first-dance-as-hb-wf.webp",
    alt: "Beautiful dance moves during first dance",
    category: "First Dance",
  },
  {
    id: "dance-4",
    src: "/images/dance/4first-dance-as-hb-wf.webp",
    alt: "Intimate moment during first dance",
    category: "First Dance",
  },

  // Reception
  {
    id: "reception-1",
    src: "/images/reception/entrance.webp",
    alt: "Grand entrance to the reception",
    category: "Reception",
    featured: true,
  },
  {
    id: "reception-2",
    src: "/images/reception/entrance-mh-bm.webp",
    alt: "Maid of Honor and Best Man entrance",
    category: "Reception",
  },
  {
    id: "reception-3",
    src: "/images/reception/entrance2.webp",
    alt: "Beautiful reception entrance moment",
    category: "Reception",
  },
  {
    id: "reception-4",
    src: "/images/reception/entrance3.webp",
    alt: "Reception celebration entrance",
    category: "Reception",
  },
  {
    id: "reception-5",
    src: "/images/reception/entrance5.webp",
    alt: "Elegant reception entrance",
    category: "Reception",
  },
  {
    id: "reception-6",
    src: "/images/reception/entrance6.webp",
    alt: "Joyful reception entrance",
    category: "Reception",
  },
  {
    id: "reception-7",
    src: "/images/reception/entrance7.webp",
    alt: "Reception entrance celebration",
    category: "Reception",
  },
  {
    id: "reception-8",
    src: "/images/reception/entrance8.webp",
    alt: "Grand reception moment",
    category: "Reception",
  },
  {
    id: "reception-9",
    src: "/images/reception/entrance9.webp",
    alt: "Beautiful reception entrance",
    category: "Reception",
  },
  {
    id: "reception-10",
    src: "/images/reception/entrance10.webp",
    alt: "Memorable reception entrance",
    category: "Reception",
  },

  // Group Photos
  {
    id: "group-1",
    src: "/images/group/gr-br-w-brm-grm.webp",
    alt: "Bride and groom with bridesmaids and groomsmen",
    category: "Group Photos",
    featured: true,
  },
  {
    id: "group-2",
    src: "/images/group/gr-br-w-brm-grm-formal.webp",
    alt: "Formal group photo with wedding party",
    category: "Group Photos",
  },
  {
    id: "group-3",
    src: "/images/group/gr-br-w-brm-grm-formal-2.webp",
    alt: "Another formal group photo",
    category: "Group Photos",
  },
  {
    id: "group-4",
    src: "/images/group/cheers-wt-mh-bm.webp",
    alt: "Cheers with the wedding party",
    category: "Group Photos",
  },
  {
    id: "group-5",
    src: "/images/group/center.webp",
    alt: "Center group photo",
    category: "Group Photos",
  },
  {
    id: "group-6",
    src: "/images/group/center2.webp",
    alt: "Group celebration photo",
    category: "Group Photos",
  },
  {
    id: "group-7",
    src: "/images/group/center3.webp",
    alt: "Group photo at the center",
    category: "Group Photos",
  },
  {
    id: "group-8",
    src: "/images/group/center4.webp",
    alt: "Another center group photo",
    category: "Group Photos",
  },
  {
    id: "group-9",
    src: "/images/group/center5.webp",
    alt: "Group photo with decorations",
    category: "Group Photos",
  },
  {
    id: "group-10",
    src: "/images/group/center6.webp",
    alt: "Joyful group celebration",
    category: "Group Photos",
  },
  {
    id: "group-11",
    src: "/images/group/center7.webp",
    alt: "Group photo with smiles",
    category: "Group Photos",
  },
  {
    id: "group-12",
    src: "/images/group/center8.webp",
    alt: "Final group celebration",
    category: "Group Photos",
  },
  {
    id: "group-13",
    src: "/images/group/bm-speech.webp",
    alt: "Best Man's speech",
    category: "Group Photos",
  },
];
