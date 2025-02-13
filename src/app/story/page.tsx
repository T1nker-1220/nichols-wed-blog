import { StoryImageCarousel } from "@/components/StoryImageCarousel";
import { loveStory } from "@/data/story";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Love Story | Jamaica & Morgan",
  description: "Follow our journey from our first meeting to our growing family - a story of love that crossed oceans.",
};

export default function StoryPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FDF8F4] to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full bg-gradient-to-b from-[#FDF1E7] via-[#F5E6D3] to-transparent">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text font-script text-5xl text-transparent md:text-6xl lg:text-7xl">
            Our Love Story
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#8B4513]/80">
            A beautiful journey that began online, crossed oceans, and blossomed into a family filled with love.
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-10" />
        <div className="pointer-events-none absolute bottom-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Timeline Section */}
      <section className="container relative mx-auto px-4 py-16">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-[#8B4513] via-[#A0522D] to-[#CD853F] opacity-20 md:block" />

          {/* Timeline Events */}
          <div className="relative space-y-12">
            {loveStory.map((event, index) => (
              <div
                key={event.id}
                className={cn(
                  "flex flex-col gap-8",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className="w-full space-y-4 rounded-2xl bg-gradient-to-br from-[#FDF1E7] to-white p-6 shadow-lg shadow-[#8B4513]/5 transition-transform duration-300 hover:scale-[1.02] md:w-1/2">
                  <div className="space-y-2">
                    <span className="inline-block rounded-full bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] px-3 py-1 text-sm font-medium text-white shadow-sm">
                      {event.date}
                    </span>
                    <h3 className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] bg-clip-text text-2xl font-semibold text-transparent">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-[#8B4513]/80">{event.description}</p>

                  {/* Image Carousel */}
                  {event.images.length > 0 && (
                    <div className="mt-6 overflow-hidden rounded-lg shadow-md">
                      <StoryImageCarousel images={event.images} />
                    </div>
                  )}
                </div>

                {/* Timeline Point */}
                <div className="relative hidden h-8 w-8 shrink-0 items-center justify-center md:flex">
                  <div className="absolute h-4 w-4 rounded-full bg-gradient-to-r from-[#8B4513] to-[#A0522D]" />
                  <div className="absolute h-8 w-8 animate-ping rounded-full bg-[#8B4513]/20" />
                </div>

                {/* Spacer */}
                <div className="hidden w-1/2 md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="bg-gradient-to-b from-transparent via-[#FDF1E7] to-[#F5E6D3] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text font-script text-4xl text-transparent">
            Our Journey Continues
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8B4513]/80">
            From our first hello on Filipino Cupid to welcoming our precious Mayumi, every moment has been a blessing. Our story is a testament to love that knows no boundaries, and we're excited for all the chapters yet to come.
          </p>
        </div>
      </section>
    </main>
  );
}
