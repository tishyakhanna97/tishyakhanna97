import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HNLDKTVTJQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HNLDKTVTJQ');
          `}
        </Script>
      </body>
    </html>
  );
}
