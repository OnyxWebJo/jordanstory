import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CurrencyProvider } from "@/context/CurrencyContext";

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

import Script from "next/script";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LS49VF4MNM"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LS49VF4MNM');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <LanguageProvider>
          <CurrencyProvider>
            {children}
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
