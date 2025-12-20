"use client";
import { useAllPlans } from "@/api-services/planServices";
import PlanCard from "@/feature/main-layout/home/sections/pricing/PlanCard";
import React from "react";

const Subscription = () => {
  const { plansData, isLoading, isError, mutate } = useAllPlans();

  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center ">
      <div className="md:w-[90%] w-full bg-[#0C0C0D] rounded-[30px]    md:shadow-[0_0_20px_10px_rgba(147,51,234,0.4)]  py-7 md:px-10 px-3">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-medium mb-2 text-[#FFFFFF]">
            Choisissez votre forfait
          </h2>
          <p className="section-subtitle">
            Choisissez le forfait qui correspond à vos objectifs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
          {plansData?.results?.map((plan: any, index: number) => (
            <PlanCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
