import {
  AnalysisApiResponse,
  TransformedAnalysisResult,
} from "@/types/analysis";

const API_BASE_URL = "http://10.10.7.76:14020/api";

export async function analyzeImage(
  imageFile: File
): Promise<AnalysisApiResponse> {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(`${API_BASE_URL}/ai/analyze-image/`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Analysis failed: ${response.statusText}`);
  }

  return response.json();
}

// Helper function to get rating label based on score
function getRatingLabel(score: number): string {
  if (score >= 9.5) return "Exceptional";
  if (score >= 9.0) return "Outstanding";
  if (score >= 8.5) return "Excellent";
  if (score >= 8.0) return "Very Good";
  if (score >= 7.5) return "Good";
  if (score >= 7.0) return "Above Average";
  if (score >= 6.0) return "Average";
  if (score >= 5.0) return "Below Average";
  return "Needs Improvement";
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
    skin_quality: "Skin Quality",
    jawline_definition: "Jawline Definition",
    cheekbone_structure: "Cheekbone Structure",
    eye_area: "Eye Area",
    facial_proportions: "Facial Proportions",
    symmetry: "Symmetry",
    goals: "Goals",
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
