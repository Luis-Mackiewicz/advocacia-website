import type { Metadata } from "next";
import { geistMono, geistSans } from "@/fonts/fonts";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsAppButton";

export const metadata: Metadata = {
  title: "Advocacia",
  description:
    "Site institucional sobre advocacia criado para mostrar habilidades técnicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
