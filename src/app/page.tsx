import { Hero } from "@/components/sections/hero";
import { EventDetails } from "@/components/sections/event-details";
import { Rsvp } from "@/components/sections/rsvp";
import { Footer } from "@/components/sections/footer";
import { MusicToggle } from "@/components/music-toggle";
import { RoadDivider } from "@/components/road-divider";
import { CheckeredStrip } from "@/components/checkered-strip";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <CheckeredStrip />
      <Hero />
      <RoadDivider />
      <EventDetails />
      <RoadDivider />
      <Rsvp />
      <Footer />
      <MusicToggle />
    </div>
  );
}
