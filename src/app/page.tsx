import { Hero } from "@/components/sections/hero";
import { EventDetails } from "@/components/sections/event-details";
import { Gallery } from "@/components/sections/gallery";
import { LocationMaps } from "@/components/sections/location-maps";
import { Rsvp } from "@/components/sections/rsvp";
import { Footer } from "@/components/sections/footer";
import { MusicToggle } from "@/components/music-toggle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <EventDetails />
      <Gallery />
      <LocationMaps />
      <Rsvp />
      <Footer />
      <MusicToggle />
    </div>
  );
}
