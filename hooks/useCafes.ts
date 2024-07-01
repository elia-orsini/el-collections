import useSWR from "swr";
import SWRFetcher from "../utils/SWRFetcher";

export default function useCafes(city: string) {
  const { data, error, isLoading } = useSWR(`/api/cafes/${city}`, SWRFetcher());

  return {
    cafes: data,
    isLoading,
    isError: error,
  };
}
