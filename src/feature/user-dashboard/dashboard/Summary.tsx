import {
  Scan,
  Sparkles,
  Feather,
  Crown,
  Droplet,
  Moon,
  Pipette,
  Image,
  Wallet,
} from "lucide-react";
import { statsCards } from "@/constants/dashboard-data";
import React from "react";

const Summary = ({ dashboardData }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-black/40 border border-purple-500/40 rounded-3xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center`}
          >
            <Scan className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-medium text-white">
            {dashboardData?.total_scans || 0}
          </span>
        </div>
        <h3 className="text-white font-semibold mb-1">Total Scans</h3>
        <p className="text-sm text-[#D8D8D8]">
          {dashboardData?.this_month_improvement || 0} this month
        </p>
      </div>

      <div className="bg-black/40 border border-purple-500/40 rounded-3xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-linear-to-br from-pink-500 to-purple-500 flex items-center justify-center`}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-medium text-white">
            {dashboardData?.latest_score || 0}
          </span>
        </div>
        <h3 className="text-white font-semibold mb-1">Latest Score</h3>
        <p className="text-sm text-[#D8D8D8]">
          {dashboardData?.this_month_improvement_score || 0} improvement
        </p>
      </div>

      <div className="bg-black/40 border border-purple-500/40 rounded-3xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center`}
          >
            <Feather className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-medium text-white">
            {dashboardData?.symmetry || 0}/10
          </span>
        </div>
        <h3 className="text-white font-semibold mb-1">Symmetry</h3>
        <p className="text-sm text-[#D8D8D8]">
          {dashboardData?.semmetric_improvement || 0} this month
        </p>
      </div>

      <div className="bg-black/40 border border-purple-500/40 rounded-3xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center`}
          >
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-medium text-white">
            {dashboardData?.user_balance || 0}
          </span>
        </div>
        <h3 className="text-white font-semibold mb-1">Subscription Balance</h3>
        <p className="text-sm text-[#D8D8D8]">
          Your current balance is {dashboardData?.user_balance || 0}
        </p>
      </div>
    </div>
  );
};

export default Summary;
