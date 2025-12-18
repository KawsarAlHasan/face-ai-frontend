import useSWR from "swr";
import { fetcherWithToken } from "./api";

export const useMyProgressData = () => {
  const { data, error, mutate } = useSWR(
    "/api/ai/progress-data/",
    fetcherWithToken
  );
  return {
    myProgressData: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};

export const useMyDetailedMetrics = () => {
  const { data, error, mutate } = useSWR(
    "/api/ai/detailed-metrics/",
    fetcherWithToken
  );
  return {
    myDetailedMetrics: data?.detailed_metrics,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};

export const useMyScoreHistory = () => {
  const { data, error, mutate } = useSWR(
    "/api/ai/score-history/",
    fetcherWithToken
  );
  return {
    myScoreHistory: data?.score_history,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};
