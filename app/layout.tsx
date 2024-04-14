import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeButton from "./_components/ThemeButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API Formatter",
  description: "A webapp that allows you to customize your API calls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" dark:bg-slate-800 dark:text-slate-200">
        <nav className="p-2 px-3 bg-slate-200 flex justify-between items-center dark:bg-slate-700">
          <Link href={'/'} className="text-xl">
            Api Formatter
          </Link>
          <ThemeButton/>
        </nav>
        <main className="p-5">
        {children}
        </main>
        </body>
    </html>
  );
}
