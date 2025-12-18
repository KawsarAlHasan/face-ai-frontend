import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLogo() {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-2 ">
      <Image
        src={"/favicon.png"}
        height={100}
        width={100}
        className="w-[30px] h-full object-contain"
        alt="logo"
      />
      <span className="text-[22px] font-medium"> Face Scan</span>
    </Link>
  );
}
