"use client";
import AnalysisModal from "@/shared/analysis-modal/AnalysisModal";
import { Button } from "antd";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function TransformCTA() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=" bg-linear-to-r from-[#1869CC] via-[#742AFE] to-[#E30BEB]">
      <div className=" flex flex-col justify-center items-center py-20 container">
        {/* Top Button */}
        <div className="flex justify-center">
          <Button
            type="text"
            size="large"
            className=" rounded-full! px-6 lg:px-10! font-medium h-auto lg:h-[35px]! bg-[#FFFFFF33]! cursor-auto! text-xs! lg:text-base! text-white! mb-6!"
            icon={<Sparkles size={16} />}
          >
            Join 50,000+ users
          </Button>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-white">
            Ready to transform your appearance?
          </h1>

          {/* Subheading */}
          <p className="section-subtitle max-w-xl mx-auto">
            Start your free analysis today and discover your full potential
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={() => setIsOpen(true)}
            size="large"
            className="bg-[#C800DE]! border-0! text-white! h-[60px]!"
          >
            Start Free Analysis
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="space-y-3 pt-6 ">
          <p className="section-subtitle text-sm! text-[#FFFFFFCC]! text-center">
            No credit card required • Get started in less than 2 minutes
          </p>
        </div>
      </div>
      <AnalysisModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
