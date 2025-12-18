"use client";
import { Check, UploadIcon } from "lucide-react";
import type React from "react";
import { useRef } from "react";

const BEST_PRACTICES = [
  "Face clearly visible and well-lit",
  "Front-facing with natural expression",
  "No accessories or filters",
];

interface UploadStepProps {
  onImageUpload: (file: File) => void;
}

export function UploadStep({ onImageUpload }: UploadStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      onImageUpload(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="px-6 pb-6">
      <h2 className="text-xl font-bold text-white mb-2">
        Start Your Free Analysis
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Upload a clear front-facing photo for the most accurate results
      </p>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDragDrop}
        className="border-2 border-pink-500 rounded-xl p-8 text-center cursor-pointer hover:bg-pink-500/5 transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex justify-center mb-3">
          <div className="bg-gradient-to-br from-[#9810FA] to-[#E60076] p-4 rounded-full">
            <UploadIcon className="w-6 h-6 text-white" />
          </div>
        </div>
        <p className="text-white font-medium">
          Click to upload or drag and drop
        </p>
        <p className="text-xs text-gray-400 mt-2">
          PNG, JPG or JPEG (max. 10MB)
        </p>
      </div>

      <div className="mt-6 space-y-2 text-sm text-gray-400 bg-gradient-to-br from-[#9810FA]/10 to-[#E60076]/10 p-3 rounded-lg">
        <p className="font-semibold text-white">For best results:</p>
        <ul className="space-y-1">
          {BEST_PRACTICES.map((practice) => (
            <li key={practice} className="flex items-start gap-2">
              <span className="text-pink-500 shrink-0">
                <Check className="w-4 h-4" />
              </span>
              <span>{practice}</span>
            </li>
          ))}
        </ul>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}