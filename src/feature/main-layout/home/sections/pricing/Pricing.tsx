"use client";
import PlanCard from "./PlanCard";
import { useAllPlans } from "@/api-services/planServices";

export default function Pricing() {
  const { plansData, isLoading, isError, mutate } = useAllPlans();
  return (
    <section id="pricing" className="py-10 lg:py-20 container">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="section-title">Choose Your Plan</h2>
        <p className="section-subtitle">
          Select the package that matches your goals
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plansData?.results?.map((plan: any, index: number) => (
          <PlanCard key={index} plan={plan} index={index} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center text-white text-sm">
        <p>
          Paiement sécurisé via PayPal • Annulation possible à tout moment •
          Garantie satisfait ou remboursé de 30 jours
        </p>
      </div>
    </section>
  );
}
