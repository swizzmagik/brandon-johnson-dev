import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
