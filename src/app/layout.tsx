import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import type React from "react";
import CurrencyProvider from "../providers/CurrencyProvider";
import TanstackProvider from "../providers/TanstackProvider";
import "./styles/globals.css";

const satioshi = localFont({
  src: "./fonts/satoshi.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const metaDescription =
  "Invoicen is a simple invoice generator for freelancers and small businesses. It is a self hostable web application that can be used to generate invoices and download PDFs";

export const metadata: Metadata = {
  title: "Invoicen",
  description: metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logos/logo-icon.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/assets/logos/logo-icon.png" media="(prefers-color-scheme: dark)" />
      </head>
      <body
        className={`${manrope.variable} ${satioshi.variable} font-primary antialiased flex items-center justify-center`}
      >
        <TanstackProvider>
          <CurrencyProvider>
            <div className="mx-0 w-full">
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar />
                {children}
                <Footer />
              </ThemeProvider>
            </div>
          </CurrencyProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
