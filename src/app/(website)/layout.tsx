import Footer from "@/shared/Footer";
import Navbar from "@/shared/navbar/Navbar";
import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage: 'url("/assets/images/home/home_bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
      }}
    >
      <Navbar />
      <section>{children}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
