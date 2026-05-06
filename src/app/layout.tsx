import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amarthi Manikrishna | Full-Stack Developer",
  description:
    "Portfolio of Amarthi Manikrishna, a full-stack developer building product-led experiences across fintech, blockchain, mobile, and AI.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
