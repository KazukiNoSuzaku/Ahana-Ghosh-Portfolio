import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ahana Ghosh | Biomedical Scientist & Cancer Immunology Researcher",
  description:
    "Academic portfolio of Ahana Ghosh — PhD researcher in Biomedical Sciences specializing in Cancer Immunology, tumor microenvironment, and translational oncology.",
  keywords: [
    "Ahana Ghosh",
    "Cancer Immunology",
    "Biomedical Sciences",
    "PhD Researcher",
    "Tumor Microenvironment",
    "Immunotherapy",
    "Oncology",
  ],
  authors: [{ name: "Ahana Ghosh" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahana-ghosh.com",
    title: "Ahana Ghosh | Biomedical Scientist & Cancer Immunology Researcher",
    description:
      "Academic portfolio of Ahana Ghosh — PhD researcher specializing in Cancer Immunology and translational oncology.",
    siteName: "Ahana Ghosh Portfolio",
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
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans bg-background text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
