export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-ping rounded-full border-2 border-[#8B4513] opacity-75"></div>
        <div className="absolute inset-0 animate-pulse rounded-full border-2 border-[#CD853F]"></div>
      </div>
    </div>
  );
}
