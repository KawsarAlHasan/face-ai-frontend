import { ConfigProvider } from "antd";
import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center min-h-screen md:max-w-6xl mx-auto md:py-8">
      <div className="  md:flex justify-end items-end hidden  ">
        <Image
          src={"/assets/images/auth/auth-img.png"}
          height={600}
          width={800}
          className="w-full h-full object-contain hidden md:block"
          alt="auth image"
        />
      </div>
      <div className="flex flex-col items-center justify-between  bg-[#0C0C0D] md:py-12 py-10 px-4 md:px-5 lg:px-12 h-full w-full!">
        <ConfigProvider
          theme={{
            components: {
              Select: {
                clearBg: "transparent",
                selectorBg: "#38115f",
                activeBorderColor: "#38115f",
                activeOutlineColor: "transparent",
                optionSelectedBg: "#7c7c7f",
              },
            },
            token: {
              colorPrimary: "#A855F7",
              colorIcon: "white",
              colorBgBase: "transparent",
              colorText: "white",
              colorTextPlaceholder: "#9CA3AF",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </div>
    </section>
  );
}
