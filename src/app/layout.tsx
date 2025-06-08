import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "中国证券监督管理委员会",
  description: "中国证券监督管理委员会官方网站",
  icons: {
    icon: '/csrc_logo.svg',
    shortcut: '/csrc_logo.svg',
    apple: '/csrc_logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
