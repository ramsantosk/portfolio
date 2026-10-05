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

export const metadata = {
  metadataBase: new URL("https://ramkirstensantos.vercel.app"),

  title: "Ram Kirsten Santos | Developer Portfolio",

  description:
    "Portfolio of Ram Kirsten Santos — Web Developer, Software Developer, and Front-End Developer.",

  authors: [
    {
      name: "Ram Kirsten Santos",
    },
  ],

  creator: "Ram Kirsten Santos",

  openGraph: {
    title: "Ram Kirsten Santos | Developer Portfolio",
    description:
      "Web Developer, Software Developer, and Front-End Developer. Explore my projects, skills, and development work.",
    url: "https://ramkirstensantos.vercel.app",
    siteName: "Ram Kirsten Santos | Developer Portfolio",
    type: "website",
    locale: "en_US",
    
  },

  twitter: {
    card: "summary_large_image",
    title: "Ram Kirsten Santos | Developer Portfolio",
    description:
      "Web Developer, Software Developer, and Front-End Developer. Explore my projects, skills, and development work.",
  
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}