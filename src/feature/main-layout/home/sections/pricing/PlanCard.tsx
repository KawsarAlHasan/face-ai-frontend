"use client";
import React from "react";
import { Check, CornerRightDown } from "lucide-react";
import { toast } from "sonner";
import { fetcherWithTokenPost } from "@/api-services/api";

interface Plan {
  active: boolean;
  amount: number;
  analyses_per_interval: number;
  id: number;
  interval: string;
  name: string;
  stripe_price_id: string;
  stripe_product_id: string;
  trial_days: number;
}

interface PlanCardProps {
  plan: Plan;
  index: number;
  isPopular?: boolean;
}

export default function PlanCard({
  plan,
  index,
  isPopular = false,
}: PlanCardProps) {

  // Price calculation (amount is in cents, so divide by 100)
  const price = plan.amount / 100;

  // console.log(plan, "plan");

  const handleSubscription = async () => {
    // router.push("/onboarding/plan");
    try {
      const res = await fetcherWithTokenPost(
        "/api/payment/create-subscription/",
        {
          plan_id: plan.id,
        }
      );

      window.location.href = res?.checkout_url;

      console.log(res, "response");
    } catch (error: any) {
      toast.error( error?.response?.data?.error || "Something went wrong");
      console.log(error, "error");
    }
  };

  return (
    <div
      key={index}
      className={`relative ${
        isPopular
          ? "bg-linear-to-r from-[#1869CC] via-[#742AFE] to-[#E30BEB] rounded-2xl pt-11 pb-0.5 px-0.5"
          : ""
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex items-center gap-2 text-white">
            <CornerRightDown /> Best Deal
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 flex flex-col bg-[#000000] ${
          isPopular
            ? "border-2 border-[#9810FA] lg:h-[550px]"
            : "border-2 border-[#9810FA] lg:min-h-[570px]"
        }`}
      >
        {/* Plan Name and Price */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-medium text-white mb-2">{plan.name}</h3>

          <div className="flex items-end justify-center gap-1 mt-4">
            €
            <span className="text-5xl font-semibold text-white">
              {price.toFixed(2)}
            </span>
          </div>
          <span className="text-gray-400">/{plan.interval}</span>
        </div>

        {/* Features List */}
        <ul className={`space-y-3 mb-8 ${isPopular ? "" : "grow"}`}>
          <li className="flex items-center gap-3">
            <div
              className={`p-1 rounded-full ${
                isPopular
                  ? "bg-linear-to-br from-[#9810FA] to-[#E60076]"
                  : "bg-[#8200DB]"
              }`}
            >
              <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
            </div>
            <span className="text-gray-300 text-sm">
              {plan.analyses_per_interval} analyses per {plan.interval}
            </span>
          </li>

          {plan.trial_days > 0 && (
            <li className="flex items-center gap-3">
              <div
                className={`p-1 rounded-full ${
                  isPopular
                    ? "bg-linear-to-br from-[#9810FA] to-[#E60076]"
                    : "bg-[#8200DB]"
                }`}
              >
                <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
              </div>
              <span className="text-gray-300 text-sm">
                {plan.trial_days} days free trial
              </span>
            </li>
          )}

          {plan.active && (
            <li className="flex items-center gap-3">
              <div
                className={`p-1 rounded-full ${
                  isPopular
                    ? "bg-linear-to-br from-[#9810FA] to-[#E60076]"
                    : "bg-[#8200DB]"
                }`}
              >
                <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
              </div>
              <span className="text-gray-300 text-sm">Active subscription</span>
            </li>
          )}
        </ul>

        {/* Button */}
        <button
          onClick={handleSubscription}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 cursor-pointer ${
            isPopular
              ? "bg-gradient-to-r from-[#9810FA] to-[#E60076] hover:opacity-90"
              : "bg-[#8200DB] hover:bg-[#9810FA]"
          }`}
        >
          {plan.trial_days > 0 ? "Start Free Trial" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
}
