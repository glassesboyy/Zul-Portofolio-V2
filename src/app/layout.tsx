import { AnimationProvider } from "@/animation/animation-provider";
import { MainNav } from "@/components/main-nav";
import { Audiowide, Inter, Montserrat } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} ${audiowide.className} ${montserrat.className} dark`}
      >
        <div className="min-h-screen">
          <header className="fixed top-4 left-0 right-0 z-50 w-full px-4">
            <div className="mx-auto w-fit">
              <MainNav />
            </div>
          </header>
          <main className="pt-20">
            <AnimationProvider>{children}</AnimationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
