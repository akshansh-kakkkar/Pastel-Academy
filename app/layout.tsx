import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased  bg-[#F7F9FB]">
        <Navbar />
        <main className="flex-1 sm:mx-10 mx-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
