import type { Metadata } from "next";

import { SidebarProvider } from "@/components/ui/sidebar";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Gegmio",
  description: "Everything in one space",
  icons: {
    icon: '/images/gegmioLogo.svg',
    shortcut: '/images/gegmioLogo.svg',
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">

        <body
          className={`antialiased bg-[#0F0F0F]`}
        >
          <SidebarProvider defaultOpen={false} className="flex-col">
            <Header />
            {children}
            <Footer />
          </SidebarProvider>
        </body>

    </html>
  )
}