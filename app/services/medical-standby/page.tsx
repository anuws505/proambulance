"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  "/images/services/medical/corp-1.jpg",
  "/images/services/medical/corp-2.jpg",
  "/images/services/medical/corp-3.jpg",
];

export default function MedicalStandbyPage() {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-8 py-6 font-kanit">
      <div className="border-b border-amber-500/20 pb-6">
        <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-2">
          Medical Standby Service
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-amber-300">
          บริการทีมแพทย์และพยาบาลประจำงาน
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          GENERATION AMBULANCE SERVICE @ AMBULANCE THAILAND
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-4 w-full sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-900 shadow-2xl">
            <Swiper
              onSwiper={setMainSwiper}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              style={
                {
                  "--swiper-navigation-color": "#facc15",
                  "--swiper-navigation-size": "20px",
                } as React.CSSProperties
              }
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="w-full aspect-[4/3]"
            >
              {galleryImages.map((imgSrc, index) => (
                <SwiperSlide key={index} className="relative w-full h-full">
                  <Image
                    src={imgSrc}
                    alt={`Medical Standby Featured Image ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-1">
            {galleryImages.map((imgSrc, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => mainSwiper?.slideTo(index)}
                  className={`group relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all bg-zinc-900 focus:outline-none ${
                    isActive
                      ? "border-amber-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                      : "border-zinc-800 hover:border-amber-500/50"
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`Thumb ${index + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-zinc-900/60 border border-amber-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-md space-y-6 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-amber-300">
              ศูนย์บริการรถพยาบาลเอกชนประเทศไทย
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                ศูนย์บริการรถพยาบาลเอกชน Gen&apos;Amb ให้บริการรถพยาบาล รถกู้ภัย
                พร้อมทีมเจ้าหน้าที่ทีมเซฟตี้ ในการดูแลความปลอดภัยภายในงานกีฬา
                MOTORSPORT และ งานกีฬาทุกประเภท โดยทีมเวชกิจทางการแพทย์ แพทย์
                พยาบาล พร้อมให้บริการในทุกพื้นที่ประเทศไทย
              </p>
              <p>
                ตลอดถึงงานบริการด้านการแพทย์ ติดตามกลุ่มรถ คลับ
                ในการเดินทางเที่ยวทั่วไทย พร้อมทีมพยาบาลในการติดตาม ดูแล คณะ
                ทีมงาน ทั้งในและนอกสถานที่ โดยทีมเจ้าหน้าที่ชำนาญการ
              </p>
            </div>

            <div className="pt-4 flex flex-col items-center justify-center bg-zinc-950/80 border border-amber-500/30 rounded-xl p-6 text-center space-y-3">
              <p className="text-sm sm:text-base text-zinc-300">
                ติดต่อรถพยาบาล คลิกโทร... 24 ชั่วโมง
              </p>
              <a
                href="tel:0914954222"
                className="gold-button px-8 py-3.5 rounded-full flex items-center justify-center gap-2 text-lg font-bold shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
              >
                <Phone size={20} />
                <span>091-495-4222</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
