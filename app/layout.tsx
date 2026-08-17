import type { Metadata, Viewport } from "next";
import { Kanit, Prompt } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingNav from "./components/FloatingNav";
import FloatingSocial from "./components/FloatingSocial";
import "./globals.css";

const KanitSans = Kanit({
  variable: "--font-kanit-sans",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const PromptSans = Prompt({
  variable: "--font-prompt-sans",
  subsets: ["latin", "thai"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export const metadata: Metadata = {
  title: "Pro Ambulance Service - ศูนย์บริการรถพยาบาลเอกชน",
  description:
    "บริการรถพยาบาลฉุกเฉิน เคลื่อนย้ายผู้ป่วยทั่วประเทศ ตลอด 24 ชั่วโมง",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${KanitSans.variable} ${PromptSans.variable} antialiased`}
    >
      <body className="bg-zinc-950 text-zinc-100 min-h-dvh flex flex-col font-kanit antialiased">
        <Header />
        <FloatingNav />
        <FloatingSocial />

        <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
