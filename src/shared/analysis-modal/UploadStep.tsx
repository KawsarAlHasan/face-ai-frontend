"use client";
import { useMyProfile } from "@/api-services/userServices";
import { Check, UploadIcon, AlertCircle } from "lucide-react";
import type React from "react";
import { useRef } from "react";
import Link from "next/link";

const BEST_PRACTICES = [
  "Visage parfaitement visible et bien éclairé.",
  "De face, expression naturelle.",
  "Sans accessoires ni filtres.",
];

interface UploadStepProps {
  onImageUpload: (file: File) => void;
}

export function UploadStep({ onImageUpload }: UploadStepProps) {
  const { profileData, isLoading, isError, mutate } = useMyProfile();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const hasBalance = profileData?.balance && profileData.balance > 0;

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!hasBalance) return;

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      onImageUpload(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasBalance) return;

    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleUploadClick = () => {
    if (hasBalance) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="px-6 pb-6">
      <h2 className="text-xl font-bold text-white mb-2">
        Commencez votre analyse faciale
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Téléchargez une photo nette prise de face pour obtenir les résultats les
        plus précis.
      </p>

      {/* Balance Warning */}
      {!hasBalance && (
        <div className="mb-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-white font-medium mb-1">Solde insuffisant</p>
              <p className="text-sm text-gray-300 mb-3">
                Vous n'avez pas de crédit disponible. Achetez un plan pour
                commencer votre analyse faciale.
              </p>
              <Link
                href="/subscription"
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#9810FA] to-[#E60076] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Acheter un plan
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Upload Area */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDragDrop}
        className={`border-2 rounded-xl p-8 text-center transition-colors ${
          hasBalance
            ? "border-pink-500 cursor-pointer hover:bg-pink-500/5"
            : "border-gray-600 cursor-not-allowed opacity-50"
        }`}
        onClick={handleUploadClick}
      >
        <div className="flex justify-center mb-3">
          <div
            className={`p-4 rounded-full ${
              hasBalance
                ? "bg-gradient-to-br from-[#9810FA] to-[#E60076]"
                : "bg-gray-700"
            }`}
          >
            <UploadIcon className="w-6 h-6 text-white" />
          </div>
        </div>
        <p
          className={`font-medium ${
            hasBalance ? "text-white" : "text-gray-500"
          }`}
        >
          {hasBalance
            ? "Cliquez pour télécharger ou glissez-déposez."
            : "Upload désactivé - Achetez un plan"}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          PNG, JPG ou JPEG (max. 10 Mo)
        </p>
      </div>

      {/* Best Practices */}
      <div className="mt-6 space-y-2 text-sm text-gray-400 bg-gradient-to-br from-[#9810FA]/10 to-[#E60076]/10 p-3 rounded-lg">
        <p className="font-semibold text-white">Pour de meilleurs résultats:</p>
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
        disabled={!hasBalance}
      />
    </div>
  );
}
