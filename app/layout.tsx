import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Trevino - Portfolio",
  description:
    "Jonathan Trevino is a developer who excels at building accessible, inclusive products and digital experiences for the web.",
  icons: {
    icon: [
      {
        type: "image/png",
        media: "(prefers-color-scheme:light)",
        url: "/logo.png",
      },
      {
        type: "image/png",
        media: "(prefers-color-scheme:dark)",
        url: "/logo-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className}`}>
        <div>
          <Toaster />
        </div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
