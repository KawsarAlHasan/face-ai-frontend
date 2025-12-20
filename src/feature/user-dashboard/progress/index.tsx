"use client";
import { TrendingUp, Calendar, Target, ScanLine } from "lucide-react";
import StatCard from "./StatCard";
import ScoreHistory from "./ScoreHistory";
import {
  useMyDetailedMetrics,
  useMyProgressData,
} from "@/api-services/progressServices";

const Progress = () => {
  const { myProgressData, isLoading, isError, mutate } = useMyProgressData();

  const { myDetailedMetrics } = useMyDetailedMetrics();

  return (
    <div className="min-h-screen  md:p-6 p-0">
      <div className="md:max-w-[87%] mx-auto space-y-4">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            value={myProgressData?.improvement_ratings || 0}
            label="Amélioration totale"
            sublabel={myProgressData?.since_at || ""}
            gradient="from-purple-500 to-pink-500"
          />
          <StatCard
            icon={<Calendar className="w-5 h-5" />}
            value={myProgressData?.days_active || 0}
            label="Jours d'activité"
            sublabel={myProgressData?.since_at_active || ""}
            gradient="from-purple-500 to-pink-500"
          />
          <StatCard
            icon={<Target className="w-5 h-5" />}
            value={myProgressData?.goal_score || 0}
            label="Buts marqués"
            sublabel={`+${
              myProgressData?.this_month_improvement_goals || 0
            } ce mois-ci`}
            gradient="from-purple-500 to-pink-500"
          />
          <StatCard
            icon={<ScanLine className="w-5 h-5" />}
            value={myProgressData?.today_scans || 0}
            label="Aujourd'hui Scan"
            sublabel="Perspectives du jour"
            gradient="from-purple-500 to-pink-500"
          />
        </div>

        <div className="bg-black/40 backdrop-blur-sm  rounded-2xl p-6 border border-[#9810FA85]">
          <h2 className="text-white md:text-2xl text-xl font-medium mb-6">
            Historique des scores
          </h2>
          <ScoreHistory />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="bg-black/40 backdrop-blur-sm  rounded-2xl p-6 border border-[#9810FA85] col-span-1">
            <h2 className="text-white md:text-2xl text-xl font-medium mb-6">
              Métriques détaillées
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-normal">
                    Qualité de la peau
                  </span>
                  {/* <span className="text-pink-400 text-xs font-medium">+2%</span> */}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-purple-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{
                        width: `${
                          (myDetailedMetrics?.skin_quality || 0) * 10
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-200 text-xs w-8 text-right">
                    {myDetailedMetrics?.skin_quality || 0}%
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-normal">
                    Structure des pommettes
                  </span>
                  {/* <span className="text-pink-400 text-xs font-medium">+2%</span> */}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-purple-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{
                        width: `${
                          (myDetailedMetrics?.cheekbone_structure || 0) * 10
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-200 text-xs w-8 text-right">
                    {myDetailedMetrics?.cheekbone_structure || 0}%
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-normal">
                    Définition de la mâchoire
                  </span>
                  {/* <span className="text-pink-400 text-xs font-medium">+2%</span> */}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-purple-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{
                        width: `${
                          (myDetailedMetrics?.jawline_definition || 0) * 10
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-200 text-xs w-8 text-right">
                    {myDetailedMetrics?.jawline_definition || 0}%
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-normal">
                    Zone oculaire
                  </span>
                  {/* <span className="text-pink-400 text-xs font-medium">+2%</span> */}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-purple-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{
                        width: `${(myDetailedMetrics?.eye_area || 0) * 10}%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-200 text-xs w-8 text-right">
                    {myDetailedMetrics?.eye_area || 0}%
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-normal">
                    Proportions faciales
                  </span>
                  {/* <span className="text-pink-400 text-xs font-medium">+2%</span> */}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-purple-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{
                        width: `${
                          (myDetailedMetrics?.facial_proportions || 0) * 10
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-200 text-xs w-8 text-right">
                    {myDetailedMetrics?.facial_proportions || 0}%
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-normal">
                    Symétrie
                  </span>
                  {/* <span className="text-pink-400 text-xs font-medium">+2%</span> */}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-purple-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{
                        width: `${(myDetailedMetrics?.symmetry || 0) * 10}%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-200 text-xs w-8 text-right">
                    {myDetailedMetrics?.symmetry || 0}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Progress;
