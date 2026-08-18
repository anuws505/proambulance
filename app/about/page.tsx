import type { Metadata } from "next";
import AboutUs from "../components/AboutUs";

export const metadata: Metadata = {
  title: "Pro Ambulance Service - เกี่ยวกับเรา",
  description: "รู้จักเราทีม Ambulance Pro",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 py-6 font-kanit">
      <div className="border-b border-amber-500/20 pb-6 text-center sm:text-left">
        <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-2">
          Contact Us
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-amber-300">
          เกี่ยวกับเรา
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-1">
          รู้จักเราทีม Ambulance Pro
        </p>
      </div>

      <AboutUs />
    </div>
  );
}
