import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angelica Vargas Beauty Aesthetic",
  description:
    "Beauty Angelica Vargas Aesthetic  dedicada a ofrecer servicios de estética y cuidado personal de alta calidad. Nuestro objetivo es realzar la belleza natural de nuestros clientes mediante tratamientos especializados y personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
