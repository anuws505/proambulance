import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-6">
      <div className="bg-zinc-900/60 border border-amber-500/20 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-md shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[571/600] rounded-xl overflow-hidden border border-amber-500/30 shadow-xl group">
              <Image
                src="/images/about-us/1598480195473.png"
                alt="Generation Ambulance Service"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 font-kanit">
            <div>
              <span className="text-xs sm:text-sm text-amber-400 font-semibold tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-3">
                ABOUT US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-kanit gold-text-gradient leading-tight">
                GENERATION AMBULANCE SERVICE
              </h2>
              <p className="text-lg sm:text-xl text-amber-300 font-medium mt-2">
                ศูนย์บริการรถพยาบาลเอกชนทั่วไทย
              </p>
            </div>

            <div className="space-y-4 text-zinc-300 font-kanit text-sm sm:text-base leading-relaxed border-l-2 border-amber-500/40 pl-4">
              <p>
                บริการรถพยาบาลเคลื่อนย้ายผู้ป่วย ผู้บาดเจ็บ ตลอด 24 ชั่วโมง
                โดยมีทีมแพทย์ พยาบาล เป็นผู้ดูแลและควบคุมการปฏิบัติการ
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0914954222"
                className="gold-button px-6 py-3.5 rounded-full flex items-center justify-center gap-2 text-base font-bold shadow-lg"
              >
                <span>สอบถามรายละเอียดเพิ่มเติม โทร 091-495-4222</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
