import "./globals.css";
import Nav from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moviebase",
  description: "Home of Greater Entertainment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers >
        <ThemeProvider>
        <body className={inter.className}>
          <main className=" text-foreground bg-background h-full px-10">
            <Nav />{children}
            <Footer />
            </main>
        </body>
        </ThemeProvider>
      </Providers>
    </html>
  );
}
