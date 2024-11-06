import "./globals.css";
import type { Metadata } from "next";

import { geistMono, geistSans } from "@/utils/font";
import Sidebar from "@/components/molecules/SideBar";

export const metadata: Metadata = {
  title: "App Spotify Clone",
  description: "Generated app spotify clone by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-[#121212] p-0 m-0 gap-1 flex h-screen overflow-hidden`}
      >
        <Sidebar />

        <main className="w-[75%] p-2 bg-neutral-900 text-white">{children}</main>
      </body>
    </html>
  );
}
