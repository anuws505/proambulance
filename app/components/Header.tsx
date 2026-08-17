"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-950 border-b border-amber-500/20 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 w-full md:w-auto group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-full border border-amber-500/40 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(250,204,21,0.4)] transition-all duration-300">
            <Image
              src="/favicon-96x96.png"
              alt="Pro Ambulance Service Logo"
              width={48}
              height={48}
              className="group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div>
            <h1 className="font-kanit text-lg sm:text-xl gold-text-gradient leading-tight tracking-wide">
              PRO AMBULANCE
            </h1>
            <p className="font-kanit text-xs text-zinc-400 group-hover:text-amber-300/80 transition-colors">
              ศูนย์บริการรถพยาบาลเอกชน
            </p>
          </div>
        </Link>

        <div className="w-full md:w-72 relative">
          <input
            type="text"
            placeholder="ค้นหาบริการ, ข่าวสาร..."
            className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-500 rounded-full py-2 pl-4 pr-10 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none transition-colors font-kanit"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-300 transition-colors">
            <Search size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
