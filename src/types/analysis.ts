// types/analysis.ts

export interface AnalysisRatings {
  id: number;
  skin_quality: number;
  jawline_definition: number;
  cheekbone_structure: number;
  eye_area: number;
  facial_proportions: number;
  symmetry: number;
  goals: number;
}

export interface AIRecommendation {
  title: string;
  description: string;
}

export interface AnalysisData {
  id: number;
  user: string;
  face: number;
  ratings: AnalysisRatings;
  key_strengths: string[];
  exercise_guidance: string[];
  ai_recommendations: AIRecommendation[];
  created_at: string;
  average_rating: number;
}

export interface AnalysisApiResponse {
  message: string;
  data: AnalysisData;
}

// Transformed data for UI components
export interface TransformedAnalysisResult {
  overallScore: number;
  rating: string;
  metrics: {
    name: string;
    score: number;
  }[];
  keyStrengths: string[];
  improvementTips: string[];
  aiRecommendations: AIRecommendation[];
}

export type ModalStep = "upload" | "preview" | "analyzing" | "results";