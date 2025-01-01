import { MemoriesContent } from "@/components/memories/memories-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Book | Wedding Memories",
  description:
    "A beautiful collection of wedding details and precious moments that made our special day unique.",
};

export default function MemoriesPage() {
  return <MemoriesContent />;
}
