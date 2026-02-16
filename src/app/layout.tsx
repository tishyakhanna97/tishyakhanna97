import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tishya Khanna | Software Engineer, AI Builder",
  description:
    "Cornell Tech M.Eng. CS student building AI-powered products across startups, government, and big tech. SWE / FDE / PM.",
  openGraph: {
    title: "Tishya Khanna | Software Engineer, AI Builder",
    description:
      "Cornell Tech M.Eng. CS student building AI-powered products across startups, government, and big tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
