import Image from "next/image";
import Link from "next/link";

interface OurServiceProps {
  showTitle?: boolean;
}

const serviceItems = [
  {
    id: 1,
    href: "/services/ambulance",
    src: "/images/services/crop-1660126205180.jpg",
    title: "บริการรถพยาบาลฉุกเฉินระดับ ALS",
    category: "Ambulance Service",
  },
  {
    id: 2,
    href: "/services/air-ambulance",
    src: "/images/services/crop-1660126581579.jpg",
    title: "บริการเคลื่อนย้ายผู้ป่วยทางอากาศ",
    category: "Air Ambulance Transfer Service",
  },
  {
    id: 3,
    href: "/services/medical-standby",
    src: "/images/services/crop-1660116399425.jpg",
    title: "บริการทีมแพทย์และพยาบาลประจำงาน",
    category: "Medical Standby Service",
  },
  {
    id: 4,
    href: "/services/safety-standby",
    src: "/images/services/crop-1660116456973.jpg",
    title: "บริการทีมปฐมพยาบาลและความปลอดภัย",
    category: "Safety Standby Service",
  },
];

export default function OurService({ showTitle = true }: OurServiceProps) {
  return (
    <section className="space-y-8 font-kanit">
      {showTitle && (
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl gold-text-gradient">
              งานบริการของเรา
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              ภาพบรรยากาศและงานบริการของเรา Pro Ambulance
            </p>
          </div>
          <Link
            href="/services"
            className="hidden sm:inline-block text-amber-400 hover:text-amber-300 text-sm underline underline-offset-4"
          >
            ดูทั้งหมด →
          </Link>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {serviceItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 bg-zinc-900 shadow-lg block"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <span className="text-[10px] sm:text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full inline-block mb-1">
                {item.category}
              </span>
              <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Link
          href="/services"
          className="text-amber-400 hover:text-amber-300 text-sm underline underline-offset-4"
        >
          ดูงานบริการทั้งหมด →
        </Link>
      </div>
    </section>
  );
}
