"use client";

import { BEST_PRACTICES } from "@/constants/home/analysis";
import { Check } from "lucide-react";
import Image from "next/image";

interface PreviewStepProps {
  image: string;
  onAnalyze: () => void;
  onRemove: () => void;
}

export function PreviewStep({ image, onAnalyze, onRemove }: PreviewStepProps) {
  return (
    <div className="px-6 pb-6">
      <h2 className="text-xl font-bold text-white mb-2">
        Start Your Free Analysis
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Upload a clear front-facing photo for the most accurate results
      </p>

      <div className="relative rounded-xl overflow-hidden mb-6 bg-linear-to-br from-[#9810FA]/10 to-[#E60076]/10 aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt="Uploaded face"
          className="w-full h-[300px] object-cover "
          height={500}
          width={900}
        />
        <button
          onClick={onRemove}
          className="absolute top-3 right-3 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors backdrop-blur-sm"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6 space-y-2 text-sm text-gray-400 bg-linear-to-br from-[#9810FA]/10 to-[#E60076]/10 p-3">
        <p className="font-semibold text-white">For best results:</p>
        <ul className="space-y-1 ">
          {BEST_PRACTICES?.map((practice) => (
            <li key={practice} className="flex items-start gap-2">
              <span className="text-pink-500 shrink-0">
                <Check />
              </span>
              <span>{practice}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onAnalyze}
        className="w-full bg-linear-to-r from-pink-600 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
        Analyze My Face
      </button>
    </div>
  );
}
