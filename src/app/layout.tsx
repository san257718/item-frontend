import Header from "@/components/header/page";
import "./globals.css";
import Footer from "@/components/footer/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col w-full bg-[#f5f7f9]">
          <Header />
          <div className="flex-1 overflow-auto p-6">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
