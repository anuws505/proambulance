import type { Metadata } from "next";
import OurWork from "../components/OurWork";

export const metadata: Metadata = {
  title: "Pro Ambulance Service - ผลงานการปฏิบัติงาน",
  description: "ภาพบรรยากาศการปฏิบัติงานจริงของทีมงาน Pro Ambulance",
};

export default function GalleryPage() {
  return (
    <div className="space-y-12 py-6 font-kanit">
      <div className="border-b border-amber-500/20 pb-6 text-center sm:text-left">
        <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-2">
          Our Works
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-amber-300">
          ผลงานการปฏิบัติงาน
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-1">
          ภาพบรรยากาศการปฏิบัติงานจริงของทีมงาน Pro Ambulance
        </p>
      </div>

      <OurWork showTitle={false} />
    </div>
  );
}
