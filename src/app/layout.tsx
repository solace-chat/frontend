import AppView from "@/components/app/AppView";
import ClientController from "@/components/controller/ClientController";
import ChannelList from "@/components/nav/ChannelList";
import GuildList from "@/components/nav/GuildList";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solace",
  description: "Solace is a next-gen chatting application with the intention of uniting like-minded individuals together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientController>
          <main>
            <GuildList />
            <ChannelList />
            <AppView>{children}</AppView>
          </main>
        </ClientController>
      </body>
    </html>
  );
}
