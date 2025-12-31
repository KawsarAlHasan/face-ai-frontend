"use client";
import {
  analyzeImage,
  transformAnalysisData,
} from "@/api-services/analysisApi";
import { AnalyzingStep } from "@/shared/analysis-modal/AnalyzingStep";
import { PreviewStep } from "@/shared/analysis-modal/PreviewStep";
import { ResultsStep } from "@/shared/analysis-modal/ResultsStep";
import { UploadStep } from "@/shared/analysis-modal/UploadStep";
import { ModalStep, TransformedAnalysisResult } from "@/types/analysis";
import { Check } from "lucide-react";
import React, { useState } from "react";

const StartAnalysis = () => {
  const [step, setStep] = useState<ModalStep>("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] =
    useState<TransformedAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    setUploadedFile(file);
    setError(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setStep("preview");
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;

    setStep("analyzing");
    setError(null);

    try {
      const response = await analyzeImage(uploadedFile);
      const transformedData = transformAnalysisData(response);
      setAnalysisResult(transformedData);
      setStep("results");
    } catch (err) {
      console.error("Analysis failed:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Analysis failed. Please try again."
      );
      setStep("preview");
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setUploadedFile(null);
    setAnalysisResult(null);
    setError(null);
    setStep("upload");
  };

  console.log("analysisResult", analysisResult)

  return (
    <div className="flex items-center justify-center h-full overflow-y-auto">
      <div className="h-auto">
        <div className="">
          {step === "upload" && (
            <div className="bg-black p-2 pt-5 mt-[-170px] rounded-2xl">
              <UploadStep onImageUpload={handleImageUpload} />
            </div>
          )}
        </div>

        {step === "preview" && uploadedImage && (
          <div className="bg-black p-2 mt-[-170px] pt-5 rounded-2xl">
            <PreviewStep
              image={uploadedImage}
              onAnalyze={handleAnalyze}
              onRemove={handleRemoveImage}
              error={error}
            />
          </div>
        )}

        {step === "analyzing" && uploadedImage && (
          <div className="bg-black p-2 mt-[-170px] pt-5 rounded-2xl">
            <AnalyzingStep image={uploadedImage} />
          </div>
        )}

        <div className="">
          {step === "results" && analysisResult && (
            <div className="flex md:flex-row flex-col items-start gap-8 w-full mt-4">
              <div className="md:min-w-lg bg-black p-2 md:pt-5 rounded-2xl border border-[#a855f795] pt-[610px]">
                <ResultsStep results={analysisResult} />
              </div>
              <div className="md:min-w-lg min-w-full bg-black pt-5 border border-[#a855f795] rounded-2xl p-6 space-y-6">
                {/* Key Strengths Section */}
                <div>
                  <h2 className="text-white text-lg font-medium mb-3">
                    Points forts
                  </h2>
                  <div className="space-y-2">
                    {analysisResult.keyStrengths.map((strength, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-gray-900 border border-gray-700 rounded px-4 py-3"
                      >
                        <Check className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-gray-300 text-sm">
                          {strength}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Improvement Tips Section */}
                <div>
                  <h2 className="text-white text-lg font-medium mb-3">
                    Conseils et astuces pour s'améliorer
                  </h2>
                  <div className="space-y-2">
                    {analysisResult.improvementTips.map((tip, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 border border-gray-700 rounded px-4 py-3"
                      >
                        <span className="text-gray-300 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Recommendations Section */}
                {analysisResult.aiRecommendations.length > 0 && (
                  <div>
                    <h2 className="text-white text-lg font-medium mb-3">
                      Recommandations de l'IA
                    </h2>
                    <div className="space-y-2">
                      {analysisResult.aiRecommendations.map((rec, index) => (
                        <div
                          key={index}
                          className="bg-gray-900 border border-gray-700 rounded px-4 py-3"
                        >
                          <h3 className="text-purple-400 font-medium text-sm mb-1">
                            {rec.title}
                          </h3>
                          <span className="text-gray-300 text-sm">
                            {rec.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Restart Analysis Button */}
                <button
                  onClick={handleRemoveImage}
                  className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Démarrer une nouvelle analyse
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartAnalysis;
