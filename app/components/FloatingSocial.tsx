"use client";

import { useState } from "react";
import { Phone, MessageCircle, Share2, MessageSquare } from "lucide-react";

export default function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <a
            href="tel:0914954222"
            className="flex items-center gap-2 bg-amber-500 text-black p-3 rounded-full font-kanit font-bold text-sm shadow-xl hover:bg-amber-400 transition-transform hover:scale-105"
          >
            <Phone size={18} />
            <span>091-495-4222</span>
          </a>

          <a
            href="https://line.me"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#06C755] text-white p-3 rounded-full font-kanit font-bold text-sm shadow-xl hover:opacity-90 transition-transform hover:scale-105"
          >
            <MessageCircle size={18} />
            <span>Line Official</span>
          </a>

          <a
            href="https://wa.me/66914954222"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white p-3 rounded-full font-kanit font-bold text-sm shadow-xl hover:opacity-90 transition-transform hover:scale-105"
          >
            <Share2 size={18} />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://m.me/yourfacebookpage"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#0084FF] text-white p-3 rounded-full font-kanit font-bold text-sm shadow-xl hover:opacity-90 transition-transform hover:scale-105"
          >
            <MessageSquare size={18} />
            <span>Messenger</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-amber-500 text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-amber-400 transition-transform active:scale-95"
        aria-label="ติดต่อเรา"
      >
        <MessageSquare size={26} />
      </button>
    </div>
  );
}
