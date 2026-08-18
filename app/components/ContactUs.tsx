"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2 } from "lucide-react";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="space-y-8 font-kanit">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900/60 border border-amber-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-amber-300 border-b border-zinc-800 pb-3">
              ข้อมูลการติดต่อ
            </h2>

            <ul className="space-y-5 text-sm sm:text-base text-zinc-300 font-noto">
              <li className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-kanit font-semibold text-white text-sm">
                    สถานที่ตั้ง
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed mt-0.5">
                    เขตวังทองหลาง กรุงเทพมหานคร 10310 ประเทศไทย
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-kanit font-semibold text-white text-sm">
                    เบอร์โทรศัพท์ฉุกเฉิน / สำนักงาน
                  </p>
                  <div className="flex flex-col gap-1 mt-0.5 text-sm">
                    <a
                      href="tel:0914954222"
                      className="text-amber-400 font-bold hover:underline"
                    >
                      091-495-4222 (มือถือ / 24 ชม.)
                    </a>
                    <a
                      href="tel:0909736246"
                      className="text-zinc-300 hover:text-amber-300"
                    >
                      090-973-6246 (โทรศัพท์)
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-kanit font-semibold text-white text-sm">
                    อีเมล
                  </p>
                  <a
                    href="mailto:genamb.th@gmail.com"
                    className="text-zinc-300 hover:text-amber-400 text-sm mt-0.5 block"
                  >
                    genamb.th@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-1">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="font-kanit font-semibold text-white text-sm">
                    เว็บไซต์หลัก
                  </p>
                  <a
                    href="https://www.ambulancethailand.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:underline text-sm mt-0.5 block"
                  >
                    www.ambulancethailand.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="tel:0914954222"
                className="gold-button w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-base font-bold shadow-xl hover:scale-[1.02] transition-transform"
              >
                <Phone size={18} />
                <span>โทรด่วนฉุกเฉิน 091-495-4222</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-zinc-900/60 border border-amber-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-amber-300">
                แบบฟอร์มติดต่อกลับ
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับโดยเร็วที่สุด
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-amber-500/10 border border-amber-500/40 text-amber-300 p-6 rounded-xl flex flex-col items-center text-center space-y-2 animate-in fade-in duration-300">
                <CheckCircle2 size={48} className="text-amber-400" />
                <h3 className="font-bold text-lg">ส่งข้อมูลเรียบร้อยแล้ว</h3>
                <p className="text-sm text-zinc-300">
                  ทางทีมงาน Pro Ambulance ได้รับข้อความของท่านแล้ว
                  และจะติดต่อกลับโดยเร็วที่สุดครับ
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">
                      ชื่อ <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ระบุชื่อของคุณ"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/80 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">
                      นามสกุล
                    </label>
                    <input
                      type="text"
                      placeholder="ระบุนามสกุลของคุณ"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/80 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">
                      เบอร์โทรศัพท์ <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="เช่น 091-495-4222"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/80 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">
                      อีเมล
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/80 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">
                    ข้อความ / รายละเอียดการสอบถาม{" "}
                    <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="ระบุรายละเอียดบริการที่ต้องการสอบถาม หรือขอใบเสนอราคา..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/80 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="gold-button w-full py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg hover:scale-[1.01] transition-transform"
                >
                  <Send size={18} />
                  <span>ส่งข้อความติดต่อ</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-amber-300">แผนที่การเดินทาง</h2>
          <span className="text-xs text-zinc-400">
            อ.บางบัวทอง จ.นนทบุรี 11110
          </span>
        </div>

        <div className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-900 shadow-2xl">
          <iframe
            title="Pro Ambulance Location Map - บางบัวทอง นนทบุรี"
            src="https://maps.google.com/maps?q=60%20%E0%B8%2B%20%E0%B8%2B%20%E0%B8%95%E0%B8%BB%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%9E%E0%B8%B3%E0%B8%92%E0%B8%99%E0%B8%B2%20%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%97%E0%B8%AD%E0%B8%87%20%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%2011110&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
