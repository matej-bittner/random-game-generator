import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Games To Play",
    template: "%s - Games To Play",
  },
  description:
    "Tired of the same old games? Let our random game generator surprise you with fresh and exciting games to play when bored!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="flex flex-col flex-1 min-w-[330px]">
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
