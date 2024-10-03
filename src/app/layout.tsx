import GTranslate from "@/components/GTranslate";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animation.css";
import LiveChatWidget from "@/components/LiveChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Marketsz",
  description:
    "Hassle-Free Shipping and Forwarding From the US and UK to The Dutch Caribbean",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GTranslate />
        <Toaster />
        <LiveChatWidget /> {/* TODO: Error handling here */}
      </body>
    </html>
  );
}
