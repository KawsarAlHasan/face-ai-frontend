"use client";
import { MOCK_ANALYSIS_RESULT } from "@/constants/home/analysis";
import { improvementTips, keyStrengths } from "@/constants/new-scan-data";
import { AnalyzingStep } from "@/shared/analysis-modal/AnalyzingStep";
import { PreviewStep } from "@/shared/analysis-modal/PreviewStep";
import { ResultsStep } from "@/shared/analysis-modal/ResultsStep";
import { UploadStep } from "@/shared/analysis-modal/UploadStep";
import { Check } from "lucide-react";
import React, { useState } from "react";
type ModalStep = "upload" | "preview" | "analyzing" | "results";

const StartAnalysis = () => {
  const [step, setStep] = useState<ModalStep>("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setStep("preview");
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = () => {
    setStep("analyzing");
    setTimeout(() => {
      setStep("results");
    }, 2000);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setStep("upload");
  };

  return (
    <div className=" flex items-center justify-center h-full overflow-y-auto ">
      <div className="  h-auto ">
        <div className="">
          {step === "upload" && (
            <div className="bg-black p-2 pt-5  rounded-2xl ">
              <UploadStep onImageUpload={handleImageUpload} />
            </div>
          )}
        </div>

        {step === "preview" && uploadedImage && (
          <div className="bg-black p-2 pt-5 rounded-2xl">
            <PreviewStep
              image={uploadedImage}
              onAnalyze={handleAnalyze}
              onRemove={handleRemoveImage}
            />
          </div>
        )}

        {step === "analyzing" && uploadedImage && (
          <div className="bg-black p-2 pt-5 rounded-2xl">
            <AnalyzingStep image={uploadedImage} />
          </div>
        )}

        <div className="">
          {step === "results" && (
            <div className="flex md:flex-row  flex-col  items-start gap-8 w-full ">
              <div className="md:min-w-lg bg-black p-2 md:pt-5 rounded-2xl border border-[#a855f795]  pt-[610px] ">
                <ResultsStep results={MOCK_ANALYSIS_RESULT} />
              </div>
              <div className="md:min-w-lg min-w-full  bg-black pt-5 border border-[#a855f795] rounded-2xl p-6 space-y-6">
                <div>
                  <h2 className="text-white text-lg font-medium mb-3">
                    Key Strengths
                  </h2>
                  <div className="space-y-2">
                    {keyStrengths.map((strength, index) => (
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

                <div>
                  <h2 className="text-white text-lg font-medium mb-3">
                    Improvement Tips and Tricks
                  </h2>
                  <div className="space-y-2">
                    {improvementTips.map((tip, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 border border-gray-700 rounded px-4 py-3"
                      >
                        <span className="text-gray-300 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartAnalysis;
