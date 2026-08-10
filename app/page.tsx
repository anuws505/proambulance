import HeroBanner from "./components/HeroBanner";
import OurService from "./components/OurService";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroBanner />
      <OurService showTitle={true} />
    </div>
  );
}
