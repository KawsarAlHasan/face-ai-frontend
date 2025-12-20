"use client";
import { useMyScoreHistory } from "@/api-services/progressServices";
import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const ScoreHistory = () => {
  const { myScoreHistory } = useMyScoreHistory();

  const chartData =
    myScoreHistory?.map((item: any) => ({
      score: item.rating,
      value: item.count,
    })) || [];

  return (
    <div>
      {chartData.length === 0 ? (
        <p className="text-center text-gray-400">Aucune donnée disponible</p>
      ) : (
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis
                dataKey="score"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#666", fontSize: 12 }}
                dy={10}
              />
              <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={80}>
                {chartData.map((_: any, index: any) => (
                  <Cell key={`cell-${index}`} fill="url(#gradient)" />
                ))}
              </Bar>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default ScoreHistory;
