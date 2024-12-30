"use client";

import { photos as initialPhotos } from "@/data/photos";
import { create } from "zustand";

export type PhotoCategory =
  | "Couple Moments"
  | "First Dance & Celebrations"
  | "Entrance & Ceremony"
  | "Reception Highlights"
  | "Group & Family Shots";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: PhotoCategory;
  width: number;
  height: number;
  priority?: boolean;
  caption?: string;
  credit?: string;
}

interface GalleryState {
  photos: Photo[];
  selectedCategory: PhotoCategory | null;
  setPhotos: (photos: Photo[]) => void;
  setSelectedCategory: (category: PhotoCategory | null) => void;
  getPhotosByCategory: (category: PhotoCategory) => Photo[];
}

export const useGalleryStore = create<GalleryState>((set, get) => ({
  photos: initialPhotos,
  selectedCategory: null,
  setPhotos: (photos) => set({ photos }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  getPhotosByCategory: (category) => {
    return get().photos.filter((photo) => photo.category === category);
  },
}));
