import { Upload, Search, Sliders } from "lucide-react";
const steps = [
  {
    number: "01",
    title: "Téléchargez votre photo",
    description:
      "Prenez un selfie ou téléchargez une photo nette de votre visage pour commencer l'analyse.",
    icon: Upload,
    borderColor: "border-[#9810FA]/80",
    numberBg: "bg-[#9810FA]",
  },
  {
    number: "02",
    title: "Analyse instantanée par IA",
    description:
      "Notre IA analyse votre visage selon de multiples critères et génère votre score personnalisé.",
    icon: Search,
    borderColor: "border-pink-500",
    numberBg: "bg-[#E60076]",
  },
  {
    number: "03",
    title: "Adoptez vos routines",
    description:
      "Recevez des exercices et des programmes personnalisés pour sublimer naturellement vos atouts.",
    icon: Sliders,
    borderColor: "border-blue-500",
    numberBg: "bg-[#432DD7]",
  },
];
export default steps;
