import {
  AnalysisApiResponse,
  TransformedAnalysisResult,
} from "@/types/analysis";
import { fetcherWithTokenPost } from "./api";
import { fetcherWithTokenPostFormData } from "./api";

export async function analyzeImage(
  imageFile: File
): Promise<AnalysisApiResponse> {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetcherWithTokenPostFormData(
    `/api/ai/analyze-image/`,
    formData
  );

  console.log("response", response?.data);

  return response;
}

// Helper function to get rating label based on score
function getRatingLabel(score: number): string {
  if (score >= 9.5) return "Exceptionnel";
  if (score >= 9.0) return "Remarquable";
  if (score >= 8.5) return "Excellent";
  if (score >= 8.0) return "Très bien";
  if (score >= 7.5) return "Bien";
  if (score >= 7.0) return "Supérieur à la moyenne";
  if (score >= 6.0) return "Moyenne";
  if (score >= 5.0) return "En dessous de la moyenne";
  return "Nécessite des améliorations";
}

// Transform API response to UI-friendly format
export function transformAnalysisData(
  data: AnalysisApiResponse
): TransformedAnalysisResult {
  const {
    ratings,
    key_strengths,
    exercise_guidance,
    ai_recommendations,
    average_rating,
  } = data.data;

  // Map rating keys to display names
  const metricNameMap: Record<string, string> = {
    skin_quality: "Qualité de la peau",
    jawline_definition: "Définition de la mâchoire",
    cheekbone_structure: "Structure des pommettes",
    eye_area: "Contour des yeux",
    facial_proportions: "Proportions du visage",
    symmetry: "Symétrie",
    goals: "Objectifs",
  };

  // Transform ratings to metrics array (excluding 'id')
  const metrics = Object.entries(ratings)
    .filter(([key]) => key !== "id")
    .map(([key, score]) => ({
      name:
        metricNameMap[key] ||
        key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      score: score as number,
    }));

  return {
    overallScore: Math.round(average_rating * 10) / 10,
    rating: getRatingLabel(average_rating),
    metrics,
    keyStrengths: key_strengths,
    improvementTips: exercise_guidance,
    aiRecommendations: ai_recommendations,
  };
}
