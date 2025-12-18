// "use client";
// import { MOCK_ANALYSIS_RESULT } from "@/constants/home/analysis";
// import { improvementTips, keyStrengths } from "@/constants/new-scan-data";
// import { AnalyzingStep } from "@/shared/analysis-modal/AnalyzingStep";
// import { PreviewStep } from "@/shared/analysis-modal/PreviewStep";
// import { ResultsStep } from "@/shared/analysis-modal/ResultsStep";
// import { UploadStep } from "@/shared/analysis-modal/UploadStep";
// import { Check } from "lucide-react";
// import React, { useState } from "react";
// type ModalStep = "upload" | "preview" | "analyzing" | "results";
// const StartAnalysis = () => {
//   const [step, setStep] = useState<ModalStep>("upload");
//   const [uploadedImage, setUploadedImage] = useState<string | null>(null);

//   const handleImageUpload = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setUploadedImage(e.target?.result as string);
//       setStep("preview");
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleAnalyze = () => {
//     setStep("analyzing");
//     setTimeout(() => {
//       setStep("results");
//     }, 2000);
//   };

//   const handleRemoveImage = () => {
//     setUploadedImage(null);
//     setStep("upload");
//   };

//   return (
//     <div className=" flex items-center justify-center h-full overflow-y-auto ">
//       <div className="  h-auto ">
//         <div className="">
//           {step === "upload" && (
//             <div className="bg-black p-2 pt-5  rounded-2xl ">
//               <UploadStep onImageUpload={handleImageUpload} />
//             </div>
//           )}
//         </div>

//         {step === "preview" && uploadedImage && (
//           <div className="bg-black p-2 pt-5 rounded-2xl">
//             <PreviewStep
//               image={uploadedImage}
//               onAnalyze={handleAnalyze}
//               onRemove={handleRemoveImage}
//             />
//           </div>
//         )}

//         {step === "analyzing" && uploadedImage && (
//           <div className="bg-black p-2 pt-5 rounded-2xl">
//             <AnalyzingStep image={uploadedImage} />
//           </div>
//         )}

//         <div className="">
//           {step === "results" && (
//             <div className="flex md:flex-row  flex-col  items-start gap-8 w-full ">
//               <div className="md:min-w-lg bg-black p-2 md:pt-5 rounded-2xl border border-[#a855f795]  pt-[610px] ">
//                 <ResultsStep results={MOCK_ANALYSIS_RESULT} />
//               </div>
//               <div className="md:min-w-lg min-w-full  bg-black pt-5 border border-[#a855f795] rounded-2xl p-6 space-y-6">
//                 <div>
//                   <h2 className="text-white text-lg font-medium mb-3">
//                     Key Strengths
//                   </h2>
//                   <div className="space-y-2">
//                     {keyStrengths.map((strength, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-3 bg-gray-900 border border-gray-700 rounded px-4 py-3"
//                       >
//                         <Check className="w-4 h-4 text-green-500 shrink-0" />
//                         <span className="text-gray-300 text-sm">
//                           {strength}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h2 className="text-white text-lg font-medium mb-3">
//                     Improvement Tips and Tricks
//                   </h2>
//                   <div className="space-y-2">
//                     {improvementTips.map((tip, index) => (
//                       <div
//                         key={index}
//                         className="bg-gray-900 border border-gray-700 rounded px-4 py-3"
//                       >
//                         <span className="text-gray-300 text-sm">{tip}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StartAnalysis;



// "use client";

// import { Check, UploadIcon } from "lucide-react";
// import type React from "react";
// import { useRef } from "react";

// const BEST_PRACTICES = [
//   "Face clearly visible and well-lit",
//   "Front-facing with natural expression",
//   "No accessories or filters",
// ];

// interface UploadStepProps {
//   onImageUpload: (file: File) => void;
// }

// export function UploadStep({ onImageUpload }: UploadStepProps) {
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith("image/")) {
//       onImageUpload(file);
//     }
//   };

//   return (
//     <div className="px-6 pb-6">
//       <h2 className="text-xl font-bold text-white mb-2">
//         Start Your Free Analysis 
//       </h2>
//       <p className="text-sm text-gray-400 mb-6">
//         Upload a clear front-facing photo for the most accurate results
//       </p>

//       <div
//         onDragOver={(e) => e.preventDefault()}
//         onDrop={handleDragDrop}
//         className="border-2 border-pink-500 rounded-xl p-8 text-center cursor-pointer hover:bg-pink-500/5 transition-colors"
//         onClick={() => fileInputRef.current?.click()}
//       >
//         <div className="flex justify-center mb-3">
//           <div className="bg-linear-to-br from-[#9810FA] to-[#E60076] p-4 rounded-full">
//             <UploadIcon />
//           </div>
//         </div>
//         <p className="text-white font-medium">
//           Click to upload or drag and drop
//         </p>
//         <p className="text-xs text-gray-400 mt-2">
//           PNG, JPG or JPEG (max. 10MB)
//         </p>
//       </div>

//       <div className="mt-6 space-y-2 text-sm text-gray-400 bg-linear-to-br from-[#9810FA]/10 to-[#E60076]/10 p-3">
//         <p className="font-semibold text-white">For best results:</p>
//         <ul className="space-y-1 ">
//           {BEST_PRACTICES?.map((practice) => (
//             <li key={practice} className="flex items-start gap-2">
//               <span className="text-pink-500 shrink-0">
//                 <Check />
//               </span>
//               <span>{practice}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="image/*"
//         className="hidden"
//         onChange={(e) =>
//           e.target.files?.[0] && onImageUpload(e.target.files[0])
//         }
//       />
//     </div>
//   );
// }


// "use client";

// import { BEST_PRACTICES } from "@/constants/home/analysis";
// import { Check } from "lucide-react";
// import Image from "next/image";

// interface PreviewStepProps {
//   image: string;
//   onAnalyze: () => void;
//   onRemove: () => void;
// }

// export function PreviewStep({ image, onAnalyze, onRemove }: PreviewStepProps) {
//   return (
//     <div className="px-6 pb-6">
//       <h2 className="text-xl font-bold text-white mb-2">
//         Start Your Free Analysis
//       </h2>
//       <p className="text-sm text-gray-400 mb-6">
//         Upload a clear front-facing photo for the most accurate results
//       </p>

//       <div className="relative rounded-xl overflow-hidden mb-6 bg-linear-to-br from-[#9810FA]/10 to-[#E60076]/10 aspect-video">
//         <Image
//           src={image || "/placeholder.svg"}
//           alt="Uploaded face"
//           className="w-full h-[300px] object-cover "
//           height={500}
//           width={900}
//         />
//         <button
//           onClick={onRemove}
//           className="absolute top-3 right-3 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors backdrop-blur-sm"
//         >
//           <svg
//             className="w-5 h-5 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//       </div>

//       <div className="mt-6 space-y-2 text-sm text-gray-400 bg-linear-to-br from-[#9810FA]/10 to-[#E60076]/10 p-3">
//         <p className="font-semibold text-white">For best results:</p>
//         <ul className="space-y-1 ">
//           {BEST_PRACTICES?.map((practice) => (
//             <li key={practice} className="flex items-start gap-2">
//               <span className="text-pink-500 shrink-0">
//                 <Check />
//               </span>
//               <span>{practice}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button
//         onClick={onAnalyze}
//         className="w-full bg-linear-to-r from-pink-600 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center gap-2"
//       >
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//         </svg>
//         Analyze My Face
//       </button>
//     </div>
//   );
// }


// import Image from "next/image";

// interface AnalyzingStepProps {
//   image: string;
// }

// export function AnalyzingStep({ image }: AnalyzingStepProps) {
//   return (
//     <div className="px-6 pb-6">
//       <h2 className="text-xl font-bold text-white mb-2">Analyzing Your Face</h2>
//       <p className="text-sm text-gray-400 mb-6">
//         Our AI is processing your facial features...
//       </p>

//       <div className="relative rounded-xl overflow-hidden mb-6 bg-linear-to-br from-[#9810FA]/10 to-[#E60076]/10 aspect-video flex items-center justify-center">
//         <img
//           src={image || "/placeholder.svg"}
//           alt="Analyzing face"
//           className="w-full h-[400px] object-cover opacity-50"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="relative w-20 h-20">
//             <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 animate-spin" />
//             <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
//                 <Image
//                   src={"/favicon.png"}
//                   alt="logo"
//                   width={200}
//                   height={200}
//                   className="w-[600px] h-fit"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <p className="text-center text-gray-400 text-sm">Calculating scores...</p>
//     </div>
//   );
// }


// "use client";

// import { MetricCircle } from "./MetricCircle";

// interface AnalysisResult {
//   overallScore: number;
//   rating: string;
//   metrics: {
//     name: string;
//     score: number;
//   }[];
// }

// interface ResultsStepProps {
//   results: AnalysisResult;
//   onClose ?: () => void;
// }

// export function ResultsStep({ results }: ResultsStepProps) {
//   return (
//     <div className="px-6 pb-6 max-h-[90vh] overflow-y-auto">
//       <h2 className="text-xl font-semibold text-white mb-1">
//         Your Analysis Results
//       </h2>
//       <p className="text-sm text-gray-400 mb-6">
//         Here's your personalized facial analysis report!
//       </p>

//       <div className="bg-face rounded-xl p-6 mb-6 text-center">
//         <div className="text-6xl font-bold text-white mb-1">
//           {results.overallScore}
//         </div>
//         <p className="text-purple-100 font-medium">Overall Score</p>
//         <p className="text-sm text-purple-200 mt-1">{results.rating}</p>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-lg font-medium text-white mb-4">
//           Detailed Breakdown
//         </h3>
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
//           {results?.metrics?.map((metric) => (
//             <MetricCircle
//               key={metric.name}
//               name={metric.name}
//               score={metric.score}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import {
//   RadialBarChart,
//   RadialBar,
//   PolarAngleAxis,
//   ResponsiveContainer,
// } from "recharts";

// interface MetricCircleProps {
//   name: string;
//   score: number;
// }

// export function MetricCircle({ name, score }: MetricCircleProps) {
//   const chartData = [
//     {
//       name,
//       value: score,
//       fill: "url(#colorGradient)",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center gap-3">
//       <div className="relative w-28 h-28">
//         <ResponsiveContainer width="100%" height="100%">
//           <RadialBarChart
//             cx="50%"
//             cy="50%"
//             innerRadius="70%"
//             outerRadius="100%"
//             data={chartData}
//             startAngle={90}
//             endAngle={-270}
//           >
//             <defs>
//               <linearGradient
//                 id="colorGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="100%"
//               >
//                 <stop offset="0%" stopColor="#E30BEB" />
//                 <stop offset="100%" stopColor="#1869CC" />
//               </linearGradient>
//             </defs>
//             <PolarAngleAxis
//               type="number"
//               domain={[0, 10]}
//               angleAxisId={0}
//               tick={false}
//             />
//             <RadialBar
//               background={{ fill: "#1e293b" }}
//               dataKey="value"
//               cornerRadius={8}
//               angleAxisId={0}
//             />
//           </RadialBarChart>
//         </ResponsiveContainer>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-lg font-bold text-white">
//               {score.toFixed(1)}/10
//             </div>
//             {/* <div className="text-xs text-gray-400"></div> */}
//           </div>
//         </div>
//       </div>
//       <p className="text-xs text-gray-300 text-center max-w-24 text-nowrap">
//         {name}
//       </p>
//     </div>
//   );
// }












// post: http://10.10.7.76:14020/api/ai/analyze-image/

// formData: image

// result: {
//     "message": "Image analyzed & saved",
//     "data": {
//         "id": 21,
//         "user": "Kawsar Al Hasan",
//         "face": 1,
//         "ratings": {
//             "id": 22,
//             "skin_quality": 8.7,
//             "jawline_definition": 9.0,
//             "cheekbone_structure": 9.2,
//             "eye_area": 9.1,
//             "facial_proportions": 9.3,
//             "symmetry": 9.2,
//             "goals": 9.7
//         },
//         "key_strengths": [
//             "Strong cheekbone structure",
//             "Elegant jawline",
//             "Balanced facial features"
//         ],
//         "exercise_guidance": [
//             "Maintain facial exercises",
//             "Hydrate for skin health",
//             "Focus on eye relaxation"
//         ],
//         "ai_recommendations": [
//             {
//                 "title": "Skincare",
//                 "description": "Consider a hydrating moisturizer to enhance skin glow."
//             },
//             {
//                 "title": "Relaxation",
//                 "description": "Incorporate relaxation techniques for eye area health."
//             },
//             {
//                 "title": "Facial Massage",
//                 "description": "Regular facial massages can enhance symmetry."
//             }
//         ],
//         "created_at": "2025-12-18T11:23:43.029107+06:00",
//         "average_rating": 9.06
//     }
// }















// এখানে ডিজাইন ঠিক রেখে সব কিছু ডাইনামিক করে দাও 

// কোন file এ কি কোড থাকবে file name সহ কোড ফুল কোড দাও সব কিছু যেন ঠিক মতো কাজ করে 





