import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Paola Pasini - Nutricionista",
  description: "Paola Pasini - Nutricionista",
  metadataBase: new URL("https://www.paolapasini.com.br"),
  icons: '/favicon.png',
  openGraph: {
    title: "Paola Pasini - Nutricionista",
    description: "Paola Pasini - Nutricionista",
    url: "Paola Pasini - Nutricionista",
    siteName: "Paola Pasini - Nutricionista",
    images: [
      {
        url: "https://us-west-2.graphassets.com/cm15tp09005l606n20fvthfab/cm16irqlh0rmj07lr3xdwo2bs",
        width: 800,
        height: 600,
      },
      {
        url: "https://us-west-2.graphassets.com/cm15tp09005l606n20fvthfab/cm16irqlh0rmj07lr3xdwo2bs",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    "Nutricionista Curitiba", "Nutrição Funcional", "Dieta Personalizada", "Saúde e Bem-Estar",
    "Alimentação Saudável", "Reeducação Alimentar", "Emagrecimento Saudável",
    "Consultoria Nutricional", "Nutrição Esportiva", "Plano Alimentar", "Nutrição para Gestantes",
    "Nutrição Clínica", "Alimentação Balanceada", "Dicas de Nutrição", "Consultório de Nutrição",
    "Atendimento Nutricional Online", "Dietas Low Carb", "Nutrição e Saúde",
    "Nutricionista Especializada", "Bem-Estar Alimentar"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
