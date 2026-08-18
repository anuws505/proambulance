import HeroBanner from "./components/HeroBanner";
import OurService from "./components/OurService";
import OurWork from "./components/OurWork";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroBanner />
      <OurService showTitle={true} />
      <OurWork showTitle={true} />
    </div>
  );
}
