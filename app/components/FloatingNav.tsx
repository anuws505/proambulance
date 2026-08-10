"use client";

import {
  Home,
  Info,
  Ambulance,
  Image as GalleryIcon,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function FloatingNav() {
  const navItems = [
    { label: "หน้าแรก", href: "/", icon: Home },
    { label: "เกี่ยวกับเรา", href: "/about", icon: Info },
    { label: "บริการ", href: "/services", icon: Ambulance },
    { label: "ผลงาน", href: "/gallery", icon: GalleryIcon },
    { label: "ติดต่อ", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group relative flex items-center justify-center w-12 h-12 bg-zinc-900/90 border border-amber-500/30 hover:border-amber-400 text-amber-400 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110"
          >
            <Icon size={20} />
            <span className="absolute right-14 bg-zinc-900 text-amber-300 font-kanit text-xs px-3 py-1.5 rounded-md border border-amber-500/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
