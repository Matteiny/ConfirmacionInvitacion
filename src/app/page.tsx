import { Hero } from "@/components/sections/hero";
import { EventDetails } from "@/components/sections/event-details";
import { Song } from "@/components/sections/song";
import { Rsvp } from "@/components/sections/rsvp";
import { Footer } from "@/components/sections/footer";
import { RoadDivider } from "@/components/road-divider";
import { CheckeredStrip } from "@/components/checkered-strip";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <RoadDivider />
      <EventDetails />
      <RoadDivider />
      <Song />
      <RoadDivider />
      <Rsvp />
      <CheckeredStrip />
      <Footer />
    </div>
  );
}
