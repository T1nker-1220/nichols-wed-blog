"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text text-2xl font-semibold text-transparent">
        Something went wrong
      </h2>
      <p className="text-[#8B4513]/70">
        We apologize for the inconvenience. Please try again.
      </p>
      <button
        onClick={reset}
        className="rounded-md bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] px-4 py-2 text-white transition-transform hover:scale-105"
      >
        Try again
      </button>
    </div>
  );
}
