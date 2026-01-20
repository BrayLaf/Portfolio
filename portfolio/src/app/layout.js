import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Braydon Lafleur | Full-stack Developer",
  description: "Full-stack developer with a passion for tech.",
  openGraph: {
    title: "Braydon Lafleur | Full-stack Developer",
    description: "Full-stack developer with a passion for tech.",
    url: siteUrl,
    siteName: "Braydon Lafleur Portfolio",
    images: [
      {
        url: "/mainImg.jpg",
        width: 1200,
        height: 630,
        alt: "Braydon Lafleur portfolio hero",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braydon Lafleur | Full-stack Developer",
    description: "Full-stack developer with a passion for tech.",
    images: ["/mainImg.jpg"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
