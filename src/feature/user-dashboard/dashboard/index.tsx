"use client";
import React, { useState } from "react";
import Summary from "./Summary";
import {
  useAnalysisList,
  useDashboardData,
} from "@/api-services/dashboardServices";
import { Droplet, Moon, Pipette, Sparkles, Image, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import { ResultsStep } from "@/shared/analysis-modal/ResultsStep";

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
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const showModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

    console.log("selectedItem", selectedItem);

  return (
    <div className="">
      <div className="max-w-[95%] mx-auto space-y-6">
        <Summary dashboardData={dashboardData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="lg:col-span-2 ">
            <div className="flex flex-col gap-2">
              <div className=" flex md:flex-row flex-col items-center gap-3 w-full mb-6">
                <div className="bg-black/60 border-2 border-purple-500/30 rounded-3xl p-6 py-[30px] backdrop-blur-sm w-full">
                  <h2 className="md:text-[22px] text-xl font-normal text-white mb-2">
                    Passez à la version Premium
                  </h2>

                  <p className="text-[#D8D8D8] text-[14px] mb-6">
                    Débloquez instantanément toutes les fonctionnalités
                    avancées.
                  </p>

                  <button
                    onClick={() => {
                      router.push("/subscription");
                    }}
                    className="w-full cursor-pointer bg-linear-to-r from-purple-500 to-pink-500 
                                      text-white font-medium py-3 rounded-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" /> Continuer
                  </button>
                </div>

                <div className="bg-black/60 border-2 border-purple-500/30 rounded-3xl p-6 py-[30px] backdrop-blur-sm w-full">
                  <h2 className="md:text-[22px] text-xl font-normal text-white mb-2">
                    Démarrer une nouvelle analyse
                  </h2>

                  <p className="text-[#D8D8D8] text-[14px] mb-6">
                    Téléchargez un selfie pour obtenir instantanément des
                    informations basées sur l'IA.
                  </p>

                  <button
                    onClick={() => {
                      router.push("/new-scan");
                    }}
                    className="w-full cursor-pointer bg-linear-to-r from-purple-500 to-pink-500 
                                      text-white font-medium py-3 rounded-md flex items-center justify-center gap-2"
                  >
                    <Image className="w-5 h-5" /> Télécharger une photo
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Recommandations de l'IA
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
                Analyse récente
              </h2>
              <button className="text-purple-400 hover:text-purple-300 md:text-sm text-xs font-medium">
                Voir tout
              </button>
            </div>

            <div className="space-y-3">
              {analysisList?.results?.map((item: any, index: any) => (
                <div
                  key={index}
                  // onClick={() => showModal(item)}
                  className="cursor-pointer bg-black/40 border border-purple-500/20 rounded-2xl p-4 flex items-center justify-between hover:border-purple-500/40 transition-all"
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
                        {new Date(item?.created_at).toDateString()}
                      </p>
                      <p className="text-gray-400 md:text-sm text-xs">
                        Analyse terminée
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-pink-400 font-bold">
                      {item?.average_rating || 0}/10
                    </p>
                    <p className="text-green-400 text-sm">
                      {item?.improvement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex md:flex-row flex-col items-start gap-8 w-full mt-4">
          <div className="md:min-w-lg bg-black p-2 md:pt-5 rounded-2xl border border-[#a855f795] pt-[610px]">
            <ResultsStep results={selectedItem} />
          </div>
          <div className="md:min-w-lg min-w-full bg-black pt-5 border border-[#a855f795] rounded-2xl p-6 space-y-6">
            <div>
              <h2 className="text-white text-lg font-medium mb-3">
                Points forts
              </h2>
              <div className="space-y-2">
                {selectedItem?.keyStrengths?.map((strength: any, index: any) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-900 border border-gray-700 rounded px-4 py-3"
                  >
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-gray-300 text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-white text-lg font-medium mb-3">
                Conseils et astuces pour s'améliorer
              </h2>
              <div className="space-y-2">
                {selectedItem.improvementTips.map((tip: any, index: any) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-700 rounded px-4 py-3"
                  >
                    <span className="text-gray-300 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedItem.aiRecommendations.length > 0 && (
              <div>
                <h2 className="text-white text-lg font-medium mb-3">
                  Recommandations de l'IA
                </h2>
                <div className="space-y-2">
                  {selectedItem.aiRecommendations.map(
                    (rec: any, index: any) => (
                      <div
                        key={index}
                        className="bg-gray-900 border border-gray-700 rounded px-4 py-3"
                      >
                        <h3 className="text-purple-400 font-medium text-sm mb-1">
                          {rec.title}
                        </h3>
                        <span className="text-gray-300 text-sm">
                          {rec.description}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default Dashboard;
