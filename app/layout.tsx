import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotel-promo-three.vercel.app"),
  title: "Luxury Hotel | Premium Stay in Durrës",
  description:
    "Experience luxury accommodation in Durrës with elegant rooms, premium service, stunning sea views and easy online booking.",
  openGraph: {
    title: "Luxury Hotel | Premium Stay in Durrës",
    description:
      "Elegant rooms, premium service, sea views and easy online booking in Durrës.",
    type: "website",
    images: ["/hero.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
