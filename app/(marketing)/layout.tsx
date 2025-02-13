import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Brandon Johnson",
  description:
    "Brandon Johnson is a software engineer with a passion for building products that help people.",
  openGraph: {
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
