import useSWR from "swr";
import { fetcherWithToken } from "./api";

export const useDashboardData = () => {
  const { data, error, mutate } = useSWR(
    "/api/ai/user-dashboard/",
    fetcherWithToken
  );
  return {
    dashboardData: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};

export const useAnalysisList = (limit: number) => {
  const { data, error, mutate } = useSWR(
    `/api/ai/analysis-list/?limit=${limit}`,
    fetcherWithToken
  );
  return {
    analysisList: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};
