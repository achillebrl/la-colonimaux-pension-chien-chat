import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway, Satisfy } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "La Colo-nimaux — Pension Canine & Féline",
  description:
    "Pension canine et féline familiale à Ambarès-et-Lagrave. Hébergement en liberté pour chiens, chatterie avec espaces communs. Dirigée par Vanessa Martin, comportementaliste diplômée.",
  keywords: "pension canine, pension féline, chatterie, chien, chat, Ambarès, Bordeaux, Vanessa Martin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${raleway.variable} ${satisfy.variable}`}>
        {children}
      </body>
    </html>
  );
}