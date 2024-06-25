import useSWR from "swr";
import SWRFetcher from "utils/SWRFetcher";

export default function useRoasters() {
  const { data, error, isLoading } = useSWR(`/api/roasters`, SWRFetcher());

  const roasters = data ? data.results : [];

  return {
    roasters,
    isLoading,
    isError: error,
  };
}
