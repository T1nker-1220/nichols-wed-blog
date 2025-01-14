import { MemoriesContent } from "@/components/memories/memories-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Book | Jamaica & Morgan",
  description:
    "A beautiful collection of wedding details and precious moments that made our special day unique.",
};

export default function MemoriesPage() {
  return <MemoriesContent />;
}
