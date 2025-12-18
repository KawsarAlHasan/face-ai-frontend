import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="min-h-screen flex justify-center items-center px-4 md:px-5"
      style={{
        backgroundImage: "url('/dashboard-bg.png')",
      }}
    >
      {children}
    </section>
  );
}
