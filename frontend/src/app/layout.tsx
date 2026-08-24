import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan Story Tours — Official Private Jordan Tour Operator | Deutsche Touren",
  description: "Experience Jordan through cinematic private tours to Petra, Wadi Rum Martian desert camps, the Dead Sea, Jerash, and holy sites. Licensed Jordan Ministry of Tourism operator.",
  keywords: ["Jordan Story Tours", "Petra Private Tour", "Wadi Rum Desert Safari", "Dead Sea Tour", "Jordanien Reisen", "Petra Tour auf Deutsch"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
