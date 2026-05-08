import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandhya Siddu | Full-Stack Developer",
  description:
    "Portfolio of Sandhya Siddu, a Full Stack Developer building scalable fintech, mobile, and real-time digital products across web and mobile platforms",
  icons: {
    icon: "/logo_sid.png",
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
