"use client";
import AnalysisModal from "@/shared/analysis-modal/AnalysisModal";
import PrimaryButton from "@/shared/buttons/PrimaryButton";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function BannerBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const token = Cookies.get("token");

  const handleClick = () => {
    if (token) {
      router.push("/new-scan");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <>
      <PrimaryButton
        onClick={handleClick}
        className="md:px-8! text-lg! md:h-[60px]!"
      >
        <span className="md:hidden">Lancer l'analyse</span>

        <span className="hidden md:inline">Début de l'analyse du visage</span>
      </PrimaryButton>
      <AnalysisModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
