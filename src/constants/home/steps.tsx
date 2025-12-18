import { Upload, Search, Sliders } from "lucide-react";
const steps = [
  {
    number: "01",
    title: "Upload Your Photo",
    description:
      "Take a selfie or upload a clear photo of your face to begin the analysis.",
    icon: Upload,
    borderColor: "border-[#9810FA]/80",
    numberBg: "bg-[#9810FA]",
  },
  {
    number: "02",
    title: "Instant AI Analysis",
    description:
      "Our AI analyzes your face across multiple criteria and generates your personalized score.",
    icon: Search,
    borderColor: "border-pink-500",
    numberBg: "bg-[#E60076]",
  },
  {
    number: "03",
    title: "Get Your Routines",
    description:
      "Receive personalised exercises and routines to naturally enhance your features.",
    icon: Sliders,
    borderColor: "border-blue-500",
    numberBg: "bg-[#432DD7]",
  },
];
export default steps;
