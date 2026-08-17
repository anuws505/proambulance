export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-amber-500/20 text-zinc-400 py-10 px-4 font-kanit">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="space-y-3">
          <h3 className="text-amber-400 font-semibold text-base sm:text-lg">
            บริษัท โปร แอมบูแลนซ์ เซอร์วิส (ประเทศไทย) จำกัด
          </h3>
          <p className="text-zinc-300 text-xs sm:text-sm">
            กลุ่มรถพยาบาล เจนเนอเรชั่น แอมบูแลนซ์ เซอร์วิส
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md">
            เลขที่ 60 หมู่ที่ 7 ตำบลบางรักพัฒนา อำเภอบางบัวทอง จังหวัดนนทบุรี
            11110
          </p>
        </div>

        <div className="space-y-3 md:text-right">
          <h4 className="text-white font-semibold text-base">
            ช่องทางติดต่อฉุกเฉิน
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
            <li>
              โทรศัพท์:{" "}
              <a
                href="tel:0914954222"
                className="text-amber-400 font-bold hover:underline"
              >
                091-495-4222
              </a>
            </li>
            <li>
              Line ID: <span className="text-amber-300">ems_4222</span>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:genamb.th@gmail.com"
                className="hover:text-amber-400 transition-colors"
              >
                genamb.th@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-800 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} บริษัท โปร แอมบูแลนซ์ เซอร์วิส (ประเทศไทย)
        จำกัด. All rights reserved.
      </div>
    </footer>
  );
}
