import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@components/shared/header.component";
import { SubHeader } from "@/components/shared/sub-header.component";

import "@lib/assets/css/globals.css";
import { Footer } from "@/components/shared/footer.component";
import QueryProvider from "@/components/query-provider.component";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "africa-business-radio",
  description: "Let's Ace this task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Header />
        <SubHeader />
        <QueryProvider>
          {children}
        </QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
