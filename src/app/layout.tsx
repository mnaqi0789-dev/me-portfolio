import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Naqi — Full-Stack Developer",
  description: "Full-stack developer. Auth systems, approval workflows, admin dashboards.",
};

type Props = { children: React.ReactNode };

export default async function RootLayout({ children }: Props) {
  const cookieStore = await cookies();
  const isDark = cookieStore.get("theme")?.value === "dark";

  return (
    <html
      lang="en"
      className={`${isDark ? "dark" : ""} ${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar isDark={isDark} />
        <main className="flex-1 flex flex-col pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}