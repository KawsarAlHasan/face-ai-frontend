"use client";
import useSWR from "swr";
import { fetcher } from "./api";

export const useAllPlans = () => {
  const { data, error, mutate } = useSWR("/api/payment/plans/", fetcher);
  return {
    plansData: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};
