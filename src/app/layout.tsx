import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

import { geistMono, geistSans } from "@/utils/font";
import Sidebar from "@/components/molecules/SideBar";
import Loading from "@/components/atoms/Loading";
import AuthProvider from "@/components/molecules/ProviderAuth/page";

export const metadata: Metadata = {
  title: "App Spotify Clone",
  description: "Generated app spotify clone by create next app",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-[#121212] p-0 m-0 gap-1 flex h-screen overflow-hidden`}
      >
        <AuthProvider>
          <Sidebar />
          <main className="w-[80%] p-4 bg-neutral-900 text-white overflow-y-auto">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
