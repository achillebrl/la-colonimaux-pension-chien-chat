import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Italiana } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "La Colo-nimaux — Pension Canine & Féline",
  description:
    "Pension canine et féline en liberté à Ambarès-et-Lagrave, gérée par Vanessa Martin, éducatrice comportementaliste canin et félin diplômée.",
  keywords: "pension canine, pension féline, chien, chat, Ambarès, Bordeaux, comportementaliste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${cormorant.variable} ${lato.variable} ${italiana.variable} noise-overlay`}>
        {children}
      </body>
    </html>
  );
}