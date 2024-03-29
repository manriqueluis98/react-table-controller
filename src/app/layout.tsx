import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import NavHeader from "@/components/layouts/NavHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-background min-h-screen scroll-smooth`}
      >
        <Providers>
          <header className="h-[65px]">
            <NavHeader />
          </header>
          <main>{children}</main>
          <footer>
            <h1>Footer</h1>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
