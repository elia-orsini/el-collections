import useSWR from "swr";
import SWRFetcher from "utils/SWRFetcher";

export default function useCafes(city) {
  const { data, error, isLoading } = useSWR(`/api/cafes/${city}`, SWRFetcher());

  const cafes = data ? data.results : [];

  return {
    cafes: cafes,
    isLoading,
    isError: error,
  };
}
