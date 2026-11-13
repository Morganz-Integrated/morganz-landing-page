import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { asset } from "@/lib/base-path";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morganz Integrated Solutions | CyberFlow® Irrigation Control Platform",
  description:
    "Morganz Integrated Solutions builds smart control systems for infrastructure with the CyberFlow® irrigation control platform.",
  alternates: { canonical: "https://morganz.cloud/" },
  icons: { icon: asset("/assets/morganz-logo.png") },
  metadataBase: new URL("https://morganz.cloud"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plex.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}