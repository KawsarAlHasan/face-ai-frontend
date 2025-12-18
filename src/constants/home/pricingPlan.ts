export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  buttonText: string;
  buttonStyle: string;
  isPopular?: boolean;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 3.99,
    period: "per week",
    description: "Perfect to get started",
    buttonText: "Get Started",
    buttonStyle: "bg-[#A855F7] hover:bg-purple-700",
    features: [
      "1 analysis per week",
      "Detailed AI scores",
      "Personalized routines",
      "Progress tracking",
      "Email support",
    ],
  },
  {
    name: "Medium",
    price: 8.99,
    period: "per week",
    description: "Most popular choice",
    buttonText: "Choose Medium",
    buttonStyle:
      "bg-linear-to-r from-[#9810FA] to-[#E60076] hover:bg-magenta-600",
    isPopular: true,
    features: [
      "3 analyses per week",
      "Detailed AI scores",
      "Advanced personalized routines",
      "Advanced progress tracking",
      "Priority support",
      "Community access",
    ],
  },
  {
    name: "Unlimited",
    price: 19.99,
    period: "per week",
    description: "Most complete plan",
    buttonText: "Go Unlimited",
    buttonStyle: "bg-purple-600 hover:bg-purple-700",
    features: [
      "Unlimited analyses",
      "Ultra-detailed AI scores",
      "Advanced personalized routines",
      "Advanced progress tracking",
      "Premium support",
      "Premium community access",
      "Monthly video consultation",
    ],
  },
];

export default pricingPlans;