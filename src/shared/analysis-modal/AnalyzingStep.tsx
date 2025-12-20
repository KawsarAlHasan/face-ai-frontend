// shared/analysis-modal/AnalyzingStep.tsx

"use client";

import Image from "next/image";

interface AnalyzingStepProps {
  image: string;
}

export function AnalyzingStep({ image }: AnalyzingStepProps) {
  return (
    <div className="px-6 pb-6">
      <h2 className="text-xl font-bold text-white mb-2">Analyse de votre visage</h2>
      <p className="text-sm text-gray-400 mb-6">
        Notre IA analyse vos traits faciaux...
      </p>

      <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[#9810FA]/10 to-[#E60076]/10 aspect-video flex items-center justify-center">
        <img
          src={image}
          alt="Analyzing face"
          className="w-full h-[400px] object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-20 h-20">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 animate-spin" />
            {/* Inner spinning ring */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"
              style={{ animationDuration: '1s' }}
            />
            {/* Center logo container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/favicon.png"
                  alt="logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-center text-gray-400 text-sm">Calcul des scores...</p>
        {/* Progress indicator */}
        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
            style={{ 
              width: '100%',
              animation: 'loading 2s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}