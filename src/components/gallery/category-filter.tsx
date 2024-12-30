"use client";

import { useGalleryStore } from "@/lib/store/gallery-store";

const categories = [
  "All",
  "Couple Moments",
  "First Dance & Celebrations",
  "Entrance & Ceremony",
  "Reception Highlights",
  "Group & Family Shots",
] as const;

export function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useGalleryStore();

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category === "All" ? null : category)
          }
          className={`px-6 py-2.5 rounded-full text-base font-elegant transition-all duration-300 ${
            (category === "All" && !selectedCategory) ||
            category === selectedCategory
              ? "bg-primary-main text-white shadow-md scale-105"
              : "bg-background-paper text-text-secondary hover:text-primary-main hover:scale-105"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
