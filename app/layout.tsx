import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LITTO",
  description: "VPR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}

            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
              <p>Copright 2024 - All rights reserved by Me</p>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
