import OurService from "../components/OurService";

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-chonburi text-3xl text-amber-400">บริการของเรา</h1>
      <OurService showTitle={false} />
    </div>
  );
}
