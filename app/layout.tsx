import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VZ3WJTM4TG"
      ></Script>
      <Script id="google-analytic">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VZ3WJTM4TG');

`}
      </Script>
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
