import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
      <Image
        src="/hero-image.jpg"
        alt="Beautiful home exterior"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative z-10 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Find your perfect home with ease
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white sm:text-2xl">
          Explore top listings, view detailed amenities, and connect with
          trusted agents, all in one place. Your dream property is just a click
          away!
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Start Your Search
        </Button>
      </div>
    </section>
  );
}
