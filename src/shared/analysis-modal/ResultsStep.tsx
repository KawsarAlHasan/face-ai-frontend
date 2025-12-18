"use client";

import { MetricCircle } from "./MetricCircle";

interface AnalysisResult {
  overallScore: number;
  rating: string;
  metrics: {
    name: string;
    score: number;
  }[];
}

interface ResultsStepProps {
  results: AnalysisResult;
  onClose ?: () => void;
}

export function ResultsStep({ results }: ResultsStepProps) {
  return (
    <div className="px-6 pb-6 max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-semibold text-white mb-1">
        Your Analysis Results
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Here's your personalized facial analysis report!
      </p>

      <div className="bg-face rounded-xl p-6 mb-6 text-center">
        <div className="text-6xl font-bold text-white mb-1">
          {results.overallScore}
        </div>
        <p className="text-purple-100 font-medium">Overall Score</p>
        <p className="text-sm text-purple-200 mt-1">{results.rating}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Detailed Breakdown
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {results?.metrics?.map((metric) => (
            <MetricCircle
              key={metric.name}
              name={metric.name}
              score={metric.score}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
