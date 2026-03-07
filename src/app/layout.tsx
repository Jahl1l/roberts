import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { SITE } from "@/lib/content";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: {
    default: "Roberts Web Applications | Custom Web Apps for Jamaican Businesses",
    template: "%s | Roberts Web Applications"
  },
  description:
    "We design and build custom web applications for Jamaican businesses. From booking systems to admin dashboards, Roberts Web Applications helps you launch fast and scale with confidence.",
  metadataBase: new URL("https://robertswebapps.com"),
  openGraph: {
    title: "Roberts Web Applications",
    description:
      "Custom web applications for Jamaican businesses. WhatsApp-first workflows, JMD pricing, and fast support.",
    url: "https://robertswebapps.com",
    siteName: "Roberts Web Applications",
    locale: "en_JM",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem("theme");var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;var useDark=saved?saved==="dark":prefersDark;document.documentElement.classList.toggle("dark",useDark);}catch(e){}})();`
          }}
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
