import type { Metadata } from "next";

import { Toaster } from "@/components/ui/toaster";
import { Dialog } from "@/features/common/components/dialog";

import "./globals.css";

export const metadata: Metadata = {
  title: "Owlistate",
  description: "A real state management application built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦉</text></svg>"
        />
      </head>
      <body className="min-h-screen w-full antialiased">
        <Dialog />
        <Toaster />

        <main>{children}</main>
      </body>
    </html>
  );
}
