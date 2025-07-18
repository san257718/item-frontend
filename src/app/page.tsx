"use client";

import Dashboard from "./dashboard/page";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { useLayoutStore } from "@/store/layoutStore";
import Login from "./Login/page";
export default function Home() {
  const { isAuthenticated } = useLayoutStore();


  return (
    <div>
      {/* {isAuthenticated ? (
        <div>
          <Header />
          <div className="flex-1 overflow-auto p-6">
            <Dashboard />
          </div>
          <Footer />
        </div>
      ) : <Login />} */}

      <Login />
    </div>
  );
}
