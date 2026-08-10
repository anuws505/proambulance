"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
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
            {/* Background Image */}
            <Image
              src={banner.src}
              alt={banner.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Black Gradient Overlay เพื่อให้ตัวหนังสืออ่านง่าย */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent flex flex-col justify-end p-6 md:p-12 text-left">
              <h2 className="font-chonburi text-2xl md:text-4xl text-amber-400 mb-2 drop-shadow-md">
                {banner.title}
              </h2>
              <p className="font-kanit text-zinc-200 text-sm md:text-lg max-w-2xl font-light">
                {banner.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
