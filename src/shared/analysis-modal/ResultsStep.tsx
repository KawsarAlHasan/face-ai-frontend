"use client";

import { MetricCircle } from "./MetricCircle";
import { TransformedAnalysisResult } from "@/types/analysis";

interface ResultsStepProps {
  results: TransformedAnalysisResult;
  onClose?: () => void;
}

export function ResultsStep({ results, onClose }: ResultsStepProps) {
  return (
    <div className="px-6 pb-6 max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-semibold text-white mb-1">
        Résultats de votre analyse
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Voici votre rapport d'analyse faciale personnalisé !
      </p>

      {/* Overall Score Card */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 mb-6 text-center">
        <div className="text-6xl font-bold text-white mb-1">
          {results?.overallScore.toFixed(1)}
        </div>
        <p className="text-purple-100 font-medium">Score global</p>
        <p className="text-sm text-purple-200 mt-1">{results?.rating}</p>
      </div>

      {/* Detailed Breakdown */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Analyse détaillée
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {results?.metrics?.map((metric) => (
            <MetricCircle
              key={metric?.name}
              name={metric?.name}
              score={metric?.score}
            />
          ))}
        </div>
      </div>

      {/* Close button if onClose is provided */}
      {onClose && (
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          Fermer
        </button>
      )}
    </div>
  );
}
