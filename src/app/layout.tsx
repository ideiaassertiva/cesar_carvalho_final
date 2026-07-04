import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "César Carvalho - Consultoria em Vendas",
  description: "Aumente suas vendas de forma inteligente e escalável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-antigravity min-h-screen text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
