"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bannerImages = [
  {
    src: "/images/hero-banner/S__30867462.jpg",
    title: "ศูนย์บริการรถพยาบาลเอกชนมาตรฐานสากล",
    subtitle: "บริการเคลื่อนย้ายผู้ป่วยฉุกเฉิน ทั่วประเทศ ตลอด 24 ชั่วโมง",
  },
  {
    src: "/images/hero-banner/S__30867463.jpg",
    title: "พร้อมทีมแพทย์ พยาบาล และอุปกรณ์กู้ชีพชั้นสูง",
    subtitle: "มั่นใจในความปลอดภัย ทุกการเดินทาง",
  },
  {
    src: "/images/hero-banner/S__30867464.jpg",
    title: "ทีมแพทย์และพยาบาลประจำงานอีเวนต์",
    subtitle: "ดูแลความปลอดภัยทางการแพทย์อย่างมืออาชีพตลอดการจัดงาน",
  },
  {
    src: "/images/hero-banner/S__30867465.jpg",
    title: "ทีมปฐมพยาบาลและเซฟตี้ประจำพื้นที่และตามจุดสำคัญ",
    subtitle: "พร้อมรับมือเหตุฉุกเฉินในทุกกิจกรรมและพื้นที่เสี่ยงภัย",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#facc15",
            "--swiper-pagination-color": "#facc15",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.4",
            "--swiper-navigation-size": "32px",
            "--swiper-pagination-bullet-size": "9px",
          } as React.CSSProperties
        }
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[350px] sm:h-[450px] lg:h-[550px]"
      >
        {bannerImages.map((banner, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={banner.src}
              alt={banner.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent flex flex-col justify-end p-6 md:p-12 text-left">
              <div className="max-w-3xl space-y-2">
                <span className="inline-block text-[11px] sm:text-xs text-amber-400 font-kanit font-medium tracking-wider uppercase bg-zinc-900/90 border border-amber-500/50 px-3 py-1 rounded-md shadow-md">
                  PRO AMBULANCE SERVICE
                </span>

                <h2 className="font-kanit font-bold text-2xl sm:text-3xl md:text-5xl text-amber-400 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wide">
                  {banner.title}
                </h2>

                <p className="font-kanit text-zinc-100 text-sm sm:text-base md:text-xl font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
