"use client";
import { Check, X, AlertCircle } from "lucide-react";
import Image from "next/image";

const BEST_PRACTICES = [
  "Visage parfaitement visible et bien éclairé.",
  "De face, expression naturelle.",
  "Sans accessoires ni filtres.",
];

interface PreviewStepProps {
  image: string;
  onAnalyze: () => void;
  onRemove: () => void;
  error?: string | null;
}

export function PreviewStep({
  image,
  onAnalyze,
  onRemove,
  error,
}: PreviewStepProps) {
  return (
    <div className="px-6 pb-6">
      <h2 className="text-xl font-bold text-white mb-2">
        Commencez votre analyse faciale
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Téléchargez une photo nette prise de face pour obtenir les résultats les
        plus précis.
      </p>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <span className="text-red-400 text-sm">Visage invalide. Veuillez télécharger un vrai visage humain. Réessayez plus tard.</span>
        </div>
      )}

      <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[#9810FA]/10 to-[#E60076]/10 aspect-video">
        <Image
          src={image}
          alt="Uploaded face"
          className="w-full h-[300px] object-cover"
          height={500}
          width={900}
        />
        <button
          onClick={onRemove}
          className="absolute top-3 right-3 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors backdrop-blur-sm"
          aria-label="Remove image"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

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

      <button
        onClick={onAnalyze}
        className="w-full cursor-pointer mt-6 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Check className="w-5 h-5" />
        Analysez mon visage
      </button>
    </div>
  );
}
