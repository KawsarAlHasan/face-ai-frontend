"use client";
import AnalysisModal from "@/shared/analysis-modal/AnalysisModal";
import PrimaryButton from "@/shared/buttons/PrimaryButton";
import React, { useState } from "react";

export default function BannerBtn() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <PrimaryButton
        onClick={() => setIsOpen(true)}
        className="md:px-8! text-lg! md:h-[60px]!"
      >
        Start Free Analysis
      </PrimaryButton>
      <AnalysisModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
