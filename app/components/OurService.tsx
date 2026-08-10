import Image from "next/image";
import Link from "next/link";

interface OurServiceProps {
  showTitle?: boolean; // สามารถเปิด/ปิด หัวข้อได้ เวลาไปใช้หน้าอื่น
}

const serviceItems = [
  {
    id: 1,
    src: "/images/our-service/crop-1660126205180.jpg",
    title: "บริการรถพยาบาลฉุกเฉินระดับ ALS",
    category: "Ambulance Transfer",
  },
  {
    id: 2,
    src: "/images/our-service/crop-1660126581579.jpg",
    title: "บริการเคลื่อนย้ายผู้ป่วยทางอากาศ",
    category: "Air Ambulance",
  },
  {
    id: 3,
    src: "/images/our-service/crop-1660116399425.jpg",
    title: "บริการทีมแพทย์และพยาบาลประจำงาน",
    category: "Medical Standby",
  },
  {
    id: 4,
    src: "/images/our-service/crop-1660116456973.jpg",
    title: "บริการทีมปฐมพยาบาลและความปลอดภัย",
    category: "Safety Standby",
  },
];

export default function OurService({ showTitle = true }: OurServiceProps) {
  return (
    <section className="py-8">
      {showTitle && (
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-chonburi text-2xl md:text-3xl text-amber-400">
              บริการและการปฏิบัติงาน
            </h2>
            <p className="font-kanit text-zinc-400 text-sm mt-1">
              ภาพบรรยากาศการปฏิบัติงานจริงของทีมงาน Pro Ambulance
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-block font-kanit text-amber-400 hover:text-amber-300 text-sm underline underline-offset-4"
          >
            ดูทั้งหมด →
          </Link>
        </div>
      )}

      {/* Grid แสดงรูปภาพแนวตั้ง (Aspect 3:4) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {serviceItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 bg-zinc-900 shadow-lg"
          >
            {/* คุมอัตราส่วนรูปภาพเป็น 3/4 สำหรับรูปแนวตั้ง */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            {/* ข้อความบรรยายใต้รูปภาพ */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 font-kanit">
              <span className="text-[10px] sm:text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full inline-block mb-1">
                {item.category}
              </span>
              <h3 className="text-xs sm:text-sm font-semibold text-white line-clamp-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* ปุ่มดูลูกเล่นบนมือถือ */}
      <div className="mt-6 text-center sm:hidden">
        <Link
          href="/gallery"
          className="font-kanit text-amber-400 hover:text-amber-300 text-sm underline underline-offset-4"
        >
          ดูภาพผลงานทั้งหมด →
        </Link>
      </div>
    </section>
  );
}
