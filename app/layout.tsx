import type { Metadata } from "next";
import { Inter, Jersey_10 } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
});

const jersey = Jersey_10({
  weight: "400",
  variable: "--font-jersey",
});

export const metadata: Metadata = {
  title: "Home | 8-Bit Jam",
  description:
    "Best game-themed hackathon in the DMV area taking place this August in Herndon, Virginia!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Home | 8-Bit Jam",
    description:
      "Best game-themed hackathon in the DMV area taking place this August in Herndon, Virginia!",
    url: "https://8bitjam.win",
    siteName: "8-Bit Jam",
    images: [
      {
        url: "/logo.png",
        width: 50,
        height: 50,
      },
    ],
    type: "website",
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
      className={`${inter.variable} ${jersey.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
