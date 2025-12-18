"use client";
import { useState } from "react";
import { Modal } from "antd";
import { MOCK_ANALYSIS_RESULT } from "@/constants/home/analysis";
import { UploadStep } from "./UploadStep";
import { PreviewStep } from "./PreviewStep";
import { AnalyzingStep } from "./AnalyzingStep";
import { ResultsStep } from "./ResultsStep";

type ModalStep = "upload" | "preview" | "analyzing" | "results";

interface AnalysisModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function AnalysisModal({
  isOpen,
  setIsOpen,
}: AnalysisModalProps) {
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

  const handleClose = () => {
    setIsOpen(false);
    setStep("upload");
    setUploadedImage(null);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleClose}
      footer={null}
      centered
      width={480}
      className="analysis-modal"
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <div className="bg-black rounded-2xl p-2">
        {step === "upload" && <UploadStep onImageUpload={handleImageUpload} />}

        {step === "preview" && uploadedImage && (
          <PreviewStep
            image={uploadedImage}
            onAnalyze={handleAnalyze}
            onRemove={handleRemoveImage}
          />
        )}

        {step === "analyzing" && uploadedImage && (
          <AnalyzingStep image={uploadedImage} />
        )}

        {step === "results" && (
          <ResultsStep results={MOCK_ANALYSIS_RESULT} onClose={handleClose} />
        )}
      </div>
    </Modal>
  );
}
