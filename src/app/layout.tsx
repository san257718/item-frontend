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
        <div>
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
        {/* <div>{children}</div> */}
      </body>
    </html>
  );
}
