"use client";
import { actionCards, recentAnalysis } from "@/constants/dashboard-data";
import React from "react";
import Summary from "./Summary";
import {
  useAnalysisList,
  useDashboardData,
} from "@/api-services/dashboardServices";
import { Droplet, Moon, Pipette } from "lucide-react";

const recommendationUIMap: Record<
  string,
  {
    icon: React.ElementType;
    gradient: string;
  }
> = {
  Hydration: {
    icon: Droplet,
    gradient: "from-blue-500 to-cyan-500",
  },
  "Facial Massage": {
    icon: Moon,
    gradient: "from-amber-500 to-yellow-500",
  },
  "Eye Care": {
    icon: Pipette,
    gradient: "from-pink-500 to-rose-500",
  },
};

const Dashboard = () => {
  const { dashboardData, isLoading, isError, mutate } = useDashboardData();
  const { analysisList } = useAnalysisList(3);

  const mappedRecommendations =
    dashboardData?.ai_recommendations?.map((rec: any) => {
      const uiConfig = recommendationUIMap[rec.title];

      return {
        title: rec.title,
        msg: rec.description,
        icon: uiConfig?.icon ?? Droplet,
        gradient: uiConfig?.gradient ?? "from-purple-500 to-pink-500",
      };
    }) || [];

  // console.log(analysisList?.results, "analysisList");

  return (
    <div className="">
      <div className="max-w-[95%] mx-auto space-y-6">
        <Summary dashboardData={dashboardData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="lg:col-span-2 ">
            <div className="flex flex-col gap-2">
              <div className=" flex md:flex-row flex-col items-center gap-3 w-full mb-6">
                {actionCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border-2 border-purple-500/30 rounded-3xl p-6 py-[30px] backdrop-blur-sm w-full"
                  >
                    <h2 className="md:text-[22px] text-xl font-normal text-white mb-2">
                      {card.title}
                    </h2>

                    <p className="text-[#D8D8D8] text-[14px] mb-6">
                      {card.description}
                    </p>

                    <button
                      className="w-full bg-linear-to-r from-purple-500 to-pink-500 
                                      text-white font-medium py-3 rounded-md flex items-center justify-center gap-2"
                    >
                      {card.icon} {card.buttonText}
                    </button>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Recommendations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mappedRecommendations?.map((item: any, i: any) => (
                    <div
                      key={i}
                      className="bg-black/60 border-2 border-purple-500/30 rounded-3xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all group"
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient}
                          flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-white font-medium text-lg mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm">{item.msg}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/60 border-2 border-purple-500/30 rounded-3xl p-6 backdrop-blur-sm ">
            <div className="flex items-center justify-between mb-6">
              <h2 className="md:text-2xl text-xl font-normal text-white">
                Recent Analysis
              </h2>
              <button className="text-purple-400 hover:text-purple-300 md:text-sm text-xs font-medium">
                See All
              </button>
            </div>

            <div className="space-y-3">
              {analysisList?.results?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="bg-black/40 border border-purple-500/20 rounded-2xl p-4 flex items-center justify-between hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-col">
                      <span className="text-white font-medium text-lg">
                        {item?.average_rating || 0}
                      </span>
                      <span className="text-white/70 text-xs">/10</span>
                    </div>
                    <div>
                      <p className="text-white md:font-medium font-normal">
                        {}
                        {new Date(item?.created_at).toDateString()}
                      </p>
                      <p className="text-gray-400 md:text-sm text-xs">
                        Analysis completed
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-pink-400 font-bold">
                      {item?.average_rating || 0}/10
                    </p>
                    <p className="text-green-400 text-sm">{item?.improvement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
