"use client";

import { useLayoutStore } from "@/store/layoutStore";

import Login from "./Login/page";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, hasHydrated } = useLayoutStore();

  if(!hasHydrated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#f5f7f9]">
      {isAuthenticated ? (
        <>
          <Header />
          <main className="flex-1 overflow-auto p-6">{children ?? null}</main>
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
