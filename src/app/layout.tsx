import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akademi Trading - Learn Trading from Experts",
  description: "Professional trading education platform offering comprehensive courses in forex, stocks, and cryptocurrency trading.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
