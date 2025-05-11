import { AnimationProvider } from "@/components/animation-provider";
import { MenuBar } from "@/components/menu-bar";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <div className="min-h-screen flex flex-col">
          <header className="fixed top-4 left-0 right-0 z-50 w-full px-4">
            <MenuBar />
          </header>
          <main className="pt-20">
            <AnimationProvider>{children}</AnimationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
