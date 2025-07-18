import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col w-full bg-[#f5f7f9]">
          {children}
        </div>
      </body>
    </html>
  );
}
