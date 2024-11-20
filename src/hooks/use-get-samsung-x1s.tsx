import { useQuery } from "@tanstack/react-query";
import { SamsungX1SDTO } from "../interfaces/samsung-x1s.dto.interface";
import { fetchSamsungX1S } from "../services/get-samsung-x1s";

export function useGetSamsungX1S() {
  const query = useQuery({
    queryKey: ["get-samsungX1S"],
    queryFn: () => fetchSamsungX1S(),
    retry: 0,
  });

  const samsungx1sSensor: SamsungX1SDTO = query.data;

  return {
    samsungx1sSensor,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
