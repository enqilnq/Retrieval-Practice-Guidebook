import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 核心修改：换成 Inter
import "./globals.css";

// 初始化 Inter 字体
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retrieval Practice Guide | Enqi Li",
  description: "An interactive learning experience based on Cognitive Psychology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* 核心修改：将 className 换成 inter.className */}
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}