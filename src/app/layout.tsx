import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "中期协 | 主页",
  description: "中国期货业协会官方网站",
  icons: {
    icon: '/cfa_logo.svg',
    shortcut: '/cfa_logo.svg',
    apple: '/cfa_logo.svg',
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
