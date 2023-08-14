import { Providers } from "@/lib/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D E N | Profile Web",
  description: "Web Profile Dendi Santoso",

  openGraph: {
    type: "website",
    images: [
      {
        url: "/images/open-graph.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-smooth' lang='en'>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
